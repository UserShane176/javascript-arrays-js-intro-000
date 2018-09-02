var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
 var array_plus = [array,element[0]]
 return array_plus
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var array_plus = [array,...element ]
  return array_plus
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

var array = ["a", 1, "b"]
function accessElementInArray(array, index){
  return array[1]
}





