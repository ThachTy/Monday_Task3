import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/users/sign_up_new" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
