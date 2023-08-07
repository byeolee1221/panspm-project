import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
    name: 'signin',
    initialState: { signinIsVisible: false, backdropIsVisible: false, signInData: [], totalUser: 0, privacyTerms: false, termsOfService: false },
    reducers: {
        toggle(state) {
            state.signinIsVisible = !state.signinIsVisible;
        },
        backdrop(state) {
            state.backdropIsVisible = !state.backdropIsVisible;
        },
        addUserData(state, action) {
            const userData = action.payload;
            const existingItem = state.signInData.find((data) => data === userData);
            console.log(existingItem);
            if (!existingItem) {
                state.totalUser++;
                state.signInData.push({
                    id: userData.id,
                    affiliation: userData.affiliation,
                    ordinal: userData.ordinal,
                    name: userData.title,
                    userid: userData.userid,
                    password: userData.password,
                    email: userData.email
                });
            } else {
                throw new Error('이미 가입한 회원입니다.');
            }
        },
        dataReset(state) {
            state.signInData = [];
        },
        privacy(state) {
            state.privacyTerms = !state.privacyTerms;
        },
        termsOfService(state) {
            state.termsOfService = !state.termsOfService;
        }
    }
})

export const signinActions = SignInSlice.actions;

export default SignInSlice.reducer;