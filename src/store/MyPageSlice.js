import { createSlice } from "@reduxjs/toolkit";

const MyPageSlice = createSlice({
    name: 'Mypage',
    initialState: { newPassword: "", passwordAuth: false, delete: false, allUsers: [], deleteUser: {}, userPassword: "" },
    reducers: {
        expire(state, action) {
            const users = action.payload.users;
            const targetUser = action.payload.user;
            state.allUsers = users;
            state.deleteUser = targetUser;   
            state.userPassword = targetUser.signInData.password;  
        },
        delete(state) {
            state.delete = true;
        },
        reset(state) {
            state.delete = !state.delete;
            state.allUsers = [];
            state.deleteUser = {};
        },
        newPassword(state, action) {
            const passwordOne = action.payload.enteredPasswordOne;
            const passwordTwo = action.payload.enteredPasswordTwo;

            if (passwordOne.trim() === passwordTwo.trim()) {
                state.passwordAuth = true;
                state.newPassword = passwordOne;
            }
        }
    }
})

export const MypageActions = MyPageSlice.actions;

export default MyPageSlice.reducer;