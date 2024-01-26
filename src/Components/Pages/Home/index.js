import React from "react";
import StyledHome from "./style";
import ProfileImg from "../../../assets/ProfileImg.jpg"
import htmlImg from "../../../assets/HTMLlogo.png"
import cssImg from "../../../assets/csslogo.png"
import jsImg from "../../../assets/jslogo.png"
import reactImg from "../../../assets/react-logo-vector-1.svg"
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
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
                            <p className="lorem_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                            <div className="home_action_btns_wrap">
                                <Button className="hire_me_btn">Hire me</Button>
                                <Button className="download_cv_btn" onClick={downloadResume}>Download CV <FaArrowDown /></Button>
                            </div>
                        </div>
                    </Col>
                    <Col className="profile_image_col">
                        <div className="summa_circle">
                            <div className="html_logo_box">
                                <img src={htmlImg} alt="html-img" />
                            </div>
                            <div className="css_logo_box">
                                <img src={cssImg} alt="css-image" />
                            </div>
                            <div className="js_logo_box">
                                <img src={jsImg} alt="js-image" />
                            </div>
                            <div className="react_logo_box">
                                <img src={reactImg} alt="react-image" />
                            </div>
                            <div className="profile_img_circle">
                                <img src={ProfileImg} alt="Profile-Image" className="profile_img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </StyledHome>
        </>
    )
}

export default Home;