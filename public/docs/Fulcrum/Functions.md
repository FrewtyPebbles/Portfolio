## Standard Library Functions:

Functions in fulcrum return the result of their operation.

 - `print(val)` : Prints a value to the standard output.

 - `input()` : Gets user input.

 - `read(filepath)` : Returns the contents of the file provided.

 - `write(filepath, new_content, writemode)` : Writes the `new_content` to the file provided based on the writemode which can be `"a"` for append or `"t"` for truncate.

 - `add(val1, val2)` : Adds 2 values. also concatenates strings.

 - `sub(val1, val2)` : Subtracts 2 values. also removes substrings from strings.

 - `mul(val1, val2)` : Multiplies 2 values.

 - `div(val1, val2)` : divides 2 values.

 - `E(val1, val2)` : Tests if two values are equal and returns boolean.

 - `NE(val1, val2)` : Tests if two values are not equal and returns boolean.

 - `G(val1, val2)` : Tests if `val1` is greater than `val2`.

 - `L(val1, val2)` : Tests if `val1` is less than `val2`.

 - `GE(val1, val2)` : Tests if `val1` is greater than or equal to `val2`.

 - `LE(val1, val2)` : Tests if `val1` is less than or equal to `val2`.

 - `and(condition1, condition2)` : Tests if both conditions are true and returns boolean.

 - `or(condition1, condition2)` : Tests if one of the conditions are true and returns boolean.

 - `INT(val)` : Casts the type to an Int.

 - `FLOAT(val)` : Casts the type to a Float.

 - `BOOL(val)` : Casts the type to a Boolean.

 - `STRING(val)` : Casts the type to a String.

 - `cat(val1, val2, val3, ...)` : Concatenates multiple values into a string.

 - `split(string, substring)` : Splits a string by a substring.

 - `trim(string)` : Removes the leading and trailing whitespace from a string.

 - `replace(string, substring1, substring2)` : Replaces the substring1 in the string with substring2.

 - `pop(list)` : pops a value from a list.
 
 - `push(list, value)` : pops a value from a list.

 - `len(string`|`list)` : Returns the len of the first argument.

 - `range(num1, num2)` : Returns a list of integers from num1 to num2.

 - `rev(list`|`string)` : Reverses a list or string.

 - `CLI(integer)` : Returns command line arguments.

 - `import(module_path)` : imports all definitions/functions from the `.ful` file at the path specified into the current scope.