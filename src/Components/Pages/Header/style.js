import styled from "styled-components";

const StyledHeader = styled.div`
    .navbar_container{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 99;
        background: transparent linear-gradient(180deg, #e6eff8 0%, #f4f8fc 100%) 0% 0% no-repeat padding-box;
        display: flex;
        justify-content: space-between;
        padding: 16px 26px;
        transition: background-color 0.3s ease-in-out;
    }
    .nav_logo{
        color: #000000;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        text-decoration: none;
    }
    .nav_items{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .nav_link{
        text-wrap: nowrap;
        color: #e60280;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        text-decoration: none;
    }

    @media (min-width: 320px) and (max-width: 767px){
         .navbar_container {
            flex-direction: column;
            align-items: center;
        }
        .hamburger_icon {
            display: block;
        }
        .nav_items {
            display: none;
        }
        .responsive_nav_items {
            display: ${props => props.clickHamburger ? 'flex' : 'none'};
            flex-direction: column;
            gap: 8px;
            padding-top: 1rem;
        }
        .nav_link {
            margin-right: 0;
            margin-bottom: 10px;
        }
        .nav_logo {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }
`;

export default StyledHeader;
