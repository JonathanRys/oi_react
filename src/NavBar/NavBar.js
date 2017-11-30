import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = { isOpen: false, ...this.props }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#5494d5' }} light expand="md">
          <NavbarBrand href="/">Organism Identifier</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/search/"><FontAwesome name="search" /> Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/submit/"><FontAwesome name="binoculars" /> Identify</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/options/"><FontAwesome name="gear" /> Options</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
