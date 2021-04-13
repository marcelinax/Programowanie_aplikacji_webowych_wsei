import Board from "./tic-tac-toe/Board";

class App {
  constructor() {
    this.initButtons();
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
new App();
