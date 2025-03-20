import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import EventPage from "./pages/EventPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import TermServicePage from "./pages/TermsServicePage";
import RefundPage from "./pages/RefundPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/terms" element={<TermServicePage />} />
              <Route path="/privacy" element={<TermServicePage />} />
              <Route path="/refund" element={<RefundPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/*<Route path="*" element={<NotFound />} />*/}
          </Routes>
        );
        }

        export default App;
