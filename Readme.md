
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

```

## License

  MIT
