import React, {useState} from 'react';
import logo from '../../assets/anki.svg'
import cls from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import AddCardsModal from "../Modals/AddCardsModal.jsx";
import {openModal} from "../../features/wordsSlice.js";
import AddWordModal from "../Modals/AddWordModal.jsx";
const Header = () => {
    const isModalOpened = useSelector(state => state.words.isModalOpened)
    const dispatch = useDispatch()
    return (
        <>
            <header className={cls.header}>
                <a href="/">
                    <img src={logo} alt="Anki"/>
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href={`/cards`}>Колоды</a>
                        </li>
                        <li onClick={() => dispatch(openModal())}>
                            Добавить
                        </li>
                    </ul>
                </nav>
            </header>
            {isModalOpened && <AddWordModal/>}
        </>
    );
};

export default Header;
