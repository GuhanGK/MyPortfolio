import styled from "styled-components";

const StyledHeader = styled.div`
    .navbar_container{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 99;
        background: transparent linear-gradient(180deg, #e6eff8 0%, #f4f8fc 100%) 0% 0% no-repeat padding-box;
        /* background-color: #f4f8fc; */
        display: flex;
        justify-content: space-between;
        padding: 16px 26px;
    }
    .nav_logo{
        opacity: 0;
    }
    .nav_items{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
    }

`;

export default StyledHeader;
