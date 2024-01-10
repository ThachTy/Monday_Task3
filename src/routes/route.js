/* Layout */
import CreateBoard from "../layout/CreateBoard/CreateBoard";
import CreateBoardName from "../pages/CreateBoardName/CreateBoardName";

/* Page */
import HomePage from "../pages/HomePage/HomePage";
import InvitePage from "../pages/InvitePage/InvitePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterAccept from "../pages/RegisterAccept/RegisterAccept";
import RegisterAccept2 from "../pages/RegisterAccept2/RegisterAccept2";
import RegisterInvitationPage from "../pages/RegisterInvitationPage/RegisterInvitationPage";

// path : string
// index : boolean
// element : component
// sub: object route

const homeLayout = [
  // HomePage
  { path: "/", index: true, element: <HomePage /> },
  // LoginPage
  { path: "/users/sign_up_new", element: <LoginPage /> },
  // users/invitationPage
  {
    path: "/users/invitation",
    element: <RegisterInvitationPage />,
  },
  // users/invitationPage/accept
  {
    path: "/users/invitation/accept",
    element: <RegisterAccept />,
  },
  // users/invitation/accept_2
  {
    path: "/users/invitation/accept_2",
    element: <RegisterAccept2 />,
  },
  //  invite Your Team
  {
    path: "/invite_your_team",
    element: <InvitePage />,
  },
];

/* CreateBoard Layout */
const createBoardLayout = [
  {
    path: "/create_board",
    element: <CreateBoard />,
    sub: {
      index: true,
      path: "name",
      element: <CreateBoardName />,
    },
  },
];

const allRoute = [...homeLayout, ...createBoardLayout];

export default allRoute;
