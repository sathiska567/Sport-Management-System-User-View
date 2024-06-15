import React, { useState, useEffect } from "react";
import profileStyles from "./PlayerProfiles.module.css";
import Navbar from "../../NavBar/NavBar";
import { Image } from "antd";
import { Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const PlayerProfiles = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const sampleImages = [
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profiles",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player/1",
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
        <h3>Player Profiles</h3>
        <div className={profileStyles.profiles}>
          <AnimatePresence>
            <motion.div
              variants={gridItemVariants}
              initial="hidden"
              animate="visible"
              className={profileStyles.grid}
            >
              <Row xs={1} md={2} lg={4}>
                {images.map((image, index) => (
                  <Col key={index} className={profileStyles.gridItem}>
                    <Link
                      className={profileStyles.ImageLink}
                      to={image.link}
                    >
                      {" "}
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.imageContainer}
                      >
                        <Image className={profileStyles.Image} preview={false} src={image.src} alt={image.headerText} />
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
                        {image.bottomText}
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

export default PlayerProfiles;
