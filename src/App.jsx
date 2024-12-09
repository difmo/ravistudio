import React from "react";
import Layout from "./Components/Layout/Layout";
import Index from "./Components/Home/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallary from "./Components/Gallary/Gallary";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Index" element={<Index />} />
          <Route path="Gallary" element={<Gallary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
