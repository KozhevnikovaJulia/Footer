import React from 'react'
import { Accordion } from '../../Common/Accordion'
import style from './PagesBlock.module.css'

export function PagesBlock() {
  return (
    <div className={style.pagesBlock}>
      <div>
        <div><Accordion title={"АКЦИИ"} items={[]} /></div>
        <div><Accordion title={"УМНЫЙ ДОМ"} items={['Умные роботы-пылесосы', 'Умные мультиварки', 'Умные напольные весы', 'Умные увлажнители', 'Умные чайники']} /></div>
        <div><Accordion title={"ТЕХНИКА ДЛЯ КУХНИ"} items={['Мультиварки и скороварки', 'Гриль-пресс и шашлычницы', 'Чайники и термопоты', 'Кофеварки и кофемолки', 'Пароварки', 'Блендеры и миксеры', 'Электропечи', 'Микроволновые печи', 'Мясорубки и мультирезки', 'Хлебопечки и тостеры', 'Сушилки для овощей и фруктов', 'Соковыжималки', 'Аксессуары']} /></div>
      </div>

      <div>
        <div><Accordion title={"ТЕХНИКА ДЛЯ ДОМА"} items={['Телевизоры', 'Пылесосы', 'Утюги', 'Парогенераторы', 'Отпариватели', 'Наборы для уборки', 'Пароочистители']} /></div>
        <div><Accordion title={"КЛИМАТ"} items={['Вентиляторы', 'Водонагреватели', 'Увлажнители', 'Тепловое оборудование', 'Воздухоочистители']} /></div>
        <div><Accordion title={"ТЕХНИКА ДЛЯ СПОРТА"} items={['Электровелосипеды POLAR', 'Электросамокаты', 'Детские самокаты']} /></div>
      </div>

      <div>
        <div><Accordion title={"ПЕРСОНАЛЬНЫЙ УХОД"} items={['Уход за телом', 'Уход за волосами']} /></div>
        <div><Accordion title={"ПОСУДА"} items={['По коллекциям', 'По типам']} /></div>
      </div>
    </div>
  )
}