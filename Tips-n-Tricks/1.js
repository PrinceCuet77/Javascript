var num1 = 1;

var sum = function () {
  var num2 = 2;
  return function () {
    return num1 + num2;
  };
};

var myfunc = sum();
console.dir(myfunc);
