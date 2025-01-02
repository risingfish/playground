from timeit import timeit

numbers = [1, 2]

try:
    print(numbers[3])
except IndexError:
    print("Index not in the the list")

# try:
#     age = int(input("Age: "))
# except ValueError:
#     print("Age must be an integer")

file = None
try:
    file = open("loops.py")
except FileNotFoundError:
    print("File could not be opened")
finally:
    file.close()

code1 = """
def calculate_xfactor(age):
    if age <= 0:
        raise ValueError("Age must be positive")
    return 10 / age


try:
    calculate_xfactor(-1)
except ValueError as error:
    pass
"""

code2 = """
def calculate_xfactor(age):
    if age <= 0:
        return None
    return 10 / age


if calculate_xfactor(-1) == None:
    pass
"""

print(timeit(code1, number=10000))
print(timeit(code2, number=10000))
