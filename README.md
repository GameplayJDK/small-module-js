# small-module-js

Easy to use and small module script for in-browser usage.

## Installation

```bash
npm install --save small-module-js
```

## Usage

```js

Module('App.Test', (function () {
    // Set variables for the scope:
    var container = document.querySelector('div#container');

    function handleClick(event) {
        console.log(event);
    }

    function registerEvent() {
        container.addEventListener('click', handleClick);
    }

    // Do everything for initialization:
    function initialize() {
        registerEvent();
    }

    return {
        initialize: initialize,
    };
}));

```

## License

It's MIT.
