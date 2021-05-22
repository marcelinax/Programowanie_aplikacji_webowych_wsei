import Board from "./tic-tac-toe/Board";

class App {
  constructor() {
    this.initButtons();
    this.initNewGame();
  }

  private createGameWithPlayer(): void {
    new Board();
  }
  private initButtons() {
    const playBtn = document.getElementById("play-btn");
    playBtn.addEventListener("click", () => {
      this.createGameWithPlayer();
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
new App();
