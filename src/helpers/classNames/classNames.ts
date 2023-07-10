type TMods = Record<string, boolean | string>;

export const classNames = (
  mainClass: string,
  mods: TMods = {},
  additional: string[] = [],
): string => [
  mainClass,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
