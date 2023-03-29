import { twoSum } from './001_two_sum';

test("001_two_sum", () => {
    const input = [1, 2, 5, 7];
    expect(twoSum(input, 9)).toStrictEqual([1,3]);
})