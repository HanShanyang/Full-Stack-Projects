var a = 123;

// without arrow
var obj_without_arrow = {
	a: 10,
	foo: function() {
		var a = 234;
		console.log(a);
		console.log("/obj_without_arrow/foo:", this.a);
		var fn = function() {
			console.log("/obj_without_arrow/foo/fo:", this.a);
			return 10 - this.a; // this point to window or undfined			
		}
		return fn();
	}
}

console.log(obj_without_arrow.foo());

// with arrow
var obj_with_arrow = {
	a: 10,
	foo: function() {
		console.log("/obj_with_arrow/foo/this.a: ", this.a);
		var fn = ()=> 10 - this.a; // this point to obj_with_arrow
		return fn();
	}
}

console.log(obj_with_arrow.foo());

