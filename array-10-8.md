##**MDN documentation on JavaScript Array Methods**

####array.copyWithin
arr.copyWithin(target, start[, end = this.length])
  Copies the sequence of array elements within the array to position starting at target.
  target = the start index position where to copy the elements to.
  start = source start index position where to start copying elements from.
  end = Source end index postion where to end copying elements from.  This is not required.
  
---
####array.fill
arr.fill(value[, start = 0[, end = this.length]])
  Fills all the elements of an array from a start index to an end index with a static value.
  value = the value that will fill the array
  start = where the fill will start in the array.  Not required.
  end = where the fill will stop in the array.  Not required.
  
---
####array.pop
arr.pop()
  Removes the last element from an array and returns it as a value.
  If the array is empty, will return undefined.
  
---
####array.push
arr.push(element1,...., elementN)
  Adds one or more elements to the end of an array and returns the new length of the array (new number of total objects in the array).
  
---
####array.reverse
arr.reverse()
  Reverses an array so the first element becomes the last, and the last becomes the first.
  
---
####array.shift
arr.shift()
  Removes the first element (zero index) from an array and returns that element.  The array will now be renumbered with a new length.
  
---
####array.sort
arr.sort([compareFunction])
  Sorts the elements of an array according to Unicode code point value.
  compareFunction =specifies a function that defines the sort order.  This is optional, otherwise, Unicode is used.
  
---
####array.splice
arr.splice(index, howMany[, element1[, ...[, element]]])
  Changes the content of an array, adding new elements while removing old elements.
  index = index to start changing the array.  If greater than the length of the array, actual starting index will be set to the length fo the array.  If negative, will begin that many elements from the end.
  howMany = an integer indiating the number of old array elements to remove.  If 0, nothing is removed.  If no value is used, all elements are removed.
  elementN = The elements to add to the array.  If you don't specify any elements, splice will remove elements from the array.
  
---
###array.unshift
arr.unshift([element1[, ...[, element N]]])
  Adds one or more elements to the beginning of an array and returns the new length of the array.
  
---

[Link to more information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_array_instances)  
