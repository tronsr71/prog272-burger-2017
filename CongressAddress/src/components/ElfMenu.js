import React, {Component} from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class ElfMenu extends Component {

  render() {
    const navbarInstance = (
      <Navbar inverse collapseOnSelect>
        {/*<Navbar.Collapse>*/}
          <Nav>
            <LinkContainer to='/'><NavItem>Address Show</NavItem></LinkContainer>
            <LinkContainer to='/edit'><NavItem>Address Edit</NavItem></LinkContainer>
            <LinkContainer to='/small'><NavItem>Small Numbers</NavItem></LinkContainer>
          </Nav>
        {/*</Navbar.Collapse>*/}
      </Navbar>
    );
    return (
      <div>
        {navbarInstance}
      </div>
    );
  }
}

export default ElfMenu;
