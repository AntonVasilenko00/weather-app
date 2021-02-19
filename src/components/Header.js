import Switcher from "./Switcher"

const Header = ({ lang, setLang, degrees, setDegrees }) => {
  return (
    <header className="header">
      <h2 className="header__title">Settings:</h2>
      <ul className="header__list">
        <li className="header__item language-menu">
          <Switcher leftOption='ru' rightOption='eng' state={lang} setState={setLang} />
        </li>
        <li className="header__item">
          <Switcher leftOption='C' rightOption='F' state={degrees} setState={setDegrees} />
        </li>
      </ul>
    </header>
  )
}

export default Header
