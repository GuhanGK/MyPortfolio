import React from "react";
import StyledFooter from "./style";
import { Col, Row } from "react-bootstrap";
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaPhoneSquare } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import ContactImg from "../../../assets/Contact.jpg"

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <Row className="footer_container">
                    <p className="contact_me_header">Contact Me</p>
                    <p className="get_in_touch">Get in Touch with me</p>
                    <span className="contact_me_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                    <Row className="footer_contact_wrapper">
                        <Col className="footer_media_contact_box">
                            <div className="footer_media">
                                <FaLinkedin className="footer_media_icon" />
                                <FaInstagramSquare className="footer_media_icon" />
                                <FaTwitterSquare className="footer_media_icon" />
                            </div>
                            <div className="my_contact_details_box">
                                <p className="conatct_number"><FaPhoneSquare /> +91-6383463850</p>
                                <p className="conatct_email"><MdOutlineContactMail /> guhankumar656@gmail.com</p>
                            </div>
                        </Col>
                        <Col className="footer_media_contact_box">
                            <div className="contact_img_box">
                                <img src={ContactImg} alt="Contact" className="contact_img" />
                            </div>
                        </Col>
                    </Row>
                </Row>
            </StyledFooter>
        </>
    )
}

export default Footer;