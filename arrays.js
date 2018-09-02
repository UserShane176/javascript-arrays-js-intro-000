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
  var array_plus = [array,...element]
  return array_plus
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}


function accessElementInArray(array, index){
  return array[index]
}
