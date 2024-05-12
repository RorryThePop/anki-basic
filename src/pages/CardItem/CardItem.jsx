import React, { useState } from "react";
import cls from './CardItem.module.css'
import { useSelector } from "react-redux";
import CustomButton from "../../Components/UI/CustomButton.jsx";
import { Routes, Route, useParams } from "react-router-dom";

const CardItem = () => {
  const { cardsId } = useParams();
  const [isFlipped, setIsFlipped] = useState({});
  const wordData = useSelector((state) => state.words.words);
  const selectedCardName = useSelector((state) => state.card.cards);
  const findCurrentCard = selectedCardName.find(item => item.id === parseInt(cardsId))
  const filteredWords = wordData.filter(
    (word) => word.card === findCurrentCard.cardName,
  ); // Фильтруем слова по выбранной колоде

  const toggleFlip = (id) => {
    setIsFlipped(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Инвертируем состояние переворота слова с id
    }));
  };

  return (
    <div className={cls.CardItem}>
      {filteredWords && filteredWords.map((item) => (
        <div key={item.id}>
            <div>
              <h3>{item.front}</h3>
              <CustomButton text='Перевернуть карточку' onHandleClick={() => toggleFlip(item.id)}/>
              {isFlipped[item.id] && <h3>{item.back}</h3>}
            </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
