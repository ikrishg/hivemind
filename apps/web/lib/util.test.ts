import { describe, expect, it } from 'vitest';
import { makeId, URLify } from './util';

describe('URLify', () => {
  it('lowercases and hyphenates', () => {
    expect(URLify('Hello World')).toBe('hello-world');
  });

  it('strips parentheses and special chars', () => {
    expect(URLify('PlaylistWise (12LPAClub)')).toBe('playlistwise-12lpaclub');
  });

  it('collapses multiple spaces', () => {
    expect(URLify('a  b   c')).toBe('a-b-c');
  });

  it('handles empty string', () => {
    expect(URLify('')).toBe('');
  });

  it('handles leading/trailing whitespace', () => {
    expect(URLify('  hello  ')).toBe('hello');
  });
});

describe('makeId', () => {
  it('joins strings and URLifies', () => {
    expect(makeId('SDE Intern', 'PlaylistWise (12LPAClub)')).toBe(
      'sde-intern-playlistwise-12lpaclub',
    );
  });

  it('handles single string', () => {
    expect(makeId('Hello')).toBe('hello');
  });
});
