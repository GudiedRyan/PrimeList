//Let n be a number.
//for all 0 < i < n, we check if i is prime
//if i is prime, the only factors are i and 1.
//sumOfFactors === 2
//Let count be a number such that 0 < count < n

n = Number(prompt("Give a value n such that n is a postive integer."));
let p = 2;
while (p < n) {
    let j = 1;
    let factors = 0;
    while (j < p) {
        if (p % j === 0) {
            factors++;
            j++;
        } else {
            j++;
        }
    }
    if (factors === 1) {
        console.log(p);
        p++;
        let factors = 0;
    } else {
        p++;
        let factors = 0;
    }
}

// let m = 1;
// let numberOfFactors = 0
// while (m <= n) {
//     if (n % m === 0) {
//         console.log(m);
//         m++;
//         numberOfFactors++;
//     } else {
//         m++;
//     }
// }
// // console.log(numberOfFactors);
// if (numberOfFactors === 2) {
//     console.log("n is prime.");
//     let numberOfFactors = 0;
//     console.log(numberOfFactors);
// } else {
//     let numberOfFactors = 0;
//     console.log(numberOfFactors);
// }