/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

export function isValid(s: string): boolean {
  if (!s) {
    return false;
  }

  const len = s.length;

  if (len % 2 !== 0) {
    return false;
  }

  const map: Record<string, string> = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const stack: string[] = [];

  for (let i = 0; i < len; i++) {
    const char = s[i];

    if (char === '{' || char === '[' || char === '(') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const lastChar = stack.pop();

      if (lastChar) {
        const validChar = map[lastChar];

        if (validChar !== char) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
