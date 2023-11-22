export function helloWorld(name: string | undefined) {
  return `Hello ${name ? name : "world"}!`;
}

export async function helloWorldAsync(
  name: string | undefined
): Promise<string> {
  return `Hello ${name ? name : "world"}!`;
}
