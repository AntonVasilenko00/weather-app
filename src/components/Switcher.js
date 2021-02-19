const Switcher = ({ leftOption, rightOption, state, setState }) => {
  return (
    <div className="switcher">
      <p className={`switcher__item switcher__left ${state === leftOption ? 'switcher__item--active' : ''}`}>{leftOption}</p>
      <label className="switcher__wrapper">
        <input className="switcher__input" type="checkbox" defaultChecked={state === rightOption} onClick={() => {
          state === leftOption ? setState(rightOption) : setState(leftOption)
        }} />
        <span className="custom-switch"></span>
      </label>
      <p className={`switcher__item switcher__right ${state === rightOption ? 'switcher__item--active' : ''}`} >{rightOption}</p>
    </div >
  )
}

export default Switcher
