"use client";
import Link from "next/link";
import Header from "../Components/Header";
import "../Styles/result.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const resultPage = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  useEffect(()=>{
    if (image) {
      fetchApi()
    }
  },[image])

  const fetchApi = async () => {
    const res = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image
        }),
      })
    const data = await res.json()

    if (data.success) {
      router.push("/select")
    }
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="row">
        <p className="top__text">TO START ANALYSIS</p>
        <div className="results__box--wrapper">
          <div className="results">
            <p className="preview">Preview</p>
            <div className="box">
              {image && <img className="img-from-file" src={image} alt="" />}
            </div>
          </div>
        </div>
        {image? <div className="preparing">
          <p>PREPARING YOUR ANALYSIS...</p>
          <div className="dotted dotted__small"></div>
              <div className="dotted dotted__med"></div>
              <div className="dotted dotted__large"></div>
        </div>
       : 
        <div className="result__main">
          <div className="sphere">
            <div className="sphere__wrapper">
              <img
                className="sphere__img"
                src="/camera-icon.svg"
                onClick={() => setModalOpen(true)}
                alt=""
              />
              <figure className="arm__img">
                <img src="/arm.svg" alt="" />
              </figure>
              <div className="sphere__text">
                <p className="img__text">ALLOW A.I.</p>
                <p className="img__text">TO SCAN YOUR FACE</p>
              </div>
              <div className="dotted dotted__small"></div>
              <div className="dotted dotted__med"></div>
              <div className="dotted dotted__large"></div>
            </div>
          </div>
          <div className="sphere">
            <div className="sphere__wrapper">
              <input
                className="image__input"
                id="choose-file"
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleChange}
              />
              <img
                className="sphere__img"
                src="/gallery.svg"
                onClick={() => inputRef.current?.click()}
              />
              <figure className="arm__img--2">
                <img src="/arm2.svg" alt="" />
              </figure>
              <div className="sphere__text--2">
                <p className="img__text">ALLOW A.I.</p>
                <p className="img__text">ACCESS GALLERY</p>
              </div>
              <div className="dotted dotted__small"></div>
              <div className="dotted dotted__med"></div>
              <div className="dotted dotted__large"></div>
            </div>
          </div>
        </div>
        }
      </div>
      <div className="bottom__arrows">
        <Link href={"/testing"} className="back__arrow">
          <img src="/left-arrow.svg" />
          <p>BACK</p>
        </Link>
        {/* <div className="forward__arrow">
          <p>PROCEED</p>
          <img src="/right-arrow.svg" />
        </div> */}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="top">
            <p>ALLOW A.I. TO ACCESS YOUR CAMERA</p>
          </div>
          <div className="bottom">
            <button className="modal__links" onClick={() => setModalOpen(false)}>DENY</button>
            <Link className="modal__links" href={"/camera"}>ALLOW</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default resultPage;
