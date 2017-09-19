// Promise  
var sleep = function (ms) {
	var promise = new Promise(function (resolve, reject) {
		setTimeout(function() {
			resolve('haha');
		}, ms);
	}); 
	return promise;
};

// sleep(2000)
// 	.then(function(result) {
// 		console.log(result);
// 	});

// Promise.all([sleep(1000), sleep(2000)])
// 	.then(function() {
// 		console.log('All done');
// 	})

Promise.race([sleep(1000), sleep(2000)])
	.then(function() {
		console.log('First done');
	})