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