// Factory Function = camelCase, keyName
// Construction Function = Pascal, Keyname


function factFun(radius){
    return {
    radius:radius,
    // pi: 3.14,
    getCircleArea() {
        // Function Key Word
        // Key name - to avoid having a key value pair
        return 3.14 * radius * radius;
      },
    };
};
const result = factFun(10);
console.log(result);
console.log(result.getCircleArea());
const result2 = factFun(20);
console.log(result2);
console.log(result2.getCircleArea());




//if afun