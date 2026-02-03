"use client";
import Link from "next/link";
import Header from "../Components/Header";
import "../Styles/testing.css";
import { useState } from "react";

const testingPage = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [step, setStep] = useState(1);
  const [apiFetched, setApiFetched] = useState(false);

  const fetchData = async () => {
    const res = await fetch(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          location: city,
        }),
      },
    );
    setApiFetched(true);
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <p className="top__text">TO START ANALYSIS</p>
        <div className="testing__main">

          {submit === false ? (
            <div className="input__wrapper">
              <p className="input__tag">CLICK TO TYPE</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmit(true);
                  localStorage.setItem("name", name);
                  localStorage.setItem("city", city);
                  fetchData();
                }}
              >
                {step === 1 && (
                  <input
                    className="testing__input"
                    type="text"
                    placeholder="Introduce Yourself"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && name !== "") {
                        e.preventDefault();
                        setStep(2);
                      }
                    }}
                    value={name}
                  />
                )}
                {step === 2 && (
                  <input
                    className="testing__input city"
                    type="text"
                    placeholder="Where are you from?"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    autoFocus
                  />
                )}
              </form>
            </div>) : (
            <>
              {apiFetched ? (
                <div className="success__message">
                  <p className="bold">Thank you!</p>
                  <p className="proceed">Proceed for the next step</p>
                </div>
              ) : (
                <p className="loading">Processing Submission...</p>
              )}
            </>
          )}
          <div className="dotted box__sm"></div>
          <div className="dotted box__md"></div>
          <div className="dotted box__lg"></div>
        </div>
      </div>
      <div className="arrow__wrapper">
        <Link href={"/"} className="no__underline">
          <div className="arrow">
            <img src="/left-arrow.svg" />
            <p>BACK</p>
          </div>
        </Link>
        {apiFetched && (
          <Link href={"/result"} className="no__underline">
            <div className="arrow">
            <p>PROCEED</p>
            <img src="/right-arrow.svg" />
          </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default testingPage;
