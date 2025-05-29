'''
Global Scope

The scope which is not inside any other function or code block. The outer most scope.

Eg:

pi = 3.14
def get_area_of circle(radius):
    return pi* radius * radius

Here the pi is declared in the parent "global scope" so it is available to any other function.


Assignment
Let's change how we are calculating our player's stats! The only thing we should need to define globally is the character level and then let our functions do the rest!

Declare the variable player_level at the top of the global scope and set it to 4.

'''

player_level = 4


def calculate_health(modifier):
    return player_level * modifier


def calculate_primary_stats(armor_bonus, modifier):
    return armor_bonus + modifier + player_level


print(f"Character has {calculate_health(10)} max health.")

print(f"Character has {calculate_primary_stats(3, 8)} primary stats.")
