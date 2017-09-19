
/*run in browser*/

var name = 'global';

function Cat() {
   this.name = 'Big C';

   this.foo = function() {
     console.log('foo3', this.name);
   }
   this.bc_foo = this.foo.bind(this);

  /********* 2 **********
  var dog1 = new Dog();
  dog1.fun(cat1.foo);
  dog1.fun(cat1.bc_foo);
  dog1.fun(() => {console.log('匿名', this.name)})
  */
}

cat1 = new Cat();
cat1.foo();


function Dog() {
   this.name = 'Big D';
   this.fun = function(f) {
     var ff = f;
     ff();
     console.log(this.name);
   }
}

/******** 1 *********/
var dog1 = new Dog();
dog1.fun(cat1.foo);
dog1.fun(cat1.bc_foo);
/**
foo3 Big C
VM401:10 foo3 global
VM401:31 Big D
VM401:10 foo3 Big C
VM401:31 Big D
**/
