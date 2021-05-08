import AI from "./AI";
import Cell from "./Cell";
import Move from "./storage/Move";
import { MovesStorage } from "./storage/MovesStorage";
import SessionStorage from "./storage/SessionStorage";
import { Sign } from "./enums/Sign";

export default class Board {
  storage: MovesStorage = new SessionStorage();
  moves: Move[] = [];
  cells: Cell[] = [];
  currentSign: Sign = Sign.X;
  moveCounter: number = 0;
  isGameOver: boolean = false;
  ai: AI;
  gameWithAI: boolean = true;
  constructor(areYouPlayingVsAI: boolean) {
    this.gameWithAI = areYouPlayingVsAI;
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
    if (this.gameWithAI) this.ai = new AI(this);
    this.loadMoves();
    this.initGoBackOneMove();
  }

  clearMoves(): void {
    this.moves = [];
    this.storage.saveMoves(this.moves);
  }

  goBackOneMove(): void {
    this.moves.pop();
    this.storage.saveMoves(this.moves);
    this.loadMoves();
  }

  initGoBackOneMove(): void {
    document
      .getElementById("go-back-one-move")
      .addEventListener("click", () => {
        this.goBackOneMove();
      });
  }

  loadMoves(): void {
    this.cells.forEach((c) => c.setSign(null));
    this.moves = this.storage.getMoves();
    if (this.moves.length > 0) {
      this.currentSign = this.moves[this.moves.length - 1].sign;
      switch (this.currentSign) {
        case Sign.X:
          this.currentSign = Sign.O;
          break;
        case Sign.O:
          this.currentSign = Sign.X;
          break;
      }
      this.moveCounter = this.moves.length - 1;
      this.moves.forEach((m) => {
        this.cells[m.index].setSign(m.sign);
      });
    }
  }

  makeChoice(cell: Cell) {
    if (cell.sign !== null || this.isGameOver) return;

    this.moves.push(new Move(this.cells.indexOf(cell), this.currentSign));
    this.storage.saveMoves(this.moves);

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
    this.moveCounter++;
    this.checkWin();
    if (
      this.gameWithAI &&
      this.currentSign == Sign.O &&
      this.moveCounter < 9 &&
      !this.isGameOver
    )
      this.ai.makeAIChoice();
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
    if (this.moveCounter == 9 && !this.isGameOver) {
      this.gameOver(true);
    }
  }
  gameOver(draw = false) {
    this.isGameOver = true;
    const gameOverElement = document.querySelector(".game-over-box");
    if (gameOverElement) {
      switch (this.currentSign) {
        case Sign.X:
          gameOverElement.innerHTML = "<h1>O wins!</h1>";
          break;
        case Sign.O:
          gameOverElement.innerHTML = "<h1>X wins!</h1>";
          break;
      }
      if (draw) gameOverElement.innerHTML = "<h1>DRAW!</h1>";
    }
    this.clearMoves();
  }
}
