import "./Square.css";

interface ISquare {
    value: string;
    click: () => void;
}

const Square = ({ value, click }: ISquare) => {
    return (
        <button className="square" onClick={click}>
            {value}
        </button>
    );
};

export default Square;
