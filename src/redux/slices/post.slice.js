import {createSlice} from "@reduxjs/toolkit";

let initialState = {
  posts: [],
  currentPost: null,
  loader: false,
  error: null
};
const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.posts = action.payload
    }
  }
});

const {reducer:postReducer,actions:{getAll}} =postSlice;

const postAction={
  getAll
}

export {
    postReducer,
    postAction
}