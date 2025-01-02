numbers = [1, 2]

try:
    print(numbers[3])
except IndexError:
    print("Index not in the the list")

try:
    age = int(input("Age: "))
except ValueError:
    print("Age must be an integer")

file = None
try:
    file = open("loops.py")
except FileNotFoundError:
    print("File could not be opened")
finally:
    file.close()
