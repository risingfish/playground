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
