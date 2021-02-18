import React from 'react'
import style from './LogoBlock.module.css'
import {Icon} from '../../Common/Icon/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faOdnoklassniki, faVk, faYoutube } from "@fortawesome/free-brands-svg-icons"

export function LogoBlock() {
  return (
    <div className={style.logoBlock}>
      <div><img src="https://shop-polaris.herokuapp.com/assets/img/icon-logo.svg" /></div>

      <div>
        <div className={style.phoneNumberBlock}>
          <div className={style.phoneNumber}> <a href="">8 495 229 11 78</a></div>
          <div className={style.callTime}> с 08:00 до 20:00</div>
        </div>
        <div className={style.phoneNumberBlock}>
          <div> <a href="">8 800 700 11 78</a></div>
          <div> Круглосуточно</div>
        </div>
       </div>
     
      <div className={style.iconsBlock}>
        <div className={style.icon}><FontAwesomeIcon icon={faOdnoklassniki} size="1x" /></div>
        <div className={style.icon}><FontAwesomeIcon icon={faVk} size="1x" /></div>
        <div className={style.icon}><FontAwesomeIcon icon={faYoutube} size="1x" /></div>
        <div className={style.icon}><FontAwesomeIcon icon={faFacebook} size="1x" /></div>
        <div className={style.icon}><FontAwesomeIcon icon={faInstagram} size="1x" /></div>
      </div>
    </div>
   
  )
}

