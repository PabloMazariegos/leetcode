import { isPalindrome } from './009_palindrome_number';

describe("009_palindrome_number", () => {

    describe("Should be true, input: 121", () => {
        test("009_palindrome_number_true", () => {
            expect(isPalindrome(121)).toBeTruthy();
        })
    })

    describe("Should be false, input: 134", () => {
        test("009_palindrome_number_false", () => {
            expect(isPalindrome(134)).toBeFalsy();
        })
    });
});