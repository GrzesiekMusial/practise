import React, { useState, useEffect } from "react";
import styled from "styled-components";

import styles from "./styles";
import Buttons from "../common/buttons";
import Burg from "./bur";

const Hamburger = () => {
    const [next, _setNext] = React.useState(0);
    const [styl, setStyl] = React.useState(styles);

    const myStateRef = React.useRef(next);

    const setNext = (data) => {
        myStateRef.current = data;
        _setNext(data);
    };

    const loadListener = () => {
        document.addEventListener("keydown", function (event) {
            const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

            switch (key) {
                case "ArrowLeft":
                case "ArrowDown":
                    loadNew(myStateRef.current - 1);
                    break;
                case "ArrowUp":
                case "ArrowRight":
                    loadNew(myStateRef.current + 1);
                    break;
            }
        });
    };

    useEffect(() => {
        loadListener();
    }, []);

    const createElements = (x) => {
        const arr = [];
        for (let i = 0; i < x; i++) {
            arr.push(i);
        }
        return arr;
    };

    const loadNew = (number) => {
        return;
    };

    styles.forEach((EL) => {
        console.log(EL);
    });

    const arr = createElements(styles[next].number);

    const Hamburger = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;

    return (
        <>
            <Hamburger>
                {styl.map((el) => (
                    <Burg item={el} />
                ))}
            </Hamburger>
            <Buttons length={1} handleClick={loadNew} status={next} />
        </>
    );
};

export default Hamburger;
