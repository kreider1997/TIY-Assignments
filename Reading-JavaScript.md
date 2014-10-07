----
###Items below done in third week.
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
  var i, log = '';
  if (!DEBUG) {
    return;
  }
```
* Function -
  * symbol:  debugLog
* Variable -
  * name: i
* Operator -
  * name:  conditional
  * symbol:  ()
  * name:  block
  * symbol: {}
  * name:  separator
  * symbol:  ,
  * name:  assignment
  * symbol:  =
  * name:  comparason
  * symbol:  !
* Keyword -
  * name:  conditional
  * symbol:  if
  * name:  output
  * symbol:  return

```javascript
      var scroll = function(timestamp) {
        startTime = startTime || timestamp
        var elapsed = timestamp - startTime
        var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
        root.scrollTop = progress
        elapsed < duration && requestAnimationFrame(scroll)
      }
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


----
### Items below done in second week.

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
    if ((t/=d/2) < 1) return c/2*t*t*t + b
    return c/2*((t-=2)*t*t + 2) + b
  }
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
*  Keyword -
   *       name:  conditional
   *       symbol:  if
*  Keyword -
   *       name:  output
   *       symbol:  return
*


~~~
