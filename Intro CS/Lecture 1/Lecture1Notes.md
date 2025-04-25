# Types of Knowledge

- Declarative knowledge is statement of fact

* Imperative knowledge is a recipe of "how to"

- Programming is about writing recipes to generate facts

# Numerical Example

- Square root of a number _x_ is _y_ such that _y \* y = x_

* Start with a _guess_, _g_:
  1. If _g \* g_ is close enough to _x_, stop and say _g_ is the answer
  2. Otherwise make a new guess by averaging _g_ and _x/g_
  3. Using the new guess, repeat process until close enough

## We have an Algorithm:

1. Sequence of simple steps
2. Flow of control process that specifies when each step is executed
3. A means of determining when to stop

> Algorithms are recipes / recipes are Algorithms

# Computers are Machines that execute Algorithms

- Two things computers do:

  - Performs simple operations 100s of billions per second !
  - Remembers results

- What kinds of calculations ?

  - Built-in to the machine, e.g., +, -,
  - Ones that you define as the programmer

- The Big Idea here ?

  - A computer will only do what you tell it to do

- Fixed program computer
  - Fixed set of algorithms
  - What we had until 1940's
- Stored program computer computer
  - Machines stores and executes instructions
- Key insight: Programs are no different from other kinds of data

### Stored program computer:

- Sequence of instructions stored inside computer

  - Built from predefined set of primitive instructions

  1. Arithmetic and logical
  2. Simple tests
  3. Moving data

- Special program (interpreter) executes each instruction in order

  - Use tests to change flow of control through sequence
  - Stops when it runs out of instructions or executes a halt instruction

  ## Basic Primitives:

  - Turing showed that you can compute anything with a very simple machine with only 6 primitive: left, right, print, scan, erase, no op

  - Real programming languages have

    - More convenient set of primitives
    - Ways to combine primitives to create new primitives

  - Anything computable in one language is computable in any other programming language

## ASPECTS of LANGUAGES:

- Primitive constructs
  - English: words
  - Programming language: numbers, strings, simple operators
- Syntax:

  - English:
    - "cat dog boy" -> not syntactically valid
    - "cat hugs boy" -> syntactically valid
  - Programming language:
    - "hi"5 -> not syntactically valid
    - "hi" \* 5 -> syntactically valid
  - Static semantics: which syntactically valid strings have meaning
    - English: "I are hungry" -> syntactically valid but static semantic error
    - PL: "hi"+ 5 -> syntactically valid but static semantic error

- Semantics: the meaning associated with a syntactically correct string of symbols with no static semantic errors

- English: can have manu meaning _"The chicken is ready to eat."_

- Programs have only one meaning

- But the meaning may not be what programmer intended

### Where things go wrong

- Syntactic errors:

  - Common and easily caught

- Static semantic errors:

  - Some languages check for these before running program
  - Can cause unpredcitable behaviour

- No linguistic errors, but different meaning than what programmer intended
  - Program crashes, stops running
  - Program runs forever
  - Program gives an answer, but it's wrong

## Python programs:

- A program is a sequence of definitions and commands

  - Definitions evaluated
  - Commands executed by Python interpreter in a shell

- Commands (statements) instruct interpreter to do something

- Can be typed directly in a shell or stored in a file that is read into the shell and evaluated
  - Problem Set 0 will introduce you to these in Anaconda

### Objects:

- Programs manipulate data objects
- Objects have a type that defines the kinds of things programs can do to them

  - 30
    - Is a number
    - We can add/sub/mult/div/exp/ etc
  - 'Ana'
    - Is a sequence of characters (aka a string)
    - We can grab substrings, but we can't divide it by a number

- Scalar (cannot be subdivided)

  - Numbers: 8.3, 2
  - Truth value: True, False

- Non-scalar (have internal structure that can be accessed)
  - Lists
  - Dictionaries
  - Sequence of characters: "abc"

### Scalar Objects:

- int : represent integers, ex.5, -100,
- float: represent real numbers, ex.3.27, 2.0
- bool : represent Boolean value _True_ and _False_
- NoneType: special and has one value, _None_
- Can use _type()_ to see the type of an object

### Type conversions (casting)

- Can convert object of one type to another

  - float(3) casts the int 3 to float 3.0
  - int(3.9) casts (note the truncation!) the float 3.9 to int 3

- Some operations perform implicit casts
  - round(3.9) returns the int 4

### Expressions:

- Combine objects and operators to form expressions:

  - 3 + 2
  - 5/3

- An expression has a value, which has a type

  - 3 + 2 has value 5 and type int
  - 5/3 has value 1.6666667 and type float

- Python evaluated expressions and stores the value. It doesn't store expressions!

- Syntax for a simple expression: <object> <operator> <object>

### Operators on int and float

- i + j -> the sum
- i - j -> the difference
- i \* j -> the product
- i / j -> division
- i // j -> floor division
- i % j -> the remainder when i is divided by j
- i \*\* j -> i to the power of j

### Simple Operations:

- Parentheses tell Python to do these operations first ( like math )
- Operator precedence without parentheses
  1. \*\*
  2. - / % (executed left to right)
  3. - - (executed left to right)

### Variables

- computer science variables are different than math variables

- Math Variables:

  - Abstract
  - Can represent many values

- CS variables
  - Is bound to one single value at a given time
  - Can be bound to an expression (but expressions evaluate to one value)

### Binding Variables to Values

- In CS, the equal sign is an assignment

  - One value to one variable name
  - Equal sign is not equality, not "solve for x"

- An assignment binds a value to name

  - pi = 355/113

- Step 1: Compute the value on the right hand side (the VALUE)

  - Value stored in computer memory

- Step 2: Store it (bind it) to the left hand side ( the variable )

  - Retrieve value associated with name by invoking the name (typing it out)

  ### Abstracting expressions

  - Why give names to values of expressions ?

    - To reuse names instead of values
    - Makes code easier to read and modify

  - Choose variable names wisely

  - Change Bindings:
    - Can re-bind variable names using new assignment statements
    - Previous value may still stored in memory but lost the handle for it

  > Big Idea: Lines are evaluated one after the other

# Summary:

- Objects:

  - Objects in memory have types
  - Types tell Python what operations you can do with the objects.
  - Expressions evaluate to one value and involve objets and operations.
  - Variables bind names to objects.
  - = sign is an assignment, for ex. var = type (5 \* 4)

- Programs
  - Programs only do what you tell them to do.
  - Lines of code are executed in order
  - Good variable names and comments help you read code later.
