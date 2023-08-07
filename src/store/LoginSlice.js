import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    loginIsVisible: false,
    backdropIsVisible: false,
    idAuth: false,
    passwordAuth: false,
    userChecked: false,
    isLoggedIn: false,
    msgIsVisible: false,
    statusMsg: ""
  },
  reducers: {
    toggle(state) {
      state.loginIsVisible = !state.loginIsVisible;
    },
    backdrop(state) {
      state.backdropIsVisible = !state.backdropIsVisible;
    },
    idAuth(state, action) {
      const auth = action.payload;
      if (auth.trim() === "") {
        state.idAuth = !state.idAuth;
      } else {
        state.idAuth = false;
      }
    },
    passwordAuth(state, action) {
      const auth = action.payload;
      if (typeof auth === "string" && auth.trim().length < 8) {
        state.passwordAuth = !state.passwordAuth;
      } else {
        state.passwordAuth = false;
      }
    },
    reset(state) {
      state.idAuth = false;
      state.passwordAuth = false;
    },
    login(state) {
      state.userChecked = !state.userChecked;
      state.isLoggedIn = true;
      state.loginIsVisible = false;
      state.backdropIsVisible = false;
    },
    logout(state) {
      state.userChecked = !state.userChecked;
      state.isLoggedIn = false;
      localStorage.removeItem('userLoggedIn');
    },
    showMsgBox(state) {
      state.msgIsVisible = !state.msgIsVisible;
    },
    showStatusMsg(state, action) {
      state.statusMsg = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message
      };
    }
  },
});

export const LoginActions = LoginSlice.actions;

export default LoginSlice.reducer;