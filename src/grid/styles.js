import styled from "styled-components";

const Base = styled.div`
    align-items: center;
    justify-content: center;
    margin: 50px;
    display: grid;
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
        &:hover {
            transition: all 1s;
            background-color: var(--active);
        }
    }
`;

const styles = [
    {
        number: 10,
        style: styled(Base)`
            @include important-text;
            grid-template-rows: 300px 300px;
            grid-template-columns: 10% repeat(3, 20%) 10%;
        `,
    },
    {
        number: 9,
        style: styled(Base)`
            grid-template-rows: repeat(3, 200px);
            grid-template-columns: repeat(3, 30%);
        `,
    },
    {
        number: 4,
        style: styled(Base)`
            grid-template-rows: repeat(2, 200px);
            grid-template-columns: repeat(2, 30%);
            grid-row-gap: 40px;
            grid-column-gap: 10px;
        `,
    },
    {
        number: 5,
        style: styled(Base)`
            grid-template-rows: repeat(3, 200px);
            grid-template-columns: repeat(2, 30%);
            grid-row-gap: 40px;
            grid-column-gap: 10px;

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
            grid-template-rows: repeat(3, 200px);
            grid-template-columns: repeat(3, 30%);
            grid-row-gap: 40px;
            grid-column-gap: 10px;

            & div:first-of-type {
                grid-row-start: 1;
                grid-row-end: 4;
            }
        `,
    },
    {
        number: 6,
        style: styled(Base)`
            grid-template-rows: repeat(3, 200px);
            grid-template-columns: repeat(3, 30%);
            grid-row-gap: 40px;
            grid-column-gap: 10px;

            & div:last-of-type {
                grid-row: 2 / 4;
                grid-column: 2 / 4;
            }
        `,
    },
    {
        number: 4,
        style: styled(Base)`
            grid-template-areas:
                "header header"
                "content sidebar"
                "footer footer";
            grid-template-rows: 100px 200px 50px;
            grid-template-columns: 50% 20%;

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
];

export default styles;
