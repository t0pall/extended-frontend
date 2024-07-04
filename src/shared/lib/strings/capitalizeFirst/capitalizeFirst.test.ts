import { capitalizeFirst } from './capitalizeFirst';

describe('shared/lib/strings/capitalizeFirst', () => {
  test('should not mutate string instance', () => {
    const string = 'string stringstring string ststringing';
    const newString = string;
    capitalizeFirst(newString);
    expect(string).toBe(newString);
  });

  test('should work with 1 word', () => {
    const string = capitalizeFirst('string');
    expect(string).toBe('String');
  });

  test('should work with sentence', () => {
    const string = capitalizeFirst('string stringstring string ststringing');
    expect(string).toBe('String stringstring string ststringing');
  });
});
