import "./styles/styles.scss";

import Board from "./games/tic-tac-toe/Board";
import { Games } from "./enums/games.enum";
import TicTacToe from "./games/tic-tac-toe/TicTacToe";
import { disabled } from "./decorators/disabled";
import { gameCreated } from "./decorators/gameCreated";

class App {
  constructor() {
    this.initGameButtons();
    this.initGameMenuToggler();
    this.initThemeChangeBtn();
  }

  initGameButtons() {
    document.getElementById("xoxoxo-game").addEventListener("click", () => {
      this.initGame(Games.TicTacToe);
    });
  }

  initGame(game: Games) {
    this.clearGameBox();
    switch (game) {
      case Games.TicTacToe:
        this.initTicTacToe();
        break;
    }
  }

  initTicTacToe() {
    new TicTacToe();
  }

  clearGameBox(): void {
    document.getElementById("game-box").innerHTML = "";
  }

  initThemeChangeBtn() {
    document
      .getElementById("change-theme-btn")
      .addEventListener("click", () => {
        document.querySelector("html").classList.toggle("default");
        document.querySelector("html").classList.toggle("light");
      });
  }

  initGameMenuToggler() {
    document
      .querySelector(".game-menu .toggler")
      .addEventListener("click", () => {
        document.querySelector(".game-menu").classList.toggle("active");
      });
  }
}

(window as any).app = new App();
