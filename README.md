# brisky-style
<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/brisky-style.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-style)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-style.svg)](https://badge.fury.io/js/brisky-style)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-style/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-style?branch=master)

<!-- VDOC END -->
Set style properties on brisky-elements, automatically adds prefixes

**basic**
```javascript
  const render = require('brisky/render')
  const app = render({
    field: {
      style: {
        opacity: {
          $: 'animal',
          $transform: (val) => val === 'cat' ? 1 : 0
        }
      }
    }
  }, { animal: 'cat' })

  // returns opacity 1 when state.animal equals "cat"
```

**px**

Automaticly converts `numbers` to `[number] + px`
- width
- height
- left
- right
- bottom
- top
- margin
- padding

```javascript
  const render = require('brisky/render')
  const app = render({
    field: {
      style: {
        width: { $: width }
      }
    }
  }, { width: 100 })

  // renders a div with width: 100px
```

Add your own px property
```javascript
  const render = require('brisky/render')
  const app = render({
    field: {
      style: {
        something: {
          type: 'px',
          $: 'something'
        }
      }
    }
  }, { something: 100 })
  // renders a div with style - something: 100px
```

**transform**

Adds helpers for x y and rotate
```javascript
  const render = require('brisky/render')
  const app = render({
    field: {
      style: {
        transform: {
          x: { $: 'x' },
          y: { $: 'y' },
          rotate: { $: 'rotate' }
        }
      }
    }
  }, { x: 100, y 100, rotate: 20 })

  // renders a div with transform style
  // translate3d(100px,100px,0) scale(0.1) rotate(20deg)
```