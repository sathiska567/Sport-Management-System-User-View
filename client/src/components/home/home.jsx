import React from 'react'
import homeStyles from './Home.module.css'
import { motion } from 'framer-motion'
import NavBar from '../NavBar/NavBar'

const Home = () => {
  return (
    <NavBar>
      <div className={homeStyles.homeContainer}>
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ color: "white", position: "relative" }}
        >
          <div className="row align-items-center" style={{}}>
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
                className={`${homeStyles.homeHeading} display-4`}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Cricket Insight Your Ultimate Cricket Companion
              </motion.h1>
              <motion.p
                className={`${homeStyles.homePara} lead`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              >
                Stay Updated with Scores, Expert Analysis, and In-Depth Coverage
                of Your Favorite Matches and Players
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </NavBar>
  );
}

export default Home;
