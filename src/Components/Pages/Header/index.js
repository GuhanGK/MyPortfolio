import React from "react";
import StyledHeader from "./style";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    const scrollToAbout = (section) => {
        const aboutSection = document.getElementById(section);
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <>
            <StyledHeader>
                <Navbar className="navbar_container">
                    <Navbar.Brand href="" className="nav_logo">Navbar</Navbar.Brand>
                    <Nav className="mr-auto nav_items">
                        <Nav.Link onClick={() => scrollToAbout("home")} className="nav_link">Home</Nav.Link>
                        <Nav.Link onClick={() => scrollToAbout("about")} className="nav_link">About Me</Nav.Link>
                        <Nav.Link onClick={() => scrollToAbout("mywork")} className="nav_link">My Works</Nav.Link>
                        <Nav.Link onClick={() => scrollToAbout("footer")} className="nav_link">Contact Me</Nav.Link>
                    </Nav>
                </Navbar>
            </StyledHeader>
        </>
    )
}

export default Header;