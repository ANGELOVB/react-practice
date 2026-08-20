import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import { ProfessorsPage } from "../pages/ProfessorPage";
import { StudentsPage } from "../pages/StudentPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/professors" element={<ProfessorsPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
