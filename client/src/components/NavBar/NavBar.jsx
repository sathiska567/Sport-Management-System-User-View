import React, { useState } from "react";
import navBarStyles from "./NavBar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavbarToggle,
  Dropdown,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({children}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  // Animation variants for the entire page content
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const pageTransition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  };

  const register = () => {
    console.log("Register button clicked");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        transition={pageTransition}
        exit="hidden"
      >
        <div>
          <Navbar
            className={navBarStyles.navCustom}
            expand="lg"
            variant="light"
            fixed="top"
            expanded={navbarExpanded}
            onToggle={(expanded) => setNavbarExpanded(expanded)}
            style={{
              position: "sticky",
              backgroundColor: "black",
            }}
          >
            <Container fluid>
              <Navbar.Brand href="/" className="me-auto">
                <img
                  src="/logo.png"
                  alt="Logo"
                  height="70"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <NavbarToggle
                style={{ backgroundColor: "rgba(255,255,255,0.5" }}
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#" className="nav-link me-3">
                    <span className={navBarStyles.underlineAnimation}>
                      Home
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-link me-3">
                    <span className={navBarStyles.underlineAnimation}>
                      Events
                    </span>
                  </Nav.Link>
                  <Dropdown
                    show={showDropdown}
                    onToggle={() => setShowDropdown(!showDropdown)}
                  >
                    <Dropdown.Toggle
                      variant="none"
                      className="nav-link me-3"
                      id="dropdown-basic"
                    >
                      <span className={navBarStyles.underlineAnimation}>
                        Event Members <i className="fas pl-2 fa-caret-down"></i>
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Players</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Coaches</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Referees</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link href="#" className="nav-link me-3">
                    <span className={navBarStyles.underlineAnimation}>
                      About
                    </span>
                  </Nav.Link>
                </Nav>
                <Button
                  className={navBarStyles.joinButton}
                  onClick={() => register()}
                >
                  Sign In / Register
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {children} 
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;