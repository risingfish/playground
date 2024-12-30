# Repeating lists
letters = ['a', 'b', 'c', 'd']
zeros = [0] * 11
combined = letters + zeros
print(zeros)
print(combined)

# Get list with numbers 0-19 (20 numbers)
r_numbers = list(range(20))
print(r_numbers)

# Iterate over list chars
chars = list("Hello World")
print(chars)

# Get all even umbers
print(r_numbers[::2])

# Reverse a list
print(r_numbers[::-1])

# Unpacking a list
first, second, third, *other = r_numbers
print(first, second, third, sep=':')
print(other)

# unpacking a lists ends
first, *other, last = r_numbers
print(first, last, other)

# for list enumeration to get an index with the value
for index, letter in enumerate('Python'):
    print(index, letter, sep='.', end=' | ')
print('\n')

# Appending onto the end of the list
letters.append('e')
print(letters)
letters.insert(2, '-')
print(letters)

# Removing
print(letters.pop(2))
print(letters)
letters.remove('e')
print(letters)

# Getting a list element by index.
if "d" in letters:
    print(letters.index("d"))

numbers2 = [3, 51, 23, 19, 40]
print(numbers2)
numbers2.sort()
print(numbers2)
numbers2.sort(reverse=True)
print(numbers2)

# sorting complex objects
items = [
    ('apple', 12),
    ('orange', 9),
    ('banana', 10),
]


def sort_item(item):
    return item[1]


# items.sort(key=sort_item)
items.sort(key=lambda item: item[1])
print(items)

prices = list(map(lambda item: item[1], items))
print(prices)

greater_prices = list(filter(lambda item: item[1] >= 10, items))
print(greater_prices)
# Comprehension for filtering
greater_prices2 = [item for item in items if item[1] >= 10]

# Comprehension for map
other_prices = [item[1] for item in items]
