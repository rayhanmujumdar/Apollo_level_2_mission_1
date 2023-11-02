# 2-1 Typescript props and cons

**props:**

1. Need  es3 support in older browser but you like moden syntax?
    1. useing typescript
2. Typescript code can be transpiled into older versions of javascript
    1. TS
    2. ES3
    3. ES5
    4. ES6
3. Benefits of using Typescript
    1. Supports older browser
    2. Type safety
    3. Increase your Productivity
    4. Less Bugs and less Testing
4. Js types in TS
    1. Number 
    2. string
    3. boolean
    4. Null
    5. Undifined
    6. Object
    7. Symbol
5. TS Own Types
    1. Interface
    2. Void
    3. Array
    4. Tuple
    5. Enum
    6. Union
    7. Intersection
6. Better suggestion in vs code using typescript.

**Cons:**

1. DrawBacks of using Typescipt
    1. Type complexities
    2. Limited library support
    3. over Engineering
    4. Migration Challenges

**Q&A:**

1. what is typescript?
    
    **Answer**: Typescript is an Object Oriented programming language that is built on top of JS with Extra Features.
    
2. Lacking in javascript !
    - javascript is dynamical Type language
    - Exmaple:
        
        ```jsx
        // string
        let a = "I love javascript"
        // number
        a = 20
        
        // boolean
        a = false
        
        // object
        a = {
        	name: 'Rayhan',
        	age: 24
        }
        // function
        a = function(x,y){
        	return x + y
        }
        ```
        
3. When working in a large application with multiple developers?
    - Very difficult to main large Codebase
    - Hard to find bugs
    - Catch errors only in runtime
4. Can browser recognize typescript code?
    - No