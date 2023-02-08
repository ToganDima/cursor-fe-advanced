export function* createIdGenerator() {
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}