import Link from "next/link"
import Header from "../Components/Header"
import "../Styles/testing.css"

const testingPage = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="testing__content">
        <p className="top__text">TO START ANALYSIS</p>
        <div className="testing__main">
          <div className="input__wrapper">
            <p className="input__tag">CLICK TO TYPE</p>
          <input className="testing__input" type="text" placeholder="Introduce Yourself"/>
          </div>
          <div className="dotted dotted__small"></div>
          <div className="dotted dotted__med"></div>
          <div className="dotted dotted__large"></div>
        </div>
      </div>
          <Link href={"/"} className="back__arrow">
          <img src="/left-arrow.svg" />
          <p>BACK</p>
          </Link>
    </div>
  )
}

export default testingPage
