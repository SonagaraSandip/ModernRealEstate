import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collections.jsx";
import CollectionDetails from "./pages/CollectionsDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faqs.jsx";
import Privacy from "./pages/Privacy.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ShippingDelivery from "./pages/ShippingDelivery.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

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
            path="/collections/:collectionsId"
            element={<CollectionDetails />}
          />
          <Route path="/products" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/privacy" element={<Privacy />} />
          <Route path="/pages/faq" element={<Faq />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route
            path="/pages/shipping-delivery"
            element={<ShippingDelivery />}
          />
          <Route path="/pages/terms-conditions" element={<TermsConditions />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requireRole="admin">
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
