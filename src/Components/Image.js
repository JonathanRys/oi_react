import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
      <figure className={this.props.type === "sidebar" ? "similar-image" : "section-image"}>
        <a href={this.props.href}>
          <img src={this.props.src} alt={this.props.alt} />
        </a>
        <figcaption className="image-caption">{this.props.caption}</figcaption>
      </figure>
    )
  }
}

export default Image
