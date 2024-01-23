import React, { useState } from "react";
import StyledAbout from "./style";
import ProfileImg from "../../../assets/ProfileImg.jpg"
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
    const [skills, setSkills] = useState("skills")
    return (
        <>
            <StyledAbout>
                <Row className="about_container">
                    <Col className="profile_image_col">
                        <div className="profile_img_circle">
                            <img src={ProfileImg} alt="Profile-Image" className="profile_img" />
                        </div>
                    </Col>
                    <Col className="about_main_contents_wrap">
                        <p className="about_me_text">About Me</p>
                        <p className="name_text">1.5 Year's Experience on Frontend Developer</p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </span>

                        <div className="home_action_btns_wrap">
                            <Button className={skills === "skills" ? "active_my_skills_btn" : "my_skills_btn"} onClick={() => setSkills("skills")}>My Skills</Button>
                            <Button className={skills === "education" ? "active_my_skills_btn" : "my_skills_btn"} onClick={() => setSkills("education")}>Education</Button>
                        </div>
                        {skills === "skills" &&
                            <>
                                <br />
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div>
                                        <p className="skills_known">User Experience Design - UI/UX</p>
                                        <span className="skills_content">Delight the user and make it work</span>
                                    </div>
                                </div>
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div>
                                        <p className="skills_known">User Experience Design - UI/UX</p>
                                        <span className="skills_content">Delight the user and make it work</span>
                                    </div>
                                </div>
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div>
                                        <p className="skills_known">User Experience Design - UI/UX</p>
                                        <span className="skills_content">Delight the user and make it work</span>
                                    </div>
                                </div>
                            </>
                        }
                        {skills === "education" &&
                            <>
                                <br />
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div>
                                        <p className="skills_known">University College of Engineering, Nagercoil</p>
                                        <span className="skills_content">Sep 2018 - July 2022, Nagercoil</span>
                                    </div>
                                </div>
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div>
                                        <p className="skills_known">Shanmuka Matric Hr Sec School/ HSC</p>
                                        <span className="skills_content">June 2017 - May 2018, Mannargudi</span>
                                    </div>
                                </div>
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div>
                                        <p className="skills_known">St Joseph’s High School / SSLC</p>
                                        <span className="skills_content">June 2015 - May 2016, Mannargudi</span>
                                    </div>
                                </div>
                            </>
                        }
                        <br />
                        <Button className="download_cv_btn">Download CV <FaArrowDown /></Button>
                    </Col>
                </Row>
            </StyledAbout>
        </>
    )
}

export default About;