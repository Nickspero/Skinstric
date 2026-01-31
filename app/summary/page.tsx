"use client";
import Link from "next/link";
import Header from "../Components/Header";
import "../Styles/summary.css";
import { useResultStore } from "../store/useResultsStore";
import { useState } from "react";
import PercentRing from "../Components/PercentRing";

const summaryPage = () => {
  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const findMax = (obj: Record<string, number>) => {
    let max = -Infinity;
    let maxKey = "";
    for (let key in obj) {
      if (obj[key] > max) {
        max = obj[key];
        maxKey = key;
      }
    }
    return capitalize(maxKey);
  };

  const result = useResultStore((state: any) => state.result);
  const ages: Record<string, number> = result.data.age;
  const sex: Record<string, number> = result.data.gender;
  const race: Record<string, number> = result.data.race;
  const [active, setActive] = useState("race");
  const [activeTitle, setActiveTitle] = useState(findMax(race));
  const [raceTitle, setRaceTitle] = useState(findMax(race));
  const [ageTitle, setAgeTitle] = useState(findMax(ages));
  const [sexTitle, setSexTitle] = useState(findMax(sex));
  const [activeStat, setActiveStat] = useState("");
  const [percent, setPercent] = useState(0);

  const percentRound = (decimal: number) => {
    return Math.round(decimal * 100);
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="top__text">A.I. ANALYSIS</div>
        <h1 className="summary__header">DEMOGRAPHICS</h1>
        <div className="top__text--sub">PREDICTED RACE & AGE</div>
        <div className="summary__main">
          <div className="left-side">
            <div
              className={`summary category ${active === "race" && "active"}`}
              onClick={() => {
                (setActive("race"), setActiveTitle(raceTitle));
              }}
            >
              <p>{raceTitle}</p>
              <p>RACE</p>
            </div>
            <div
              className={`summary category ${active === "age" && "active"}`}
              onClick={() => {
                (setActive("age"), setActiveTitle(ageTitle));
              }}
            >
              <p>{ageTitle}</p>
              <p>AGE</p>
            </div>
            <div
              className={`summary category ${active === "sex" && "active"}`}
              onClick={() => {
                (setActive("sex"), setActiveTitle(sexTitle));
              }}
            >
              <p>{sexTitle}</p>
              <p>SEX</p>
            </div>
          </div>
          <div className="summary middle">
            <p className="middle__header">{activeTitle}</p>
            <PercentRing percentage={percent} />
          </div>
          <div className="summary right-side">
            <div className="right__headers">
              <p>AGE</p>
              <p>A.I. CONFIDENCE</p>
            </div>
            <div className="percentages">
              {active === "race" &&
                Object.entries(race).map(([key, value]) => {
                  return (
                    <div
                      className={`stat ${activeStat === key && "active"}`}
                      key={key}
                      onClick={() => {
                        (setRaceTitle(capitalize(key)),
                          setActiveTitle(capitalize(key)),
                          setActiveStat(key),
                          setPercent(percentRound(value)));
                      }}
                    >
                      <figure className="percent__wrapper">
                        <img
                          src={
                            activeStat === key
                              ? "/radio-button.svg"
                              : "/Rectangle.svg"
                          }
                          alt=""
                        />
                        <p>{capitalize(key)}</p>
                      </figure>
                      <p>{percentRound(value)}%</p>
                    </div>
                  );
                })}
              {active === "age" &&
                Object.entries(ages).map(([key, value]) => {
                  return (
                    <div
                      className={`stat ${activeStat === key && "active"}`}
                      key={key}
                      onClick={() => {
                        (setAgeTitle(capitalize(key)),
                          setActiveTitle(capitalize(key)),
                          setActiveStat(key),
                          setPercent(percentRound(value)));
                      }}
                    >
                      <figure className="percent__wrapper">
                        <img
                          src={
                            activeStat === key
                              ? "/radio-button.svg"
                              : "/Rectangle.svg"
                          }
                          alt=""
                        />
                        <p>{capitalize(key)}</p>
                      </figure>
                      <p>{percentRound(value)}%</p>
                    </div>
                  );
                })}
              {active === "sex" &&
                Object.entries(sex).map(([key, value]) => {
                  return (
                    <div
                      className={`stat ${activeStat === key && "active"}`}
                      key={key}
                      onClick={() => {
                        (setSexTitle(capitalize(key)),
                          setActiveTitle(capitalize(key)),
                          setActiveStat(key),
                        setPercent(percentRound(value)));
                      }}
                    >
                      <figure className="percent__wrapper">
                        <img
                          src={
                            activeStat === key
                              ? "/radio-button.svg"
                              : "/Rectangle.svg"
                          }
                          alt=""
                        />
                        <p>{capitalize(key)}</p>
                      </figure>
                      <p>{percentRound(value)}%</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="arrow__wrapper">
        <Link href={"/select"} className="no__underline">
          <div className="arrow">
            <img src="/left-arrow.svg" />
            <p>BACK</p>
          </div>
        </Link>
        <p className="disclaimer">
          If A.I. estimate is wrong, select the correct one.
        </p>
        <Link href={"/"} className="no__underline">
          <div className="arrow">
            <p>HOME</p>
            <img src="/right-arrow.svg" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default summaryPage;
