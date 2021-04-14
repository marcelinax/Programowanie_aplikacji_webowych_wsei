import Board from "./Board";

export default class TicTacToe {
  constructor() {
    this.drawGame();
    this.initButtons();
    this.initNewGame();
  }
  private drawGame() {
    document.getElementById("game-box").innerHTML = `<div class="btns-box">
      <button id="player-btn">PLAY WITH PLAYER</button>
      <button id="ai-btn">PLAY WITH COMPUTER</button>
    </div>

    <div class="container">
      <button id="new-game-btn">NEW GAME</button>
      <div class="game-over-box"> </div>
      <div class="board">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
    </div>`;
  }
  private createGameWithAI(): void {
    new Board(true);
  }
  private createGameWithPlayer(): void {
    new Board(false);
  }
  private initButtons() {
    const playerBtn = document.getElementById("player-btn");
    const aiBtn = document.getElementById("ai-btn");
    playerBtn.addEventListener("click", () => {
      this.createGameWithPlayer();
      this.hideBtnsBox();
    });
    aiBtn.addEventListener("click", () => {
      this.createGameWithAI();
      this.hideBtnsBox();
    });
  }
  private hideBtnsBox() {
    document.querySelector(".btns-box").classList.toggle("hide");
  }
  private initNewGame() {
    document.getElementById("new-game-btn").addEventListener("click", () => {
      location.reload();
    });
  }
}
