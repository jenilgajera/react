import React from "react";
import ReactDom from "react-dom/client";
// import {Home} from "./home";

//when you use default export and import that time you not use curly brakets
import Home from "./home";
import Contact  from "./contact";
import About from "./about";
import Layout from "./layout";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import AllfacDesign from "./allfacultydesign";
import Faculty10exp from "./faculty10exp";
import AllFacultydesign from "./allfaculty";
// import Allfaculty from ""
const root= ReactDom.createRoot(document.getElementById('root'));


root.render(
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout/>}>
         <Route path="/home" element={<Home />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
         <Route path="/AllFacultyName" element={<AllfacDesign />}></Route>
         <Route path="/Faculty10exp" element={<Faculty10exp/>}></Route>
         
         </Route>
   </Routes>
   
   </BrowserRouter>
);