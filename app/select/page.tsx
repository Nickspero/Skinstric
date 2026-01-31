"use client";
import Link from "next/link";
import Header from "../Components/Header";
import "../Styles/select.css";
import { useState } from "react";

const page = () => {
  const [hovered, setHovered] = useState<string | null>(null);

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
              <div className="select__quarter" 
              onMouseEnter={()=>setHovered("sm")}
              onMouseLeave={()=>setHovered(null)}>
                <Link className="no__underline" href={"/summary"}>
                  <div className="quarter__title">
                    <h4>DEMOGRAPHICS</h4>
                  </div>
                </Link>
              </div>
              <div className="select__quarter no__cursor"
              onMouseEnter={()=>setHovered("md")}
              onMouseLeave={()=>setHovered(null)}>
                <div className="quarter__title">
                  <h4>SKIN TYPE DETAILS</h4>
                </div>
              </div>
            </div>
            <div className="half">
              <div className="select__quarter no__cursor" 
              onMouseEnter={()=>setHovered("md")}
              onMouseLeave={()=>setHovered(null)}>
                <div className="quarter__title">
                  <h4>WEATHER</h4>
                </div>
              </div>
              <div className="select__quarter no__cursor"
              onMouseEnter={()=>setHovered("lg")}
              onMouseLeave={()=>setHovered(null)}>
                <div className="quarter__title">
                  <h4>COSMETIC CONCERNS</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={`dotted select__box ${hovered === "sm" && "select__box--sm"}`}></div>
          <div className={`dotted select__box ${hovered === "md" && "select__box--md"}`}></div>
          <div className={`dotted select__box ${hovered === "lg" && "select__box--lg"}`}></div>
        </div>
        <div className="arrow__wrapper">
          <Link href={"/result"} className="no__underline">
            <div className="arrow">
            <img src="/left-arrow.svg" />
            <p>BACK</p>
          </div>
          </Link>
          <Link href={"/summary"} className="no__underline">
            <div className="arrow">
            <p>GET SUMMARY</p>
            <img src="/right-arrow.svg" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
