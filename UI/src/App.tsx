import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
import Preferences from "./pages/Preferences";
import Results from "./pages/Results";
import Explanation from "./pages/Explanation";
import About from "./pages/About";
import Recommendations from "./pages/Recommendations";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/interests" element={<Interests />} />
  <Route path="/preferences" element={<Preferences />} />
  <Route path="/results" element={<Results />} />
  <Route path="/recommendations" element={<Recommendations />} />
  <Route path="/explanation" element={<Explanation />} />
  <Route path="/about" element={<About />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;