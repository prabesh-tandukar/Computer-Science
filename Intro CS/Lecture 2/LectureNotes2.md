# Strings, Input/Output, and Branching

### Recap for lecture 1:

- Objects:

  - Objects in memory have types.
  - Types tell Python what operations you can do with the objects.
  - Expressions evaluate to one value and involve objects and operations.
  - Variables bind names to objects.
  - = Sign is an assignment, for eg. _var = type (5\*4)_

- Programs
  - Programs only do what you tell them to do.
  - Lines of code are executed in order.
  - Good variable names and comments help you read code later.

## Strings:

- Thin of a _str_ as a sequence of case sensitive characters:
  - Letters, special characters, spaces, digits
- Enclose in quotation marks or single quotes
  - Just be consistent about the quotes
    _a = "me"_
    _z = 'you'_
- Concatenate and repeat strings:
  - b = "myself"
  - c = a + b
  - d = a + " " + b
  - silly = a \* 3

### String Operations:

- len() is a function used to retrieve the length of a string in the parentheses

  - s = "abc"
  - len(s) -> evaluated to 3
  - chars = len(s)

### Slicing to get One Character in a String:

- Square brackets used to perform indexing into a string to get the value at a certain index/position.

  ```
    s = "abc"
    s[0] -> "a"
    s[1] -> "b"
    s[2] -> "c"
    s[3] -> error/ index out of bounds

    s[-1] -> "c"
    s[-2] -> "b"
    s[-3] -> "a"

  ```

### Slicing to get a Substring:

- Can slice string using [start:stop:step]
- Get characters at start up to and including stop-1 taking every step characters
- If give two numbers, [start:stop], step=1 by default
- If give one number, you are back to indexing for the character at one location (prev slide)
- You can also omit numbers and leave just colons

### Slicing examples:

- Can slice strings using [start:stop:step]
- Look at step first. +ve means go left-to-right, -ve means go right-to-left

  ```
  s = "abcdefgh"
  s[3:6] => "def"
  s[3:6:2] => "df"
  s[:] => "abcdefgh"
  s[::-1] -> "hgfedcba"
  s[4:1:-2] => "ec"

  ```

### Immutable Strings:

- Strings are "immutable" - cannot be modified
- You can create new objects that are versions of the original ones.
- Variable name can only be bound to one object

  ```
  s = "car"
  s[0] = 'b' -> gives an error
  s = 'b'+s[1:len(s)] -> is allowed, s bound to new object

  ```
