import React, { useEffect, useState } from "react";
import StyledHeader from "./style";
import { Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

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

    const [responsive, setResponsive] = useState(false)
    const [clickHamburger, setClickHamburger] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth < 767);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <StyledHeader clickHamburger={clickHamburger}>
                <Navbar className={`navbar_container ${responsive ? 'responsive' : ''}`}>
                    <Navbar.Brand href="" className="nav_logo">
                        portfolio
                        {responsive && <div className="hamburger_icon" onClick={() => setClickHamburger(!clickHamburger)}>
                            {!clickHamburger ? <GiHamburgerMenu /> : <CgClose />}
                        </div>}
                    </Navbar.Brand>
                    <Nav className={`nav_items ${responsive ? "responsive_nav_items" : "mr-auto"}`}>
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