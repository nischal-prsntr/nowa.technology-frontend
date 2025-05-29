import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homePage/homepage";
import SolutionPage from "./routes/solutionPage/solutionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/solutions" element={<SolutionPage />} />
    </Routes>
  );
}

export default App;
