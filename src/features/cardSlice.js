import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpened: false,
    cards: JSON.parse(localStorage.getItem('card')) || [],
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
      openModal: (state) => {
          state.isModalOpened = !state.isModalOpened
      },
      createCard: (state, action) => {
          const newCard = {
              id: state.cards.length + 1,
              cardName: action.payload
          }
          state.cards = [...state.cards, newCard]
          localStorage.setItem('card', JSON.stringify(state.cards))
      },
      removeCard: (state, action) => {
          state.cards = state.cards.filter(item => item.id !== action.payload)
      }
  },
});

export const {createCard, openModal, removeCard} = cardSlice.actions

export default cardSlice.reducer
