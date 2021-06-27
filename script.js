"use sctict";

let button = document.querySelector(".button");
let input = document.querySelector(".entryField");
button.addEventListener("click", function(event) {
    event.preventDefault();
    if (input.value == "google") {
        alert("Yandex круче.Но это не точно");
    } else {
        alert(input.value);
    }
});

let arrObj = [];
arrObj[0] = {
    name: "Alex",
    age: 12
};
arrObj[1] = {
    name: "John",
    age: 13
};
arrObj[2] = {
    name: "Jack",
    age: 14
};
arrObj[3] = {
    name: "Bob",
    age: 15
};

button.addEventListener("click", function() {
    alert(arrObj[0].name);
});

function superSum(firstNum, secondNum) {
    alert(firstNum + secondNum);
}
superSum(3, 7);

let unsortedArr = [7, 3, 5, 9, 2, 6, 4, 8];
let maxNum = 0;
let minNum = unsortedArr[0];

function searchMinOrMaxNum() {
    for (let i = 0; i <= unsortedArr.length; i++) {
        if (maxNum < unsortedArr[i]) {
            maxNum = unsortedArr[i];
        } else if (minNum > unsortedArr[i]) {
            minNum = unsortedArr[i];
        }
    }
    alert(maxNum);
    alert(minNum);
}
searchMinOrMaxNum();


let a = "XXX";
let b = "YYY";
[b, a] = [a, b];
alert(a);
alert(b);

//Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)
let maxNum2 = 0;
let arr2 = [2, 6, 4, 1, 4, 5, 8, 42, 4, 6, 7];

function searchMaxNum(arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (maxNum2 < arr[i]) {
            maxNum2 = arr[i];
        }
    }
    alert(maxNum2);
}
searchMaxNum(arr2);

//показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)
// нужно закомментировать код 3-34 строки для работы с этим кодом 

// let button = document.querySelector(".button");
// let input = document.querySelector(".entryField");
// let arrObj = [];
// arrObj[0] = {
//     name: "Alex",
//     age: 12
// };
// arrObj[1] = {
//     name: "John",
//     age: 13
// };
// arrObj[2] = {
//     name: "Jack",
//     age: 14
// };
// arrObj[3] = {
//     name: "Bob",
//     age: 15
// };

// button.addEventListener("click", (e) => {
//     e.preventDefault();
//     setTimeout(() => {
//         if (input.value == "google") {
//             alert("Yandex круче.Но это не точно");
//         } else {
//             alert(input.value);
//         }
//         alert(arrObj[0].name);
//     }, 3000);
// });