import React from "react";
import StyledWork from "./style";
import { Col, Row } from "react-bootstrap";
import forsyte from "../../../assets/forsyte.jpeg"
import trekrImg from "../../../assets/treke.png"
import hashchingImg from "../../../assets/hashching.jpeg"

const MyWork = () => {
    return (
        <>
            <StyledWork>
                <div className="my_work_container">
                    <div className="work_header_content">
                        <p className="my_work_text mb-2">My Work</p>
                        <p className="name_text mb-3">
                            I specialize in crafting responsive and visually stunning user interfaces. Transforming concepts into seamless experiences, I ensure websites adapt flawlessly across devices. Explore my portfolio to witness the marriage of design and responsiveness.
                        </p>
                    </div>
                    <Row className="my_work_cards_container">
                        <Col className="my_work_cards">
                            <div className="forsyte_img_box">
                                <img src={forsyte} alt="forsyte" />
                            </div>
                            <h2>Forsyte</h2>
                        </Col>
                        <Col className="my_work_cards">
                            <div className="forsyte_img_box">
                                <img src={trekrImg} alt="trekrImg" />
                            </div>
                            <h2>Track Task</h2>
                        </Col>
                        <Col className="my_work_cards">
                            <div className="forsyte_img_box">
                                <img src={hashchingImg} alt="forsyte" />
                            </div>
                            <h2>Hashching</h2>
                        </Col>
                    </Row>
                </div>
            </StyledWork>
        </>
    )
}

export default MyWork;
