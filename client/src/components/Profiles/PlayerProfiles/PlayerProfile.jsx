import React from "react";
import playerProfileStyles from "./PlayerProfile.module.css";
import NavBar from "../../NavBar/NavBar";
import { Progress, Flex } from "antd";
import { motion } from "framer-motion";

const PlayerProfile = () => {

  const downLoadMedicalReport = () => {
    console.log("Download Medical Report");
  }

  return (
    <>
      <NavBar />
      <div className={playerProfileStyles.outerContainer}>
        <div className={playerProfileStyles.container}>
          <motion.div
            className={playerProfileStyles.playerName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>
              <span>Player Name</span>
            </h1>
            <div>
              <button onClick={
                () => {
                  downLoadMedicalReport();
                }
              }>Get Medical Report</button>
            </div>
          </motion.div>
          <motion.div
            className={playerProfileStyles.profileInfo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={playerProfileStyles.playerImage}>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
                  alt="Player Name"
                  width="300px"
                  height="270px"
                />
              </div>
            </div>
            <motion.div
              className={playerProfileStyles.playerDetails}
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
                <div className={playerProfileStyles.playerDetails}>
                  <table>
                    <tbody>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          Name
                        </td>
                        <td>
                          : <span>ABS Silva</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          Age
                        </td>
                        <td>
                          : <span>24</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          Born
                        </td>
                        <td>
                          : <span>1999</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          District
                        </td>
                        <td>
                          : <span>Galle</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          Career
                        </td>
                        <td>
                          : <span>Batsman</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={playerProfileStyles.playerStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={playerProfileStyles.statsHeading}>
              <h2>Player Performance</h2>
            </div>
            <div className={playerProfileStyles.statsContainer}>
              <motion.div
                className={playerProfileStyles.statCategory}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h4 className={playerProfileStyles.Stat}>Batting</h4>
                </div>
                <div>
                  <Flex gap="small" wrap>
                    <Progress
                      type="circle"
                      percent={56}
                      strokeColor={{
                        "0%": "#f5222d",
                        "25%": "#ffec3d",
                        "50%": "#fadb14",
                        "75%": "#a0d911",
                        "100%": "#52c41a",
                      }}
                      format={(percent) => (
                        <span className={playerProfileStyles.Percentage}>
                          {percent}%
                        </span>
                      )}
                    />
                  </Flex>
                </div>
              </motion.div>
              <motion.div
                className={playerProfileStyles.statCategory}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h4 className={playerProfileStyles.Stat}>Balling</h4>
                </div>
                <div>
                  <Flex gap="small" wrap>
                    <Progress
                      type="circle"
                      percent={60}
                      strokeColor={{
                        "0%": "#f5222d",
                        "25%": "#ffec3d",
                        "50%": "#fadb14",
                        "75%": "#a0d911",
                        "100%": "#52c41a",
                      }}
                      format={(percent) => (
                        <span className={playerProfileStyles.Percentage}>
                          {percent}%
                        </span>
                      )}
                    />
                  </Flex>
                </div>
              </motion.div>
              <motion.div
                className={playerProfileStyles.statCategory}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h4 className={playerProfileStyles.Stat}>Fielding</h4>
                </div>
                <div className={playerProfileStyles.progressBar}>
                  <Flex gap="small" wrap>
                    <Progress
                      type="circle"
                      percent={90}
                      strokeColor={{
                        "0%": "#f5222d",
                        "25%": "#ffec3d",
                        "50%": "#fadb14",
                        "75%": "#a0d911",
                        "100%": "#52c41a",
                      }}
                      format={(percent) => (
                        <span className={playerProfileStyles.Percentage}>
                          {percent}%
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
