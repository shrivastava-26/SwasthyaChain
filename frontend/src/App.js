import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateDoctorPage from "./pages/CreateDoctorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addDoctor" element={<CreateDoctorPage />} />
      </Routes>
    </div>
  );
}

export default App;
