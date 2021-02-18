import React, { useState } from 'react'
import style from './Accordion.module.css'

export function Accordion(props) {
    let [modeCollapsed, setModeCollapsed] = useState(false)
    return <>
        <div className={style.linkAccordionBlock} onClick={() => setModeCollapsed(!modeCollapsed)}>{props.title}</div>
        {!modeCollapsed && <div>{props.items.map(item => <div className={style.linkAccordion}><a href="">{item}</a></div>)}
        </div>}

    </>
}

