import React, { Component } from 'react';

import { Header, Section, SideBar } from './Components';

import { getData } from './datastub';

let organism = getData();

class Content extends Component {
  render() {
    return (
      <article>
        <Header { ...organism.header } />
        <Section { ...organism.wiki } />
        <SideBar { ...organism.similar } />
      </article>
    );
  }
}

export default Content;
