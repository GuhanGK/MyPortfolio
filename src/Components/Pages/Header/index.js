import React from "react";
import StyledHeader from "./style";
import { Col, Navbar, Brand, Row, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Navbar className="navbar_container">
                    <Navbar.Brand href="#home" className="nav_logo">Navbar</Navbar.Brand>
                    <Nav className="mr-auto nav_items">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Me</Nav.Link>
                        <Nav.Link href="#pricing">My Works</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </StyledHeader>
        </>
    )
}

export default Header;