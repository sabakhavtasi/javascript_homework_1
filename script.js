/* 1 */
function calaireArea(length, width) {
    return length * width;
}
console.log(calaireArea(5, 10));

/* 2 */
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

/* 3 */
function gradeCalculator(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(gradeCalculator(85));
console.log(gradeCalculator(95));
console.log(gradeCalculator(75));

/* 4 */
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2020));