#Assume you are given a string of lowercase letters in variable s. Count how many unique letters there are in the string.
# s = "abcddddfffgggeee"
# unique = ""
# for char in s:
#     if char not in unique:
#         unique += char

# print(len(unique))

#Guess and Check
#Square root with while loop

# guess = 0
# neg_flag = False
# x = int(input("Enter an integer: "))
# if x < 0:
#     neg_flag = True
# while guess**2 < x:
#     guess = guess + 1
# if guess**2 == x:
#     print("Square root of", x, "is", guess)
# else:
#     print(x, "is not a perfect square")
#     if neg_flag:
#         print("Just checking... did you mean", -x, "?")

#Find a num
#Hardcode a number as a secret number
#Write a program that checks through all the numbers from 1 to 10 and prints the secret value if it's in that range. If it's not found, it doesn't print anything
#How does the program look if we change the requirement to be: if it's not found, prints that it didn't find it.

# secret_num = 1
# found = False

# for i in range(1,11):
#     if (i == secret_num):
#         print(f"You got the number: {secret_num}")
#         found = True

# if not found:
#     print("Better luck next time") 

#Guess and check cube root

# cube = int(input("Enter an integer: "))
# for guess in range(abs(cube) + 1):
#     if guess**3 >= abs(cube):
#         break
# if guess**3 != abs(cube):
#     print(cube, "is not a  perfect cube")
# else:
#     if cube < 0:
#         guess = -guess
#     print("cube root of " + str(cube) + " is " + str(guess))


x = 0
for i in range(10):
    x += 0.1
print(x == 1)
print(x, "==", 10*0.1)