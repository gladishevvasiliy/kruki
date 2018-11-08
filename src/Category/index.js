import React, { Component } from 'react'
import Symbol from '../Symbol'
import './style.css'

export default class Category extends Component {
  render() {
    const { symbols } = this.props
    return (
      <div className="category">
        <h2>{symbols.label}</h2>
        {
            symbols.value.map((value) => <Symbol value={value} />)
        }
      </div>
    )
  }
}
