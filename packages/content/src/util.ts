const monthIndex = ['Jan'
  , 'Feb'
  , 'Mar'
  , 'Apr'
  , 'May'
  , 'Jun'
  , 'Jul'
  , 'Aug'
  , 'Sep'
  , 'Oct'
  , 'Nov'
  , 'Dec'] as const;

export type Month = typeof monthIndex[number];

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
