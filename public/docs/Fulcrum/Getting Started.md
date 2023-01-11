# Fulcrum 0.8.8
A fast and straight forward scripting language with a tiny binary and a functional programming paradigm. 

## Documentation

## Features:

 - Higher order functions.

 - An extremely minimal and basic syntax.

 - An compact interpreter that can be packaged with your project.

## Language Rules:

 - Assignments, function calls, and return statements must be ended with a `;`

 - Operators are not yet a part of the language but operations can be done via functions.

 - Functions defined inside of other functions only are callable inside of the parent function and inherit all of the parent function's variables and function definitions.

 - Higher order functions must include a function name, this requirement will be taken out once a new syntax for function literals is added.

 - When exiting any scope, all variables defined within that scope are deleted.

 - Nothing is passed by reference, all variables are modified via the `=` asignment operator.
