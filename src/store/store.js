import { configureStore } from "@reduxjs/toolkit";

import LoginSlice from "./LoginSlice";
import ContactSlice from "./ContactSlice";
import SignInSlice from "./SignInSlice";
import UiSlice from "./UiSlice";
import MemberSigninSlice from "./MemberSigninSlice";
import MyPageSlice from "./MyPageSlice";
import MobileSlice from "./MobileSlice";

const store = configureStore({
  reducer: {
    login: LoginSlice,
    contact: ContactSlice,
    signin: SignInSlice,
    ui: UiSlice,
    member: MemberSigninSlice,
    mypage: MyPageSlice,
    mobile: MobileSlice
  },
});

export default store;
