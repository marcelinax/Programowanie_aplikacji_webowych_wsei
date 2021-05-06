export function disabled(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = function () {
    return;
  };
}
