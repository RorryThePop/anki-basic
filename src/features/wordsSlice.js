import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpened: false,
    words: JSON.parse(localStorage.getItem('words')) || []
}

export const wordsSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        createWord: (state, action) => {
            const { front, back, card } = action.payload; // Получаем card из payload
            const newWord = {
                id: state.words.length + 1,
                front: front,
                back: back,
                card: card, // Добавляем информацию о колоде
            }
            state.words = [...state.words, newWord]
            localStorage.setItem('words', JSON.stringify(state.words))
        },
        openModal: (state) => {
            state.isModalOpened = !state.isModalOpened
        }
    },
});

export const { createWord, openModal } = wordsSlice.actions
export default wordsSlice.reducer
