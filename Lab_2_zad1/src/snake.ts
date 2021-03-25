import Animal from "./animal";

class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
}
  export default Snake;