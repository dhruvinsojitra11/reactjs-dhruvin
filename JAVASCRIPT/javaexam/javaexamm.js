//1:A function that delays the execution of fn with a cancel option:


function createDelayedFunction(fn, args, t) {
    let timeoutId = setTimeout(() => fn(...args), t);
    return function cancelFn() {
      clearTimeout(timeoutId);
    };
  }

 // In this function, setTimeout is used to delay the execution of fn by t milliseconds.
 // The cancelFn function can be called to cancel the delayed execution.

 //2: A createCounter function that provides increment, decrement, and reset functionalities:
  
 function createCounter(init) {
    let currentValue = init;
    return {
      increment: function() {
        currentValue += 1;
        return currentValue;
      },
      decrement: function() {
        currentValue -= 1;
        return currentValue;
      },
      reset: function() {
        currentValue = init;
        return currentValue;
      }
    };
  }

  //This createCounter function initializes a counter with the value init and returns an 
  //object containing methods to increment, decrement, and reset the counter’s value.
  