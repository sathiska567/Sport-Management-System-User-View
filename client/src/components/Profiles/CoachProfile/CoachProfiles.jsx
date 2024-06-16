import React, { useState, useEffect } from "react";
import profileStyles from "../MemberProfilesStyles/MemberProfilesStyles.module.css";
import Navbar from "../../NavBar/NavBar";
import { Image } from "antd";
import { Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CoachProfiles = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const sampleImages = [
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Coach Name 1",
        bottomText: "Position: Striker",
        link: "/coach/1",
      },
    ];
    setImages(sampleImages);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.7 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const gridItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.7, staggerChildren: 0.1 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.1 },
    },
  };

  return (
    <Navbar>
      <div className={profileStyles.outerContainer}>
        <h3>Coach Profiles</h3>
        <div className={profileStyles.searchContainer}>
          <div class="input-group mb-3">
            <input
              className={profileStyles.searchInput}
              type="text"
              class="form-control"
              placeholder="Search player name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.4)",
              }}
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                className={profileStyles.searchButton}
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className={profileStyles.profiles}>
          <AnimatePresence>
            <motion.div
              variants={gridItemVariants}
              initial="hidden"
              animate="visible"
              className={profileStyles.grid}
            >
              <Row xs={1} sm={2} md={3} lg={5} className="g-4">
                {images.map((image, index) => (
                  <Col key={index} className={profileStyles.gridItem}>
                    <Link className={profileStyles.ImageLink} to={image.link}>
                      {" "}
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.imageContainer}
                      >
                        <Image
                          className={profileStyles.Image}
                          preview={false}
                          src={image.src}
                          alt={image.headerText}
                        />
                      </motion.div>
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.header}
                      >
                        {image.headerText}
                      </motion.div>
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.bottom}
                      >
                        Position: Coach
                      </motion.div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Navbar>
  );
};

export default CoachProfiles;