import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpened: false,
    words: [
        {
            id: 1,
            front: "Front word",
            back: "Back word",
        },
    ]
}

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
      createWord: (state, action) => {
          const { front, back } = action.payload;
          const newWord = {
              id: state.words.length + 1,
              front: front,
              back: back
          }
          state.words = [...state.words, newWord]
      },
      openModal: (state) => {
          state.isModalOpened = !state.isModalOpened
      }
  },
});

export const {createWord, openModal} = wordsSlice.actions
export default wordsSlice.reducer
