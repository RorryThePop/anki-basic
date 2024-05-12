import React, { useState } from "react";
import cls from "./Cards.module.css";
import CardsList from "../../Components/Cards/CardsList.jsx";
import CustomButton from "../../Components/UI/CustomButton.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { createCard, openModal } from "../../features/cardSlice.js";

const Cards = () => {
  const cardSlice = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const clearCards = () => {
    localStorage.removeItem("card");
    window.location.reload();
  };

  return (
    <section className={cls.cardsPage}>
      {cardSlice.isModalOpened && <Modal />}
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
  );
};

export default Cards;
