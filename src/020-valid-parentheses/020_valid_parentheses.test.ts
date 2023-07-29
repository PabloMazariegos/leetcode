import { isValid } from './020_valid_parentheses';

describe('020_valid_parentheses', () => {
  it('returns true', () => {
    expect(isValid('()')).toStrictEqual(true);
    expect(isValid('()[]{}')).toStrictEqual(true);
    expect(isValid('({[{()}]})')).toStrictEqual(true);
  });
});

describe('020_valid_parentheses', () => {
  it('returns false', () => {
    expect(isValid('(]')).toStrictEqual(false);
    expect(isValid('({[]])')).toStrictEqual(false);
    expect(isValid('(')).toStrictEqual(false);
    expect(isValid('))')).toStrictEqual(false);
  });
});
