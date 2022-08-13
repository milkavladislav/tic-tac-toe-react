import "./Board.css";
import Square from "./Square";

interface IBoard {
    board: string[];
    onClick: (i: number) => void;
}

const Board = ({ board, onClick }: IBoard) => {
    return (
        <div className="board">
            {board.map((square: string, index: number) => (
                <Square
                    key={index}
                    value={square}
                    click={() => onClick(index)}
                />
            ))}
        </div>
    );
};

export default Board;
