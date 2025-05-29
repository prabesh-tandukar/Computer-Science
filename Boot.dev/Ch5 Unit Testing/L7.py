'''
Assignment
Let's complete the unlock_achievement function. It accepts 3 arguments:

before_xp: int
ach_xp: int
ach_name: str
It should return 2 values:

The player's xp after the achievement is unlocked (The sum of before_xp and ach_xp)
An alert message that says "Achievement Unlocked: ACHIEVEMENT_NAME", where ACHIEVEMENT_NAME is the name of the achievement

'''

def unlock_achievement(before_xp, ach_xp, ach_name):
    total_xp = before_xp + ach_xp
    message = f"Achievement Unlocked: {ach_name}"
    
    return total_xp, message


print(unlock_achievement(1000, 100, "Hunter"))