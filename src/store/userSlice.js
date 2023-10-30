import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name:'user',
  initialState:[],
  reducers:{
    addUser:(state, action)=>{
      state.push(action.payload);
    },
    deleteUser:(state, action)=>{
      return state.filter(item=>item.id!==action.payload)
    },
    editUser: (state, action) => {
      const { id, updatedUserData } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        Object.assign(existingUser, updatedUserData);
      }
    },
  }
})
export const {addUser}=userSlice.actions;
export const {deleteUser}=userSlice.actions;
export const{editUser}=userSlice.actions;
export default userSlice.reducer