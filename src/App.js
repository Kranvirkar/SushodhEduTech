import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import EventPage from "./pages/EventPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import TermServicePage from "./pages/TermsServicePage";
import RefundPage from "./pages/RefundPage";
import AboutPage from "./pages/AboutPage";
import ResearchGuidancePage from "./pages/ResearchGuidancePage";
import {PayNowPage} from "./pages/PayNowPage";
import Login from "./component/Login";
import Success from "./component/Success";
import Failure from "./component/Failure";
import Dashboard from "./pages/Dashboard";
import EventList from "./component/EventList";
import EventManager from "./component/EventManager";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/research" element={<ResearchGuidancePage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/terms" element={<TermServicePage />} />
      <Route path="/privacy" element={<TermServicePage />} />
      <Route path="/refund" element={<RefundPage />} />
      <Route path="/about" element={<AboutPage />} />
        <Route path="/pay-now" element={<PayNowPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failure" element={<Failure />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/devents" element={<EventManager />} />
      {/*<Route path="/services" element={<WhyUs />} />*/}
      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}

export default App;
