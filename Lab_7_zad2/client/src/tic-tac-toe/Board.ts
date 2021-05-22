import AI from "./AI";
import Cell from "./Cell";
import { Sign } from "./enums/Sign";

export default class Board {
  cells: Cell[] = [];
  currentSign: Sign = Sign.X;
  moveCounter: number = 0;
  isGameOver: boolean = false;
  ai: AI;
  gameWithAI: boolean = true;
  myIndex: number = 0;
  movePlayerIndex: number = 0;
  socket: WebSocket;
  serverData: (null | 1 | 0)[] = [];
  whoWon: null | 1 | 0 = null;
  constructor() {
    this.socket = new WebSocket("ws://localhost:8080");

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.serverData = data;
      if (typeof data === "number") {
        // wysyla sie indeks gracza jakim jestesmy
        this.myIndex = data;
      } else {
        // wysyla sie data gry
        console.log(data);
        this.parseCells(data);
        this.movePlayerIndex = data[9];
        this.whoWon = data[10];
        this.checkWin();
      }
    };

    this.gameWithAI = false;
    const cellsElements: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".cell");
    cellsElements.forEach((cellElement: HTMLDivElement) => {
      const cell = new Cell(cellElement);
      this.cells.push(cell);
      cellElement.addEventListener("click", () => {
        this.makeChoice(cell);
      });
    });
    if (this.gameWithAI) this.ai = new AI(this);
  }

  parseCells(data: (null | 1 | 0)[]): void {
    data.forEach((e, i) => {
      if (i < 9)
        if (e === 1) {
          this.cells[i].setSign(Sign.O);
        } else if (e === 0) {
          this.cells[i].setSign(Sign.X);
        }
    });
    this.movePlayerIndex = data[9];
  }

  canIMove(): boolean {
    console.log(this.movePlayerIndex == this.myIndex);
    return this.movePlayerIndex == this.myIndex;
  }

  makeChoice(cell: Cell) {
    if (!this.canIMove()) return;
    if (cell.sign !== null || this.isGameOver) return;
    cell.setSign(this.myIndex);
    this.moveCounter++;
    this.checkWin();
    this.sendData();
    if (
      this.gameWithAI &&
      this.currentSign == Sign.O &&
      this.moveCounter < 9 &&
      !this.isGameOver
    )
      this.ai.makeAIChoice();
  }

  sendData() {
    let data = this.serverData;
    this.cells.forEach((c, index) => {
      data[index] = c.sign;
    });
    this.socket.send(JSON.stringify(data));
  }

  checkWin() {
    if (this.whoWon != null) this.gameOver();
    for (let i = 0; i < 9; i++) {
      if (this.cells[i].sign == null) return;
    }
    this.gameOver(true);
  }
  gameOver(draw = false) {
    this.isGameOver = true;
    const gameOverElement = document.querySelector(".game-over-box");
    if (gameOverElement) {
      switch (this.whoWon) {
        case Sign.O:
          gameOverElement.innerHTML = "<h1>O wins!</h2>";
          break;
        case Sign.X:
          gameOverElement.innerHTML = "<h1>X wins!</h2>";
          break;
      }
      if (draw) gameOverElement.innerHTML = "<h1>DRAW!</h2>";
    }
  }
}
