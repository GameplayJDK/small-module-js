/*
 * The MIT License (MIT)
 * Copyright (c) 2020 GameplayJDK
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

var debug = true;

var App = {};

var Module = (function (path, callback) {
    // See https://webbjocke.com/javascript-check-data-types/ for more information.
    var isArray = Array.isArray || function isArray(array) {
        //return value && typeof value === 'object' && value.constructor === Array;
        return Object.prototype.toString.call(array) === '[object Array]';
    };

    if (!isArray(path) && typeof path === 'string') {
        path = path.split('.');
    }

    var first = 'App';
    if ('App' !== (first = path.shift())) {
        path.unshift(first);
    }

    var last = path.pop();
    var namespace = App;

    if (path.length) {
        path.forEach(function (value) {
            if (namespace.hasOwnProperty(value)) {
                return;
            }

            namespace[value] = {};
        });
    }

    if (typeof callback === 'function') {
        callback = callback();
    }

    callback.initialize();

    namespace[last] = callback;
});

// Usage: ../example/test.js
