"use client";
import Link from "next/link";
import Header from "../Components/Header";
import "../Styles/summary.css";
import { useResultStore } from "../store/useResultsStore";
import { useState } from "react";
import PercentRing from "../Components/PercentRing";

const summaryPage = () => {
  const result = useResultStore((state: any) => state.result);

  if (!result || !result.data) { return null; }

  const ages: Record<string, number> = result?.data?.age ?? {};
  const sex: Record<string, number> = result?.data?.gender ?? {};
  const race: Record<string, number> = result?.data?.race ?? {};

  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const percentRound = (decimal: number) => {
    return Math.round(decimal * 100);
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
    return maxKey;
  };

  const raceMax = {
    key: findMax(race),
    val: percentRound(race[findMax(race)]),
  };
  const ageMax = {
    key: findMax(ages),
    val: percentRound(ages[findMax(ages)]),
  };
  const sexMax = {
    key: findMax(sex),
    val: percentRound(sex[findMax(sex)]),
  };

  const setCatStates = (catName: string, catValue: number) => {
    (setActiveStat(catName), setActiveTitle(catName), setPercent(catValue));
  };

  const setStatStates = (statName: string, statVal: number) => {
    (setActiveStat(statName),
      setPercent(percentRound(statVal)),
      setActiveTitle(capitalize(statName)));
  };

  const [active, setActive] = useState("race");
  const [activeTitle, setActiveTitle] = useState(raceMax.key || "");
  const [raceTitle, setRaceTitle] = useState(capitalize(raceMax.key)|| "");
  const [ageTitle, setAgeTitle] = useState(ageMax.key);
  const [sexTitle, setSexTitle] = useState(capitalize(sexMax.key));
  const [percent, setPercent] = useState(raceMax.val || 0);
  const [activeStat, setActiveStat] = useState(raceMax.key || "");


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
                (setActive("race"), setRaceTitle(capitalize(raceMax.key)), setCatStates(raceMax.key, raceMax.val));
              }}
            >
              <p>{raceTitle}</p>
              <p>RACE</p>
            </div>
            <div
              className={`summary category ${active === "age" && "active"}`}
              onClick={() => {
                (setActive("age"), setAgeTitle(ageMax.key), setCatStates(ageMax.key, ageMax.val));
              }}
            >
              <p>{ageTitle}</p>
              <p>AGE</p>
            </div>
            <div
              className={`summary category ${active === "sex" && "active"}`}
              onClick={() => {
                (setActive("sex"), setSexTitle(capitalize(sexMax.key)), setCatStates(sexMax.key, sexMax.val));
              }}
            >
              <p>{sexTitle}</p>
              <p>SEX</p>
            </div>
          </div>

          <div className="summary middle">
            <p className="middle__header">
              {capitalize(activeTitle)}
              {active === "age" && " y.o."}
            </p>
            <PercentRing percentage={percent} />
          </div>

          <div className="summary right-side">
            <div className="right__headers">
              <p>AGE</p>
              <p>A.I. CONFIDENCE</p>
            </div>
            <div className="percentages">
              {active === "race" &&
                Object.entries(race).sort(([, a], [, b]) => b - a).map(([key, value]) => {
                  return (
                    <div
                      className={`stat ${activeStat === key && "active"}`}
                      key={key}
                      onClick={() => {
                        setStatStates(key, value);
                        setRaceTitle(capitalize(key));
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
                Object.entries(ages)
                  .map(([key, value]) => {
                  return (
                    <div
                    className={`stat ${activeStat === key && "active"}`}
                    key={key}
                    onClick={() => {
                      setStatStates(key, value);
                      setAgeTitle(key);
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
                Object.entries(sex).sort(([, a], [, b]) => b - a).map(([key, value]) => {
                  return (
                    <div
                      className={`stat ${activeStat === key && "active"}`}
                      key={key}
                      onClick={() => {
                        setStatStates(key, value);
                        setSexTitle(capitalize(key));
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

      <div className="arrow__wrapper arrow__media">
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
