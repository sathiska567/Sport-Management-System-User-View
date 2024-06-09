import React, { useState } from "react";
import homeStyles from "./home.module.css";
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

const Home = () => {
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
  }

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
            className={homeStyles.navCustom}
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
                    <span className={homeStyles.underlineAnimation}>Home</span>
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-link me-3">
                    <span className={homeStyles.underlineAnimation}>
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
                      <span className={homeStyles.underlineAnimation}>
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
                    <span className={homeStyles.underlineAnimation}>About</span>
                  </Nav.Link>
                </Nav>
                <Button
                  className={homeStyles.joinButton}
                  onClick={() => register()}
                >
                  Sign In / Register
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className={homeStyles.homeContainer}>
            <motion.div
              className="container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ color: "white", position: "relative" }}
            >
              <div
                className="row align-items-center"
                style={{ height: "80vh", overflow: "hidden" }}
              >
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                  className="col-md-6 text-center text-md-start"
                >
                  <motion.h1
                    className="display-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{
                      fontSize: "4.5rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                    }}
                  >
                    Cricket Insight Your Ultimate Cricket Companion
                  </motion.h1>
                  <motion.p
                    className="lead"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                    style={{ fontSize: "1.5rem", marginTop: "1rem" }}
                  >
                    Stay Updated with Scores, Expert Analysis, and In-Depth
                    Coverage of Your Favorite Matches and Players
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
