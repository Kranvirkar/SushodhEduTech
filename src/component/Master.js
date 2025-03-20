import Header from "./Header";
import Hero from "./Hero";
import Carousel from "./Carousel";
import About from "./About";
import Count from "./Count";
import WhyUs from "./WhyUs";
import Trainers from "./Trainers";
import CollaboratorsSection from "./CollaboratorsSection";
import Footer from "./Footer";


function Master() {
    return(
        <>
            <Header />
            <Hero />
            <main id="main">
                <Carousel />
                <About />
                <Count />
                <WhyUs />
                <Trainers />
                <CollaboratorsSection />
            </main>
            <Footer />

        </>
    );
}

export default Master;