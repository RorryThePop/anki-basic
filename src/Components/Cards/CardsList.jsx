import React from "react";
import cls from "./Cards.module.css";
import {useDispatch} from "react-redux";
import {removeCard} from "../../features/cardSlice.js";
const CardsList = () => {
  const storedCard = JSON.parse(localStorage.getItem('card'))
    const dispatch = useDispatch()

    const handleRemoveStoredItem = (cardId) => {
        dispatch(removeCard(cardId))
        localStorage.setItem('card', JSON.stringify(storedCard.filter(item => item.id !== cardId)))
    }
  return (
    <table className={cls.tableCards}>
      <thead>
        <tr>
          <th>Колоды</th>
          <th>Новые</th>
          <th>Изучаемые</th>
          <th>К просмотру</th>
        </tr>
      </thead>
      <tbody>
        {storedCard &&
            storedCard.map((item, index) => (
            <tr key={index}>
              <td>
                  <a href={`cards/${index + 1}`}>{item.cardName}</a>
              </td>
              <td>1</td>
              <td>1</td>
              <td>2</td>
                <td onClick={( ) => handleRemoveStoredItem(item.id)}>X</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CardsList;
