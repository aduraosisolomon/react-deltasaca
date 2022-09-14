import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="react-deltasaca/" element={<HomePage />} />
        <Route path="react-deltasaca/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

