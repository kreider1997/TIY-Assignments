##**MDN documentation on JavaScript Array Methods**

###**Mutator Methods:**
these methods modify the array:

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
####array.unshift
arr.unshift([element1[, ...[, element N]]])
  Adds one or more elements to the beginning of an array and returns the new length of the array.

---

###**Accessor Methods**
Several methods take as arguments functions to be called back while processing the array.  When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited.  Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards.  While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code.  If you must mutate the array, copy into a new array instead.


####array.concat
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
  Returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.
  valueN = Arrays and/or values to concatenate into a new array.  See the discussion below for details.

---
####array.contains    **this is experimental-not stabilized-**
array.contains(searchElement[, fromIndex])
  Determines whether an array contains a certain element, returning true or false as appropriate.
  searchElement = the element to search for
  fromIndex = Optional.  The position in this array at which to begin searching for searchElement; defaults to 0.

---
####array.join
str = ar.join([separator = ','])
  Method joins all elements of an array into a string.
  separator = Optional.  Specifies a string to separate each element of the array.  The separator is converted to a string if necessary.  If omitted, the array elements are separated with a comma.

---
####array.slice
arr.slice([begin[, end]])
  Returns a shallow copy of a portion of an array into a new array object.
  begin = zero-based index at which to begin extracting.  If begin is omitted slice begins from index 0.  If it is negative, it is offset from the end of the sequence.  Slice -2 extracts the last two elements in the sequence.
  end = zero-based index at which to end extraction.  Slice will extract up to, but not including end.

----
####array.toSource    **this is experimental-will only work on FireFox browser-**
arr.toSource()
  Returns a string representing the source code of the array.

----
####array.toLocaleString
arr.toLocaleString();
  Returns a string representing the elements of the array.  The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ".").

----
####array.indexOf
arr.indexOf(searchElement[, fromIndex = 0])
  Returns the first index at which a given element can be found in the array, or -1 if it is not present.
  searchElement = element to locate in the array.
  fromIndex = the index to start the search at.  If the index is greater than or equal to the array's length, -1 is returned, and the array will not be searched.  If a negative number is provided the search starts from the end of the array.  A negative index array will still be searched from the front to the back.  If the index is less than 0, then the whole array will be searched.

----
####array.lastIndexOf
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
  Returns the last index at which a given element can be found in the array, of -1 if it not present.  The array is searched backwards, starting at fromIndex.
  searchElement = element to locate in the array
  fromIndex = Optional.  The index at which to start searching backwards.  Defaults to the array's length, so the whole array will be searched.  If the index is greater than or equal to the length of the array, the whole array will be searched.  If negative, it taken as the offset from the end of the array.  Note that even when the index is negative, the aray is still searched from back to front.  If the calculated index is less than 0, -1 is returned which means the array will not be searched.

----

###**Iteration Methods**
Several methods take as arguments functions to be called back while processing the array.  When these methods are called, the length of the array is sampled, and any element added beyond this length from which the callback is not visited.  Other changes to the array (setting the value of or deleting an element) may affect the result of the operation if the method visits the changed element afterwards.  While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code.  if you must mutate the array, copy into a new array instead.


----
####array.forEach
arr.forEach(callback[, thisArg])
  Executes a provided function once per array element.
  callback = function to execute for each element.
  thisArg = value to use as this when executing callback.

----
####array.entries    **this is experimental-not supported by IE or Opera-**
arr.entries()
  Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

----
####array.every
arr.every(callback[, thisArg])
  Tests whether all elements in the array pass the test implemented by the provided function.
  callback = function to test for each element, taking three arguments;
  currentValue = the current element being processed in the array.
  index = the index of the curent element being processed in the array.
  array = the array every was called upon.
  thisArg = Optional.  Value to use as this when executing callback.

----
####array.some
arr.some(callback[, thisArg])
  Tests whether some element in the array passes the test implemented by the provided function.
  callback = Function to test for each element
  thisArg = Optional.  Value to use as this when executing callback.

----
####array.filter
arr.filter(callback[, thisArg])
  Creates a new array with all elements that pass the test implemented by the provided function.
  callback = function to test each element of the array.  Return true to keep the element false otherwise.
  thisArg = Optional.  Value to use as this when executing callback.

----
####array.find      **this is experimental-not supported by IE or Opera-**
arr.find(callback[, thisArg])
  Returns a value in the array, if an element in the array satisfies the provieded testing function.  Otherwise, undefined is returned.
  callback = the current element being processed in the array.
  index = the index of the current element being processed in the array.
  array = the array find was called upon.
  thisArg = Optional.  Object to use as this when executing callback.

----
####array.findIndex     **this is experimental-only supported by Firefox and Safari-**
arr.findIndex(callback[, thisArg])
  Returns an index in the array, if an element in the array satisfies the provided testing function.  Otherwise -1 is returned.  See find() method, which returns the value of a found element in the aray instead of its index.
  callback = function to execute on each value in the array, taking three arguments.
  element = the current element being processed in the array.
  index = the index of the current element being processed in the array.
  array = the array findIndex was called upon.
  thisArg = optional.  Object to use as this when executing callback.

----
####array.keys      **this is experimental-not supported by IE or Opera-**
arr.keys()
  Returns a new Array Iterator that contains the keys for each index in the array.

----
####array.map
arr.map(callback[, thisArg])
  Creates a new array with the results of calling a provided function on every element in this array.
  callback = function that produces an element of the new Array, taking three arguments.
  currentValue = the current element being processed in the array.
  index = the index of the current element being processed in the array.
  array = the array map was called upon.
  thisArg = Optional. Value to use as this when executing callback.

----
####array.reduce
arr.reduce(callback[. initialValue])
  Applies a function against an accumulator and each vale of the array (from left-to-right) has to reduce it to a single value.
  callback = function to execute on each value in the array, taking four arguments:
  previousValue = the value previously returned in the last invocation of the callback, or initialValue, if suppplied.
  currentValue = the current element being processed in the array.
  index = the index of the current element being processed in the array.
  array = the aray reduce was called upon.
  initialValue = optional.  Object to use as the first argument to the first call of the callback.

----
####array.reduceRight
arr.reduceRight(callback[, initialValue])
  Applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.
  callback = function to execute on each value in the array, taking four arguments:
  previousValue = the value previously returned in the last invocation of the callback, or initialValue, if supplied.
  currentValue = the current element being processed in the array.
  index = the index of te current element being processed in the array.
  array = the array reduce was called upon.
  initialValue = Optional.  Object to use as the first argument to the first call of the callback.

----
###**Generics**
Apply array methods to strings or other array-like objects (such as function arguments).  By doing this, you treat a string as an array of characters (or otherwise treat a non-array as an array).
  methods = join, reverse, sort, push, pop, shift, unshift, splice, concat, slice, indexOf, lastIndexOf, forEach, map, reduce, reduceRight, filter, some, every.
  


[Link to more information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_of_array_instances)  
