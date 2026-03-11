const monthIndex = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

export type Month = (typeof monthIndex)[number];

export type MonthYear = `${Month} ${number}`;

export function isMonthYear(str: string): str is MonthYear {
  const [month, year] = str.split(' ');
  return monthIndex.includes(month as Month) && !Number.isNaN(Number(year));
}

export function parseMonthYear(str: string): MonthYear {
  if (!isMonthYear(str)) throw new Error(`Invalid MonthYear: ${str}`);
  return str;
}

export function monthYearToDate(monthYear: MonthYear): Date {
  const [month, year] = parseMonthYear(monthYear).split(' ') as [Month, string];

  const monthNum = monthIndex.indexOf(month);
  const yearNum = Number(year);

  return new Date(yearNum, monthNum, 1, 0, 0, 0);
}

/** Sort items with dateStart/dateEnd by end date descending, "Present" first. */
export function sortByDate<
  T extends { dateStart: MonthYear; dateEnd: MonthYear | 'Present' },
>(items: T[]): T[] {
  return items.sort((a, b) => {
    if (a.dateEnd === 'Present' && b.dateEnd !== 'Present') return -1;
    if (b.dateEnd === 'Present' && a.dateEnd !== 'Present') return 1;
    const dateA = monthYearToDate(
      a.dateEnd === 'Present' ? a.dateStart : a.dateEnd,
    );
    const dateB = monthYearToDate(
      b.dateEnd === 'Present' ? b.dateStart : b.dateEnd,
    );
    return dateB.getTime() - dateA.getTime();
  });
}
