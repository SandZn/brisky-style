'use strict'
require('brisky-core').prototype.inject(require('../'))
const test = require('tape')
const s = require('vigour-state/s')
const render = require('brisky-core/render')

test('transform - static', function (t) {
  const elem = render({
    style: {
      transform: {
        y: 10,
        x: 10
      }
    }
  })
  t.equals(elem.style.transform, 'translate3d(10px,10px,0)', 'x and y')
  t.end()
})

test('transform - state', function (t) {
  const state = s({
    x: 5,
    y: 5,
    rot: 5
  })
  const elem = render({
    style: {
      transform: {
        y: { $: 'y' },
        x: { $: 'x' },
        rotate: { $: 'rot' },
        scale: 0.1
      }
    }
  }, state)
  t.equals(elem.style.transform, 'translate3d(5px,5px,0) scale(0.1) rotate(5deg)', 'mixed state and static')
  t.end()
})
