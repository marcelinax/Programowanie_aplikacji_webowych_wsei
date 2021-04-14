import Board from "./Board";

export default class TicTacToe {
  constructor() {
    this.drawGame();
    this.initButtons();
  }
  private drawGame() {
    document.getElementById("game-box").innerHTML = `<div class="btns-box">
      <button id="player-btn">PLAY WITH ANADA PLAYA</button>
      <button id="ai-btn">PLAY WITH KOMPJUTA</button>
    </div>

    <div class="container">
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
      <div class="game-over-box"></div>
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
}
