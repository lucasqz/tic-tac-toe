interface SquareProps {
  value: string | null;
  onSquareClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Square({
  value,
  onSquareClick,
}: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
