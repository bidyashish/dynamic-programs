/*
Author: Bidyashish Kumar

Javascript Implementation of Longest Common Subsequence

Find longest common subsequence between two strings

For eg

String1 = AGGTAB
String2 = GXTXAYB

Expected result string GTAB

*/

const s1 = "AGGTAB"
const s2 = "GXTXAYB"

const x = s1.length
const y = s2.length

const res = [];

function lcs(s1, s2, x, y) {
    if (x == -1 || y == -1) {
        return;
    }

    else if (s1[x] == s2[y]) {
        if (s1[x]) {
            res.push(s1[x])
        }
        s1.slice(0, -1);
        s2.slice(0, -1);
        lcs(s1, s2, x - 1, y - 1)
    }
    else {
        if (x > y) {
            lcs(s1, s2, x - 1, y)
        }
        else {
            lcs(s1, s2, x, y - 1)
        }


    }

}

lcs(s1, s2, x, y)

res.reverse();
console.log(`Result array conatining LCS is `+ res)
console.log(`Length of result array `+res.length)
console.log(`Result string `+res.join(""))

