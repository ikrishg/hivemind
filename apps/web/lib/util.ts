export function URLify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[()[\]{}]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function makeId(...str: string[]): string {
  return URLify(str.join(' '));
}
