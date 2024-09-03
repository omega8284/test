import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/services";
import Products from "./components/product";
import Contact from "./components/contact";
import Header from "./components/Header";
import CC from "./components/c";
import J2ee from "./components/j2ee";
import Seo from "./components/seo";
import Sms from "./components/bunchsms";
import J2se from "./components/j2se";
import Career from "./components/careers";
import Cpp from "./components/c++";
import Python from "./components/python";
import Wd from "./components/webdesign";
import Wd2 from "./components/webhosting";
import It from "./components/intraining";
import Educ from "./components/education";
import Java from "./components/java";
import Adjava from "./components/advjava";
import Next from "./components/nextjava";
import Csharp from "./components/csharp";
import Asp1 from "./components/Asp1";
import Nextasp from "./components/aspnext";
import Login from "./components/login";
import Reactsyllabus from "./components/React";
import Angularsyllabus from "./components/Angular";
import Nodesyllabus from "./components/Node";
import Android from "./components/Android";
import Ml from "./components/mlai";
import Ardiot from "./components/Arduino";
import Deve from "./components/devlopment";
import Solution from "./components/solution";
import Email from "./components/bunchemail";
import Asso from "./components/Association";
import Over from "./components/overview";
import Beni from "./components/Benifit";
import Connect from "./components/connect";
import Startup from "./components/startupkit";
import AdminPanel from "./components/Admin";

const App = () =>{
  return(
 <Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/courses" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/c" element={<CC />} />
    <Route path="/cpp" element={<Cpp />} />
    <Route path="/python" element={<Python />} />
    <Route path="/web-hosting" element={<Wd />} />
    <Route path="/web-designing" element={<Wd2 />} />
    <Route path="/j2ee" element={<J2ee />} />
    <Route path="/j2se" element={<J2se />} />
    <Route path="/seo" element={<Seo />} />
    <Route path="/bunchsms" element={<Sms />} />
    <Route path="/bunchemail" element={<Email />} />
    <Route path="/careers" element={<Career />} />
    <Route path="/training" element={<It />} />
    <Route path="/education" element={<Educ />} />
    <Route path="/java" element={<Java />} />
    <Route path="/advance" element={<Adjava />} />
    <Route path="/next" element={<Next />} />
    <Route path="/csharp" element={<Csharp />} />
    <Route path="/asp" element={<Asp1 />} />
    <Route path="/asp2" element={<Nextasp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/react" element={<Reactsyllabus  />} />
    <Route path="/angular" element={<Angularsyllabus />} />
    <Route path="/node" element={<Nodesyllabus />} />
    <Route path="/android" element={<Android />} />
    <Route path="/mlai" element={<Ml />} />
    <Route path="/arduino" element={<Ardiot />} />
    <Route path="/development" element={<Deve />} />
    <Route path="/solutions" element={<Solution />} />
    <Route path="/association" element={<Asso />} />
    <Route path="/overview" element={<Over />} />
    <Route path="/benifits" element={<Beni />} />
    <Route path="/connect" element={<Connect />} />
    <Route path="/startkit" element={<Startup />} />
    <Route path="/ap" element={<AdminPanel />} />
  </Routes>
 </Router>
  );
};

export default App;