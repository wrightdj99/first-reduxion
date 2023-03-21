import { createSlice } from "@reduxjs/toolkit";

const initialStateVal = "";

export const themeSlice = createSlice({
    //Slice name
    name: "theme",
    //Initial slice state
    initialState: {value: initialStateVal},
    //Reducer function that does the work of updating the state of this slice
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        }
    },
});
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;