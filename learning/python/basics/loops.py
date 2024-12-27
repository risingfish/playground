# For/in blocks
for letter in 'Python':
    print(letter, end='.')

print('\n')
# Print 0 - 9
for x in range(10):
    print(x, end=' ')

print('\n')
# Print even numbers
for x in range(2, 10, 2):
    print(x, end=' ')

names = ["John", "Mary", "Bob"]

# For else blocks
for name in names:
    if name.startswith('J'):
        print("Found", name)
        break
else:
    print("Not Found")

guess = 0
answer = 5
while answer != guess:
    guess = int(input("Guess: "))
    if guess == answer:
        print("Correct!")

        break;
else:
    print("Bad block!")
