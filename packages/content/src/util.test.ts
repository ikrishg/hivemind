import { describe, expect, it } from 'vitest';
import { isMonthYear, monthYearToDate, parseMonthYear } from './util';

describe('isMonthYear', () => {
  it('accepts valid MonthYear strings', () => {
    expect(isMonthYear('Jan 2024')).toBe(true);
    expect(isMonthYear('Dec 1999')).toBe(true);
    expect(isMonthYear('Jul 2023')).toBe(true);
  });

  it('rejects invalid strings', () => {
    expect(isMonthYear('January 2024')).toBe(false);
    expect(isMonthYear('13 2024')).toBe(false);
    expect(isMonthYear('abc')).toBe(false);
    expect(isMonthYear('')).toBe(false);
  });
});

describe('parseMonthYear', () => {
  it('returns valid MonthYear as-is', () => {
    expect(parseMonthYear('Jan 2024')).toBe('Jan 2024');
  });

  it('throws on invalid input', () => {
    expect(() => parseMonthYear('InvalidMonth 2024')).toThrow(
      'Invalid MonthYear',
    );
  });
});

describe('monthYearToDate', () => {
  it('converts MonthYear to first of month', () => {
    const date = monthYearToDate('Jul 2023');
    expect(date.getFullYear()).toBe(2023);
    expect(date.getMonth()).toBe(6); // July is 0-indexed
    expect(date.getDate()).toBe(1);
  });

  it('handles January correctly', () => {
    const date = monthYearToDate('Jan 2020');
    expect(date.getFullYear()).toBe(2020);
    expect(date.getMonth()).toBe(0);
  });

  it('handles December correctly', () => {
    const date = monthYearToDate('Dec 2025');
    expect(date.getFullYear()).toBe(2025);
    expect(date.getMonth()).toBe(11);
  });
});
