# Finger Exercise Lecture 2
# Assume you are given a variable named number (has a numerical value). Write a piece of Python code that prints out one of the following strings: 

# positive if the variable number is positive
# negative if the variable number is negative
# zero if the variable number is equal to zero

number = int(input("Enter a number: "))

if (number > 0):
    print("Number is positive")
elif (number < 0):
    print("Number is negative")
else:
    print("Number is zero")