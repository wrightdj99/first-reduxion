import { createSlice } from "@reduxjs/toolkit";

/*Here is our first slice! SLICES make it easier to create your
reducer in a very easy way; you can split (slice) up your state logic across your app so that
state management becomes more intuitive. */

const initialStateVals = {name: "", age: 0, email: ""};

export const userSlice = createSlice({
    //Slice name
    name: "user",
    //Initial slice state
    initialState: {value: initialStateVals},
    //Reducer function that does the work of updating the state of this slice
    reducers: {
        //State holds information about current and previous values.
        //An action is kind of like an Event in normal React, it refers to a parameter/event that occurs in the app that 
        //requires our state to be changed. Instead of props, like in normal React, the action in Redux contains a PAYLOAD.
        //The payload is the data that's being passed into our slice's state.
        login: (state, action)=>{
            state.value = action.payload
        },

        logout: (state)=>{
            state.value = initialStateVals
        }
    },
});

/*And that's it! We just made our first Redux Slice! As you can see, slices are like giant, more complex Hooks.
We can take part of the state of our application, and delegate the responsibility of keeping it up to date GLOBALLY in
these few lines of code. Now, whenever the user types something in a text box for example, this slice will pick up on what data
(payload) just got entered. */

//The slice contains the reducer, and we may not want to access the whole slice every time. We CAN, but in 
//this case we just want to export the one reducer.

//Exporting the individual actions within our slice
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;