import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & div {
        min-width: fit-content;
        font-weight: bold;
        font-size: 13px;
        text-align: center;
    }

    & button {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: unset;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.5s;
        outline: none;

        &:hover {
            letter-spacing: 5px;
        }
        &:active {
            transition: all 0ms;
            letter-spacing: 0.1px;
        }
    }
`;

const Buttons = ({ status, length, handleClick }) => {
    let history = useHistory();
    console.log();

    return (
        <Button>
            <button
                onClick={() => {
                    handleClick(status - 1);
                }}
            >
                BACK
            </button>
            <div>
                <div>{history.location.pathname.slice(1).toUpperCase()}</div>
                <div>{`${status + 1} / ${length}`} </div>
            </div>

            <button
                onClick={() => {
                    handleClick(status + 1);
                }}
            >
                NEXT
            </button>
        </Button>
    );
};

export default Buttons;
