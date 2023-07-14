import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional className', () => {
    const expectedValue = 'className secondClassName thirdClassName';
    expect(
      classNames('className', {}, ['secondClassName', 'thirdClassName']),
    ).toBe(expectedValue);
  });

  test('with mods', () => {
    const expectedValue = 'className secondClassName thirdClassName class1 class3';
    expect(
      classNames(
        'className',
        {
          class1: true,
          class2: false,
          class3: true,
          class4: false,
        },
        ['secondClassName', 'thirdClassName'],
      ),
    ).toBe(expectedValue);
  });
});
