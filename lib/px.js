'use strict'
const getParent = require('brisky-core/lib/render/dom/parent')
const unit = require('./util').appendUnit
const pxval = { type: 'px' }
const properties = {}
const pxprops = [
  'width',
  'height',
  'left',
  'right',
  'bottom',
  'top',
  'margin',
  'padding'
]

for (let i = 0; i < pxprops.length; i++) {
  properties[pxprops[i]] = pxval
}

exports.types = {
  px: {
    type: 'style',
    render: {
      static (target, pnode) {
        pnode.style[target.key] = unit(target.compute(), 'px')
      },
      state (target, state, type, stamp, subs, tree, id, pid) {
        const pnode = getParent(type, stamp, subs, tree, pid)
        pnode.style[target.key] = unit(state
        ? target.compute(state)
        : target.compute(), 'px')
      }
    }
  }
}

exports.properties = properties
