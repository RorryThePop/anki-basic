import React, {useState} from 'react';
import cls from './Modal.module.css'
import CustomInput from "../UI/CustomInput.jsx";
import CustomButton from "../UI/CustomButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {createCard, openModal} from "../../features/cardSlice.js";
const AddCardsModal = () => {
    const [cardValue, setCardValue] = useState('')
    const cards = useSelector((state) => state.card.cards);
    const dispatch = useDispatch()
    const handleNewCard = (e) => {
        e.preventDefault()
        if(cardValue.length > 0) {
            const formattedData = JSON.stringify(cards)
            localStorage.setItem('card', formattedData)
            dispatch(createCard(cardValue))
            dispatch(openModal())
        }
    }

    return (
        <div className={cls.modal}>
            <div className={cls.modal__container}>
                <CustomInput value={cardValue} onHandleChange={(e) => setCardValue(e.target.value)}/>
                <div className={cls.close__modal} onClick={() => dispatch(openModal())}>X</div>
                <CustomButton text='Создать колоду' onHandleClick={handleNewCard}/>
            </div>
        </div>
    );
};

export default AddCardsModal;
