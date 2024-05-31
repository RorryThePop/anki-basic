import React, { useState } from "react";
import cls from "./Modal.module.css";
import CustomButton from "../UI/CustomButton.jsx";
import {useDispatch} from "react-redux";
import {removeWord, repeatWord} from "../../features/wordsSlice.js";
const LearnWordsModal = (props) => {
  const [isFlipped, setIsFlipped] = useState({});
  const [currentWord, setCurrentWord] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const storedWords = JSON.parse(localStorage.getItem('words'))
  const dispatch = useDispatch()
  const toggleFlip = (id) => {
    setShowOptions(!showOptions);
    setIsFlipped((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Инвертируем состояние переворота слова с id
    }));
  };
  const { filteredWords, handleModal } = props;

  const easyToLearnButton = (wordId) => {
    setShowOptions(!showOptions);
    setCurrentWord(currentWord + 1);
    dispatch(removeWord(wordId))
    localStorage.setItem('words', JSON.stringify(storedWords.filter(item => item.id !== wordId)))
  };

  const hardToLearn = (wordId) => {
    dispatch(repeatWord(wordId))
  }



  return (
    <div className={cls.modal}>
      <div className={cls.modal__container}>
        <div className={cls.CardItem}>
          <>
            {filteredWords[currentWord] ? (
              <div className={cls.Learn__answers}>
                <h3>{filteredWords && filteredWords[currentWord]?.front}</h3>
                {isFlipped[currentWord] && (
                  <h3>{filteredWords && filteredWords[currentWord]?.back}</h3>
                )}
              </div>
            ) : (
              <h3>Поздравляем! Вы выучили все слова</h3>
            )}
            {(!showOptions && filteredWords[currentWord]) && (
              <CustomButton
                text="Показать ответ"
                onHandleClick={() => toggleFlip(currentWord)}
              />
            )}
            {showOptions && (
              <div>
                <CustomButton
                  text="Сложно"
                  onHandleClick={() => easyToLearnButton(filteredWords[currentWord].id)}
                />
                <CustomButton text="Легко" onHandleClick={() => easyToLearnButton(filteredWords[currentWord].id)} />
              </div>
            )}
              {
                  !filteredWords[currentWord] && <CustomButton text='Закрыть' onHandleClick={handleModal}/>
              }
          </>
        </div>
      </div>
    </div>
  );
};

export default LearnWordsModal;
