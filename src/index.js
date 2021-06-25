// Переворот строки
function flipString(str) {
    const emptyStr = 0;
    const unflippableStrLength = 1;
    const firstSym = 0;
    const withoutFirstSym = 1;
    if (str.length === emptyStr || str.length === unflippableStrLength) {
        return str;
    }
    return flipString(str.slice(withoutFirstSym)) + str[firstSym];
}

// Преобразуем строку к числу
function flipNum(num) {
    const numAsString = String(num);
    const fliped = +flipString(numAsString);

    return fliped;
}

// Проверка, является ли данное число палиндромом
function isPalindrome(num) {
    return flipNum(num) === num ? true : false;
}

// Приводим к палиндрому

function toPalindrome(num, step = 0) {
    try {
        const reverseNumber = flipNum(num);
        if (isPalindrome(num)) {
            return {
                palindrome: num,
                steps: step,
            };
        }
        return toPalindrome(num + reverseNumber, ++step);
    } catch ({ message }) {
        throw new Error(message);
    }
}

const trialNum = 89;
toPalindrome(trialNum);
