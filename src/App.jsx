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
          {/* Define the layout route */}
          <Route path="/" element={<Layout />}>
            {/* Define child routes */}
            <Route path="/" element={<Index />} />
            <Route path="Gallary" element={<Gallary />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
