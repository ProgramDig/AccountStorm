import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  list: [],
  filterList: []
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.list = [...action.payload];
    },
    removeItems(state) {
      state.list = initialState.list;
    },
    updateItem(state, action) {
      state.list.reduce((acc: any, item: any) => {
        if(item._id === action.payload._id){
          return [...acc, {...item}];
        }
        return [...acc, item];
      },[]);
    },
    removeItem(state,action) {
      state.list.filter((item:any) => item._id !== action.payload._id);
    },
    setFilterItems(state, action) {
      state.filterList = [...action.payload];
    },
    removeFilterItems(state) {
      state.list = initialState.list;
      state.filterList = initialState.filterList;
    },
  },
});

export const {removeItem, removeItems, removeFilterItems, updateItem, setFilterItems, setItems} = itemSlice.actions;
export default itemSlice.reducer;