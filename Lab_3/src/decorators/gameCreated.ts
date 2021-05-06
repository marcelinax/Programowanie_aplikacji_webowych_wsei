export function gameCreated(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const key = propKey as keyof typeof target;
  const originalFn = target[key] as Function;
  descriptor.value = function () {
    console.log(`Game started.`);
    return originalFn.call(this);
  };
}
