import Home from "./component/pages/home";
import About from "./component/pages/about";
import Contact from "./component/pages/contant"; // Corrected spelling
import Navbar from "./component/inc/navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./component/inc/footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contant" element={<Contact />} /> {/* Corrected path */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
