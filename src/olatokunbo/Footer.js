import React from 'react';
import styled from  "styled-components";
// import img from "../Assest/Linkedin-Logo.png";
// import { Link } from "react-router-dom";
// import { FcCellPhone} from "react-icons/fc";
import {GrLinkedin} from "react-icons/gr";



const Footer = () => {
    return (
        <Container>
            <Wrapper>
             <Div>
             <Details >   
             <Si> Contact:</Si>
<Link Link href= "https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/"
target="_blank" >  <GrLinkedin/>  </Link> 


{/* <Image src={ img} href="https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/" target="_blank" /> */}

{/* <Icon2> <FcCellPhone /> </Icon2> */}

    {/* <Image to="fab fa-linkedin-in" href="https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/"/>
    <Image to= "fa fa-mobile" aria-hidden="true"/> */}
    {/* <Div  to="https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/"> 
    </Div > */}
       {/* <Div>
           <a href="https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/"> 
           <i class="fa fa-linkedin"> </i>
           </a> */}

       {/* </Div> */}
    
        </Details>
             </Div>
            </Wrapper>
        </Container>
    )
}

export default Footer

// const Div = styled(Link)`
// justify-content: space-between;
// margin: 13px;
// margin-right: 20px;
// 
// `;
const Si = styled.div`
font-weight: bold;
// padding-top:  10px;
margin: 10px;
color: white;
font-size: 35px;

`;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 30px;
flex-wrap: wrap;
flex-direction: column;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

`;

const Container = styled.div`
width: 100%;
// height: 80vh;
background-color: #D02090;
margin: 0 10px;
padding-top: 20px;
display: flex;  
  flex-wrap: wrap;

`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 10px;


`;

const Details = styled.div`
display: flex;
align-items: center;
padding-top: 30px;
font-size: 50px;
justify-content: space-between;
// margin: 150px;
font-weight: 950px;
text-decoration: bold;
`;


const Link = styled.a`
width: 5px;
height:1px;
font- weight: 50px;
// background-image: url("https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/");
// background-repeat: no-repeat;
// background-color: blue;
// margin: 10px;
padding-bottom: 50px;
border-radius: 100px;;

:hover {

    cursor: pointer;
    color: blue;
    transform: scale(1.1)
       }
`;

// const Icon2 = styled.div`
// width: 10px;
// height:10px;
// font- weight: 50px;
// background-image: url("https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/");
// background-repeat: no-repeat;
// background-color: blue;
// margin: 20px;
// padding-bottom: 20px;

// :hover {

//     cursor: pointer;
//     color: blue;
//     transform: scale(1.1)
//        }
// `;