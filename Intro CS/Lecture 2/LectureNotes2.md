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
