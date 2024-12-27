# Python function definition
# added the pfun live template.
def increment(number: int, by: int = 1) -> tuple:
    return number, by, number + by


# A keyword argument is naming the specific argument when calling a function
print(increment(5, by=2))


# arbitrary number of arguments
# *user comes in as a tuple
def multiply(*list):
    total = 1
    for number in list:
        total *= number
    return total


print(multiply(1, 2, 3, 4))
