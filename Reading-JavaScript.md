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


----

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
      var scroll = function(timestamp) {
```

```javascript
        startTime = startTime || timestamp
```

```javascript
        var elapsed = timestamp - startTime
```

```javascript
        var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
```

```javascript
        root.scrollTop = progress
```

```javascript
        elapsed < duration && requestAnimationFrame(scroll)   }
```

* Variable -
  * name:  scroll
  * name: elapsed
  * name: progress
* Operator -
  * name:  assignment
  * symbol: =
  * name:  conditional
  * symbol:  ()
  * name:  block
  * symbol:  {}
  * name: logical
  * symbol:  ||   &&
  * name:  comparison
  * symbol:  <
  * name:  arithmetic
  * symbol:  -
* Function -
  * symbol:  timestamp
* Identifier -



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
*


~~~
