"use client";
import { useState } from "react";
import Header from "./Components/Header";
import "./Styles/home.css";
import Link from "next/link";

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
            <div className="arrow">
              <img src="/left-arrow.svg" />
              <p>DISCOVER A.I.</p>
            </div>
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
            <div className="arrow">
              <p>TAKE TEST</p>
              <img src="/right-arrow.svg" />
            </div>
          </Link>
        </div>
        <p className="home__description">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES HIGHLY PERSONALIZED ROUTINE
          TAILORED TO WHAT YOUR SKIN NEEDS.
        </p>
      </div>
      <div className="home__content--media">
        <div className="title__media">
          <p>Sophisticated</p>
          <span>skincare</span>
        </div>
          <p className="home__description--media">
            Skinstric developed an A.I. that creates a highly-personalized
            routine tailored to what your skin needs.
          </p>
        <Link href={"/testing"} className="no__underline">
          <div className="arrow">
            <p>ENTER EXPERIENCE</p>
            <img src="/right-arrow.svg" />
          </div>
        </Link>
        <div className="dotted media__box--sm"></div>
        <div className="dotted media__box--md"></div>
      </div>
    </div>
  );
}
