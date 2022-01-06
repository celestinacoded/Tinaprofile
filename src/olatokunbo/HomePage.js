import React from 'react';
import styled from "styled-components";
import { GoQuote } from "react-icons/go";
import img from "../Assest/tok2.jpeg";
import img2 from "../Assest/partying-face.png"
import Footer from './Footer';


const HomePage = () => {
    return (
        
       <Container>
           <Wrapper>
             <Div>
           
            <Card>  <Image  src={img} /></Card>
            
  <Details> <Icons> <GoQuote/> </Icons>
  Olatokunbo Aiyenimelo nee Adekoya is currently Assistant Project Coordinator at LoftyInc Allied and Partners Ltd, 
  she is a multidisciplinary She studied Accounting in University of Birmingham, UK.
  She has Certificate in AAT from Southwark College, London UK and currently studying for her PMP. 
  She is highly skilled in effective communication, Team Work and Management, Project Management and Strategic Planning.
  Tokunbo prides herself in delivering value to everyone around her, she is in her journey into founding Openwork, 
  a platform for Listening, Mentoring, Balancing Life & Responsibilities.
  She has been involved in high-impact projects that continues to improve the quality of life of Nigerians.
  She shines brightly in all She shines brightly in all she ventures on..
Ohhh fun facts about her, she's a Kitchen Lover & loves to cook...she's also a hair Stylists Ta-da.....
<ImageEmoji src={img2}/>
  <Icon> <GoQuote/></Icon>
         </Details>
             </Div>
            
           </Wrapper>
           <Footer/>
       </Container>
    )
};

export default HomePage

const ImageEmoji = styled.img`
width:35px;
height: 35px;
padding-top: 410px;
margin-left: 150px;
position: absolute;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    // margin: 10px;
    margin-left: -95px;
    padding-top: 680px;
   
  }
`;
const Wrapper = styled.div`
width: 100%;
// height: 100vh;
display: flex;
flex:1;
// margin-bottom: 150px;

`;

const Container = styled.div`
width: 100%; 
height:  100%;
// min-height: 100vh;
background-color: #D02090;

`;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
// justify-content: space-between;
// margin-left: -400px;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    
  }
`;
// const Card = styled.div`
// width:750px;
// height:550px;
// background-color:red;
// // margin-right: 50px;
// // padding-top: 20px;

// `;
// const Card1 = styled.div`
// width:500px;
// height:450px;
// background-color:green;
// // margin-right: 700px;
// `;
// const Image = styled.img`
// width: 100%;
// height: 550px;
// object-fit: cover;
// `
const Card = styled.div`
width: 450px;
  height: 550px;
  background-color: white;
  border-radius:  10px;
  transition: all 350ms;
  transform: scale(1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  object-fit: cover;
  cursor: pointer;
  text-decoration: bold;
  margin-right: 50px; 
  
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
font-size: 17px;
font-weight: bold;
display: flex;
align-items: center;
display: flex;
justify-content: center;

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
// const Card = styled.div`
// width: 450px;
//   height: 550px;
//   background-color: white;
//   border-radius:  10px;
//   transition: all 350ms;
//   transform: scale(1);
//   // margin: 10px;
//   object-fit: cover;
//   cursor: pointer;
//   // padding-top: 10px;
//   text-decoration: bold;
//   // margin-left: 50px;
 
//   :hover {
//     transform: scale(1.1);
//     box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.6);
//   }
// `;
