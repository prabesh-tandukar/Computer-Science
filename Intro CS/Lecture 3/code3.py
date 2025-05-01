# Finger Exercise Lecture 3
# Assume you are given a positive integer variable named N. Write a piece of Python code that prints hello world on separate lines, N times. You can use either a while loop or a for loop.

N = int(input("Enter a number: "))

for N in range(1, N+1):
    print("hello world\n")