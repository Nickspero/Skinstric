"use client"
import { useEffect } from "react"
import Header from "../Components/Header"
import "../Styles/camera.css"
import { useRouter } from "next/navigation"

const cameraPage = () => {

  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/camera/capture')
    }, 5000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="container">
      <Header/>
      <div className="row">
        <p className="top__text">TO START ANALYSIS</p>
        <div className="camera__main">
          <figure className="camera__icon--wrapper">
            <img className="camera__icon" src="/camera-icon.svg" alt="" />
            <p>SETTING UP CAMERA...</p>
          </figure>
             <div className="dotted dotted__small"></div>
          <div className="dotted dotted__med"></div>
          <div className="dotted dotted__large"></div>
          <div className="bottom__texts">
            <p className="bottom__text-main">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
            <div className="bottom__text-box">
              <p className="bottom__text"><img src="/Rectangle.svg" alt="" />NEUTRAL EXPRESSION</p>
              <p className="bottom__text"><img src="/Rectangle.svg" alt="" />FRONTAL POSE</p>
              <p className="bottom__text"><img src="/Rectangle.svg" alt="" />ADEQUATE LIGHTING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cameraPage
