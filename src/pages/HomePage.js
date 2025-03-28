import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import WhyUs from "../component/WhyUs";
import Carousel from "../component/Carousel";
import Trainers from "../component/Trainers";
import Footer from "../component/Footer";
import Count from "../component/Count";
import CollaboratorsSection from "../component/CollaboratorsSection";
import Publishes from "../component/Publishes";
import GoogleReview from "../component/GoogleReview";


const HomePage = () => {
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
                <Publishes></Publishes>
                <CollaboratorsSection></CollaboratorsSection>
            </main>
            <GoogleReview/>
            <Footer></Footer>
            
        </>
    );
};

export default HomePage;