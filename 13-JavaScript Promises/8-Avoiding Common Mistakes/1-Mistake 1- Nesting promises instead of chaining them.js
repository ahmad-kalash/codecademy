//Mistake 1: Nesting promises instead of chaining them.


returnsFirstPromise()
.then((firstResolveVal) => {
    return returnsSecondValue(firstResolveVal)
      .then((secondResolveVal) => {
        console.log(secondResolveVal);
      })
  })

/*
Let’s break down what’s happening in the above code:

1) We invoke returnsFirstPromise() which returns a promise.
2) We invoke .then() with a success handler.
3) Inside the success handler, we invoke returnsSecondValue() with firstResolveVal which will return 
a new promise.
4) We invoke a second .then() to handle the logic for the second promise settling all inside the 
first then()!
5) Inside that second .then(), we have a success handler which will log the second promise’s 
resolved value to the console.

Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. Imagine if we were handling five or ten promises!
*/