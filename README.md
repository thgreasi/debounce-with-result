debounce-with-result.js
=======================
A debounce variation that returns a result as a Promise


# Installation
```
npm install debounce-with-result
```


# Usage

Just like the `debounce` that we all know and love, except that this one returns a `Promise`.

```js
function doSomething() {
  console.log('doSomething was called');
}

let doSomethingDebounced = debounceWithResult(doSomething, 500);
// `doSomething()` runs only once
doSomethingDebounced().then(() => { console.log('doSomething resolved'); });
doSomethingDebounced().then(() => { console.log('doSomething resolved'); });
doSomethingDebounced().then(() => { console.log('doSomething resolved'); });


function getSomething() {
    console.log('getSomething was called');
    return 5;
}

let getSomethingDebounced = debounceWithResult(getSomething, 500);
// `getSomething()` runs only once and three logs appear
getSomethingDebounced().then((result) => { console.log('getSomething resolved ' + result); });
getSomethingDebounced().then((result) => { console.log('getSomething resolved ' + result); });
getSomethingDebounced().then((result) => { console.log('getSomething resolved ' + result); });

```

# Examples
[Jsbin example](http://jsbin.com/dihorah/1/edit?js,console)
