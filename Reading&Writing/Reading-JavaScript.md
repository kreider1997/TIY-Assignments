~~~~
**40 up to this point**
~~~~

```javascript
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
```
* Keyword-
	* name:  Variable Declaration
	* symbol:  var
*	Object literal
	*	firstName, lastname, id, fullName
* Operator -  
	* name:  block
	* symbol: {}
	* name:  conditional
	* symbol:  ()

```javascript
       return this.firstName + " " + this.lastName;
    }
};
```

* Keyword -
	* name:  output
	* symbol:  return
* Operator -  
	* name:  block
	* symbol: {}


```javascript
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
```
* Function
	* name: person
* Object Literal
	* first, last, age, eye
*	Object properties:
	* firstName, lastName, age, eyeColor
* Operator -  
	* name:  block
	* symbol: {}
	* name:  conditional
	* symbol:  ()

```javascript
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
```
* Keyword-
	* name:  Variable Declaration
	* symbol:  var
* Operator -
	* name:  assignment
	* symbol:  =
	* operands:  myFather and my myMother
	* name:  separator
	* symbol:  ,  
	* name:  block
	* symbol: {}
	* name:  conditional
	* symbol:  ()



```javascript
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age;
```



```javascript
var stuff = [
	[1, 2, 3],
	['one', 'two', 'three'],
	['apple', 'orange', 'banana', 'kiwi']
];
```
* Keyword-
  * name:  Variable Declaration
  * symbol:  var
* Operator -
  * name:  assignment
  * symbol:  =
  * operands:  stuff
  * name:  separator
  * symbol:  ,
* Type Literal
  * name: array
  * symbol: [ ]
  * name: String
  * symbol:  '  '
  * name:  integer
  * symbol: 1, 2, 3

```javascript
function showTheHours(theHour) {
```
* Function -
  * symbol:  showTheHours
* Operator -  
  * name:  block
  * symbol: {}
  * name:  conditional
  * symbol:  ()

```javascript
     if (showMilitaryTime() || (theHour > 0 && theHour < 13)) {
```
*  Keyword -
   * name:  conditional
   * symbol:  if
*  Operator -
   * name:  conditional
   * symbol:  ()
*  Operator -
   * name:  assignment
   * symbol: =
   * name: logical
   * symbol:  &&


```javascript
          return (theHour);
```
*  Keyword -
   *       name:  output
   *       symbol:  return


```javascript
  var links = document.querySelectorAll("a.scroll")
```
*  variable -
   *       symbol:  links
   *       value:  `docuent.querySelectorAll`
*  Operator -
   *       name:  assignment
   *       symbol:  =
   *       operands:  links
*  Identifier -
   *       symbol:  ()  parentheses
*  Type Litteral -
   *       name:  document.querySelectorAll
   *       name:  a.scroll
*  Keyword-
   *       name:  Variable Declaration
   *       symbol:  var
*

~~~

```javascript
 var i = 0;
```
* Keyword-
	*  name:  Variable Declaration
	*  symbol:  var
* Operator -
	*  name:  assignment
	*  symbol:  =
	*  operands: i

```javascript
while (i < 10)
```

* Loop
	*	name:  while loop
	*	condition:  i < 10


```javascript
var i = links.length
```
*  Variable -
   *       symbol:  i
*  Operator -
   *       name:  assignment
   *       symbol:  =
   *       operand:  i
*  Type Literal -
   *       name:  links
*  Keyword -
   *       name:  Variable Declaration
   *       symbol:  var
*

~~~

```javascript
  var easeInOutCubic = function(t, b, c, d) {
```
*  Variable -
   *       symbol:  easeInOutCubic
*  Operator -
   *       name:  assignment
   *       symbol:  =
*  Function -
   *       name:  t, b, c, d
*  Operator -
   *       name:  conditional
   *       symbol:  ()
*  Operator -
   *       name:  block
   *       symbol:  {}
*  Operator -
   *       name:  separator
   *       symbol:  ,
*  Keyword -
   *       name:  Variable Declaration
   *       symbol:  var

```javascript
    if ((t/=d/2) < 1) return c/2*t*t*t + b
```
*  Keyword -
   *       name:  conditional
   *       symbol:  if
*  Operator -
   *       name:  conditional
   *       symbol:  ()
*  Keyword -
   *       name:  output
   *       symbol:  return


```javascript
    return c/2*((t-=2)*t*t + 2) + b  }
```
*  Keyword -
   *       name:  output
   *       symbol:  return
*  Operator -
   *       name:  block
   *       symbol:  {}
*  Operator -
   *       name:  conditional
   *       symbol:  ()


~~~
```javascript
if (time < 10)
```
*	Conditional:
	* name:  if
	* condition:  (time < 10)

```javascript
else if (time < 20)
```
*	Conditional
	* name:  else if
	* condition:  (time < 20)


```javascript
} else {
        greeting ="Good evening";
```
*	Conditional
	*	name:  else
	* output:  greeting

```javascript
var DEBUG = false;
```
* Variable -
  * symbol:  DEBUG
  * value:  false
* Operator -
  * name:  assignment
  * symbol:  =
  * operands: DEBUG
* Type Litteral -
  * name:  false


```javascript
function debugLog() {
```
* Function -
  * symbol:  debugLog
* Operator -  
  * name:  block
  * symbol: {}
  * name:  conditional
  * symbol:  ()

```javascript
  var i, log = '';
```

* Variable -
  * name: i
* Operator -
  * name:  assignment
  * symbol:  =
  * name:  separator
  * symbol:  ,


```javascript
  if (!DEBUG) {
```
* Keyword -
  * name:  conditional
  * symbol:  if
* Operator -  
  * name:  block
  * symbol: {}
* Operator -
  * name:  conditional
  * symbol:  ()
  * name:  comparison
  * symbol:  !

```javascript
    return;  }
```
* Operator -
  * name:  block
  * symbol: {}
* Keyword -
  * name:  output
  * symbol:  return

```javascript
var cars = ["Saab", "Volvo", "BMW"];
```
* Variable -
	* name:  cars
* Operator -
	* name:  assignment
	* symbol: =
*	Array litteral
	* Saab, volvo, BMW

```javascript
      var scroll = function(timestamp) {
```

* Variable -
  * name:  scroll
* Operator -
  * name:  assignment
  * symbol: =
  * name:  conditional
  * symbol:  ()
  * name:  block
  * symbol:  {}


```javascript
        startTime = startTime || timestamp
```
* Operator -
  * name:  assignment
  * symbol: =
  * name: logical
  * symbol:  ||

```javascript
        var elapsed = timestamp - startTime
```

* Variable -
  * name: elapsed
* Function -
  * symbol:  timestamp
* Operator -
  * name:  assignment
  * symbol: =
  * name:  arithmetic
  * symbol:  -  

```javascript
        var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
```

* Variable -
  * name: progress
* Operator -
  * name:  assignment
  * symbol: =
  * name:  conditional
  * symbol:  ()
  * name:  block


```javascript
        root.scrollTop = progress
```
* Operator -
  * name:  assignment
  * symbol: =

```javascript
        elapsed < duration && requestAnimationFrame(scroll)   }
```

* Operator -
  * name:  conditional
  * symbol:  ()
  * name: logical
  * symbol:    &&

```javascript
  var links = document.querySelectorAll("a.scroll")
```
*  Variable -
   *       symbol:  links
   *       value:  `docuent.querySelectorAll`
*  Operator -
   *       name:  assignment
   *       symbol:  =
   *       operands:  links
*  Identifier -
   *       symbol:  ()  parentheses
*  Type Litteral -
   *       name:  document.querySelectorAll
   *       name:  a.scroll
*  Keyword-
   *       name:  Variable Declaration
   *       symbol:  var
*

~~~

```javascript
var i = links.length
```
*  Variable -
   *       symbol:  i
*  Operator -
   *       name:  assignment
   *       symbol:  =
   *       operand:  i
*  Type Literal -
   *       name:  links
*  Keyword -
   *       name:  Variable Declaration
   *       symbol:  var
*

~~~

```javascript
  var easeInOutCubic = function(t, b, c, d) {
```
*  Variable -
   *       symbol:  easeInOutCubic
*  Function -
   *       name:  t, b, c, d
*  Operator -
   *       name:  conditional
   *       symbol:  ()
*  Operator -
   *       name:  block
   *       symbol:  {}
*  Operator -
   *       name:  separator
   *       symbol:  ,
*  Keyword -
   *       name:  Variable Declaration
   *       symbol:  var

```javascript
    if ((t/=d/2) < 1) return c/2*t*t*t + b
```

*  Keyword -
   *       name:  conditional
   *       symbol:  if

```javascript
    return c/2*((t-=2)*t*t + 2) + b }
```

*  Keyword -
   *       name:  output
   *       symbol:  return

```javascript
Math.floor(4.7)
```
*	Math Object
	*	name:  Math.floor
	*	description:  rounds a number down to the nearest integer

```javascript
x === "5"
```

*	Comparison Operator
	*	Operator: ===
	*	Description:  equal value and equal type

```javascript
x <= 8
```

*	Comparison Operator:
	*	Operator: <=
	*	Description:  less than or equal to

```javascript
x !== "5"
```

* Comparison Operator:
	*	Operator: !==
	*	Description:  not equal value or not equal type

~~~
