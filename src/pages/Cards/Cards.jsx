import React from "react";
import cls from "./Cards.module.css";
import CardsList from "../../Components/Cards/CardsList.jsx";
import CustomButton from "../../Components/UI/CustomButton.jsx";
import AddCardsModal from "../../Components/Modals/AddCardsModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/cardSlice.js";
import Header from "../../Components/Header/Header.jsx";

const Cards = () => {
  const cardSlice = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const clearCards = () => {
    localStorage.removeItem("card");
    window.location.reload();
  };

  return (
    <>
      <Header />
      <main>
        <section className={cls.cardsPage}>
          {cardSlice.isModalOpened && <AddCardsModal />}
          <CardsList />
          <CustomButton
            text="Добавить колоду"
            onHandleClick={() => dispatch(openModal())}
          />
          <CustomButton
            text="Очистить все колоды"
            onHandleClick={() => clearCards()}
          />
        </section>
      </main>
    </>
  );
};

export default Cards;
