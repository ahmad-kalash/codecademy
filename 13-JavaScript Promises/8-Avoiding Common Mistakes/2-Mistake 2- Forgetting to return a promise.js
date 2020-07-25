// Mistake 2: Forgetting to return a promise.

returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})

/*
Let’s break down what’s happening in the example:

1) We invoke returnsFirstPromise() which returns a promise.
2) We invoke .then() with a success handler.
3) Inside the success handler, we create our second promise, but we forget to return it!
4) We invoke a second .then(). It’s supposed to handle the logic for the second promise, 
but since we didn’t return, this .then() is invoked on a promise with the same settled value as 
the original promise!

Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to 
debug!
*/