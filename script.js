"use sctict";

// let buttom = document.querySelector(".button");
// let input = document.querySelector(".entryField")
// buttom.addEventListener("click", function(event) {
//     event.defaultPrevented;
//     if (input.value == "google") {
//         alert("Yandex круче.Но это не точно");
//     } else {
//         alert(input.value);
//     }
// });

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

// buttom.addEventListener("click", function() {
//     alert(arrObj[0].name);
// });

// function superSum(firstNum, secondNum) {
//     alert(firstNum + secondNum);
// }
// superSum(3, 7);

// let unsortedArr = [7, 3, 5, 9, 3, 6, 4, 8];
// let maxNum = 0;
// let minNum = unsortedArr[0];

// function searchMinOrMaxNum() {
//     for (let i = 0; i <= unsortedArr.length; i++) {
//         if (maxNum < unsortedArr[i]) {
//             maxNum = unsortedArr[i];
//         } else if (minNum > unsortedArr[i]) {
//             minNum = unsortedArr[i];
//         }
//     }
//     alert(maxNum);
//     alert(minNum);
// }
// searchMinOrMaxNum();


// let a = "XXX";
// let b = "YYY";
// [b, a] = [a, b];
// alert(a);
// alert(b);


// let maxNum2 = 0;

// function searchMaxNum(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (maxNum2 < arr[i]) {
//             maxNum2 = arr[i];
//         }
//     }
//     alert(maxNum2);
// }


let buttom = document.querySelector(".button");
let input = document.querySelector(".entryField");

// function showM() {
//     setTimeout(function(event) {
//         event.defaultPrevented();
//         // if (input.value == "google") {
//         //     alert("Yandex круче.Но это не точно");
//         // } else {
//         //     alert(input.value);
//         // }
//         console.log(input.value);
//     }, 3000);
// }
function myFunc() {
    setTimeout(function() {
        console.log("Hello");
    }, 3000);
}
buttom.addEventListener("click", myFunc);
const showMessage = function() {


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

    buttom.addEventListener("click", function() {
        alert(arrObj[0].name);
    });
    console.log(input.value);
};
// setTimeout(function(event) {
//     event.preventDefault();
//     if (input.value == "google") {
//         alert("Yandex круче.Но это не точно");
//     } else {
//         alert(input.value);
//     }
// }, 3000);
// setTimeout(function(event) {
//     event.defaultPrevented();
//     // if (input.value == "google") {
//     //     alert("Yandex круче.Но это не точно");
//     // } else {
//     //     alert(input.value);
//     // }
//     console.log(input.value);
// }, 3000);