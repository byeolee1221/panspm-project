import { createSlice } from "@reduxjs/toolkit";

const MobileSlice = createSlice({
    name: 'mobile',
    initialState: { showMenu: false, showBackdrop: false },
    reducers: {
        toggle(state) {
            state.showMenu = !state.showMenu;
        },
        backdrop(state) {
            state.showBackdrop = !state.showBackdrop;
        }
    }
});

export const mobileActions = MobileSlice.actions;

export default MobileSlice.reducer;