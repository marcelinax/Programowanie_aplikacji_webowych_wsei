import "./styles/styles.scss";

import Board from "./games/tic-tac-toe/Board";
import { Games } from "./enums/games.enum";
import TicTacToe from "./games/tic-tac-toe/TicTacToe";

class App {
  constructor() {
    this.initGameButtons();
    this.initThemeChangeBtn();
  }

  initGameButtons() {
    document.getElementById("xoxoxo-game").addEventListener("click", () => {
      this.initGame(Games.TicTacToe);
    });
  }

  initGame(game: Games) {
    switch (game) {
      case Games.TicTacToe:
        document.body.innerHTML = `<div id="game-box"></div>`;
        new TicTacToe();
        break;
    }
  }

  initThemeChangeBtn() {
    document
      .getElementById("change-theme-btn")
      .addEventListener("click", () => {
        document.querySelectorAll("*").forEach((e) => {
          e.classList.toggle("light-mode");
        });
      });
  }
}

new App();
