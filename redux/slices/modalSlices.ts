
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  SignUpModalOpen: false,
  LogInModalsOpen: false,
  CommentModalOpen: false,
  commentPostDetails: {
    name: "",
    username: "",
    id : "",
    text: "",
  }

}

const modalSlices = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.SignUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.SignUpModalOpen = false;
  },

   openLogInModal: (state) => {
      state.LogInModalsOpen = true;
    },
    closeLogInModal: (state) => {
      state.LogInModalsOpen = false;
  },

    openCommentModal: (state) => {
      state.CommentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.CommentModalOpen = false;
  },
  setCommentDetails: (state, action) => {
    state.commentPostDetails.name = action.payload.name;
    state.commentPostDetails.username = action.payload.username;
    state.commentPostDetails.id = action.payload.id;
    state.commentPostDetails.text = action.payload.text;
  }
},
});

export const {openSignUpModal, closeSignUpModal,openLogInModal, closeLogInModal, openCommentModal, closeCommentModal ,setCommentDetails} = modalSlices.actions

export default modalSlices.reducer