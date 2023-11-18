const path = require('path')

const recorders = {
  arecord : require('./arecord'),
  rec : require('./rec'),
  sox : require('./sox')
}

function load (recorderName) {
  try {
    if(recorders[recorderName])
      return recorders[recorderName]
    else throw 1;
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      throw new Error(`No such recorder found: ${recorderName}`)
    }

    throw err
  }
}

module.exports = {
  load
}
