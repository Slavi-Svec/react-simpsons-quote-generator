import React from 'react'
import './styles.scss'

const Button = ({ heading, variant, onClick, }) => (
  <button
    className={`button__${variant}`}
    onClick={onClick}
  >
    { heading }

  </button>
)

export default Button
