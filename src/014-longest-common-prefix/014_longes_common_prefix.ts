/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". 

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

export function longestCommonPrefix(strs: string[]): string {
  if (!strs || strs.length <= 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  for (let i = 0; i <= strs.length; i++) {
    const word = strs[i];
    let accLetter: string = '';

    for (let j = 0; j < word.length; j++) {
      const prefixExists = strs.every((str) => str.startsWith(accLetter + word[j]));

      if (!prefixExists) {
        break;
      }

      accLetter += word[j];
    }

    if (accLetter) {
      return accLetter;
    }

    break;
  }

  return '';
}
