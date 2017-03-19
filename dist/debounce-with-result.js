(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.debounceWithResult = factory());
}(this, (function () { 'use strict';

function debounceWithResult(func, wait, immediate) {
    function newDeferred() {
        var deferred = {};
        deferred.promise = new Promise(function (resolve, reject) {
            deferred.resolve = resolve;
            deferred.reject = reject;
        });

        return deferred;
    }

    var timeout;
    var laterDeferred;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            laterDeferred = null;
            if (!immediate) {
                try {
                    later.deferred.resolve(func.apply(context, args));
                } catch (e) {
                    later.deferred.reject(e);
                }
            }
        };
        later.deferred = laterDeferred = laterDeferred || newDeferred();

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            laterDeferred = null;
            var deferred = newDeferred();
            try {
                deferred.resolve(func.apply(context, args));
            } catch (e) {
                deferred.reject(e);
            }
            return deferred.promise;
        }

        return laterDeferred.promise;
    };
}

return debounceWithResult;

})));
