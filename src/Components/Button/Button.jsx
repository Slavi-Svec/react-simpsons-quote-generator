import React from 'react'
import './styles.scss'

const Button = ({ heading, variant }) => (
  <button
    className={`button__${variant}`}
    onClick={() => window.open()}
  >
    { heading }

  </button>
)

export default Button
