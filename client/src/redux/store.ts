import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import tokenSlice from "./slices/tokenSlice";
import itemSlice from "./slices/itemSlice";
import usersSlice from "./slices/usersSlice";


const store = configureStore({
  reducer: {
    users: usersSlice,
    user: userSlice,
    token: tokenSlice,
    items: itemSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch