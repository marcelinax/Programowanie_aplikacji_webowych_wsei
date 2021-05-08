import Move from "./Move";

export interface MovesStorage {
  saveMoves(moves: Move[]): void;
  getMoves(): Move[];
}
