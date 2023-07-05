import { createSlice } from "@reduxjs/toolkit";

const SuperAdmin = createSlice({
   name: 'SuperAdmin',
   initialState:{adminStatus:'Active'},
   reducers: {
      setAdminState: (state, action) => {
        state.adminStatus = action.payload;
      }
   } }
   )

export const {setAdminState} = SuperAdmin.actions
export default SuperAdmin.reducer