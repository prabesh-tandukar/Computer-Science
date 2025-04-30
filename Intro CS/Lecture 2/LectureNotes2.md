# MIT 6.100L Lecture 2: Strings, Input/Output, and Branching

## 🧠 Recap from Lecture 1

- **Objects and Types**: All values in Python are objects and have types that determine what operations can be performed on them.
- **Expressions**: Combine objects and operators; they evaluate to a single value.
- **Variables**: Bind names to objects using `=`.
  ```python
  var = type(5*4)
  ```
- **Programs**: Execute line by line; order matters. Use **good variable names** and **comments** for readability.

---

## 📚 Strings

- **Definition**: A `str` is a sequence of **case-sensitive characters** (letters, digits, symbols, whitespace).
- **Syntax**: Use `" "` or `' '`. Just be consistent.
  ```python
  a = "me"
  z = 'you'
  ```

### String Operations

- **Concatenation & Repetition**
  ```python
  b = "myself"
  c = a + b       # "memyself"
  d = a + " " + b # "me myself"
  silly = a * 3   # "mememe"
  ```

### `YOU TRY IT`

```python
b = ":"
c = ")"
s1 = b + 2 * c   # s1 = ":))"

f = "a"
g = " b"
h = "3"
s2 = (f + g) * int(h)  # s2 = "a b a b a b "
```

---

## 🔢 String Functions and Indexing

### Length

- `len(s)` returns the number of characters in a string.
  ```python
  s = "abc"
  len(s)  # 3
  ```

### Indexing (Slicing for Single Character)

- Use `[]` to get character by index.

  ```python
  s = "abc"
  s[0]  # 'a'
  s[-1] # 'c'
  ```

- Indices:
  - Forward: `0 1 2`
  - Backward: `-3 -2 -1`

### Substring Slicing

```python
s = "abcdefgh"
s[3:6]    # 'def'
s[3:6:2]  # 'df'
s[:]      # 'abcdefgh'
s[::-1]   # 'hgfedcba'
s[4:1:-2] # 'ec'
```

### `YOU TRY IT`

```python
s = "ABC d3f ghi"
s[3:len(s)-1]  # " d3f gh"
s[4:0:-1]      # "3 dC"
s[6:3]         # "" (empty string, invalid slice)
```

---

## 🔒 Immutability of Strings

- Strings are immutable. You **cannot change characters** directly.
  ```python
  s = "car"
  s[0] = 'b'      # ❌ Error
  s = 'b' + s[1:] # ✅ "bar"
  ```

---

## 🖨️ Input and Output

### `print()`

```python
a = "the"
b = 3
c = "musketeers"
print(a, b, c)          # the 3 musketeers
print(a + str(b) + c)   # the3musketeers
```

### `input()`

- `input(prompt)` reads a string from the user.
- Returns a **string** by default — use `int()` or `float()` to cast.

```python
text = input("Type anything: ")
print(5 * text)  # Repeats text 5 times

num1 = input("Type a number: ")
print(5 * num1)  # Repeats string

num2 = int(input("Type a number: "))
print(5 * num2)  # Multiplies as number
```

### `YOU TRY IT`

Write a program that:

- Asks the user for a verb.
- Prints: `I can <verb> better than you!`
- Then prints the verb 5 times.

```python
verb = input("Enter a verb: ")
print(f"I can {verb} better than you!")
print((verb + " ") * 5)
```

---

## 🧮 Newton’s Method (Cube Root)

```python
x = int(input('What x to find the cube root of? '))
g = int(input('What guess to start with? '))
print('Current estimate cubed = ', g**3)

next_g = g - ((g**3 - x)/(3*g**2))
print('Next guess to try = ', next_g)
```

---

## 🔤 f-Strings

```python
num = 3000
fraction = 1/3
print(f'{num * fraction} is {fraction * 100}% of {num}')
```

---

## ⚖️ Boolean Logic and Comparisons

### Assignment vs Equality

```python
x = 5      # assignment
x == 5     # equality test → True
```

### Comparison Operators

```python
i > j, i < j, i >= j, i <= j
i == j  # equality
i != j  # inequality
```

### Logical Operators

| A     | B     | A and B | A or B |
| ----- | ----- | ------- | ------ |
| True  | True  | True    | True   |
| True  | False | False   | True   |
| False | True  | False   | True   |
| False | False | False   | False  |

---

## 🔁 Branching

### if / else / elif Syntax

```python
if <condition>:
    <code block>
elif <another_condition>:
    <code block>
else:
    <default code>
```

### Example

```python
pset_time = ???
sleep_time = ???

if (pset_time + sleep_time) > 24:
    print("impossible!")
elif (pset_time + sleep_time) == 24:
    print("full schedule!")
else:
    leftover = 24 - pset_time - sleep_time
    print(leftover, "h of free time!")

print("end of day")
```

### Common Errors: Indentation

```python
x = int(input("Enter x: "))
y = int(input("Enter y: "))

if x == y:
    print(f"{x} is the same as {y}")
    print("These are equal!")
```

---

## 🧪 Practice Code Logic

```python
answer = ''
x = 11
y = 11

if x == y:
    answer += 'M'
if x >= y:
    answer += 'i'
else:
    answer += 'T'
print(answer)
```

Try modifying the conditions or values of `x`, `y` to see the output.

---

## 🎯 Final Practice Task

Write a program that:

- Saves a secret number.
- Asks for a guess.
- Tells the user if it's too high, too low, or correct.

```python
secret = 7
guess = int(input("Guess the number: "))

if guess < secret:
    print("Too low!")
elif guess > secret:
    print("Too high!")
else:
    print("Correct!")
```

---

## ✅ Summary

- **Strings** are sequences of characters. Use slicing and indexing.
- **`input()`** always returns a string. Cast for numerical use.
- **`print()`** outputs to the console.
- **Branching** allows control flow with `if`, `elif`, `else`.
- **Booleans** (`True`, `False`) and logical operators drive decisions.
- **Indentation** is critical in Python!

---
