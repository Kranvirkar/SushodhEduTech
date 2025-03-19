import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Hero from "./component/Hero";
import Carousel from "./component/Carousel";
import About from "./component/About";
import Count from "./component/Count";
import WhyUs from "./component/WhyUs";
import Trainers from "./component/Trainers";
import CollaboratorsSection from "./component/CollaboratorsSection";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./component/Footer";
import Courses from "./component/Courses";

function App() {
  return (
      <>
          <Header></Header>
          <Hero></Hero>
          <main id="main">
              <Carousel></Carousel>
              <About></About>
              <Count></Count>
              <WhyUs></WhyUs>
              <Trainers></Trainers>
              <CollaboratorsSection></CollaboratorsSection>
          </main>
          <Footer></Footer>
              <Routes>
                  <Route path="/courses" element={<Courses />} />
              </Routes>


        </>
        );
        }

        export default App;
