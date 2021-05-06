export function withAi(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const key = propKey as keyof typeof target;
  const originalFn = target[key] as Function;
  descriptor.value = function () {
    console.log(`Starting game with AI`);
    return originalFn.call(this, true);
  };
}
