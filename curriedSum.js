const sum = (a,b,c) => a+b+c;

function curry(fn){
  console.log(fn.length);
  return function curried(...args) {
    if(args.length >= fn.length){
      return fn.apply(this,args);
    } else {
       return function (...arg) {
         return curried(...arg, ...args)
       }
    }
  }
}

const curriedSum = curry(sum);
console.log(curriedSum(1,2,3));
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1)(2,3));
