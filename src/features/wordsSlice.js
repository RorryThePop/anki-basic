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
            const { front, back, card, repeat, learned } = action.payload; // Получаем card из payload
            const newWord = {
                id: state.words.length + 1,
                front: front,
                back: back,
                card: card, // Добавляем информацию о колоде
                //Добавляем поля повтора и изучения слов
                repeat: false,
                learned: false
            }
            state.words = [...state.words, newWord]
            localStorage.setItem('words', JSON.stringify(state.words))
        },
        //функционал поиска и изменения значения повторяемого слова с false на true
        repeatWord: (state, action) => {
            const word = state.words.find(item => item.id === action.payload);
            if (word) {
                word.repeat = true;
            }
            localStorage.setItem('words', JSON.stringify(state.words))
        },
        //функционал поиска и изменения значения изученного слова с false на true
        learnWord: (state, action) => {
            const word = state.words.find(item => item.id === action.payload);
            if (word) {
                word.learned = true;
            }
            localStorage.setItem('words', JSON.stringify(state.words))
        },
        removeWord: (state, action) => {
            state.words = state.words.filter(item => item.id !== action.payload)
        },
        openModal: (state) => {
            state.isModalOpened = !state.isModalOpened
        }
    },
});

export const { createWord, openModal, removeWord, repeatWord, learnWord } = wordsSlice.actions
export default wordsSlice.reducer
