import React from 'react'
import { Link } from 'react-router-dom'
import './Start.scss'

export const Start: React.FC = () => (
  <Link to="/question0" className="start-button">
    start the game
  </Link>
)
