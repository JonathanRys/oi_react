import React, { Component } from 'react'

import FontAwesome from 'react-fontawesome'
import Image from './Image'

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = { "isOpen": true }
  }

  toggle = () => {
    this.setState({ "isOpen": !this.state.isOpen })
  }

  render() {
    return (
      <aside className={`sidebar ${this.state.isOpen ? "sidebar-open" : "sidebar-closed" }`}>
        <div onClick={this.toggle} className="tab" title={!this.state.isOpen ? this.props.title : null} >
          <FontAwesome name={this.state.isOpen ? "chevron-right" : "chevron-left"} />
        </div>
        <header className="sidebar-header">{this.props.title}</header>
        <div className="sidebar-container">
          <div className="scroller">
            {
              this.props.sections.map((section, key) => {
                return (
                  <section key={`similar-${key}`} className="similar-species">
                    <Image { ...section.image } />
                    <p>{section.description}</p>
                  </section>
                )
              })
            }
          </div>
        </div>
      </aside>
    )
  }
}

export default SideBar