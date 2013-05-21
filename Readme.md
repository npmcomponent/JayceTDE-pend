
# pend

  append and prepend DOM elements

## Installation

    $ component install JayceTDE/pend

## API

```javascript

var pend = require('pend')
  , el = document.querySelector('#el')
;

pend(el)
    .append('<div></div>')
    .prepend(document.createElement('span'))
;

// Append 3 text nodes resulting in 'hello world'
pend(el).append('hello', ' ', 'world');
pend(el).append(['hello', ' ', 'world']);

// Prepends 3 text nodes resulting in 'cba'
// Remember that it will prepend the arguments in the order they appear
// resulting in the last argument prepending to the first
pend(el).prepend('a', 'b', 'c');

```

## License

  MIT
