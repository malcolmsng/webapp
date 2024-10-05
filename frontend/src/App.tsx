import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
function App() {
  return (
    <>
      <main className="flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> */}
            <Route path="/contact" element={<Contacts />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
