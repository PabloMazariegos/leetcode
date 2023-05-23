import {romanToInt} from './013_roman_to_integer';

test("013_roman_to_int", () => {
    expect(romanToInt("IV")).toStrictEqual(4);
    expect(romanToInt("IX")).toStrictEqual(9);
    expect(romanToInt("XXVII")).toStrictEqual(27);
    expect(romanToInt("XL")).toStrictEqual(40);
})