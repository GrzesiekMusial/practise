import styled from "styled-components";

const Base = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & div {
        margin: 1%;
        background-color: var(--block);
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
            z-index: 3;
            opacity: 1 !important;

            transition: all 1s, opacity 0ms, z-index 0ms;
            background-color: var(--active);
        }
    }
`;

const styles = [
    {
        number: 5,
        style: styled(Base)`
            height: fit-content;
            align-self: center;

            & div {
                align-items: center;
                justify-content: center;
                width: 10%;
                height: 10%;
            }
        `,
    },
    {
        number: 5,
        style: styled(Base)`
            height: fit-content;
            align-self: center;
            flex-direction: row-reverse;

            & div {
                align-items: center;
                justify-content: center;
                width: 10%;
                height: 10%;
            }
        `,
    },
    {
        number: 5,
        style: styled(Base)`
            height: fit-content;
            align-self: center;

            & div {
                align-items: center;
                justify-content: center;
                width: 10%;
                height: 10%;

                &:nth-child(1) {
                    order: 2;
                }
                &:nth-child(2) {
                    order: 1;
                }
                &:nth-child(3) {
                    order: 5;
                }
                &:nth-child(4) {
                    order: 4;
                }
                &:nth-child(5) {
                    order: 3;
                }
            }
        `,
    },

    {
        number: 3,
        style: styled(Base)`
            height: fit-content;
            justify-content: space-around;
            height: 100%;
            & div {
                width: 10%;
                height: 10%;
                &:nth-child(1) {
                    align-self: flex-start;
                }
                &:nth-child(3) {
                    align-self: flex-end;
                }
            }
        `,
    },
    {
        number: 3,
        style: styled(Base)`
            height: fit-content;
            justify-content: space-around;
            height: 100%;
            align-items: baseline;

            & div {
                &:nth-child(1) {
                    align-items: flex-start;

                    width: 20%;
                    height: 20%;
                }
                &:nth-child(2) {
                    align-items: flex-end;

                    width: 40%;
                    height: 40%;
                }
                &:nth-child(3) {
                    width: 10%;
                    height: 10%;
                }
            }
        `,
    },
    {
        number: 5,
        style: styled(Base)`
            height: fit-content;
            align-self: center;
            height: 100%;
            justify-content: space-between;

            & div {
                align-items: center;
                justify-content: center;
                width: 10%;
                height: 10%;

                &:nth-child(1) {
                    align-self: flex-start;
                    transform: scale(0.5);
                }
                &:nth-child(2) {
                    align-self: center;
                    transform: scale(0.8);
                }
                &:nth-child(3) {
                    align-self: flex-end;
                }
                &:nth-child(4) {
                    align-self: center;
                    transform: scale(0.8);
                }
                &:nth-child(5) {
                    align-self: flex-start;
                    transform: scale(0.5);
                }
            }
        `,
    },

    {
        number: 10,
        style: styled(Base)`
            height: fit-content;
            align-self: center;
            height: 100%;
            justify-content: space-between;
            flex-wrap: wrap;

            & div {
                align-items: center;
                justify-content: center;
                width: 20%;
                height: 10%;
            }
        `,
    },

    {
        number: 4,
        style: styled(Base)`
            height: fit-content;
            align-self: center;
            height: 100%;
            justify-content: space-between;

            & div {
                align-items: center;
                justify-content: center;
                width: 50%;
                height: 20%;

                &:first-of-type {
                    flex-shrink: 0.2;
                }
            }
        `,
    },

    {
        number: 4,
        style: styled(Base)`
            height: fit-content;
            align-self: center;
            height: 100%;
            margin: unset;

            flex-wrap: wrap;
            & div {
                margin: unset;
                border: 1px solid var(--active);

                align-items: center;
                justify-content: center;
                width: 10%;
                height: 10%;

                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;

                &:nth-child(1) {
                    width: 100%;
                    height: 20%;
                }
                &:nth-child(2) {
                    width: 80%;
                    height: 60%;
                }
                &:nth-child(3) {
                    width: 20%;
                    height: 60%;
                }
                &:nth-child(4) {
                    width: 100%;
                    height: 20%;
                }
            }
        `,
    },

    {
        number: 3,
        style: styled(Base)`
            height: fit-content;
            align-self: center;
            height: 100%;
            justify-content: space-between;

            & div {
                margin: unset;
                position: absolute;
                align-items: center;
                justify-content: center;

                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;

                opacity: 0.8;
                border: 1px solid var(--active);
                width: 60%;

                &:nth-child(1) {
                    left: 0;
                    top: 0;
                    height: 50%;
                }
                &:nth-child(2) {
                    height: 50%;

                    left: 0;
                    bottom: 0;
                }
                &:nth-child(3) {
                    height: 100%;

                    right: 0;
                }
            }
        `,
    },
];

export default styles;
