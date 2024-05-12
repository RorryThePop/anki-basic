import React, { useState } from "react";
import cls from "./Modal.module.css";
import CustomInput from "../UI/CustomInput.jsx";
import CustomButton from "../UI/CustomButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import {createWord, openModal} from "../../features/wordsSlice.js";
const ModalCardData = () => {
  const [frontValue, setFrontValue] = useState("");
  const [backValue, setBackValue] = useState("");
  const words = useSelector((state) => state.words);
  const cardName = useSelector((state) => state.card.cards);
  const dispatch = useDispatch();
  const handleNewWord = () => {
    if(frontValue.length > 0 && backValue.length > 0) {
      dispatch(createWord({front: frontValue, back: backValue}));
      setFrontValue('')
      setBackValue('')
      dispatch(openModal())
      console.log(words)
    }
  };

  return (
    <div className={cls.modal}>
      <div className={cls.modal__container}>
        <div className={cls.cardType}>
          Колода:
            <select name="cardType" id="">
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

export default ModalCardData;
