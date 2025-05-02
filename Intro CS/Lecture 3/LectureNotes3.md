# MIT 6.100L Lecture 3: Iteration

## 🧠 Recap from Last Lecture

- **Strings**: Sequences of characters (index starts at 0); support indexing and slicing.
- **Input**: Done using `input()`; returns a string.
- **Output**: Done using `print()`.
- **Branching**: Use `if`, `elif`, and `else` to execute code conditionally.
- **Indentation**: Python uses indentation to define blocks of code.

## 🔁 Iteration (Loops)

### Why Iterate?

- To repeat code execution until a condition is met or over a sequence of elements.

---

## 🔄 `while` Loops

### Syntax

```python
while <condition>:
    <code>
    <code>
```

- Executes the block **while the condition is `True`**.
- If the condition **never becomes False**, the loop runs forever.

### Example: Lost Forest

```python
where = input("You're in the Lost Forest. Go left or right? ")
while where == "right":
    where = input("You're in the Lost Forest. Go left or right? ")
print("You got out of the Lost Forest!")
```

### Example: Countdown

```python
n = int(input("Enter a non-negative integer: "))
while n > 0:
    print('x')
    n -= 1
```

### Infinite Loop Example

```python
while True:
    print("noooooo")  # Use CTRL-C to interrupt
```

### Counter Example

```python
where = input("Go left or right? ")
counter = 0
while where == "right":
    counter += 1
    where = input("Go left or right? ")
if counter > 2:
    print(":(")
print("You got out!")
```

---

## ➰ Common Pattern: Calculating Factorial with `while`

```python
x = 4
i = 1
factorial = 1
while i <= x:
    factorial *= i
    i += 1
print(f"{x} factorial is {factorial}")
```

---

## 🔂 `for` Loops

### Syntax

```python
for <variable> in <sequence>:
    <code>
```

- `variable` takes each value in the sequence, one by one.

### Example

```python
for n in range(5):
    print(n)
```

- `range(5)` generates: `0, 1, 2, 3, 4`

---

## 📏 `range(start, stop, step)`

- `start`: beginning value (default: 0)
- `stop`: end value (exclusive)
- `step`: increment (default: 1)

### Examples

```python
for i in range(1, 4, 1):  # 1 to 3
    print(i)

for j in range(1, 4, 2):  # 1, 3
    print(j*2)

for me in range(4, 0, -1):  # 4, 3, 2, 1
    print("$" * me)
```

---

## ➕ Running Sum Example

```python
mysum = 0
for i in range(10):  # i = 0 to 9
    mysum += i
print(mysum)  # Output: 45
```

### Custom Range Sum

```python
start = 3
end = 6
mysum = 0
for i in range(start, end + 1):
    mysum += i
print(mysum)  # Output: 12
```

---

## 🧮 Factorial with `for` Loop

```python
x = 4
factorial = 1
for i in range(1, x+1):
    factorial *= i
print(f"{x} factorial is {factorial}")
```

---

## 💡 Big Ideas

- **while loops**: Run **as long as** the condition is true (may loop forever).
- **for loops**: Iterate **over a sequence** (e.g., `range`, strings).
- Loop variable takes values in order from the sequence.

---

## ✅ Summary

- **while loops**:

  - Use when you don’t know how many times to iterate.
  - Careful with infinite loops!

- **for loops**:

  - Use when looping over a known range or sequence.
  - Use `range()` to generate a sequence of numbers.

- Practice writing and tracing loops to build confidence!
