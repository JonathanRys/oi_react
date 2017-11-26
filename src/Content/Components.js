import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
    render() {
        return (
            <header className="article-header">
              <span className="common-name">{ this.props.commonName }</span>
              (<span className="binomial-name">{ this.props.binomialName }</span>)
            </header>
        )
    }
}

class Section extends Component {
    render() {
        return (
            <section className="content-area">
            {
              this.props.sections.map((section, key) => {
                return (
                  <details key={ `section-${key}` } className="section-head">
                    <summary>{ section.sectionTitle }</summary>
                    { section.image? <Image { ...section.image } />: null }
                    {
                        section.paragraphs.map((paragraph, key) => {
                        return <Paragraph key={ `${section.sectionTitle}-${key}` } { ...{paragraph} } />
                        })
                    }
                  </details>
                )
              })
            }
          </section>
        )
    }
}

class Paragraph extends Component {
    render() {
        return <p>{ this.props.paragraph }</p>
    }
}

class Image extends Component {
    render() {
        return (
            <figure className={ this.props.type === "sidebar"? "similar-image": "section-image" }>
              <a href={ this.props.href }>
                <img src={ this.props.src } alt={ this.props.alt } />
              </a>
              <figcaption>{ this.props.caption }</figcaption>
            </figure>
        )
    }
}

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.state = { "isOpen": !!this.props }
    }

    toggle = ()=> {
        this.setState({ "isOpen": !this.state.isOpen })
    }

    render() {
        return (
            <aside className="side-bar" style={ this.state.isOpen? { "right": 0 }: { "right": "-20%" } }>
                <div onClick={ this.toggle } className="tab">
                  <FontAwesome name={ this.state.isOpen? "chevron-left": "chevron-right" } />
                </div>
                <header className="side-bar-header">{ this.props.title }</header>
                <div className="scroller">
                  {
                    this.props.sections.map((section, key) => {
                      return (
                        <section key={ `similar-${key}` } className="similar-species">
                          <Image { ...section.image } />
                          <p>{ section.description }</p>
                        </section>
                      )
                    })
                  }
                </div>
            </aside>
        )
    }
}

export { Header, Section, SideBar};
