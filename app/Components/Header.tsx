import "../Styles/Header.css"

const Header = () => {
  return (
    <header>
      <div className="header__titles">
        <a className="header__title" href="/">SKINSTRIC</a>
        <p className="header__tag">[ INTRO ]</p>
      </div>
        <button className="header__btn">ENTER CODE</button>
    </header>
  )
}

export default Header
