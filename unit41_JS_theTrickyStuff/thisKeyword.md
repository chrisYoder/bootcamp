# This Keyword

## Introduction

### Objectives
* Define what the keyword 'this' is 
* Understand the four ways to always figrue out what the keyword 'this' this

#### What is the keyword 'this'?
* A reserved keyword in Javascript 
* Usually determined by how a function is called
	* execution context
* Can be determined by using four rules

#### Four ways to figure out what 'this' this
* global: 
	* this rules is applicable when you see the keyword this outside a declared object.
	* "use strict"; helps us avoid accidentally assign variables to global scope.
* object/implicit:
	* Object:
    * when 'this' is used inside an object the value will be the closest parent object.
		* don't use arrow functions in an object if you want 'this' to refer to the parent object because 'this' in an arrow function refers to function itself.
	* Implicit
    * All this means is that we allow js to automatically determine the context of 'this'
* explicit:
  * This allows us to determine what we want the context of 'this' to be.
    * Can only be used by functions or methods
  
| Name of method | parameters | invoke immediately | effect |
| --- | :---  : | :---   : | :---:|
| call|thisArg, a, b, c ...|Yes| thisArg = 'this' context |
|apply|thisArg, [a, b, c, ....]| Yes| very similar to call|
|bind|thisArg, a, b, c,...|No|the same as call but allows us to see what we are binding to|
    
* new: 
	* you can set the context of this using the 'new' keyword
  *