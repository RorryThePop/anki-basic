import React, { useState } from "react";
import cls from "./Modal.module.css";
import CustomButton from "../UI/CustomButton.jsx";
const LearnWordsModal = (props) => {
  const [isFlipped, setIsFlipped] = useState({});
  const [currentWord, setCurrentWord] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const toggleFlip = (id) => {
    setShowOptions(!showOptions);
    setIsFlipped((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Инвертируем состояние переворота слова с id
    }));
  };
  const { filteredWords, handleModal } = props;

  const easyToLearnButton = () => {
    setShowOptions(!showOptions);
    setCurrentWord(currentWord + 1);
  };

    console.log(filteredWords[currentWord])
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
              <h3>Поздравляем! Вы ебучий зубрила!</h3>
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
                  onHandleClick={easyToLearnButton}
                />
                <CustomButton text="Легко" onHandleClick={easyToLearnButton} />
              </div>
            )}
              {
                  !filteredWords[currentWord] && <CustomButton text='Закрыть нахуй' onHandleClick={handleModal}/>
              }
          </>
        </div>
      </div>
    </div>
  );
};

export default LearnWordsModal;
