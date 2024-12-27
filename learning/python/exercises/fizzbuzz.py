# if input is divisible by 3, return fizz
# if input is divisible by 5, return buzz
# if input is divisible by 3 and 5, return fizzbuzz


def fizzbuzz(val):
    out = 'fizz' if val % 3 == 0 else ''
    out = f"{out}buzz" if val % 5 == 0 else out
    return val if not out else out


print(fizzbuzz(9))
print(fizzbuzz(10))
print(fizzbuzz(15))
print(fizzbuzz(7))
print(fizzbuzz(13))
print(fizzbuzz(90))
print(fizzbuzz(40))
print(fizzbuzz(18))
