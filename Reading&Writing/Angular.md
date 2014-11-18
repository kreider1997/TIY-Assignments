Source:  [API documentation](https://docs.angularjs.org/api/)
###Function
  * angular.module -- Global place for creating, registering and retrieving Angular modules.
    * Usage - angular.module(name, [requires], [configFn]);
    * Example (create a new module):
           var myModule = angular.module ('myMoodule', []);
    * Arguments:
     * name - the name of the module to create or retieve.  This is a string
     * requires - optional.  If specified, a new module is created.  If not specified, then the module is being retrieved for further use.
     * confiigFn - opitonal.  Configuration function for the module.  Same as Module#config()
    * Returns a new module with the angular.Module api
  * angular.extends -- Copies properties from src object(s) to dst.
    * Usage - angular.extend(dst, src);
    * Example - var object = angular.extend({}, object1, object2)
    * Arguments:
     * dst - destination object
     * src - source object
    * Returns an object reference to dst.
  * angular.copy -- Creates a deep copy of source, which should be an object or array.  Will create a copy if no destination is provided.  If destination is provided, it will replace anything in the destination with the new source.
    * Usage - angular.copy(source, [destination]);
    * Example with two arguments- angular.copy($scope.master, $scope.user);  
    * Arguments:
     * source - the course that will be used to provide the copy.
     * destination - optional.  Source will be copied to this.
    * Returns a copy.
  * angular.element -- Wraps a raw DOM element or HTML sting as a jQuery element.  If jQuery is available, this is an alias for the jQuery function.  If jQuery is not available, it delegates to angular's built-in subset of jQuery.
    * Usage - angular.element(element);
    * Example - 
    * Argument:
     * element - HTML string or DOMElement to be wrapped into jQuery
    * Returns a jQuery object.

###Directive
  * ngApp
  * ngBind
  * ngClass
  * ngClick
  * ngController
  * ngDblclick
  * ngForm
  * ngKeyup
  * ngModel
  * ngRepeat
  * ngSubmit
