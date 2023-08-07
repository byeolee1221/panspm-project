import { createSlice } from "@reduxjs/toolkit";

const MemberSigninSlice = createSlice({
    name: 'MemberSignin',
    initialState: { SignInData: [] },
    reducers: {
        addMemberData(state, action) {
            const userData = action.payload;
            const existingUser = state.SignInData.find((data) => data.id === userData.id);

            if (!existingUser) {
                state.SignInData.push({
                    id: Math.random().toString(),
                    name: userData.name,
                    age: userData.age,
                    sex: userData.sex,
                    tell: userData.tell,
                    part: userData.part,
                    army: userData.army,
                    genre: userData.genre,
                    musician: userData.musician
                });
            }
        },
        dataReset(state) {
            state.SignInData = [];
        }
    }
});

export const MemberSigninAction = MemberSigninSlice.actions;

export default MemberSigninSlice.reducer;