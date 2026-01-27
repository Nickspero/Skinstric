"use client"
import Link from "next/link";
import Arrow from "../Components/Arrow";
import Header from "../Components/Header";
import "../Styles/select.css";

const page = () => {
  
  
  const box = document.getElementsByClassName("box")

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="top__text">
          <p className="top__text--main">A.I. ANALYSIS</p>
          <p className="top__text--sub">A.I. HAS ESTIMATED THE FOLLOWING.</p>
          <p className="top__text--sub">FIX ESTIMATED INFORMATION IF NEEDED.</p>
        </div>
        <div className="select__main">
          <div className="select__quadrant">
            <div className="half">
            <div className="select__quarter">
              <div className="quarter__title">
              <h4>DEMOGRAPHICS</h4>
              </div>
            </div>
            <div className="select__quarter no__cursor">
              <div className="quarter__title">
              <h4>SKIN TYPE DETAILS</h4>
              </div>
            </div>
            </div>
            <div className="half">
            <div className="select__quarter no__cursor">
              <div className="quarter__title">
              <h4>WEATHER</h4>
              </div>
            </div>
            <div className="select__quarter no__cursor">
              <div className="quarter__title">
              <h4>COSMETIC CONCERNS</h4>
              </div>
            </div>
            </div>
          </div>
          <div className="dotted box"></div>
        </div>
        <div className="arrow__wrapper">
          <Link href={"/result"} className="no__underline">
            <Arrow
              className="back__arrow"
              svg="left-arrow.svg"
              arrowText="BACK"
            />
          </Link>
          <Link href={"/summary"} className="no__underline">
            <Arrow
              className="back__arrow"
              svg="right-arrow.svg"
              arrowText="GET SUMMARY"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
