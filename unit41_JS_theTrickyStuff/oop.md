# Object Oriented Programming

### Objectives
* Define what OOP is
* Revist 'new' keyword
* Use constructor functions to reduce duplication in code
* use call and apply to refactor constructor func


#### What is OOP
* programming model based on the idea of objects
* constructed from classes
  * act like a blueprint
  * objects created from classes are called instances
  * should be abstract and modular so we can reuse and share them
  

#### 'new' Keyword
* creates an empty objects
* it then sets 'this' to that empty objects
* add the line `return this` to the end of the function which follows capitalized
* add `__proto__` property which links the prototype property on the constructor function to the empty object

#### Constructor functions
* capitalized name
* utilize 'this'
* we are attaching properties to this keyword

#### Refactor with call/apply

#### Prototypes
* Every constructor function has a property on it called 'prototype' which is an object.
* The prototype object has a property on it called 'constructor' which points back to the constructor function. 
* anytime an object is created using the 'new' keyword, a property called '__proto__' gets created, linking the object and the prototype property of the constructor function.


> Person --> .prototype -->    Person
>          <-- .constructor <--  .prototype
>                                  /     \
>                                 .__proto__
>                                /         \
>                               Elie       Colt
