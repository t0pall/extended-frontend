type TMods = Record<string, boolean | string>;

export const classNames = (
  mainClass: string,
  mods: TMods = {},
  additional: String[] = []
): string => {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
