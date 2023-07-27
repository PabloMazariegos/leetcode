import { longestCommonPrefix } from './014_longes_common_prefix';

test('014_longest_common_prefix', () => {
  let testArr = ['flower', 'flow', 'flight'];
  expect(longestCommonPrefix(testArr)).toStrictEqual('fl');

  testArr = ['dog', 'racecar', 'car'];
  expect(longestCommonPrefix(testArr)).toStrictEqual('');

  testArr = ['a'];
  expect(longestCommonPrefix(testArr)).toStrictEqual('a');
});
