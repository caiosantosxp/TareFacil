import style from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header(){
  return(
    <div className={style.Header}>
      <img src={rocketLogo} alt="" />
      <h1>to<span className={style.do}>do</span></h1>
    </div>
  )
}