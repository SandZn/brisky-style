'use strict'
exports.properties = { name: true }

exports.type = 'property'

exports.render = {
  static (target, pnode) {
    pnode.style[target.name || target.key] = target.compute()
  },
  state (target, state, type, stamp, subs, tree, id, pid) {
    const pnode = target.getParent(type, stamp, subs, tree, pid)
    pnode.style[target.name || target.key] = state
    ? target.compute(state.val)
    : target.compute()
  }
}
