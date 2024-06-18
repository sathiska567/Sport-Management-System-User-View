import React, { useState, useEffect } from "react";
import profileStyles from "../MemberProfilesStyles/MemberProfilesStyles.module.css";
import Navbar from "../../NavBar/NavBar";
import { Image, message } from "antd";
import { Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const PlayerProfiles = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sampleImages = [
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
      {
        src: "https://via.placeholder.com/150",
        headerText: "Player Name 1",
        bottomText: "Position: Striker",
        link: "/player-profile",
      },
    ];
    // setImages(sampleImages);
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

  const getAllPlayerProfileImages = async()=>{
    try {
      const imageResponse = await axios.get("http://localhost:5050/api/v1/get-player/profile")
      console.log(imageResponse);
      if(imageResponse.data.success){
        setImages(imageResponse.data.profileData)
      }
    } catch (error) {
       message.error(error.message);
    }
  }

  const handleImageClick = (image) => {
    navigate("/player-profile", { state: { image } });
  };

  useEffect(()=>{
    getAllPlayerProfileImages();
  },[])

  return (
    <Navbar>
      <div className={profileStyles.outerContainer}>
        <h3>Player Profiles</h3>
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
                    <div
                      className={profileStyles.ImageLink}
                      onClick={() => handleImageClick(image)}
                      style={{ cursor: 'pointer' }}
                    >
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.imageContainer}
                      >
                        <Image
                          className={profileStyles.Image}
                          preview={false}
                          src={image.image}
                          alt={image.headerText}
                        />
                      </motion.div>
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.header}
                      >
                        {image.playerName}
                      </motion.div>
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.bottom}
                      >
                        {image.playerEmail}
                      </motion.div>
                    </div>
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
