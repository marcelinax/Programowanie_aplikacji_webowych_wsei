import { ForAdmin } from "../decorators/forAdmin";
import { ForModerator } from "../decorators/forModerator";
import { Role } from "../enums/Roles";
import User from "./User";

export default class Resource {
  private resourceValue: string;
  constructor() {
    this.resourceValue = "resource value";
  }

  @ForModerator
  public read(user: User): void {
    console.log(this.resourceValue);
  }

  @ForAdmin
  public change(user: User): void {
    this.resourceValue = "changed resource value";
    console.log(this.resourceValue);
  }
}
