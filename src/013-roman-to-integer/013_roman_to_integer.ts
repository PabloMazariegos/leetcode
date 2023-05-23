/*
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

const romanMap : any = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

export const romanToInt = (s: string): number => {
    let result: number = 0;

    if(!s){
        return Infinity;
    }

    for(let i = 0; i< s.length; i++){
        const actual = s[i];
        const next = s[i+1];

        if(romanMap[actual] < romanMap[next]){
            result -= romanMap[actual];
        }else{
            result += romanMap[actual];
        }
    }

    return result;
};