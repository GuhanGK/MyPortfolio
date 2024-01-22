import styled from "styled-components";

const StyledAbout = styled.div`
    .about_container{
        display: flex;
        justify-content: space-around;
    }
    .profile_image_col{
        width: 30%;
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
    .name_text{
        font-size: 45px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
    }
    .home_action_btns_wrap{
        display: flex;
        gap: 1rem;
        .my_skills_btn{
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
    .about_main_contents_wrap{
        width: 40%;
        text-align: left;
    }
`;

export default StyledAbout;
