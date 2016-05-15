'use strict'
require('brisky-core').prototype.inject(require('../'))

const test = require('tape')
const render = require('brisky-core/render')

test('static styles', function (t) {
  var elem
  t.plan(2)

  elem = render({
    style: {
      padding: '100px'
    }
  })

  t.equals(elem.style.padding, '100px', 'add style property')

  elem = render({
    style: {
      padding: '100px',
      margin: '50px'
    }
  })

  t.true(
    (elem.style.padding === '100px') &&
    (elem.style.margin === '50px'),
    'add multiple styles')
})
