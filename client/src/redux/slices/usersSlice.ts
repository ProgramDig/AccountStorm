import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  list: [],
  filterList: []
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.list = [...action.payload];
    },
    removeUsers(state) {
      state.list = initialState.DoList;
    },
    updateOneUser(state, action) {
      state.list.reduce((acc: any, item: any) => {
        if(item._id === action.payload._id){
          return [...acc, {...item}];
        }
        return [...acc, item];
      },[]);
    },
    removeOneUser(state,action) {
      state.list.filter((item:any) => item._id !== action.payload._id);
    },
    setFilterUsers(state, action) {
      state.filterList = [...action.payload];
    },
    removeFilterUsers(state) {
      state.list = initialState.list;
      state.filterList = initialState.filterList;
    },
  },
});

export const {setUsers, removeUsers, updateOneUser, removeOneUser, setFilterUsers, removeFilterUsers} = usersSlice.actions;
export default usersSlice.reducer;