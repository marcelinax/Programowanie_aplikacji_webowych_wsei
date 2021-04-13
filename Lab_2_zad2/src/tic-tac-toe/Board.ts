import Cell from "./Cell";
import { Sign } from "./enums/Sign";

export default class Board {
  cells: Cell[] = [];
  currentSign: Sign = Sign.X;
  constructor() {
    const cellsElements: NodeListOf<HTMLDivElement> = document.querySelectorAll(
      ".cell"
    );
    cellsElements.forEach((cellElement: HTMLDivElement) => {
      const cell = new Cell(cellElement);
      this.cells.push(cell);
      cellElement.addEventListener("click", () => {
        this.makeChoice(cell);
      });
    });
  }
  makeChoice(cell: Cell) {
    if (cell.sign !== null) return;
    switch (this.currentSign) {
      case Sign.X:
        cell.setSign(this.currentSign);
        this.currentSign = Sign.O;
        break;
      case Sign.O:
        cell.setSign(this.currentSign);
        this.currentSign = Sign.X;
        break;
    }
    this.checkWin();
  }
  checkWin() {
    for (let i = 0; i < 9; i += 3) {
      if (this.cells[i].sign !== null)
        if (
          this.cells[i].sign === this.cells[i + 1].sign &&
          this.cells[i + 1].sign === this.cells[i + 2].sign
        )
          this.gameOver();
    }
    for (let i = 0; i < 3; i++) {
      if (this.cells[i].sign !== null)
        if (
          this.cells[i].sign === this.cells[i + 3].sign &&
          this.cells[i + 3].sign === this.cells[i + 6].sign
        )
          this.gameOver();
    }
    if (this.cells[0].sign !== null)
      if (
        this.cells[0].sign === this.cells[4].sign &&
        this.cells[4].sign === this.cells[8].sign
      )
        this.gameOver();
    if (this.cells[2].sign !== null)
      if (
        this.cells[2].sign === this.cells[4].sign &&
        this.cells[4].sign === this.cells[6].sign
      )
        this.gameOver();
  }
  gameOver() {
    const gameOverElement = document.querySelector(".game-over-box");
    if (gameOverElement) {
      switch (this.currentSign) {
        case Sign.X:
          gameOverElement.innerHTML = "<h1>O wins!</h2>";
          break;
        case Sign.O:
          gameOverElement.innerHTML = "<h1>X wins!</h2>";
          break;
      }
    }
  }
}
