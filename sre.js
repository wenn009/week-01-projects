"use strict";
function trampoline(res) {
  while (typeof res == "function") {
    res = res(); 
  }
  console.log('is not a function');
  return res;
}
var foo = (function () {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return function partial() {
      return _foo((x / 2) + acc, x - 1);
    };
  }

  return function (x) {
    console.log('q');
    return trampoline(_foo(1, x));
  };
})();

var ans = foo(123456); // 3810376848.5