from sys import getsizeof

vals = (x * 2 for x in range(10000000000))
print(vals)

# for x in vals:
#     print(x)

# This only shows the size in memory
print("Generator size: ", getsizeof(vals))
