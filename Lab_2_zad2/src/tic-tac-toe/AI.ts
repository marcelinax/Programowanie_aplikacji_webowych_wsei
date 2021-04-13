import Board from "./Board";
import { Sign } from "./enums/Sign";

export default class AI {
  board: Board;
  constructor(board: Board) {
    this.board = board;
  }

  public makeAIChoice(): void {
    let cellIndex;
    do {
      cellIndex = Math.floor(Math.random() * 9);
    } while (
      this.board.cells[cellIndex].sign === Sign.O ||
      this.board.cells[cellIndex].sign === Sign.X
    );

    this.board.makeChoice(this.board.cells[cellIndex]);
  }
}
