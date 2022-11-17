import "./App.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import FAQ from "./pages/FAQ";
import PrivatePolicy from "./pages/PrivatePolicy";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Account from "./layout/FAQ/Account/Account";
import Task from "./layout/FAQ/Tasks/Tasks";
import Premium from "./layout/FAQ/Premium/Premium";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faq" element={<FAQ />}>
          <Route index element={<Account />} />
          <Route path="account" element={<Account />} />
          <Route path="tasks" element={<Task />} />
          <Route path="premium" element={<Premium />} />
        </Route>
        <Route path="/policy" element={<PrivatePolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
