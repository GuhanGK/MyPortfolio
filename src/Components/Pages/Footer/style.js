import styled from "styled-components";

const StyledFooter = styled.div`
    .footer_container{
        padding: 4rem 0;
    }
    .footer_contact_wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 3rem;
    }
    .contact_me_header{
        color: #e60280;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        margin-bottom: 0;
    }
    .get_in_touch{
        font-size: 45px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        margin-top: 5px;
    }
    .contact_me_content{
        /* margin-bottom: 1rem; */
    }
    .contact_img_box{
        width: 100%;
        height: 380px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e4eef7;
        box-shadow: 0px 3px 6px #00000014;
        border-radius: 5px;
    }
    .contact_img{
        width: 90%;
        height: 350px;
    }
    .footer_media_contact_box{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .footer_media{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .footer_media_icon{
        color: #e40280;
        font-size: 28px;
        cursor: pointer;
    }
    .my_contact_details_box{
        padding: 12px 24px;
        text-align: left;
        border-radius: 5px;
        box-shadow: 0px 3px 6px #00000014;
        background: transparent linear-gradient(180deg, #d6ceef 0%, #f5f5fb 100%) 0% 0% no-repeat padding-box;
    }

    .summa_circle{
        width: 500px;
        height: 500px;
        border: 1px solid red;
        border-radius: 50%;
    }
    .html_logo_box{
        width: 100px;
        height: 100px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        left: 362px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .css_logo_box{
        width: 100px;
        height: 100px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        left: 370px;
        margin-top: 23rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .js_logo_box{
        width: 100px;
        height: 100px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        left: 22px;
        margin-top: 8px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .react_logo_box{
        width: 100px;
        height: 100px;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        margin-top: 23rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    @media (min-width: 320px) and (max-width: 480px){
        .footer_contact_wrapper {
            flex-direction: column;
            gap: 1.5rem;
        }
        .footer_media_contact_box {
            width: 90%;
        }
        .contact_img_box {
            width: 100%;
            /* height: 245px; */
            resize: auto;
        }
    }
    @media (min-width: 481px) and (max-width: 766px){
        .footer_contact_wrapper {
            flex-direction: column;
            gap: 1.5rem;
        }
        .footer_media_contact_box {
            width: 90%;
        }
        .contact_img_box {
            width: 100%;
            /* height: 245px; */
            resize: auto;
        }
    }
`;

export default StyledFooter;
