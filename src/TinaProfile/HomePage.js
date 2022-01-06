import React from 'react';
import styled from "styled-components";
import { GoQuote } from "react-icons/go";
import img from "../Assest/tinapic.jpeg";
import Footer from './Footer';
// import img2 from "../Assest/partying-face.png"
// import Footer from './Footer';


const HomePage = () => {
    return (
        
       <Container>
           <Wrapper>
             <Div>
          
            <Card>  <Image  src={img} /></Card>
            
  <Details> <Icons> <GoQuote/> </Icons>

  Celestina Eneji is creative and self-starting Front-end Developer with experience in
building stable web application in fast-paced, collaborative environments.
I can conjur a website from nothing into existence, fully formed. I do not use tricks, nor is this magic.
 I specialize in manipulating the very fabric of the web, 
its raw materials of HTML, CSS, JavaScript.
Worked with Lofty inc as an intern  with 
Job Responsibilities of implementing web design and development principles to build 
stable software, bringing mock-ups to life using HTML, CSS, JavaScript,collaborating closely with the team to support projects during all 
phases of delivery,building websites that are responsive and usable,monitoring website performance and rectifying front-end-related
issues,communicating technical issues in an understandable manner to 
the team and clients,identifying innovative ideas and proof of concepts according to 
project requirements,providing guidance and troubleshooting support to clients,maintaining an organized workflow using a project management 
tool (like GitHub),testing to identify bugs and technical issues before and after 
deploying,documenting bug reports, tickets, and any code changes.
  <Icon> <GoQuote/></Icon>
         </Details>
             </Div>
            
           </Wrapper>
           <Footer/>
       </Container>
    )
};

export default HomePage

const Wrapper = styled.div`
width: 100%;
// height: 100vh;
display: flex;
flex:1;
// margin-bottom: 150px;

`;

// const Title = styled.div`
// font-family: "Josefin Sans",sans-serif;
// font-weight: 400;
// font-style: normal;
// letter-spacing: 0.125em;
// text-align: center;
// text-transform: uppercase;
// line-height: 1.25;
// margin: 3rem 0;

// `;
const Container = styled.div`
width: 100%; 
height:  100%;
// min-height: 100vh;
// background-color:
background: radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);
;

`;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
// justify-content: space-between;
// margin-left: -400px;
margin-left: 70px;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    
  }
`;

const Card = styled.div`
width: 650x;
  height: 550px;
  background-color: white;
  border-radius:  10px;
  transition: all 350ms;
  transform: scale(1);
  display: flex;
//   flex-direction: column;
  // align-items: center;
  margin: 80px;
//   object-fit: cover;
  cursor: pointer;
  text-decoration: bold;
margin-right: 90px; 
  
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    width: 360px;
   
  }

 :hover {
transform: scale(1.1);
box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.6);
  }
 `; 

const Details = styled.div`
width: 500px;
font-size: 16px;
font-weight: bold;
display: flex;
align-items: center;
display: flex;
justify-content: center;
color: #e3e3e3;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    margin: 20px;

  }

`;
const Icons = styled.div`
display: flex;
align-items: centre;
justify-content: centre;
margin-left: 60px;


`;

const Icon = styled.div`
// display: flex;
// align-items: centre;
// justify-content: centre;
margin-right: 10px;
// padding-top: 320px;

`;

const Image = styled.img`
width: 100%;
height: 550px;
object-fit: cover;
flex-direction: column;
align-items: center;
display: flex;
border-radius: 10px 10px 10px 10px;

`;