'use strict'
const isNumber = require('vigour-util/is/number')

exports.appendUnit = (val, unit) => isNumber(val) ? val + unit : val
