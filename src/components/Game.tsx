import React, { useState } from "react";
import { calculateWinner } from "../functions";
import Board from "./Board";
import "./Game.css";

const initialBoard = Array<string>(9).fill("");
const Xs = "X";
const Os = "O";

export const Game = () => {
    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index: number) => {
        const boardCopy = [...board];

        if (winner || board[index]) return;

        boardCopy[index] = isXNext ? Xs : Os;

        setBoard(boardCopy);
        setIsXNext(!isXNext);
    };

    return (
        <div className="wrapper">
            <button
                className="start__btn"
                onClick={() => setBoard(initialBoard)}
            >
                New game
            </button>
            <Board board={board} onClick={handleClick} />
            <p className="game__info">
                {winner ? winner + " winner" : (isXNext ? Xs : Os) + "'s turn"}
            </p>
        </div>
    );
};
