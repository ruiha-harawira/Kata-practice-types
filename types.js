module.exports = {
  getBoolean,
  getFunction,
  getNull,
  getNumber,
  getObject,
  getString,
}

function getBoolean() {
  return true
}

function greet() {
  return hello
}

function getFunction() {
  return greet
}

function getNull() {
  return null
}

function getNumber() {
  return 9
}

function getObject() {
  return {}
}

function getString() {
  return ''
}
