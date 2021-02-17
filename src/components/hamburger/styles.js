import styled from "styled-components";
import "./animations.scss";

const Base = styled.div`
    margin: 5px;
    border: 1px solid var(--active);
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: relative;

    & div {
        position: absolute;
        background-color: black;
        height: 4px;
        width: 50%;
        border-radius: 25px;
        transition: all 0.2s;

        &:before,
        :after {
            transition: all 0.2s;
            height: 4px;
            background-color: black;
            content: "";
            position: absolute;
            width: 100%;
            border-radius: 25px;
        }

        &:before {
            top: -10px;
        }

        &:after {
            top: 10px;
        }
    }
`;

const styles = [
    {
        name: "flatboat",
        style: styled(Base)`
            & div {
                transform: translateY(10px);
                &:after {
                    top: -20px;
                }
            }
            &:hover {
                & div {
                    transform: translateY(0);
                    transform: rotate(45deg);

                    &:after {
                        top: 0;
                    }
                    &:before {
                        top: 0;
                        transform: rotate(-90deg);
                    }
                }
            }
        `,
    },
    {
        name: "squash",
        style: styled(Base)`
            &:hover {
                & div {
                    transition: background-color 0ms 0.2s;
                    background-color: inherit;

                    &:after {
                        transition: top 0.2s, transform 0.2s 0.2s;
                        transform: rotate(45deg);
                        top: 0;
                    }
                    &:before {
                        transition: top 0.2s, transform 0.2s 0.2s;
                        transform: rotate(-45deg);
                        top: 0;
                    }
                }
            }
        `,
    },
    {
        name: "squash",
        style: styled(Base)`
            &:hover {
                & div {
                    animation: burger-width 0.1s normal linear,
                        burger-width 0.1s 0.1s reverse linear;

                    transition: background-color 0ms 0.1s;
                    background-color: inherit;

                    &:after {
                        transition: top 0ms 0.1s, transform 0ms 0.1s;
                        transform: rotate(45deg);
                        top: 0;
                    }
                    &:before {
                        transition: top 0ms 0.1s, transform 0ms 0.1s;
                        transform: rotate(-45deg);
                        top: 0;
                    }
                }
            }
        `,
    },
    {
        name: "spin",
        style: styled(Base)`
            & div {
                transform: rotate(0deg);
            }
            &:hover {
                & div {
                    transform: rotate(360deg);
                    background-color: inherit;
                    &:after {
                        transform: rotate(45deg);
                        top: 0;
                    }

                    &:before {
                        transform: rotate(-45deg);
                        top: 0;
                    }
                }
            }
        `,
    },
    {
        name: "minus",
        style: styled(Base)`
            & div {
                transform: rotate(0deg);
            }
            &:hover {
                & div {
                    transition: all 0.5s;
                    transform: rotate(360deg);
                    &:after {
                        transition: top 0.4s, opacity 0.4s;
                        opacity: 0;
                        top: 50px;
                    }

                    &:before {
                        transition: top 0.4s, opacity 0.4s;
                        opacity: 0;
                        top: -50px;
                    }
                }
            }
        `,
    },

    {
        name: "flatboat",
        style: styled(Base)`
            & div {
                transform: translateY(10px);
                &:after {
                    top: -20px;
                }
            }
            &:hover {
                & div {
                    background-color: transparent;
                    border: 1px solid black;
                    padding: 4px;
                    transition: all 0.5s;
                    transform: translate(50, 50);
                    &:after,
                    :before {
                        transition: all 0.4s;
                        top: -40px;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                    }
                    &:after {
                        animation: bounce 1s infinite cubic-bezier(0.4, 0, 1, 1);
                        right: 0;
                    }

                    &:before {
                        animation: bounce 1s 0.5s infinite
                            cubic-bezier(0.4, 0, 1, 1);
                        left: 0;
                    }
                }
            }
        `,
    },
];

export default styles;
