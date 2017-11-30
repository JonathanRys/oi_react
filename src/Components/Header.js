import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="article-header">
        <span className="common-name">{this.props.commonName}</span> -
        (<span className="binomial-name">{this.props.binomialName}</span>)
      </header>
    )
  }
}

export default Header
