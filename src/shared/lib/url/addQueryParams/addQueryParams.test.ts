import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('should work with one param', () => {
    const params = getQueryParams({ test: 'value' });

    expect(params).toBe('?test=value');
  });

  test('should work with miltiple params', () => {
    const params = getQueryParams({ test: 'value', testTest: 'value2', moreTest: '3' });

    expect(params).toBe('?test=value&testTest=value2&moreTest=3');
  });

  test('should work with undefined', () => {
    const params = getQueryParams({ test: 'value', testTest: undefined, moreTest: '3' });

    expect(params).toBe('?test=value&moreTest=3');
  });
});
