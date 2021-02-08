import styled from "styled-components";
import "./burger.scss";

const Burger = () => {
    const BurgerWrap = styled.div`
        align-self: center;
        align-items: center;
        display: flex;
        height: 40px;
        cursor: pointer;

        @media (min-width: 601px) {
            display: none;
        }
    `;

    const Burger = styled.div`
        align-self: center;
        background-color: var(--text);
        color: black;
        height: 4px;
        position: relative;
        transition: all 0.2s;
        width: 40px;

        &:after,
        :before {
            background-color: var(--text);
            border-radius: 4px;
            content: "";
            display: flex;
            height: 4px;
            position: absolute;
            transition: all 0.2s;
            width: 40px;
        }

        &:after {
            top: 10px;
        }
        &:before {
            top: -10px;
        }
    `;

    const toggleMenu = () => {
        // const burger = document.getElementById("burger");
        // burger.classList.toggle("menu-open");

        const menu = document.getElementById("navigation");
        menu.style.left = "0";
    };

    return (
        <BurgerWrap id="burger" onClick={() => toggleMenu()}>
            <Burger />
        </BurgerWrap>
    );
};

export default Burger;
