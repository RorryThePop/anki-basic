import React, { useState } from "react";
import cls from './CardItem.module.css'
import { useSelector } from "react-redux";
import CustomButton from "../../Components/UI/CustomButton.jsx";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import LearnWordsModal from "../../Components/Modals/LearnWordsModal.jsx";

const CardItem = () => {
  const { cardsId } = useParams();
  const [isFlipped, setIsFlipped] = useState({});
  const [isModalOpened, setIsModalOpened] = useState(false)
  const wordData = useSelector((state) => state.words.words);
  const selectedCardName = useSelector((state) => state.card.cards);
  const findCurrentCard = selectedCardName.find(item => item.id === parseInt(cardsId))
  const filteredWords = wordData.filter(
    (word) => word.card === findCurrentCard?.cardName,
  ); // Фильтруем слова по выбранной колоде и добавляем их на динамически обновляемую страницу

  const toggleFlip = (id) => {
    setIsFlipped(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Инвертируем состояние переворота слова с id
    }));
  };

  const handleModal = () => {
    setIsModalOpened(!isModalOpened)
  }



  console.log(filteredWords)

  return (
    <>
      <Header/>
      <main>
        <section>
          <table  className={cls.cardItem__table}>
            <tbody>
            <tr>
              <td>Новые</td>
              <td>{filteredWords.length}</td>
            </tr>
            <tr>
              <td>Изучаемые</td>
              <td>{filteredWords.length}</td>
            </tr>
            <tr>
              <td>Повтояремые</td>
              <td>0</td>
            </tr>
            </tbody>
          </table>
          <CustomButton text='Учить' onHandleClick={handleModal}/>
          {
            isModalOpened && <LearnWordsModal filteredWords={filteredWords} handleModal={handleModal}/>
          }
        </section>
      </main>
    </>
  );
};

export default CardItem;
