import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Quiz from "./components/Quiz";

import StartPage from "./pages/StartPage";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/start-page" />} />
        <Route path="start-page" element={<StartPage />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
