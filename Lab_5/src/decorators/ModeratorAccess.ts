import { Role } from "../enums/Roles";

export default function ModeratorAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Moderator;
}
