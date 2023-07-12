export function addEventListenerOnce(element, listener, event = 'click') {
    if (element.dataset.hasListener === undefined) {
        element.dataset.hasListener = 'true';
        element.addEventListener(event, listener);
    }
}

export function httpHeaders() {
    return new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('content'),
    });
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

export function safelyRun(callback, logMessage = 'Analytics disabled') {
    try {
        callback();
    } catch (e) {
        console.log(logMessage);
    }
}

/**
 * Can only fire once
 * @param fn
 * @param context
 */
export function once(fn, context) {
    let result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}
