import { Role } from "../enums/Roles";

export function ForAdmin(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const key = propKey as keyof typeof target;
  const originalFn = target[key] as Function;
  descriptor.value = function (param: any) {
    console.log(`User: ${param} wants ${propKey}`);
    if (param.role == Role.Admin) return originalFn.call(this, param);
    else return;
  };
}
