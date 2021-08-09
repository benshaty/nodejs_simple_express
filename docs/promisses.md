# Promisses

## The problem
JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another.
## What is promise?
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

The Promise object works as proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason.

This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

## Promise example
```bash
let promise = new Promise(function(resolve, reject) {
  // run your code
  if (/* all is ok */) {
    resolve("Promise resolved!");
  }
  else {
    reject(Error("Promise rejected!"));
  }
});
```

## Promise chaining

To combine several async calls and synchronize them one after the other we use promise chaining.
this allow us to use the returned data from one call in the second one.

- Then used to chain promisses (resolve)
- Catch used to catch the errors (reject)

## Promise chain example

``` bash
Promise.resolve('Hello ')
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'World';
        resolve(string);
      }, 1);
    });
  })
  .then(function(string) { 
    console.log(string); 
  }
  .catch((err) => {
    // If any part of the chain is rejected, print the error message.
    console.log(err);
  });
```
> Output: Hello World