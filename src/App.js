import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/pages/Root";
import Home from "./components/pages/Home";
import Introduction from "./components/pages/Introduction";
import SignInMember from "./components/pages/SignInMember";
import PrivacyTermsPG from "./components/pages/PrivacyTermsPg";
import TermsOfServicePG from "./components/pages/TermsOfServicePG";
import MyPagePG from "./components/pages/MyPagePG";
import PasswordChangePG from "./components/pages/PasswordChangePG";
import UserExpirePG from "./components/pages/UserExpirePG";
import { LoginActions } from "./store/LoginSlice";

import "./App.css";

function App () {
  const dispatch = useDispatch();
  const userLogin = localStorage.getItem('userLoggedIn');

  if (userLogin) {
    dispatch(LoginActions.login());
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "introduction", element: <Introduction /> },
        { path: "signinMember", element: <SignInMember /> },
        { path: "privacyTerms", element: <PrivacyTermsPG /> },
        { path: "termsOfService", element: <TermsOfServicePG /> },
        { path: "mypage", element: <MyPagePG /> },
        { path: "mypage/passwordChange", element: <PasswordChangePG /> },
        { path: "mypage/expire", element: <UserExpirePG /> }
      ]
    }, 
  ], {basename: "/"});

  return (
    <RouterProvider router={router} />
  );
}

export default App;
