import React, { Component } from 'react'
import './style.css'

export default class Symbol extends Component {
  render() {
    const { value } = this.props
    console.log(value.name)
    return (
      <div className="symbol">
        <div className="symbol-view" dangerouslySetInnerHTML = { {__html: value.value} } />
        <div className="symbol-name" >{value.name}</div>
      </div>
    )
  }
}
