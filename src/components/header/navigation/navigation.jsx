import { NavLink } from "react-router-dom";

import styled from "styled-components";
import buttons from "../../../app/navigation";

const Navigation = () => {
    const Navigation = styled.nav`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;

        @media (max-width: 600px) {
            z-index: 9;
            position: absolute;
            height: 100vh;
            flex-direction: column;
            left: -100vw;
            transition: all 0.2s;
            background-color: var(--base);

            & * {
                border-bottom: 2px solid black;
            }
        }

        & a {
            color: var(--text);
            flex: 1;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.1s;
            opacity: 1;
            overflow: hidden;
            font-weight: bold;

            &:hover {
                letter-spacing: 5px;
            }
            &:active {
                transition: all 0ms;
                letter-spacing: 0.1px;
            }
        }
    `;

    const menuClicked = (e) => {
        e.target.classList.add("clicked");
        const menu = document.getElementById("navigation");
        menu.style.left = "-100vw";
    };

    return (
        <Navigation id="navigation">
            {buttons.map((button) => (
                <NavLink onClick={(e) => menuClicked(e)} to={button.path}>
                    <span>{button.name}</span>
                </NavLink>
            ))}
        </Navigation>
    );
};

export default Navigation;
