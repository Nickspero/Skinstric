"use client";
import { useState } from "react";
import Header from "./Components/Header";
import "./Styles/home.css";
import Link from "next/link";

export default function Home() {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <div className="wrapper">
      <Header />
      <div className="home__content">
        <div className={`left ${rightHover ? "inactive" : ""}`}>
          <div className="dotted dotted__left"></div>
          <div
            className="left__text"
            onMouseEnter={() => setLeftHover(true)}
            onMouseLeave={() => setLeftHover(false)}
          >
            <img src="/left-arrow.svg" alt="" />
            <p>DISCOVER A.I.</p>
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

        <div className={`right ${leftHover ? "inactive" : ""}`}>
          <div className="dotted dotted__right"></div>
          <Link
            href={"/testing"}
            className="right__text"
            onMouseEnter={() => setRightHover(true)}
            onMouseLeave={() => setRightHover(false)}
          >
            <p>TAKE TEST</p>
            <img src="/right-arrow.svg" alt="" />
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
