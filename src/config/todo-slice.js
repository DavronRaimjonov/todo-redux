import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action) => {
      return { ...state, list: action.payload };
    },
    addAxios: (state, action) => {
      return { ...state, list: [...state.list, action.payload] };
    },
    deletList: (state, action) => {
      state.list = state.list.filter((item) => item.id != action.payload);
    },
    editList: (state, action) => {
      state.list = state.list.map((item) =>
        item.id == action.payload.id ? action.payload : { ...state.list }
      );
    },
  },
});

export const { addList, addAxios, deletList, editList } = todoSlice.actions;

export default todoSlice.reducer;
