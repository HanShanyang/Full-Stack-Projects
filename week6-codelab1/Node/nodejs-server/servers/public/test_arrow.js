function foo(callback) {
  callback();
}

foo(() => {
  console.log("Hello arrow!");
  document.getElementById("demo").innerHTML = "Hello arrow!";
});