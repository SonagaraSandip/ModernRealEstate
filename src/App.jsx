import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collections.jsx";
import CollectionDetails from "./pages/CollectionsDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faqs.jsx";
import Privacy from "./pages/Privacy.jsx";

const App = () => {
  172229;
  return (
    <Router>
      <div className="min-h-screen bg-[#172229]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collection />} />
          <Route
            path="/collections/:collectionId"
            element={<CollectionDetails />}
          />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/privacy" element={<Privacy />} />
          <Route path="/pages/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
