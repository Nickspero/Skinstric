"use client";
import Link from "next/link";
import "../../Styles/capture.css";
import { useEffect, useRef, useState } from "react";
import Header from "@/app/Components/Header";
import { useRouter } from "next/navigation";

const capturePage = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraError, setCameraError] = useState(false);
  const [picTaken, setPicTaken] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(() => setCameraError(true));

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [picTaken]);

  const fetchApi = async () => {
    const res = await fetch(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: photo,
        }),
      },
    );
    const data = await res.json();

    if (data.success) {
      router.push("/select");
    }
  };

  const takePhoto = () => {
    if (!videoRef.current) return;
    setPicTaken(true);
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL("image/png"));
  };

  const resetPhoto = () => {
    setPhoto(null);
    setPicTaken(false);
  };
  return (
    <>
      {cameraError ? (
        <div className="camera__error">
          <p>CAMERA ACCESS ERROR</p>
          <p>PLEASE TRY AGAIN</p>
          <Link href={"/result"} className="back__arrow no__underline">
            <img src="/left-arrow.svg" />
            <p>BACK</p>
          </Link>
        </div>
      ) : (
        <div className="camera__display">
          <Header />
          {photo !== null ? (
            <img className="photo__captured" src={photo} alt="" />
          ) : (
            <video ref={videoRef} autoPlay />
          )}
          <div className="camera__overlay">
            {picTaken ? (
              <>
                <div className="preview">
                  <p className="great">GREAT SHOT!</p>
                  <p className="preview__tag">Preview</p>
                  <div className="preview__btns">
                    <button onClick={resetPhoto}>Retake</button>
                    <button onClick={fetchApi} className="use__btn">
                      Use This Photo
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <figure className="take-picture">
                  <p>TAKE PICTURE</p>
                  <img
                    className="picture__img"
                    onClick={takePhoto}
                    src="/takePic.svg"
                    alt=""
                  />
                </figure>
                <div className="bottom__texts">
                  <p className="bottom__text-main">
                    TO GET BETTER RESULTS MAKE SURE TO HAVE
                  </p>
                  <div className="bottom__text-box">
                    <p className="bottom__text">
                      <img src="/Rectangle.svg" alt="" />
                      NEUTRAL EXPRESSION
                    </p>
                    <p className="bottom__text">
                      <img src="/Rectangle.svg" alt="" />
                      FRONTAL POSE
                    </p>
                    <p className="bottom__text">
                      <img src="/Rectangle.svg" alt="" />
                      ADEQUATE LIGHTING
                    </p>
                  </div>
                </div>
              </>
            )}
            <Link href={"/result"} className="back__arrow no__underline invert">
              <img src="/left-arrow.svg" />
              <p>BACK</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default capturePage;
