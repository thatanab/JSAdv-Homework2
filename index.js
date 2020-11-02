// 1
// const check = (input) => {
//     if (input === String(input).toUpperCase()) {
//         console.log("capital");
//     }
//     else if (input === String(input).toLowerCase()) {
//         console.log("small");
//     }
//     else {
//         console.log("mix");
//     }
// }


// 2
// const pow = (a, n) => {
//     console.log(a ** n);
// }

// 3
// const adds = (input) => {
//     let type = typeof (input)
//     switch (type) {
//         case "number":
//             console.log("ตัวเลข");
//             break;
//         case "string":
//             console.log("ข้อความ");
//             break;
//         case "object":
//             console.log("ออปเจ็คต์");
//             break;
//     }
// }

// 4
// const sum = (arr) => {
//     let result = 0;
//     for (const iterator of arr) {
//         if (iterator % 2 == 0) {
//             result += iterator
//         }
//     }

//     console.log(result);
// }


// 5
// const change = (input) => {
//     input = String(input).split('-')
//     let day = Number(input[0])
//     let month = Number(input[1]) - 1
//     let year = Number(input[2])
//     let date = new Date(year, month + 1, 0);

//     if (isNaN(day) || isNaN(month) || isNaN(year)
//         || month > 11 || day > date.getDate()) {
//         console.log("Error");
//     }
//     else {
//         console.log(`วันที่${input[0]} เดือน${input[1]} พ.ศ.${Number(input[2]) + 543}`);
//     }

// }

// 6
// const add = (str1, str2) => {
//     str1 = str1.split('').sort().join('');
//     str2 = str2.split('').sort().join('');

//     if (str1 === str2) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// 7
// const gcd = (a, b) => {
//     if (a == 0)
//         return b;
//     return gcd(b % a, a);
// }

// const findGCD = (arr, n) => {
//     let result = arr[0];
//     for (let i = 1; i < n; i++) {
//         result = gcd(arr[i], result);
//     }

//     return result
// }


// const numberOfSquare = (height, width) => {
//     let gcdArray = [height, width]
//     let square = findGCD(gcdArray, gcdArray.length)
//     let totalArea = height * width
//     let squareArea = square * square

//     let result = totalArea / squareArea

//     console.log(result);
// }

// 8
// const toChange = (money) => {
//     money = Math.round(money)
//     let bills = [0, 0, 0, 0, 0, 0, 0, 0, 0]

//     if (money >= 1000) {
//         bills[0] = money / 1000
//         bills[0] = Math.floor(bills[0])
//         money -= (bills[0] * 1000)
//     }
//     if (money >= 500) {
//         bills[1] = money / 500
//         bills[1] = Math.floor(bills[1])
//         money -= (bills[1] * 500)
//     }
//     if (money >= 100) {
//         bills[2] = money / 100
//         bills[2] = Math.floor(bills[2])
//         money -= (bills[2] * 100)
//     }
//     if (money >= 50) {
//         bills[3] = money / 50
//         bills[3] = Math.floor(bills[3])
//         money -= (bills[3] * 50)
//     }
//     if (money >= 20) {
//         bills[4] = money / 20
//         bills[4] = Math.floor(bills[4])
//         money -= (bills[4] * 20)
//     }
//     if (money >= 10) {
//         bills[5] = money / 10
//         bills[5] = Math.floor(bills[5])
//         money -= (bills[5] * 10)
//     }
//     if (money >= 5) {
//         bills[6] = money / 5
//         bills[6] = Math.floor(bills[6])
//         money -= (bills[6] * 5)
//     }
//     if (money >= 2) {
//         bills[7] = money / 2
//         bills[7] = Math.floor(bills[7])
//         money -= (bills[7] * 2)
//     }
//     if (money >= 1) {
//         bills[8] = money / 1
//         bills[8] = Math.floor(bills[8])
//         money -= (bills[8] * 1)
//     }

//     if (money > 0) {
//         console.log(`${money}`);
//         console.log("Error");
//         return;
//     }

//     console.log(`แบงค์พัน ${bills[0]} ใบ`);
//     console.log(`แบงค์ห้าร้อย ${bills[1]} ใบ`);
//     console.log(`แบงค์ร้อย ${bills[2]} ใบ`);
//     console.log(`แบงค์ห้าสิบ ${bills[3]} ใบ`);
//     console.log(`แบงค์ยี่สิบ ${bills[4]} ใบ`);
//     console.log(`เหรียญสิบ ${bills[5]} เหรียญ`);
//     console.log(`เหรียญห้า ${bills[6]} เหรียญ`);
//     console.log(`เหรียญสอง ${bills[7]} เหรียญ`);
//     console.log(`เหรียญบาท ${bills[8]} เหรียญ`);
// }


// 9
// const maxPossibleNumber = (number) => {
//     let add = String(number).split('.')[1].length
//     number = String(number).split('').sort().reverse().join('');

//     console.log(Number(number) / (10 ** add));
// }

// 10
// function squareRoot(number) {
//     if (number % Math.sqrt(number) === 0) return Math.sqrt(number);
//     let outsideSqrt = 1;
//     let insideSqrt = 1;
//     let scope = number;
//     for (let i = 2; i <= scope; i++) {
//         let factor = [];
//         while (number % i === 0) {
//             factor.push(i);
//             number = number / i;
//         }
//         if (factor.length % 2 === 0) outsideSqrt *= i ** (factor.length / 2);
//         else {
//             insideSqrt *= i;
//             outsideSqrt *= i ** ((factor.length - 1) / 2);
//         }
//     }

//     return outsideSqrt === 1
//         ? " root " + insideSqrt
//         : outsideSqrt + " root " + insideSqrt;
// }
// console.log(squareRoot(50));

// 11
// const dotProduct = (vec1, vec2) => {
//     let result = 0
//     for (let i = 0; i < vec1.length; i++) {
//         result += (vec1[i] * vec2[i])
//     }

//     console.log(result);
// }

// 12
// const maxPairSum = (arr) => {
//     if (arr.length < 2) {
//         return arr[0];
//     }
//     arr = arr.sort((a, b) => b - a);

//     console.log(arr[0] + arr[1]);
// }

// 13
// const minPairSum = (arr) => {
//     if (arr.length < 2) {
//         return arr[0];
//     }
//     arr = arr.sort((a, b) => a - b);

//     console.log(arr[0] + arr[1]);
// }

// 14
// const numberOfJumpFrog = (speed, distance) => {
//     console.log(Math.ceil(distance / speed));
// }

// 15
// const calculateInterest = (money, years) => {
//     for (let i = 0; i < years; i++) {
//         money += ((money * 2.5) / 100)
//     }

//     console.log(money);
// }