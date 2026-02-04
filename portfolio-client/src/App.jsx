import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
