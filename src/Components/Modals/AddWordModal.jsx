import React, { useState } from "react";
import cls from "./Modal.module.css";
import CustomInput from "../UI/CustomInput.jsx";
import CustomButton from "../UI/CustomButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import {createWord, openModal} from "../../features/wordsSlice.js";
const AddWordModal = () => {
  const [frontValue, setFrontValue] = useState("");
  const [backValue, setBackValue] = useState("");
  const words = useSelector((state) => state.words.words);
  const cardName = useSelector((state) => state.card.cards);
  const [selectedCard, setSelectedCard] = useState(cardName[0]?.cardName);
  const dispatch = useDispatch();
  const handleNewWord = () => {
    if(frontValue.length > 0 && backValue.length > 0) {
      const formattedData = JSON.stringify(words)
      localStorage.setItem('words', formattedData)
      dispatch(createWord({front: frontValue, back: backValue, card: selectedCard}));
      setFrontValue('')
      setBackValue('')
      dispatch(openModal())

    }
  };



  const handleCardSelect = (e) => {
    setSelectedCard(e.target.value); // Обновляем выбранную колоду при изменении значения в <select>
  };

  console.log(selectedCard)

  return (
    <div className={cls.modal}>
      <div className={cls.modal__container}>
        <div className={cls.cardType}>
          Колода:
            <select name="cardType" id="" onChange={handleCardSelect} value={selectedCard}>
                {
                    cardName && cardName.map(item => (
                        <option key={item.id} value={item.cardName}>{item.cardName}</option>
                    ))
                }
            </select>
          <CustomInput
            value={frontValue}
            onHandleChange={(e) => setFrontValue(e.target.value)}
          />
          <CustomInput
            value={backValue}
            onHandleChange={(e) => setBackValue(e.target.value)}
          />
          <CustomButton text="Добавить слово" onHandleClick={handleNewWord} />
        </div>
      </div>
    </div>
  );
};

export default AddWordModal;
