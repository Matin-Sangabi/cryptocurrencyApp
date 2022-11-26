import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import "./App.css";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="w-full ">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<DashboardPage />} path="dashboard" />
      </Routes>
    </div>
  );
};

export default App;
