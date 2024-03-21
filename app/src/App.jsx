import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LatestNews from "./pages/LatestNews";
import BestSeller from "./pages/BestSeller";
import Fallback from "./components/Fallback";
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BestSeller" element={<BestSeller />} />
        <Route path="/Latest-News" element={<LatestNews />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
