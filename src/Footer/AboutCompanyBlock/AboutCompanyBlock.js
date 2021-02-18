import React from 'react'
import style from './AboutCompanyBlock.module.css'

export function AboutCompanyBlock() {
  return (
    <div className={style.aboutCompanyBlock}>
      <nav>
        <div className={style.item}><a href="">О КОМПАНИИ</a></div>
        <div></div>
        <div className={style.item}><a href="">ДОСТАВКА</a></div>
        <div className={style.item}><a href="">ОПЛАТА</a></div>
        <div className={style.item}><a href="">ВОЗВРАТ</a></div>
        <div className={style.item}><a href="">РЕГИСТРАЦИЯ</a></div>
        <div className={style.item}><a href="">ОФОРМЛЕНИЕ ЗАКАЗА</a></div>
        <div className={style.item}><a href="">КОРПОРАТИВНЫЕ ПРОДАЖИ</a></div>
        <div className={style.item}><a href="">КОНФИДЕНЦИАЛЬНАЯ ИНФОРМАЦИЯ</a></div>
        <div className={style.item}><a href="">ПОЛЕЗНЫЕ МАТЕРИАЛЫ</a></div>
      </nav>
    </div>
  )
}
