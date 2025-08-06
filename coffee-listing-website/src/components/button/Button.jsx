import React from 'react'
import './button.css'

const Button = ({ text, selected, onClick }) => {
  return (
    <button className={`btn ${selected ? 'btn-selected' : ''}`}>{text}</button>

  )
}

export default Button