import styled from "styled-components";
import Burger from "./burger/burger";
import Navigation from "./navigation/navigation";

const Header = () => {
    const Header = styled.header`
        background-color: var(--base);
        display: flex;
        font-size: 20px;
        position: relative;
        text-align: center;
        width: 100%;

        @media (max-width: 600px) {
            flex-direction: column;
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
