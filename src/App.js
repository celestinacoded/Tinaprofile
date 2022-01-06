import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from './TinaProfile/Footer';
import Header from "./TinaProfile/Header";
import HomePage from './TinaProfile/HomePage';
// import Header from './olatokunbo/Header';
// import HomePage from './olatokunbo/HomePage';
// import Projects from './olatokunbo/Projects';


const App = () => {
  return (
    // <div>
    //    <Router>
    //     <Header />
    //     <Routes>
    //       <Route/>
    //     <Route path="/" element={<HomePage/> }/> 
    //      <Route path="/projects" element={<Projects/>} />   
          
    //     </Routes>
    //   </Router>
    // </div>


    <div>
      <Router>
        <Header/>
        <Routes>
          <Route/>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/" contact={<Footer/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
