import React from 'react'
import styled from  "styled-components";
import img1 from "../Assest/tok1.jpeg";
import img2 from "../Assest/tok2.jpeg";
import img from "../Assest/tok3.jpeg";
import { GoQuote } from "react-icons/go";
import vid from "../Assest/T.k video.mp4";
import Footer from './Footer';


const Projects = () => {
    return (
        <Container>
           <Wrapper>
                <Div>
               <Video src={vid} controls loops autoplay muted/>
               </Div>
               <Div>
               <Card>
               <Image src={img2}/>
                   <Details> Addressing some student <Icons> <GoQuote/></Icons>
                   </Details>
               </Card>
             
               <Card>
               <Image src={img}/>
                   <Details> Addressing some student <Icons> <GoQuote/></Icons>
                   </Details>
               </Card>
               
               <Card>
               <Image src={img1}/>
                   <Details> Addressing some student <Icons> <GoQuote/></Icons>
                   </Details>
               </Card>
               </Div>
               <Footer/>
           </Wrapper>
       </Container>
      
    )
}

export default Projects


const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: #D02090;

`;

const Wrapper = styled.div`
width: 100%;
height: 100%;



`;

const Image = styled.img`
width: 100%;
height: 80%;
object-fit: cover;
flex-direction: column;
align-items: center;
display: flex;
border-radius: 10px 10px 0px;

`;

const Video = styled.video`
width: 600px;
height: 400px;
background-color: white;
border-radius:  15px;
font-weight: 950;
font-size: 30px;
transition: all 250ms;
object-fit: cover;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 300px;

  }

:hover {
    cursor: pointer;

`;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 30px;
flex-wrap: wrap;

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

`;

const Card = styled.div`
width: 250px;
  height: 450px;
  background-color: white;
  border-radius:  10px;
  transition: all 350ms;
  transform: scale(1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  object-fit: cover;
  cursor: pointer;
  // padding-top: 10px;
  text-decoration: bold;

 
  :hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.6);
  }
`;

const Details = styled.div`
padding-top: 10px;
  font-weight: bold;
  margin-top: 10px;
  margin-left:5px;
  margin-bottom: 20px;
  font-size: 9px;
  width: 150px;
`;

const Icons = styled.div``;