point = {"x": 1, "y": 2}
point2 = dict(a=5, b=9, x=1, y=2, z=20)

# One way
if "a" in point:
    print(point["a"])

# Other way
print(point.get("a", 0))

del point["y"]

for key, value in point2.items():
    print(key, value)

# comprehension
# [expression for item in items]
vals = {x: x * 2 for x in range(5)}
print(vals)
