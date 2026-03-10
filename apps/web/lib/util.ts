export function URLify(str: string): string {
  return encodeURIComponent(str).toLowerCase().replace(/\s+/g, '-').replace(" ", "-");
}

export function makeId(...str: string[]): string {
  return URLify(str.join(' '));
}
