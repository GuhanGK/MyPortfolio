import styled from "styled-components";

const StyledHome = styled.div`
    // .portfolio_home_page{
    //     height: 100vh;
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     background: #ECF3FA;
    //     overflow: hidden;
    // }
    // .profile_image_col{
    //     width: 45%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: end;
    //     position: relative;
    //     bottom: -70px;
    // }
    // .portfolio_my_details{
    //     width: 30%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: baseline;
    // }
    // .home_neo_text{
    //     box-sizing: border-box;
    //     height: 0px;
    //     margin: 0px;
    //     display: flex;
    //     justify-content: flex-start;
    //     align-items: end;
    //     transform: rotate(-90.317deg);
    //     color: #ECF3FA;
    //     text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25), -10px -10px 20px #D9ECFF;
    //     font-family: Inter;
    //     font-size: 158px;
    //     font-style: normal;
    //     font-weight: 400;
    //     line-height: normal;
    // }
    // .my_profile_details{
    //     position: absolute;
    //     margin-top: -30px;
    //     margin-left: 480px;
    //     text-align: justify;
    //     .name_text{
    //         font-size: 45px;
    //         font-family: Arial, Helvetica, sans-serif;
    //         font-weight: 800;
    //         text-wrap: nowrap;
    //     }
    // }
    // .home_action_btns_wrap{
    //     display: flex;
    //     gap: 1rem;
    //     margin-top: 1.5rem;
    //     .hire_me_btn{
    //         color: #fff;
    //         cursor: pointer;
    //         border: none;
    //         outline: none;
    //         width: 120px;
    //         height: 40px;
    //         box-shadow: 0px 3px 6px #00000014;
    //         background: transparent linear-gradient(180deg, #7a0caa 0%, #e30280 100%) 0% 0% no-repeat padding-box;
    //     }
    //     .download_cv_btn{
    //         cursor: pointer;
    //         border: none;
    //         outline: none;
    //         width: 120px;
    //         height: 40px;
    //         box-shadow: 0px 3px 6px #00000014;
    //         background: transparent linear-gradient(180deg, #e7f0f9 0%, #f8fbfe 100%) 0% 0% no-repeat padding-box;
    //     }
    // }

    // .orbit_container{
    //     width: 100%;
    //     margin: auto;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     height: 100%;
    //     .profile_img_circle{
    //         position: relative;
    //         display: grid;
    //         place-items: center;
    //         img{
    //             width: 250px;
    //             height: 250px;
    //             border-radius: 50%;
    //             position: absolute;
    //         }
    //     }
    // }

    // ul{
    //     background: red;
    //     display: grid;
    //     place-items: center;
    //     position: relative;
    //     list-style: none;
    //     transform-origin: center;
    //     animation: orbit 60s linear infinite;
    // }
    // li{
    //     position: absolute;
    //     background: red;
    //     width: 5rem;
    //     aspect-ratio: 1 / 1;
    //     border-radius: 50%;
    //     overflow: hidden;
    //     display: grid;
    //     place-items: center;
    //     rotate: 0.5turn;
    //     animation: orbit 60s linear reverse infinite;
    //     img{
    //         width: 60px;
    //     }
    // }
    // li:nth-last-child(1){
    //     opacity: 1;
    //     background: #fff;
    //     box-shadow: 0px 3px 6px #00000014;
    //     transform: translate(0rem, 14rem);
    // }
    // li:nth-last-child(2){
    //     opacity: 1;
    //     background: #fff;
    //     box-shadow: 0px 3px 6px #00000014;
    //     transform: translate(0rem, -14rem);
    // }

    // li:nth-last-child(3){
    //     opacity: 1;
    //     background: #fff;
    //     box-shadow: 0px 3px 6px #00000014;
    //     transform: translate(-12rem, 6rem);
    // }
    // li:nth-last-child(4){
    //     opacity: 1;
    //     background: #fff;
    //     box-shadow: 0px 3px 6px #00000014;
    //     transform: translate(-12rem, -6rem);
    // }
    // li:nth-last-child(5){
    //     opacity: 1;
    //     background: #fff;
    //     box-shadow: 0px 3px 6px #00000014;
    //     transform: translate(12rem, 5rem);
    // }
    // li:nth-last-child(6){
    //     opacity: 1;
    //     background: #fff;
    //     box-shadow: 0px 3px 6px #00000014;
    //     transform: translate(12rem, -6rem);
    // }
   
    // @keyframes orbit{
    //     100%{
    //         rotate: 1turn;
    //     }
    // }

    // @media (min-width: 992px) and (max-width: 1226px){
    //     .profile_image_col{
    //         width: 50%;
    //     }
    //     .portfolio_home_page{
    //         height: 80vh;
    //     }
    //     .orbit_container{
    //         .profile_img_circle{
    //             img{
    //                 width: 200px;
    //                 height: 220px;
    //                 border-radius: 50%;
    //                 position: absolute;
    //             }
    //         }
    //     }
    //     .portfolio_my_details {
    //         height: 100%;
    //         display: flex;
    //         justify-content: end;
    //         align-items: flex-end;
    //     }
    //     .my_profile_details{
    //         margin-left: 0;
    //         position: relative;
    //     }
    //     .lorem_content{
    //         width: 75%;
    //     }
    //     .my_profile_details .name_text{
    //         text-wrap: wrap;
    //     }

    //     li:nth-last-child(1){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, 12rem);
    //     }
    //     li:nth-last-child(2){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, -12rem);
    //     }

    //     li:nth-last-child(3){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-10rem, 5.5rem);
    //     }
    //     li:nth-last-child(4){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-10rem, -5.5rem);
    //     }
    //     li:nth-last-child(5){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(10rem, 5rem);
    //     }
    //     li:nth-last-child(6){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(10rem, -5rem);
    //     }
    // }
    // @media (min-width: 768px) and (max-width: 991px){
    //     .home_neo_text{
    //         display: none;
    //     }
    //     .portfolio_home_page {
    //         height: 900px;
    //         display: grid;
    //         grid-template-columns: 1fr;
    //         grid-template-rows: 1fr 1fr;
    //         padding: 2rem;
    //     }
    //     .portfolio_my_details {
    //         width: 100%;
    //         display: flex;
    //         justify-content: end;
    //         align-items: center;
    //     }
    //     .orbit_container{
    //         .profile_img_circle{
    //             img{
    //                 width: 200px;
    //                 height: 220px;
    //                 border-radius: 50%;
    //                 position: absolute;
    //             }
    //         }
    //     }
    //     .portfolio_my_details {
    //         height: 100%;
    //         display: flex;
    //         justify-content: end;
    //         align-items: center;
    //     }
    //     .profile_image_col {
    //         width: 100%;
    //         margin-bottom: 5rem;
    //         display: flex;
    //         justify-content: center;
    //     }
    //     .my_profile_details{
    //         margin-left: 0;
    //         position: relative;
    //     }
    //     .lorem_content{
    //         width: 75%;
    //     }
    //     .my_profile_details .name_text{
    //         text-wrap: wrap;
    //     }

    //     li:nth-last-child(1){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, 12rem);
    //     }
    //     li:nth-last-child(2){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, -12rem);
    //     }

    //     li:nth-last-child(3){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-10rem, 5.5rem);
    //     }
    //     li:nth-last-child(4){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-10rem, -5.5rem);
    //     }
    //     li:nth-last-child(5){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(10rem, 5rem);
    //     }
    //     li:nth-last-child(6){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(10rem, -5rem);
    //     }
    // }

    // @media (min-width: 481px) and (max-width: 767px){
    //     .home_neo_text{
    //         display: none;
    //     }
    //     .portfolio_home_page {
    //         height: 900px;
    //         display: grid;
    //         grid-template-columns: 1fr;
    //         grid-template-rows: 1fr 1fr;
    //         padding: 2rem;
    //     }
    //     .portfolio_my_details {
    //         width: 100%;
    //         display: flex;
    //         justify-content: end;
    //         align-items: center;
    //     }
    //     .orbit_container{
    //         .profile_img_circle{
    //             img{
    //                 width: 200px;
    //                 height: 220px;
    //                 border-radius: 50%;
    //                 position: absolute;
    //             }
    //         }
    //     }
    //     .portfolio_my_details {
    //         height: 100%;
    //         display: flex;
    //         justify-content: end;
    //         align-items: center;
    //     }
    //     .profile_image_col {
    //         width: 100%;
    //         margin-bottom: 5rem;
    //         display: flex;
    //         justify-content: center;
    //     }
    //     .my_profile_details{
    //         margin-left: 0;
    //         position: relative;
    //     }
    //     .lorem_content{
    //         width: 75%;
    //     }
    //     .my_profile_details .name_text{
    //         text-wrap: wrap;
    //     }

    //     li:nth-last-child(1){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, 12rem);
    //     }
    //     li:nth-last-child(2){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, -12rem);
    //     }

    //     li:nth-last-child(3){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-10rem, 5.5rem);
    //     }
    //     li:nth-last-child(4){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-10rem, -5.5rem);
    //     }
    //     li:nth-last-child(5){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(10rem, 5rem);
    //     }
    //     li:nth-last-child(6){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(10rem, -5rem);
    //     }
    // }

    // @media (min-width: 320px) and (max-width: 480px){
    //     .home_neo_text{
    //         display: none;
    //     }
    //     .portfolio_home_page {
    //         height: 900px;
    //         display: grid;
    //         grid-template-columns: 1fr;
    //         grid-template-rows: 1fr 1fr;
    //         padding: 2rem;
    //     }
    //     .portfolio_my_details {
    //         width: 100%;
    //         display: flex;
    //         justify-content: end;
    //         align-items: center;
    //     }
    //     .orbit_container{
    //         .profile_img_circle{
    //             img{
    //                 width: 162px;
    //                 height: 176px;
    //                 border-radius: 50%;
    //                 position: absolute;
    //             }
    //         }
    //     }
    //     .portfolio_my_details {
    //         height: 100%;
    //         display: flex;
    //         justify-content: end;
    //         align-items: center;
    //     }
    //     .profile_image_col {
    //         width: 100%;
    //         margin-bottom: 5rem;
    //         display: flex;
    //         justify-content: center;
    //     }
    //     .my_profile_details{
    //         margin-left: 0;
    //         position: relative;
    //     }
    //     .lorem_content{
    //         width: 75%;
    //     }
    //     .my_profile_details .name_text{
    //         text-wrap: wrap;
    //     }

    //     li{
    //         width: 2.8rem;
    //         img{
    //             width: 35px;
    //         }
    //     }

    //     li:nth-last-child(1){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, 9rem);
    //     }
    //     li:nth-last-child(2){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(0rem, -9rem);
    //     }

    //     li:nth-last-child(3){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-7rem, 4.5rem);
    //     }
    //     li:nth-last-child(4){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(-7rem, -4.5rem);
    //     }
    //     li:nth-last-child(5){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(7rem, 4.5rem);
    //     }
    //     li:nth-last-child(6){
    //         opacity: 1;
    //         background: #fff;
    //         box-shadow: 0px 3px 6px #00000014;
    //         transform: translate(7rem, -4.5rem);
    //     }
    // }




    .area {
        background: #4e54c8;
        background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
        width: 100%;
        height: 100vh;
      }
    
      .circles {
        position: absolute;
        // top: 0;
        // left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    
      .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
      }
    
      .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
    
      .circles li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
    
      .circles li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
    
      .circles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
    
      .circles li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
    
      .circles li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
      }
    
      .circles li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
      }
    
      .circles li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
    
      .circles li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
    
      .circles li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    
      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
    
        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
`;

export default StyledHome;
