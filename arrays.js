var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
 var array_plus = [array,element[0]]
 return array_plus
}

function destructivelyAddElementToBeginningOfArray(array,element){
  var array =[]
  array.unshift(element)
}