import styled from "styled-components";

const StyledHome = styled.div`
    .portfolio_home_page{
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ECF3FA;
    }
    .profile_image_col{
        width: 30%;
    }
    .portfolio_my_details{
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
    .profile_img_circle{
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background: #e7f0f9;
        box-shadow: 0px 3px 6px #00000014;
        .profile_img{
            width: 92%;
            height: 95%;
            border-radius: 50%;
        }
    }

    .summa_circle{
        width: 350px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid red;
        border-radius: 50%;
    }
    .html_logo_box{
        width: 80px;
        height: 80px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        right: 30px;
        margin-top: -15rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .css_logo_box{
        width: 80px;
        height: 80px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        right: 20px;
        margin-top: 12rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .js_logo_box{
        width: 80px;
        height: 80px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        right: 325px;
        margin-top: -240px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .react_logo_box{
        width: 80px;
        height: 80px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        right: 332px;
        margin-top: 13rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    @media (min-width: 992px) and (max-width: 1027px){
        .portfolio_home_page{
            height: 80vh;
            flex-direction: column;
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
    @media (min-width: 767px) and (max-width: 992px){
        .portfolio_home_page{
            height: auto;
            flex-direction: column;
            padding: 2rem;
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
        .portfolio_home_page{
            height: auto;
            flex-direction: column;
            padding: 2rem;
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
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .my_profile_details .name_text{
            text-wrap: wrap;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .portfolio_home_page{
            height: auto;
            flex-direction: column;
            padding: 2rem;
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
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .my_profile_details .name_text{
            text-wrap: wrap;
        }
    }
`;

export default StyledHome;
