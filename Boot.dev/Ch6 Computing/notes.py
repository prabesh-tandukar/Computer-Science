'''
Python Numbers
In Python, numbers without a decimal point are called Integers - just like they are in mathematics.

Integers are simply whole numbers, positive or negative. For example, 3 and -3 are both examples of integers.

Arithmetic can be performed as you might expect:

Addition
2 + 1
# 3

Subtraction
2 - 1
# 1

Multiplication
2 * 2
# 4

Division
3 / 2
# 1.5 (a float)

This one is actually a bit different - division on two integers will actually produce a float. A float is, as you may have guessed, the number type that allows for decimal values.

Assignment
Complete the missing sections of the calculate_damage function.

Fix the total_damage variable so that it contains the sum of all the different weapons' and spells' damage values.
Fix the average_damage variable so that it contains the average of the combined weapon and spell damage.
'''

def calculate_damage(sword, arrow, spear, dagger, fireball):
    total_damage = sword + arrow + spear + dagger  + fireball
    average_damage = total_damage / 5
    return total_damage, average_damage


'''
Floats
A float is, as you may have guessed, the number type that allows for decimal values.

my_int = 5
my_float = 5.5

'''

'''
Floor Division
Python has great out-of-the-box support for mathematical operations. This, among other reasons, is why it has had such success in artificial intelligence, machine learning, and data science applications.

Floor division is like normal division except the result is floored afterward, which means the result is rounded down to the nearest integer. The // operator is used for floor division.

7 // 3
# 2 (an integer, rounded down from 2.333)
-7 // 3
# -3 (an integer, rounded down from -2.333)
'''

'''

Exponents
Python has built-in support for exponents - something most languages require a math library for.

# reads as "three squared" or
# "three raised to the second power"
3 ** 2
# 9

'''

'''
Changing in Place
It's fairly common to want to change the value of a variable based on its current value.

player_score = 4
player_score = player_score + 1
# player_score now equals 5

player_score = 4
player_score = player_score - 1
# player_score now equals 3

Don't let the fact that the expression player_score = player_score - 1 is not a valid mathematical expression be confusing. It doesn't matter, it is valid code. It's valid because the way the expression should be read in English is:

Assign to player_score the current value of player_score minus 1

In this operation, the right-hand side (player_score - 1) is calculated first. Once we have the result, we update player_score with this new value.

Assignment
Complete the update_player_score function. It should add increment to current_score and then return the new current_score.

'''

def update_player_score(current_score, increment):
    current_score += increment
    return current_score

# print(update_player_score(10, 12))


'''
Plus Equals
Python makes reassignment easy when doing math. In JavaScript or Go, you might be familiar with the ++ syntax for incrementing a number variable by 1. In Python, we use the += in-place operator instead.

star_rating = 4
star_rating += 1
# star_rating is now 5

Other Operators
The other in-place operators work similarly:

star_rating = 4
star_rating -= 1
# star_rating is now 3

star_rating = 4
star_rating *= 2
# star_rating is now 8

star_rating = 4
star_rating /= 2
# star_rating is now 2.0

Assignment
Complete the get_hurt function. It should use the -= in-place operator to subtract damage from current_health and then return the new current_health.

'''

def get_hurt(current_health, damage):
    current_health -= damage
    return current_health


'''

Scientific Notation
As we covered earlier, a float is a positive or negative number with a fractional part.

You can add the letter e or E followed by a positive or negative integer to specify that you're using scientific notation.

print(16e3)
# Prints 16000.0

print(7.1e-2)
# Prints 0.071

If you're not familiar with scientific notation, it's a way of expressing numbers that are too large or too small to conveniently write normally.

In a nutshell, the number following the e specifies how many places to move the decimal to the right for a positive number, or to the left for a negative number.

Underscores for Readability
Python also allows you to represent large numbers in the decimal format using underscores as the delimiter instead of commas to make it easier to read.

num = 16_000
print(num)
# Prints 16000

num = 16_000_000
print(num)
# Prints 16000000

Assignment
Due to the constraints of our app's server, there is a maximum number of players we can have on a single Fantasy Quest server.

Complete the max_players_on_server function. It takes no inputs, but simply returns 3 static numbers:

The max players on a "small" server: 1,024,000,000,000,000,000 (1.024e18)
The max players on a "medium" server: 10,240,000,000,000,000,000
The max players on a "large" server: 102,400,000,000,000,000,000
Use scientific notation to represent these numbers. For example: 3.104e15.

'''

def max_players_on_server():
    small = 1.024e18
    medium = 1.024e20
    large = 1.024e21
    return small, medium, large

print(max_players_on_server())


"""
Logical Operators
You're probably familiar with the logical operators and and or.

Logical operators deal with boolean values, True and False.

The logical and operator requires that both inputs are True to return True. The logical or operator only requires that at least one input is True to return True.

For example:

True and True == True
True and False == False
False and False == False

True or True == True
True or False == True
False or False == False

Python Syntax
print(True and True)
# prints True

print(True or False)
# prints True

Nesting With Parentheses
We can nest logical expressions using parentheses.

print((True or False) and False)

First, we evaluate the expression in the parentheses, (True or False). It evaluates to True:

print(True and False)

True and False evaluates to False:

print(False)

So, print((True or False) and False) prints "False" to the console.

"""

"""
Not
We skipped a very important logical operator - not. The not operator reverses the result. It returns False if the input was True and vice-versa.

print(not True)
# Prints: False

print(not False)
# Prints: True

"""