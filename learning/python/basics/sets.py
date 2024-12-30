numbers = [2, 2, 3, 3, 4, 5, 5, 6]
first = set(numbers)
second = {1, 2, 5, 7}

# union
print(first | second)
# intersection
print(first & second)
# difference
print(first - second)
# symmetric difference
print(first ^ second)
