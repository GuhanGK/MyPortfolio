import React from "react";
import StyledHome from "./style";
import ProfileImg from "../../../assets/ProfileImg.jpg"
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <StyledHome>
                <Row className="portfolio_home_page">
                    <Col className="portfolio_my_details">
                        <div>
                            <p className="home_neo_text">
                                Guhan
                            </p>
                        </div>
                        <div className="my_profile_details">
                            <p className="name_text">
                                Hi I'm Guhan <br />
                                Frontend Developer
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                            <div className="home_action_btns_wrap">
                                <Button className="hire_me_btn">Hire me</Button>
                                <Button className="download_cv_btn">Download CV</Button>
                            </div>
                        </div>
                    </Col>
                    <Col className="profile_image_col">
                        <div className="profile_img_circle">
                            <img src={ProfileImg} alt="Profile-Image" className="profile_img" />
                        </div>
                    </Col>
                </Row>
            </StyledHome>
        </>
    )
}

export default Home;