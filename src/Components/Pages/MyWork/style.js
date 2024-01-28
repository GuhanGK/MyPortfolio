import styled from "styled-components";

const StyledWork = styled.div`
    .my_work_container{
        background: #ECF3FA;
        padding: 2.4rem 1rem;
    }
    .my_work_cards_container{
        width: 100%;
        margin: auto;
        padding: 0 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .my_work_cards{
        display: flex;
        flex: 1 0 270px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 5px;
        padding: 18px 0px;
    }
    .forsyte_img_box{
        width: 85%;
        height: 100%;
        img{
            width: 100%;
            height: -webkit-fill-available;
        }
    }
    .work_header_content{
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .my_work_text{
        text-wrap: nowrap;
        color: #e60280;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        margin-bottom: 1rem;
    }
    .name_text{
        width: 70%;
        text-align: center;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        margin-bottom: 1.5rem;
    }
    @media (min-width: 320px) and (max-width: 767px){
        .name_text {
            width: 100%;
        }
    }
`;

export default StyledWork;