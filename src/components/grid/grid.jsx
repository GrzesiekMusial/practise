import React, { useState, useEffect } from "react";
import styles from "./styles";
import Buttons from "../common/buttons";

const Grid = () => {
    const [next, _setNext] = React.useState(0);

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
        console.log(number, next);
        if (number < styles.length) return setNext(Math.max(0, number));
        else return;
    };

    const arr = createElements(styles[next].number);
    const Grid = styles[next].style;

    return (
        <>
            <Grid id="grid">
                {arr.map((el, index) =>
                    React.createElement("div", { key: index }, index)
                )}
            </Grid>
            <Buttons
                length={styles.length}
                handleClick={loadNew}
                status={next}
            />
        </>
    );
};

export default Grid;
