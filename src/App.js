import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Students from "./Pages/Students/Students";
import Test from "./Pages/Test";
import "./App.css";
import Contacts from "./Pages/contacts";

const App = () => {
  return (
    <>
      <div style={{ margin: 0, padding: 0 }} >
        <Navbar/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path="/students" element={<Students />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
 