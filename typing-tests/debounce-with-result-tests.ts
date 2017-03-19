/// <reference path="../typings/debounce-with-result.d.ts" />

import debounceWithResult from 'debounce-with-result';

namespace debounceWithResultTest {
    function doSomething(): void {

    }

    function getSomething(): Number {
        return 5;
    }

    let doSomethingDebounced: () => Promise<void> = debounceWithResult(doSomething, 500);
    doSomethingDebounced().then(() => {});
    doSomethingDebounced().then(() => {});
    doSomethingDebounced().then(() => {});


    let getSomethingDebounced: () => Promise<Number> = debounceWithResult(getSomething, 500);
    getSomethingDebounced().then((res) => {
        let result: Number = res;
    });
    getSomethingDebounced().then((res) => {
        let result: Number = res;
    });
    getSomethingDebounced().then((res) => {
        let result: Number = res;
    });
}
