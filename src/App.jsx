import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homePage/homepage";
import SolutionPage from "./routes/solutionPage/solutionPage";
import VisionPage from "./routes/visionPage/visionPage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/solutions" element={<SolutionPage />} />
      <Route path="/vision" element={<VisionPage />} />
    </Routes>
  );
}

export default App;
