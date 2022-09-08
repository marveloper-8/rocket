import React from 'react'
// styles
import './style/style.scss'

const Button = e => {
    return <button type={e.type} className={e.styling}>{e.text}</button>
}

export default Button
