/* eslint-disable quotes */
// eslint-disable-next-line quotes
import React from "react";
// eslint-disable-next-line quotes
import { Route, Routes } from "react-router-dom";

import Search from "./Search/Search";
import Home from "./Home/Home";

function App() {
  return (
    <>
      {/* <Router>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
