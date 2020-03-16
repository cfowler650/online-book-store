import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const starGenerator = (rating, fillColor, otherColor) => {
    let stars = [];

    let array = rating => {
        for (var i = 0; i < 5; i += 1) stars.push(i);
    };

    array(rating);

    return (
        <>
            {stars.map((star, index) => {
                return index < rating ? (
                    <FontAwesomeIcon color={fillColor} icon={faStar} />
                ) : (
                    <FontAwesomeIcon color={otherColor} icon={faStar} />
                );
            })}
        </>
    );
};

export default starGenerator;
