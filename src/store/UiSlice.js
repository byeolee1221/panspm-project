import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
    name: 'ui',
    initialState: { msgIsVisible: false, statusMsg: "" },
    reducers: {
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
    }
})

export const uiActions = UiSlice.actions;

export default UiSlice.reducer;