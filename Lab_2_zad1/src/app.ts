import Animal from "./animal";
import Horse from "./horse";
import Snake from "./snake";

class App {
  // TO JEST JAKBY NASZ MAIN
  constructor() {
    console.log(1);
    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");
    
    sam.move();
    tom.move(34);
  }
}
const app = new App();
export default app;