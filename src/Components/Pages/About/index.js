import React from "react";
import StyledAbout from "./style";
import ProfileImg from "../../../assets/ProfileImg.jpg"
import { Button, Col, Row } from "react-bootstrap";

const About = () => {
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
                        <p>About Me</p>
                        <p className="name_text">1.5 Year's Experience on Frontend Developer</p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </span>

                        <div className="home_action_btns_wrap">
                            <Button className="my_skills_btn">My Skills</Button>
                            <Button className="download_cv_btn">Education</Button>
                        </div>
                    </Col>
                </Row>
            </StyledAbout>
        </>
    )
}

export default About;