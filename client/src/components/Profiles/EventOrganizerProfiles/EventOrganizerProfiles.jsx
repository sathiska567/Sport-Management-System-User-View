import React, { useState, useEffect } from "react";
import profileStyles from "../MemberProfilesStyles/MemberProfilesStyles.module.css";
import Navbar from "../../NavBar/NavBar";
import { Image, message } from "antd";
import { Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventOrganizerProfiles = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sampleImages = [
      {
        src: "https://via.placeholder.com/150",
        headerText: "Manager Name 1",
        bottomText: "Position: Striker",
        link: "/team-manager-profile",
      },
      // Add other sample images here...
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

  const getAllCoachProfileImages = async () => {
    try {
      const imageResponse = await axios.get(
        "http://localhost:5050/api/v1/eventOrganizer/profile"
      );
      console.log(imageResponse);
      if (imageResponse.data.success) {
        setImages(imageResponse.data.profileData);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getAllCoachProfileImages();
  }, []);

  const handleImageClick = (image) => {
    navigate("/eventOrganizer-profile", { state: { image } });
  };

  return (
    <Navbar>
      <div className={profileStyles.outerContainer}>
        <h3>Event Organizer Profiles</h3>
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
                      style={{ cursor: "pointer" }}
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
                        {image.eventOrganizerName}
                      </motion.div>
                      <motion.div
                        variants={imageVariants}
                        className={profileStyles.bottom}
                      >
                        {image.eventOrganizerEmail}
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

export default EventOrganizerProfiles;
