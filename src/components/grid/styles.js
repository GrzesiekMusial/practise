import styled from "styled-components";

const Base = styled.div`
    align-items: center;
    justify-content: center;
    align-items: center;
    display: grid;
    margin: 5%;
    gap: 5px;

    & div {
        background-color: var(--block);
        text-align: center;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        font-weight: bold;
        border-radius: 5px;

        min-height: fit-content;
        min-width: fit-content;
        &:hover {
            transition: all 1s;
            background-color: var(--active);
        }
    }
`;

const styles = [
    {
        number: 9,
        style: styled(Base)`
            @media (orientation: landscape) {
                grid-template-columns: repeat(3, 15vh);
                grid-template-rows: repeat(3, 15vh);
            }

            @media (orientation: portrait) {
                grid-template-columns: repeat(3, 20vw);
                grid-template-rows: repeat(3, 20vw);
            }
        `,
    },
    {
        number: 10,
        style: styled(Base)`
            @include important-text;
            grid-template-columns: 10% repeat(3, 20%) 10%;
            max-height: 50vw;
        `,
    },

    {
        number: 5,
        style: styled(Base)`
            grid-template-columns: repeat(2, 30%);
            grid-row-gap: 5%;
            grid-column-gap: 5%;

            & div:first-of-type {
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 1;
                grid-column-end: 3;
            }
        `,
    },
    {
        number: 7,
        style: styled(Base)`
            grid-template-columns: repeat(3, 30%);
            grid-row-gap: 3%;
            grid-column-gap: 3%;

            & div:first-of-type {
                grid-row-start: 1;
                grid-row-end: 4;
            }
        `,
    },
    {
        number: 6,
        style: styled(Base)`
            grid-template-columns: repeat(3, 30%);
            grid-row-gap: 5%;
            grid-column-gap: 2%;

            & div:last-of-type {
                grid-row: 2 / 4;
                grid-column: 2 / 4;
            }
        `,
    },
    {
        number: 4,
        style: styled(Base)`
            grid-template-columns: repeat(4, 20%);
            grid-row-gap: 5%;
            grid-column-gap: 2%;

            max-height: 50vw;

            & div {
                &:nth-child(1) {
                    grid-row: 1 / 2;
                    grid-column: 1 / 2;
                }
                &:nth-child(2) {
                    grid-row: 2 / 3;
                    grid-column: 2 / 3;
                }
                &:nth-child(3) {
                    grid-row: 1 / 2;
                    grid-column: 3 / 4;
                }
                &:nth-child(4) {
                    grid-row: 2 / 3;
                    grid-column: 4 / 5;
                }
            }
        `,
    },

    {
        number: 4,
        style: styled(Base)`
            grid-template-columns: repeat(4, 20%);
            grid-row-gap: 5%;
            grid-column-gap: 2%;

            max-height: 50vw;

            & div {
                &:nth-child(1) {
                    grid-row: 1 / 2;
                    grid-column: 1 / 2;
                    transform: scale(0.4);
                }
                &:nth-child(2) {
                    grid-row: 2 / 3;
                    grid-column: 2 / 3;
                    transform: scale(0.6);
                }
                &:nth-child(3) {
                    grid-row: 1 / 2;
                    grid-column: 3 / 4;
                    transform: scale(0.8);
                }
                &:nth-child(4) {
                    grid-row: 2 / 3;
                    grid-column: 4 / 5;
                }
            }
        `,
    },

    {
        number: 4,
        style: styled(Base)`
            grid-template-columns: repeat(2, 20%);
            grid-template-rows: repeat(2, 10%);
            grid-row-gap: 5%;
            grid-column-gap: 2%;

            align-content: space-evenly;
            justify-content: space-evenly;
        `,
    },

    {
        number: 4,
        style: styled(Base)`
            grid-template-areas:
                "header header"
                "content sidebar"
                "footer footer";
            grid-template-columns: 70% 20%;

            & div {
                &:nth-child(1) {
                    grid-area: header;
                }
                &:nth-child(2) {
                    grid-area: content;
                }
                &:nth-child(3) {
                    grid-area: sidebar;
                }
                &:nth-child(4) {
                    grid-area: footer;
                }
            }
        `,
    },
    {
        number: 3,
        style: styled(Base)`
            grid-template-columns: repeat(3, 30%);

            & div {
                opacity: 0.8;
                border: 2px solid black;
                z-index: 1;
                &:hover {
                    transition: opacity 0ms;
                    z-index: 3;
                    opacity: 1;
                }
                &:nth-child(1) {
                    grid-row: 1 / 2;
                    grid-column: 1 / 3;
                }
                &:nth-child(2) {
                    z-index: 2;

                    grid-row: 1 / 3;
                    grid-column: 2 / 4;
                }
                &:nth-child(3) {
                    grid-row: 2 / 3;
                    grid-column: 1 / 3;
                }
            }
        `,
    },
];

export default styles;
