import React from 'react';
import styled from  "styled-components";
// import img from "../Assest/Linkedin-Logo.png";
// import { Link } from "react-router-dom";
import { BsTelephone} from "react-icons/bs";
import {ImLinkedin2} from "react-icons/im";
import {BsSkype} from "react-icons/bs";
import {MdMarkEmailRead} from "react-icons/md";
import {BsGithub} from "react-icons/bs";



const Footer = () => {
    return (
        <Container>
            <Wrapper>
             <Div>
             <Details >   
             {/* <Si> Contact:</Si> */}
<Link Link href= "https://www.linkedin.com/in/eneji-celestina-707936107"
target="_blank" >  <ImLinkedin2/>  </Link> 

<Link Link href= "mailto:Celestinaeneji422@gmail.com " rel="me"
target="_blank" > <MdMarkEmailRead/>  </Link>

<Link Link href= "https://github.com/celestinacoded" title="@celestinacoded on GitHub" rel="me"
target="_blank" >  <BsGithub/>  </Link>

<Link Link href= "3b1f3e568015dc77 "
target="_blank" >  <BsSkype/>  </Link>

<Link> < BsTelephone/>  </Link>

<Ti> 08060175337  </Ti>




 
        </Details>
             </Div>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Ti = styled.div`
padding-top: 50px;
font-size: 12px;
`;

// const Link2 = styled.a`
// // width: 5px;
// // height: 0.1em;
// margin: 5px;
// display: flex;
// align-items: center;

// `;

const Link = styled.a`
// width: 40px;
// height:1px;
// font- weight: 50px;
// background-image: url("https://www.linkedin.com/in/olatokunbo-aiyenimelo-2880277b/");
// background-repeat: no-repeat;
// background-color: blue;
// margin: 10px;
padding-bottom: 70px;
display: flex;
margin: 50px:
display: block;
    width: 0.5em;
    height: 0.1px;
    // color: #222733;
    // font-size: 1.5em;
    // line-height: 1.0em;
    // text-align: center;
    background-color: #DBE8D4;
    border-radius: 50%;;
    margin: 1.7px; 
    padding: 0;
    border: 0;
    font: inherit;
    // font-size: 100%;
    // vertical-align: baseline;
    // box-shadow:
    // 0 2px 10px 0 rgb(0 0 0 / 20%), 
    // 0 1px 5px 0 rgb(0 0 0 / 20%);
:hover {

    cursor: pointer;
    color: white;
    transform: scale(1.3)
       }
`;

// const Si = styled.div`
// font-weight: bold;
// // padding-top:  10px;
// margin: 10px;
// color: white;
// font-size: 35px;

// `;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 30px;
flex-wrap: wrap;
flex-direction: column;
margin: 20px;

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
background-color: rgb(19, 30, 37);
// margin: 0 10px;
// padding-top: 20px;
// padding: 0 1rem;
display: flex;  
margin-top: 3rem;
// font: normal 100%/1.5 "Titillium Web",sans-serif;
color: #DBE8D4

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