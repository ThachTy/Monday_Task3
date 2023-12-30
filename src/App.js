import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterInvitationPage from "./pages/RegisterInvitationPage/RegisterInvitationPage";
import RegisterAccept from "./pages/RegisterAccept/RegisterAccept";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users/sign_up_new" element={<LoginPage />}></Route>
        <Route
          path="/users/invitation"
          element={<RegisterInvitationPage />}
        ></Route>
        <Route
          path="/users/invitation/accept"
          element={<RegisterAccept />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
