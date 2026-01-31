"use client"
import { useEffect } from "react"
import Header from "../Components/Header"
import "../Styles/camera.css"
import { useRouter } from "next/navigation"
import CameraTips from "../Components/CameraTips"

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
          <CameraTips/>
        </div>
      </div>
    </div>
  )
}

export default cameraPage
