import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contact";
import Projects from "./pages/Project";
import Certifications from "./pages/Certification";
import Navlist from "./components/Navlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Navlist />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Certifications" element={<Certifications />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/SampleProject" element={<SampleProject />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
