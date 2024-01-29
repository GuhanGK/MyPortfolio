import React from "react";
import StyledHome from "./style";
import ProfileImg from "../../../assets/ProfileImg.jpg"
import htmlImg from "../../../assets/HTMLlogo.png"
import cssImg from "../../../assets/csslogo.png"
import jsImg from "../../../assets/jslogo.png"
import boostrapImg from "../../../assets/boostrap.png"
import muiImg from "../../../assets/mui.png"
import reactImg from "../../../assets/react-logo-vector-1.png"
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
                        <div className="orbit_container">
                            <div className="profile_img_circle">
                                <img src={ProfileImg} alt="Profile" className="profile_img" />
                            </div>
                            <ul>
                                <li>
                                    <img src={htmlImg} alt="html" />
                                </li>
                                <li>
                                    <img src={cssImg} alt="css" />
                                </li>
                                <li>
                                    <img src={jsImg} alt="js" />
                                </li>
                                <li>
                                    <img src={boostrapImg} alt="js" />
                                </li>
                                <li>
                                    <img src={reactImg} alt="react" />
                                </li>
                                <li>
                                    <img src={muiImg} alt="react" />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </StyledHome>
        </>
    )
}

export default Home;