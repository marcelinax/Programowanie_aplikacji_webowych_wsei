import Move from "./Move";
import { MovesStorage } from "./MovesStorage";

export default class SessionStorage implements MovesStorage {
  saveMoves(moves: Move[]): void {
    sessionStorage.setItem("tttmoves", JSON.stringify(moves));
  }
  getMoves(): Move[] {
    const movesShapes = <Move[]>(
      JSON.parse(sessionStorage.getItem("tttmoves") || "[]")
    );
    return movesShapes.map((mS) => new Move(mS.index, mS.sign));
  }
}
