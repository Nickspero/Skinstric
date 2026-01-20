import Header from "./Components/Header"
import "./Styles/home.css"

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <div className="home__content">
      <div className="left">
        <img className="arrow" src="/left-arrow.svg" alt="" />
        <p>DISCOVER A.I.</p>
      </div>
        <h1 className="home__title">Sophisticated skincare</h1>
        <div className="right">
          <p>TAKE TEST</p>
          <img className="arrow" src="/right-arrow.svg" alt="" />
        </div>
        <p className="home__desc">SKINSTRIC DEVELOPED AN A.I. THAT CREATES HIGHLY PERSONALIZED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.</p>
        <div className="dotted dotted__left"></div>
        <div className="dotted dotted__right"></div>
      </div>
    </div>
  );
}
