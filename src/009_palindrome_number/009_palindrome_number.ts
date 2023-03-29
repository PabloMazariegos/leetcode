/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Palindrome
An integer is a palindrome when it reads the same forward and backward.
For example, 121 is a palindrome while 123 is not
*/

export const isPalindrome = (x: number): boolean => {
    if(x < 0) return false;

    const xArray = x.toString().split('');
    const halfArrayLength = Math.floor(xArray.length / 2);

    for(let i = 0; i < halfArrayLength; i++){
        if(xArray[i] !== xArray[xArray.length - i - 1]) return false;
    }

    return true;
};