import React from "react"
import { Link, withRouter } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../../assets/movie.png"

const activeLink = (currentPath, linkName) =>
  currentPath === linkName ? "active" : ""

const Header = props => {
  console.log(props.location.pathname === "/")
  const { pathname } = props.location
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className={`nav-link ${activeLink(pathname, "/")}`} to="/">
            Home
          </Link>
          <Link
            className={`nav-link ${activeLink(pathname, "/movies")}`}
            to="/movies"
          >
            Movies
          </Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(props => <Header {...props} />)
