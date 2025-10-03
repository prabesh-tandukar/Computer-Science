## **MIT 6.100L Lecture 4: Iteration, While Loops, and Approximation Algorithms**

---

### **0. Last Lecture:**

- Looping Mechanism
  - While and for loop

-While loops:

- Loop as long as a condition is true
- Need to make sure we don't enter an infinite loop

- For Loops
  - Loop variable takes on values in a sequence, one at a time
  - Can loop over ranges of numbers

### break STATEMENT:

- Immediately exits whatever loop it is in
- Skips remaining expressions in code block
- Exits only innermost loop!

```python

while <condition_1>:
  while <condition_2>:
    <expression_a>
    break
    <expression_b>
  <expression_c>
```

Here in this code

### **1. Iteration Concepts**

- **Iteration**: Repeating a block of code multiple times.
- **Loop**: Structure that supports iteration.
  - Python provides `for` and `while` loops.

---

### **2. While Loops**

- **Syntax**:
  ```python
  while condition:
      # block of code
  ```
- Continues running while the condition is `True`.
- Use when the number of iterations is not known in advance.

---

### **3. Control Statements**

- `break`: Exits the loop immediately.
- `continue`: Skips the current iteration and proceeds with the next one.

---

### **4. Example: Guessing a Number**

- Demonstrated how `while` loops can be used to approximate or guess a number.
- Using feedback from conditions to home in on a solution.

---

### **5. Approximation Algorithms**

- Used when exact solutions are difficult or impossible to calculate.
- Key idea: get close enough to the answer through iteration.

---

### **6. Example: Cube Root Approximation**

- Problem: Find cube root of a number using **approximation**.
- **Algorithm**:
  - Guess a value.
  - Increment the guess.
  - Stop when the cube of guess is close enough to the target.
- Introduced `epsilon` (tolerance) to define acceptable error range.

---

### **7. Bisection Search**

- More efficient than simple approximation.
- Cuts search space in half each iteration.
- Used for problems with a monotonic function.

**Example**: Finding square root using bisection:

```python
low = 0
high = x
guess = (high + low)/2

while abs(guess**2 - x) >= epsilon:
    if guess**2 < x:
        low = guess
    else:
        high = guess
    guess = (high + low)/2
```

---

### **8. Summary**

- **While loops** are essential for running code until a condition is met.
- **Approximation and bisection** are powerful techniques for solving problems with iterative methods.
- These methods illustrate how computers can approach solutions even when a precise answer isn't easily computable.

---
