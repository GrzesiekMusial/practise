import styled from "styled-components";
import Burger from "./burger/burger";
import Navigation from "./navigation/navigation";

const Header = () => {
    const Header = styled.header`
        background-color: var(--base);
        display: flex;
        font-size: 20px;
        height: 60px;
        position: relative;
        text-align: center;
        width: 100%;
        border-bottom: 2px solid var(--special);

        @media (max-width: 600px) {
            flex-direction: column;
            height: auto;
        }
    `;

    return (
        <Header>
            <Burger />
            <Navigation />
        </Header>
    );
};

export default Header;
