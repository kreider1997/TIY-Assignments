```javascript
  var links = document.querySelectorAll("a.scroll")
```
*  variable = `links`
*  value is `docuent.querySelectorAll`
  
~~~

```javascript
var i = links.length
```
*  variable = `i`
*  value is `links.length`

~~~

```javascript
  var easeInOutCubic = function(t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b
    return c/2*((t-=2)*t*t + 2) + b
  }
```
*  variable = `eaeInOutCubic` 
*  value is a function expression `(t, b, c, d)`
*  that returns an if statment with two possiblities `c/2*t*t*t + b` and `c/2*((t-=2)*t*t + 2) + b`
*  grouping operators are `()`
  
~~~

```javascript
  while (i--) 
    links.item(i).addEventListener("click", function(e) 
        {
      var startTime
      var startPos = root.scrollTop
      var endPos = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top
      var maxScroll = root.scrollHeight - window.innerHeight
      var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos
      var duration = 900
      var scroll = function(timestamp) {
        startTime = startTime || timestamp
        var elapsed = timestamp - startTime
        var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
        root.scrollTop = progress
        elapsed < duration && requestAnimationFrame(scroll)
      }   
```
    
*  while condition true = `links.item(i).addEventListener`
*  while condition false = `requestAnimationFrame(scroll)`
*  logical AND statment '&&'
*  evaluates `duration` and `requestAnimationFrame(scroll)`




