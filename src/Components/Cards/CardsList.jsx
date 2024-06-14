import React from "react";
import cls from "./Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../../features/cardSlice.js";
const CardsList = () => {
  const storedCard = JSON.parse(localStorage.getItem("card"));
  const word = JSON.parse(localStorage.getItem("words"));
  const wordData = useSelector((state) => state.words.words);
  const selectedCardName = useSelector((state) => state.card.cards);
  const dispatch = useDispatch();
  const handleRemoveStoredItem = (cardId) => {
    dispatch(removeCard(cardId));
    localStorage.setItem(
      "card",
      JSON.stringify(storedCard.filter((item) => item.id !== cardId)),
    );
  };

console.log(wordData)
  return (
    <table className={cls.tableCards}>
      <thead>
        <tr>
          <th>Колоды</th>
        </tr>
      </thead>
      <tbody>
        {selectedCardName &&
            selectedCardName.map((item, index) => (
            <tr key={index}>
              <td>
                <a href={`cards/${index + 1}`}>{item.cardName}</a>
              </td>
              <td onClick={() => handleRemoveStoredItem(item.id)}>X</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CardsList;
