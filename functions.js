module.exports = {
  callsFunction,
  callsProperty,
  filter,
  find,
  map,
}

function callsFunction(func) {
  func()
}

function callsProperty(obj) {
  obj.increment()
}

function filter(arr, myFunc) {
  let filterArr = []
  for (let i = 0; i < arr.length; i++) {
    if (myFunc(arr[i]) === true) {
      filterArr.push(arr[i])
    }
  }
  return filterArr
}

function find(arr, isOdd) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (isOdd(arr[i]) === true) {
      return result.push(arr[i])
    }
  }
}

function map(arr, addOne) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(addOne(arr[i]))
  }
  return result
}
