export function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort((a, b) => Math.random() - 0.5);
}
export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
