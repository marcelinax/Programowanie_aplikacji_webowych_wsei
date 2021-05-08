import Move from "./Move";
import { MovesStorage } from "./MovesStorage";

export default class LocalStorage implements MovesStorage {
  constructor() {}

  saveMoves(moves: Move[]): void {
    localStorage.setItem("tttmoves", JSON.stringify(moves));
  }

  getMoves(): Move[] {
    const movesShapes = <Move[]>(
      JSON.parse(localStorage.getItem("tttmoves") || "[]")
    );
    return movesShapes.map((mS) => new Move(mS.index, mS.sign));
  }
}
