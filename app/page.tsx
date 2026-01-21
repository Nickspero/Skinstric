"use client";
import { useState } from "react";
import Header from "./Components/Header";
import "./Styles/home.css";
import Link from "next/link";

export default function Home() {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <div className={`left ${rightHover? "inactive" : ""}`}>
          <div className="dotted dotted__left"></div>
          <img
            className="arrow"
            onMouseEnter={() => setLeftHover(true)}
            onMouseLeave={() => setLeftHover(false)}
            src="/left-arrow.svg"
            alt=""
          />
          <p>DISCOVER A.I.</p>
        </div>
        
          <div
            className=
            {`title 
        ${rightHover ? "title__left" : ""} 
        ${leftHover ? "title__right" : ""}`}
          >
            <p>Sophisticated</p> 
            <span>skincare</span>
          </div>
        
        <div className={`right ${leftHover? "inactive" : ""}`}>
          <div className="dotted dotted__right"></div>
          <div className="right__wrapper">
          <p>TAKE TEST</p>
          <img
            className="arrow"
            onMouseEnter={() => setRightHover(true)}
            onMouseLeave={() => setRightHover(false)}
            src="/right-arrow.svg"
            alt=""
          />
          </div>
          
        </div>
        <p className="home__description">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES HIGHLY PERSONALIZED ROUTINE
          TAILORED TO WHAT YOUR SKIN NEEDS.
        </p>
      </div>
    </div>
  );
}
