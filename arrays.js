var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
 var array_plus = [element, ...array]
 return array_plus
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var array_plus = [...array, element]
  return array_plus
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}


function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
}

function removeElementFromBeginningOfArray(array){
  array.slice()
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
}

function removeElementFromEndOfArray(array){
  array.slice(0, iceCreams.length - 1)
}
