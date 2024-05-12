import {combineReducers, createStore} from '@reduxjs/toolkit'
import cardReducer from '../features/cardSlice.js'
import wordReducer from '../features/wordsSlice.js'
const rootReducer = combineReducers({
    card: cardReducer,
    words: wordReducer
})

export const store = createStore(rootReducer)
