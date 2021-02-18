import React from 'react'
import { LogoBlock } from './LogoBlock/LogoBlock'
import { AboutCompanyBlock } from './AboutCompanyBlock/AboutCompanyBlock'
import { PagesBlock } from './PagesBlock/PagesBlock'
import style from './Footer.module.css'

export function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <LogoBlock />
        <AboutCompanyBlock />
        <PagesBlock />
      </div>
    </div>

  )
}

