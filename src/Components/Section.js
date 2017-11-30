import React, { Component } from 'react'

import Image from './Image'

class Section extends Component {
  render() {
    return (
      <section className="content-area">
        {
          this.props.sections.map((section, key) => {
            return (
              <details key={`section-${key}`} className="section-head">
                <summary className="paragraphs">{section.sectionTitle}</summary>
                {section.image ? <Image { ...section.image } /> : null}
                {
                  section.paragraphs.map((paragraph, key) => {
                    return <p key={`${section.sectionTitle}-p-${key}`}>{paragraph}</p>
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

export default Section
