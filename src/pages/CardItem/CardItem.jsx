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

  // фильтруем массив по словам, что пользователь должен повторить и по словам что должен учить
  const repeatedWords = filteredWords.filter(item => item.repeat)
  const learnedWords = filteredWords.filter(item => item.learned)


  return (
    <>
      <Header/>
      <main>
        <section>
          <table  className={cls.cardItem__table}>
            <tbody>
            <tr>
              <td>Новые</td>
              <td>{filteredWords.length - learnedWords.length}</td>
            </tr>
            <tr>
              <td>Изучаемые</td>
              <td>{learnedWords.length}</td>
            </tr>
            <tr>
              <td>Повтояремые</td>
              <td>{repeatedWords.length}</td>
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
