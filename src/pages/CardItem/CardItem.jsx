import React, {useState} from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../Components/UI/CustomButton.jsx";
import { Routes, Route, useParams } from "react-router-dom";

const CardItem = () => {
    const { cardsId } = useParams();
    const [isFlipped, setIsFlipped] = useState(false);
    const wordData = useSelector((state) => state.words.words);

    return (
        <div>
            {wordData.map((item) => (
                <div key={item.id}>
                    {item.id === parseInt(cardsId) && (
                        <div>
                            {item.front} {item.back}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CardItem;
