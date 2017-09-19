var n = 999;

function f1(){
　　console.log(n);
}

f1(); // undefined

/*********************/

function f1(){
　　var n = 999;
}
f1();
console.log(n); // n is not defined

/*********************/

function f1(){

　　var n = 999;

　　function f2(){
　　　　console.log(n); // 999
　　}

    return f2;
}

var foo = f1(); // 999
foo();	// undefined
