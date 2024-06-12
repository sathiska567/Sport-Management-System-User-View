import React from "react";
import playerProfileStyles from "./PlayerProfile.module.css";
import NavBar from "../../NavBar/NavBar";
import { Progress, Flex } from "antd";

const PlayerProfile = () => {
  return (
    <>
      <NavBar />
      <div className={playerProfileStyles.outerContainer}>
        <div className={playerProfileStyles.container}>
          <div className={playerProfileStyles.playerName}>
            <h1>Player Name</h1>
          </div>
          <div className={playerProfileStyles.profileInfo}>
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
            <div className={playerProfileStyles.playerDetails}>
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
                          :&emsp;<span>ABS Silva</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          Age
                        </td>
                        <td>
                          :&emsp;<span>24</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          Born
                        </td>
                        <td>
                          :&emsp;<span>1999</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          District
                        </td>
                        <td>
                          :&emsp;<span>Galle</span>
                        </td>
                      </tr>
                      <tr>
                        <td className={playerProfileStyles.playerInfoPara}>
                          Career
                        </td>
                        <td>
                          :&emsp;<span>Batsman</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className={playerProfileStyles.playerStats}>
            <div className={playerProfileStyles.statsHeading}>
              <h2>
                Player Performance
              </h2>
            </div>
            <div className={playerProfileStyles.statsContainer}>
              <div className={playerProfileStyles.statCategory}>
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
              </div>
              <div className={playerProfileStyles.statCategory}>
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
              </div>
              <div className={playerProfileStyles.statCategory}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerProfile;
