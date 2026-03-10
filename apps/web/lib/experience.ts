import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export function readExperienceContent(id: string): string {
  try {
    const filePath = join(process.cwd(), 'content', 'experience', `${id}.md`);
    return readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}
