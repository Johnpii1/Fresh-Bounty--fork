import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import BountyDetail from "./pages/BountyDetail";
import Admin from "./components/Admin";
import FAQPage from "./pages/Faqs";
import WhitepaperPage from "./pages/WhitePaper";
import ContactUs from "./pages/ContactUs";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create" element={<Create />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/task/:id" element={<BountyDetail />} />
        <Route path="/admin-224466" element={<Admin />}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
