import React, {useState } from 'react';
import styled from  "styled-components";
import {FcHome} from "react-icons/fc";
import {FcAbout} from "react-icons/fc";
import {FcContacts} from "react-icons/fc";
// import {animateScroll as Scroll, Link} from 'react-scroll';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";


const Header = () => {

  const [toggle, setToggle] = useState(false)
  const handleMenu = () => {
      setToggle(!toggle)

  }

  const closeMenu = () => {
       setToggle(false)
  }
    return (
        <Container>
            <Wrapper>
             <Div>
             {/* <Image src={img} /> */}

         <MobileMenu onClick={handleMenu}> 
            {
               toggle ? <FaTimes/>:<FaBars/>
            }
             </MobileMenu>

<Navigator  toggle={toggle} onClick={closeMenu}>
<NavHolder1 >
   <NavLink onClick={closeMenu} to= "/"> <Si><FcHome /></Si> <Fi>HOME</Fi></NavLink>
  </NavHolder1>

  <NavHolder1>
   <NavLink onClick={closeMenu} to="About"> <Si><FcAbout/></Si> <Fi> PROJECTS </Fi> </NavLink>
  </NavHolder1>

  <NavHolder1> 
 <NavLink onClick={closeMenu} to="Footer" ><Si><FcContacts/></Si> <Fi>CONTACT</Fi> </NavLink>
  </NavHolder1>
  </Navigator>
             </Div>
            </Wrapper>
        </Container>
    )
};

export default Header

const Si = styled.div`
font-size:30px;
Margin-left: 20px;
// padding-bottom: 5px;
`;

const Fi = styled.div`
font-size:12px;
// Margin-left: 20px;
padding-bottom: 6px;

`;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
// margin-right: 80px;
`;

const MobileMenu = styled.div`
display: none;
color: white;

@media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    top: 30px;
    right: 20px;
    font-size: 40px;
    position: absolute;
}

`;

const Wrapper = styled.div`
width: 100%;
height: 80%;
flex-wrap: wrap;
`;

const Navigator = styled.div`
display: flex;
margin-right: 50px;
margin: 20px;


// @media screen and (max-width: 768px) {
//   display: flex;
//   align-items:center;
//   flex-direction: column;
//   position:absolute;
//   top: 80px;
//   width: 100%;
//   height: 50vh;
//   left: ${({toggle}) => (toggle ? "0":"-100%")};
//   background-color: #DA1F1A;
//   color: white;
//   transition: all 500ms ease-in-out;
// }
`;

const NavHolder1 = styled.div`
color: #D02090;
width: 30px;
margin: 0 30px;
transition: all 350ms;
color: white;
display: flex;
align-items: center;
justify-content: center;

:hover {

 cursor: pointer;
 transform: scale(1.3)
}
`;

const NavLink = styled(Link)`
display: flex;
align-items:center;
padding: 0px 20px;
border-radius: 10px;
// font-size:20px;
margin-right: 20px;

@media screen and (max-width: 768px) {
  display: flex;
  align-items: center;
  margin: 30px;
  font-size:  30px;
}

:hover {
 cursor: pointer;
}
`;
const Container = styled.div`
width: 100%;
height:100%;
  background-color: #FFA34D;
  color: white;
  flex-wrap: wrap;
`;

// const Image = styled.img`
// width: 450px;
//   height: 90px;
//   object-fit: contain;
//   margin: 0px -90px;
//   padding-top: 20px;
// `;