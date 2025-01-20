from collections import namedtuple


class Point():
    def __init__(self, x, y):
        self.x = x
        self.y = y


# Named tuples are immutable
Point2 = namedtuple("Point2", ["x", "y"])

p1 = Point(1, 2)
p2 = Point(1, 2)

p3 = Point2(x=1, y=2)
p4 = Point2(x=1, y=2)

print(p1 == p2)
print(p3 == p4)
