/*
    outline
*/
// javascript is sync; however nodejs can async

// + sync
// var arr = [1, 2, 3];
// arr.forEach(function(item) {
//     console.log(item);
// });
// console.log('haha');

// + async
// var fs = require('fs');
// // read file 
// fs.readFile('my_file.txt', function onFileData(err, data) {
//     // console.log('');
//     console.log(data.toString());
// }); 
// console.log('reading file ....');
// console.log(1 + 2);

//
// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms) {

//     }
//     console.log("finished function");
// }
// function clickHandler() {
//     console.log("click event");
// }
// document.addEventListener("click", clickHandler);

// waitThreeSeconds();
// console.log("finished execution");

//----------------------------------------
// function greet(callback) {
// 	console.log('hello');
// 	setTimeout(callback, 1);
// 	// callback();
// }
//
// greet(function() {
// 	console.log('The callback is invoked');
//
// });
//
// greet(function() {
// 	console.log('A different callback');
// });
//----------------------------------------

//----------------------------------------
// 带个参数回来
// function greet(callback) {
// 	console.log("hello");
// 	var data = {
// 		name: "Payson Wu"
// 	};
// 	callback(data);
// }
//
// greet(function (data) {
// 	console.log("The callback is invoked!")
// 	console.log(data);
// });
//
// greet(function (data) {
// 	console.log('A different callback is invoked');
// 	console.log(data.name);
// });
//----------------------------------------

//----------------------------------------
// 不需要里三层，外三层 --- 同步
// let resultA, resultB, resultC;
// function add(num1, num2) {
// 	return num1 + num2;
// }
//
// resultA = add(1, 2);
// resultB = add(resultA, 3);
// resultC = add(resultB, 4);
//
// console.log('total: ' + resultC);
// console.log(resultA, resultB, resultC);
//----------------------------------------

//----------------------------------------
// 里三层，外三层 --- 异步
// let resultA1, resultB1, resultC1;
//
// function addAsync(num1, num2, someFunction) {
// 	return $.getJSON('http://www.example.com', {
// 		num1: num1,
// 		num2: num2
// 	}, someFunction);
// }
//
// addAsync(1, 2, (success) => {
// 	// callback 1
// 	resultA1 = success; // get result = 3
//
// 	addAsync(resultA1, 3, (success) => {
// 		// callback 2
// 		resultB1 = success;// get result = 6
// 		addAsync(resultB1, 4, (success) => {
// 			// call back 3
// 			resultC1 = success;
// 			console.log('total: ' + resultC1);
// 			console.log(resultA1, resultB1, resultC1);
// 		});
// 	});
// });
//----------------------------------------

//----------------------------------------
// Promise
// var isMomHappy = true;
//
// var willIGetNewPhone = new Promise(
// 	function (resolve, reject) {
// 		if (isMomHappy) {
// 			var phone = {
// 				brand: 'iPhone',
// 				color: 'red'
// 			};
// 			resolve(phone); //fulfilled
// 		} else {
// 			var reason = new Error('Mom is not happy');
// 			reject(reason);
// 		}
//     }
// );
//
// var askMom = function () {
// 	willIGetNewPhone
// 		.then(function (fulfilled) {
// 			console.log(fulfilled);
//         }, function (error) {
// 			console.log(error.message);
//         })
// }
//
// askMom();

//----------------------------------------

//----------------------------------------

// let r1, r2, r3; // global variable
// function addAsync(num1, num2) {
// 	// use ES6 fetch API, which returns a promise
// 	return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
// 		.then(x => x.json());
// }

// addAsync(1, 2)
// 	.then(result =>{
// 		r1 = result;
// 		return r1; // r1 = 3
// 	})
// 	.then (result => addAsync(result, 3))
// 	.then(success => {
// 		r2 = success;
// 		return r2; // r2 = 6
// 	})
// 	.then (success => addAsync(success, 4))
// 	.then(success => {
// 		r3 = success;
// 		return r3;	// r3 = 10
// 	})
// 	.then(success => {
// 		console.log('total: ' + success)
// 		console.log(r1, r2, r3);
// 	})