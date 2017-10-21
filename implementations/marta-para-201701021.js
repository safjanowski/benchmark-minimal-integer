module.exports = (myNewArray) => {
  for (var k = 1; k <= 100000; k++) {
    var testArray = myNewArray.filter(function (item) {
      return item != k;
    });
    if (testArray.length == myNewArray.length) {
      return k;
    }
  }
}