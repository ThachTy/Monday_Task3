import { Routes, Route, Link } from "react-router-dom";

/* layout */
import CreateBoard from "./layout/CreateBoard/CreateBoard";

/* Page */
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import InvitePage from "./pages/InvitePage/InvitePage";
import RegisterAccept from "./pages/RegisterAccept/RegisterAccept";
import RegisterAccept2 from "./pages/RegisterAccept2/RegisterAccept2";
import CreateBoardName from "./pages/CreateBoardName/CreateBoardName";
import RegisterInvitationPage from "./pages/RegisterInvitationPage/RegisterInvitationPage";

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
        <Route
          path="/users/invitation/accept"
          element={<RegisterAccept />}
        ></Route>
        <Route
          path="/users/invitation/accept_2"
          element={<RegisterAccept2 />}
        ></Route>
        <Route path="/invite_your_team" element={<InvitePage />}></Route>

        <Route path="/create_board" element={<CreateBoard />}>
          <Route index path="name" element={<CreateBoardName />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
