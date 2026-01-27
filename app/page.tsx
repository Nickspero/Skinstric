"use client";
import { useState } from "react";
import Header from "./Components/Header";
import "./Styles/home.css";
import Link from "next/link";
import Arrow from "./Components/Arrow";

export default function Home() {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <div className="container">
      <Header />
      <div className="home__content">
        <div className={`left__container ${rightHover ? "inactive" : ""}`}>
          <div className="dotted dotted__left"></div>
          <div
            onMouseEnter={() => setLeftHover(true)}
            onMouseLeave={() => setLeftHover(false)}
          >
            <Arrow
              className="back__arrow"
              svg="left-arrow.svg"
              arrowText="DISCOVER A.I."
            />
          </div>
        </div>

        <div
          className={`title 
        ${rightHover ? "title__left" : ""} 
        ${leftHover ? "title__right" : ""}`}
        >
          <p>Sophisticated</p>
          <span>skincare</span>
        </div>

        <div className={`right__container ${leftHover ? "inactive" : ""}`}>
          <div className="dotted dotted__right"></div>
          <Link
            href={"/testing"}
            className="no__underline"
            onMouseEnter={() => setRightHover(true)}
            onMouseLeave={() => setRightHover(false)}
          >
            <Arrow
              className="forward__arrow"
              svg="/right-arrow.svg"
              arrowText="TAKE TEST"
            />
          </Link>
        </div>
        <p className="home__description">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES HIGHLY PERSONALIZED ROUTINE
          TAILORED TO WHAT YOUR SKIN NEEDS.
        </p>
      </div>
    </div>
  );
}
