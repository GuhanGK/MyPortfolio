import styled from "styled-components";

const StyledHome = styled.div`
    .portfolio_home_page{
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ECF3FA;
        overflow: hidden;
    }
    .profile_image_col{
        width: 35%;
        display: flex;
        justify-content: center;
        align-items: end;
        position: relative;
        bottom: -70px;
    }
    .portfolio_my_details{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    .home_neo_text{
        box-sizing: border-box;
        height: 0px;
        margin: 0px;
        display: flex;
        justify-content: flex-start;
        align-items: end;
        transform: rotate(-90.317deg);
        color: #ECF3FA;
        text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25), -10px -10px 20px #D9ECFF;
        font-family: Inter;
        font-size: 158px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .my_profile_details{
        position: absolute;
        margin-top: -30px;
        margin-left: 480px;
        text-align: justify;
        .name_text{
            font-size: 45px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 800;
            text-wrap: nowrap;
        }
    }
    .home_action_btns_wrap{
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        .hire_me_btn{
            color: #fff;
            cursor: pointer;
            border: none;
            outline: none;
            width: 120px;
            height: 40px;
            box-shadow: 0px 3px 6px #00000014;
            background: transparent linear-gradient(180deg, #7a0caa 0%, #e30280 100%) 0% 0% no-repeat padding-box;
        }
        .download_cv_btn{
            cursor: pointer;
            border: none;
            outline: none;
            width: 120px;
            height: 40px;
            box-shadow: 0px 3px 6px #00000014;
            background: transparent linear-gradient(180deg, #e7f0f9 0%, #f8fbfe 100%) 0% 0% no-repeat padding-box;
        }
    }

    .orbit_container{
        --size: 12rem;
        .profile_img_circle{
            width: var(--size);
            position: relative;
            display: grid;
            place-items: center;
            transform: translate(-6rem, -2rem);
            img{
                width: 300px;
                height: 320px;
                border-radius: 50%;
                position: absolute;
            }
        }
    }

    ul{
        display: grid;
        place-items: center;
        position: relative;
        list-style: none;
        transform-origin: center;
        /* animation: orbit 60s linear infinite; */
    }
    li{
        position: absolute;
        background: red;
        width: 5rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        overflow: hidden;
        display: grid;
        place-items: center;
        rotate: 0.5turn;
        /* animation: orbit 60s linear reverse infinite; */
        img{
            width: 60px;
            transform: rotate(-180deg);
        }
    }
    li:nth-last-child(1){
        opacity: 1;
        background: #fff;
        box-shadow: 0px 3px 6px #00000014;
        transform: translate(18rem, 10rem);
    }
    li:nth-last-child(2){
        opacity: 1;
        background: #fff;
        box-shadow: 0px 3px 6px #00000014;
        transform: translate(6rem, 16rem);
    }
    li:nth-last-child(3){
        opacity: 1;
        background: #fff;
        box-shadow: 0px 3px 6px #00000014;
        transform: translate(-6rem, 10rem);
    }
    li:nth-last-child(4){
        opacity: 1;
        background: #fff;
        box-shadow: 0px 3px 6px #00000014;
        transform: translate(-6rem, -5rem);
    }
    li:nth-last-child(5){
        opacity: 1;
        background: #fff;
        box-shadow: 0px 3px 6px #00000014;
        transform: translate(6rem, -12rem);
    }
    li:nth-last-child(6){
        opacity: 1;
        background: #fff;
        box-shadow: 0px 3px 6px #00000014;
        transform: translate(18rem, -5rem);
    }

    /* @keyframes orbit{
        100%{
            rotate: 1turn;
        }
    } */

    @media (min-width: 992px) and (max-width: 1027px){
        .profile_image_col{
            width: 25%;
        }
        .portfolio_home_page{
            height: 80vh;
            /* flex-direction: column; */
        }
        .portfolio_my_details {
            height: 100%;
            display: flex;
            justify-content: end;
            align-items: flex-end;
        }
        .my_profile_details{
            margin-left: 0;
            position: relative;
        }
        .lorem_content{
            width: 75%;
        }
        .my_profile_details .name_text{
            text-wrap: wrap;
        }
    }
    @media (min-width: 768px) and (max-width: 1226px){
        .profile_image_col{
            width: 25%;
        }
        .orbit_container{
            --size: 12rem;
            .profile_img_circle{
                width: var(--size);
                position: relative;
                display: grid;
                place-items: center;
                transform: translate(-6rem, -2rem);
                img{
                    width: 200px;
                    height: 220px;
                    border-radius: 50%;
                    position: absolute;
                }
            }
        }
        li:nth-last-child(1){
            opacity: 1;
            transform: translate(16rem, 7rem);
        }
        li:nth-last-child(2){
            opacity: 1;
            transform: translate(6rem, 13rem);
        }
        li:nth-last-child(3){
            opacity: 1;
            transform: translate(-4rem, 7rem);
        }
        li:nth-last-child(4){
            opacity: 1;
            transform: translate(-3rem, -5rem);
        }
        li:nth-last-child(5){
            opacity: 1;
            transform: translate(6rem, -9rem);
        }
        li:nth-last-child(6){
            opacity: 1;
            transform: translate(14rem, -5rem);
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        /* .portfolio_home_page{
            height: auto;
            flex-direction: column;
            padding: 2rem;
        } */
        .portfolio_home_page {
            padding: 1rem;
        }
        .portfolio_my_details {
            width: 40%;
        }
        .my_profile_details {
            margin-top: 5rem;
            position: relative;
            margin-left: 0px;
            text-align: justify;
        }
        .home_neo_text{
            display: none;
        }
        .profile_image_col {
            width: 40%;
        }
        .my_profile_details .name_text{
            text-wrap: wrap;
        }
    }
    @media (min-width: 481px) and (max-width: 766px){
        .portfolio_home_page {
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            padding: 2rem;
        }
        .portfolio_my_details {
            width: 100%;
        }
        .my_profile_details {
            width: 100%;
            margin-top: 5rem;
            position: relative;
            margin-left: 0px;
            text-align: justify;
        }
        .home_neo_text{
            display: none;
        }
        .profile_image_col {
            width: 100%;
            margin-bottom: 5rem;
            display: flex;
            justify-content: center;
        }
        .my_profile_details .name_text{
            text-wrap: wrap;
        }
        /* li{
            position: relative;
        } */
        .orbit_container{
            --size: 12rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .profile_img_circle{
                width: var(--size);
                position: relative;
                display: grid;
                place-items: center;
                transform: translate(0rem, -2rem);
                img{
                    width: 200px;
                    height: 220px;
                    border-radius: 50%;
                    position: absolute;
                }
            }
        }
        li:nth-last-child(1){
            opacity: 1;
            transform: translate(16rem, 7rem);
        }
        li:nth-last-child(2){
            opacity: 1;
            transform: translate(6rem, 13rem);
        }
        li:nth-last-child(3){
            opacity: 1;
            transform: translate(-4rem, 7rem);
        }
        li:nth-last-child(4){
            opacity: 1;
            transform: translate(-3rem, -5rem);
        }
        li:nth-last-child(5){
            opacity: 1;
            transform: translate(6rem, -9rem);
        }
        li:nth-last-child(6){
            opacity: 1;
            transform: translate(14rem, -5rem);
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .portfolio_home_page {
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            padding: 2rem;
        }
        .portfolio_my_details {
            width: 100%;
        }
        .my_profile_details {
            width: 100%;
            margin-top: 5rem;
            position: relative;
            margin-left: 0px;
            text-align: justify;
        }
        .home_neo_text{
            display: none;
        }
        .profile_image_col {
            width: 100%;
            margin-bottom: 5rem;
            display: flex;
            justify-content: center;
        }
        .my_profile_details .name_text{
            text-wrap: wrap;
        }
        /* li{
            position: relative;
        } */
        .orbit_container{
            --size: 12rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .profile_img_circle{
                width: var(--size);
                position: relative;
                display: grid;
                place-items: center;
                transform: translate(0rem, -2rem);
                img{
                    width: 200px;
                    height: 220px;
                    border-radius: 50%;
                    position: absolute;
                }
            }
        }
        li{
            width: 2.8rem;
            img{
                width: 35px;
            }
        }
        li:nth-last-child(1){
            opacity: 1;
            transform: translate(14rem, 7rem);
        }
        li:nth-last-child(2){
            opacity: 1;
            transform: translate(6rem, 12.5rem);
        }
        li:nth-last-child(3){
            opacity: 1;
            transform: translate(-2.4rem, 7rem);
        }
        li:nth-last-child(4){
            opacity: 1;
            transform: translate(-1rem, -5rem);
        }
        li:nth-last-child(5){
            opacity: 1;
            transform: translate(6rem, -8rem);
        }
        li:nth-last-child(6){
            opacity: 1;
            transform: translate(13rem, -5rem);
        }
    }
`;

export default StyledHome;
