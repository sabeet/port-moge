import "./App.css";
import About from "./About";
import FlexR2 from "./FlexR2";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// APP: This handles routing

function App() {
  return (
    <>
      
        <Routes>
          <Route exact path="/" element={<FlexR2 />} />
          <Route path="/about" element={<About />} />
          <Route exact path="*" element={<Navigate to="/" replace />} /> //replace replaces the URL
        </Routes>
     
    </>
  );
}

export default App;
