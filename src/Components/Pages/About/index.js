import React, { useState } from "react";
import StyledAbout from "./style";
import ProfileImg from "../../../assets/ProfileImg.jpg"
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
    const [skills, setSkills] = useState("skills")
    const downloadResume = () => {
        const pdfUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <StyledAbout>
                <Row className="about_container">
                    <Col className="profile_image_col">
                        <div className="profile_img_circle">
                            <img src={ProfileImg} alt="Profile" className="profile_img" />
                        </div>
                    </Col>
                    <Col className="about_main_contents_wrap">
                        <p className="about_me_text">About Me</p>
                        <p className="name_text">1.5 Year's Experience on Frontend Developer</p>
                        <span className="about_profession_content">
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
                                    <div className="skills_explain">
                                        <p className="skills_known">HTML, CSS, & JavaScript Development:</p>
                                        <span className="skills_content">HTML, CSS, and JavaScript, ensuring the creation of visually appealing and interactive user interfaces.</span>
                                        <span className="skills_content">Utilizing HTML5 and CSS3 features for modern and responsive design, enhancing user engagement across various devices.</span>
                                    </div>
                                </div>

                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div className="skills_explain">
                                        <p className="skills_known">React.js & Bootstrap Development</p>
                                        <span className="skills_content">Leveraging React's component-based architecture for scalable and maintainable web applications.</span>
                                        <span className="skills_content">Employing Bootstrap's responsive grid system to create fluid and adaptive layouts for optimal user experiences.</span>
                                    </div>
                                </div>

                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div className="skills_explain">
                                        <p className="skills_known">User Experience Design - UI/UX</p>
                                        <span className="skills_content">Skillful use of Figma for UI/UX design, translating ideas into visually appealing and user-friendly interfaces.</span>
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
                                    <div className="skills_explain">
                                        <p className="skills_known">University College of Engineering, Nagercoil</p>
                                        <span className="skills_content">Sep 2018 - July 2022, Nagercoil</span>
                                        <span className="skills_content"><FaLongArrowAltRight classname="skills_arrow" /> Completed My Degree with 7.4 CGPA</span>
                                    </div>
                                </div>
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div className="skills_explain">
                                        <p className="skills_known">Shanmuka Matric Hr Sec School/ HSC</p>
                                        <span className="skills_content">June 2017 - May 2018, Mannargudi</span>
                                        <span className="skills_content"><FaLongArrowAltRight classname="skills_arrow" /> Completed My Secondary School Education with 79%</span>
                                    </div>
                                </div>
                                <div className="skills_wrapper">
                                    <div className="skill_pointer">
                                        <p className="skill_inside_pointer"></p>
                                    </div>
                                    <div className="skills_explain">
                                        <p className="skills_known">St Joseph’s High School / SSLC</p>
                                        <span className="skills_content">June 2015 - May 2016, Mannargudi</span>
                                        <span className="skills_content"><FaLongArrowAltRight classname="skills_arrow" /> Completed My High School Education with 85%</span>
                                    </div>
                                </div>
                            </>
                        }
                        <br />
                        <Button className="download_btn" onClick={downloadResume}>
                            <FaArrowDown /> Download CV
                        </Button>
                    </Col>
                </Row>
            </StyledAbout>
        </>
    )
}

export default About;