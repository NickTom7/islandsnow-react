import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, NavDropdown, Image, FormText } from 'react-bootstrap';
import { Facebook, Pinterest, Twitter, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link><Facebook/></Nav.Link>
          <Nav.Link><Twitter/></Nav.Link>
          <Nav.Link><Pinterest/></Nav.Link>
          <Nav.Link><Instagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link><HouseFill/> </Nav.Link>
          <Nav.Link><Search/> </Nav.Link>
          <Nav.Link><PersonFill/> </Nav.Link>
          <NavDropdown title={<Cart/>}>
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
);

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png' size='medium' className="justify-content-center" />
    )
  }
}

const MiddleMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="center align">
          <NavDropdown title="MEN"></NavDropdown>
          <NavDropdown title="WOMEN"></NavDropdown>
          <NavDropdown title="KIDS"></NavDropdown>
          <NavDropdown title="BRANDS"></NavDropdown>
          <h5>Search</h5>
        </Nav>
      </Container>
    </Navbar>
);

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src='https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png' fluid />
    )
  }
}

const FooterMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <h5>Navigation</h5>
        </Nav>
      </Container>
    </Navbar>
);

const IslandSnow = () => (
    <Container>
      <TopMenu/>
      <IslandSnowLogo/>
      <MiddleMenu/>
      <FullWidthImage/>
      <FooterMenu/>
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);