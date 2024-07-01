import React, { useEffect, useState } from "react";
import ProfileStyles from "../MemberProfilesStyles/ProfileStyles.module.css";
import NavBar from "../../NavBar/NavBar";
import { Progress, Flex, message } from "antd";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PlayerProfile = () => {
  const location = useLocation()
  const [ballingReview , setBallingReview] = useState([])
  const [battingReview , setBattingReview] = useState([])
  const [fieldingReview, setFieldingReview] = useState([])

  const downLoadMedicalReport = () => {
    console.log("Download Medical Report");
  }

  const getProfileReview = async()=>{
     try {
      const reviewResponse = await axios.post("http://localhost:5050/api/v1/player/review",{playerId:location.state.image._id})
      console.log(reviewResponse);

      if(reviewResponse.data.success){
        setBallingReview(reviewResponse.data.data.bowlingReview)
        setBattingReview(reviewResponse.data.data.battingReview)
        setFieldingReview(reviewResponse.data.data.fieldingReview)
      }

     } catch (error) {
        message.error(error.message);
     }
  }

  useEffect(()=>{
    getProfileReview()
  },[])

  console.log(location);

  return (
    <>
      <NavBar />
      <div className={ProfileStyles.outerContainer}>
        <div className={ProfileStyles.container}>
          <motion.div
            className={ProfileStyles.memberName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>
              <span>Player Name</span>
            </h1>
            <div>
              {/* <button
                onClick={() => {
                  downLoadMedicalReport();
                }}
              >
                Get Medical Report
              </button> */}
            </div>
          </motion.div>
          <motion.div
            className={ProfileStyles.profileInfo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={ProfileStyles.memberImage}>
              <div>
                <img
                  src={location.state.image.image}
                  alt="Player Name"
                  width="300px"
                  height="270px"
                />
              </div>
            </div>
            <motion.div
              className={ProfileStyles.memberDetails}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delayChildren: 0.2,
                staggerChildren: 0.2,
              }}
            >
              <div>
                <h2>Player Information</h2>
                <div className={ProfileStyles.memberDetails}>
                  <table>
                    <tbody>
                      <tr>
                        <td className={ProfileStyles.memberInfoPara}>Name</td>
                        <td>
                          : <span>{location.state.image.playerName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={ProfileStyles.memberInfoPara}>Age</td>
                        <td>
                          : <span>{location.state.image.playerAge}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={ProfileStyles.memberInfoPara}>Born</td>
                        <td>
                          : <span>{location.state.image.playerDateOfBirth}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={ProfileStyles.memberInfoPara}>
                          Email
                        </td>
                        <td>
                          : <span>{location.state.image.playerEmail}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={ProfileStyles.memberInfoPara}>Career</td>
                        <td>
                          : <span>Player</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={ProfileStyles.memberStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={ProfileStyles.statsHeading}>
              <h2>Player Performance</h2>
            </div>
            <div className={ProfileStyles.statsContainer}>
              <motion.div
                className={ProfileStyles.statCategory}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h4 className={ProfileStyles.Stat}>Batting</h4>
                </div>
                <div>
                  <Flex gap="small" wrap>
                    <Progress
                      type="circle"
                      percent={ballingReview  ? ballingReview : 43 }
                      strokeColor={{
                        "0%": "#f5222d",
                        "25%": "#ffec3d",
                        "50%": "#fadb14",
                        "75%": "#a0d911",
                        "100%": "#52c41a",
                      }}
                      format={(percent) => (
                        <span className={ProfileStyles.Percentage}>
                          {ballingReview ? ballingReview : 43}%
                        </span>
                      )}
                    />
                  </Flex>
                </div>
              </motion.div>
              <motion.div
                className={ProfileStyles.statCategory}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h4 className={ProfileStyles.Stat}>Balling</h4>
                </div>
                <div>
                  <Flex gap="small" wrap>
                    <Progress
                      type="circle"
                      percent={battingReview ? battingReview : 50}
                      strokeColor={{
                        "0%": "#f5222d",
                        "25%": "#ffec3d",
                        "50%": "#fadb14",
                        "75%": "#a0d911",
                        "100%": "#52c41a",
                      }}
                      format={(percent) => (
                        <span className={ProfileStyles.Percentage}>
                          {battingReview ? battingReview : 50}%
                        </span>
                      )}
                    />
                  </Flex>
                </div>
              </motion.div>
              <motion.div
                className={ProfileStyles.statCategory}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h4 className={ProfileStyles.Stat}>Fielding</h4>
                </div>
                <div className={ProfileStyles.progressBar}>
                  <Flex gap="small" wrap>
                    <Progress
                      type="circle"
                      percent={fieldingReview ? fieldingReview : 50}
                      strokeColor={{
                        "0%": "#f5222d",
                        "25%": "#ffec3d",
                        "50%": "#fadb14",
                        "75%": "#a0d911",
                        "100%": "#52c41a",
                      }}
                      format={(percent) => (
                        <span className={ProfileStyles.Percentage}>
                          {fieldingReview ? fieldingReview : 50}%
                        </span>
                      )}
                    />
                  </Flex>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PlayerProfile;
