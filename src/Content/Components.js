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
                            return <p key={ `${section.sectionTitle}-p-${key}` }>{ paragraph}</p>
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
            <aside className="side-bar" style={ this.state.isOpen? { "width": "20%" }: { "width": "0%", "minWidth": "0px" } }>
                <div onClick={ this.toggle } className="tab" title={ !this.state.isOpen? this.props.title : null} >
                  <FontAwesome name={ this.state.isOpen? "chevron-right": "chevron-left" } />
                </div>
                <header className="side-bar-header">{ this.props.title }</header>
                <div className="scroller">
                    <div className="sidebar-container">
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
                </div>
            </aside>
        )
    }
}

export { Header, Section, SideBar};
