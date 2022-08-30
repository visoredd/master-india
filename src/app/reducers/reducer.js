import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const reducerSlice = createSlice({
  name: "reducerSlice",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    toggleLogin: (state, action) => {
      state.showModal = !state.showModal;
    },
    showSavedData: (state, action) => {
      state.showSavedData = true;
    },
    closeSavedData: (state, action) => {
      state.showSavedData = false;
    },
    logoutUser: (state, action) => {
      state.loggedInId = -1;
      localStorage.setItem("master-india", JSON.stringify(state.savedData));
    },
    addUser: (state, action) => {
      const { email, password } = action.payload;
      const userIndex = state.users.findIndex(
        (user) => user.email === email && user.password === password
      );
      if (userIndex === -1) {
        let last_item_id = state.users[state.users.length - 1].id;
        state.users = [
          ...state.users,
          {
            email,
            password,
            id: last_item_id + 1,
          },
        ];
        state.loggedInId = last_item_id + 1;
        state.showModal = false;
      } else {
        state.loggedInId = state.users[userIndex].id;
        state.showModal = false;
      }
      localStorage.setItem("master-india", JSON.stringify(state.savedData));
    },
    updateSavedData: (state, action) => {
      state.selected = action.payload;
      let saveCart = [...state.savedData];
      let user = saveCart.find((u) => u.userId == state.loggedInId);
      if (user == null) {
        saveCart = [
          ...saveCart,
          { userId: state.loggedInId, ids: [action.payload] },
        ];
      } else {
        if (user.ids.find((item) => item == action.payload) == null) {
          user.ids = [...user.ids, action.payload];
        } else {
          user.ids = user.ids.filter((item) => item != action.payload);
        }
      }
      state.savedData = saveCart;
      localStorage.setItem("master-india", JSON.stringify(state.savedData));
    },
    updateState: (state, action) => {
      state.savedData = action.payload;
    },
  },
});
export const {
  closeSavedData,
  showSavedData,
  updateSearch,
  toggleLogin,
  logoutUser,
  addUser,
  updateSavedData,
  updateState,
} = reducerSlice.actions;
export default reducerSlice.reducer;
