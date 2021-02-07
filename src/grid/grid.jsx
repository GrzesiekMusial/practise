import React, { useState, useEffect } from "react";
import styles from "./styles";

const Grid = () => {
    const [next, setNext] = useState(0);

    const createElements = (x) => {
        const arr = [];
        for (let i = 0; i < x; i++) {
            arr.push(i);
        }
        return arr;
    };

    const loadNew = (number) => {
        if (number < styles.length) return setNext(Math.max(0, number));
        else setNext(0);
    };

    const arr = createElements(styles[next].number);
    const Grid = styles[next].style;

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        loadNew(next + 1);
                    }}
                >
                    NEXT
                </button>
                <button
                    onClick={() => {
                        loadNew(next - 1);
                    }}
                >
                    PREV
                </button>
                <div>{`${next + 1} / ${styles.length}`}</div>
            </div>

            <Grid id="grid">
                {arr.map((el, index) =>
                    React.createElement("div", { key: index }, index)
                )}
            </Grid>
        </>
    );
};

export default Grid;
