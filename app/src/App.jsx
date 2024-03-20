import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LatestNews from "./pages/LatestNews";
import SearchBooks from "./pages/SearchBooks";
import Fallback from "./components/Fallback";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/Latest-News" element={<LatestNews />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </>
  );
}

export default App;
