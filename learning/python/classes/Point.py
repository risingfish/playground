class Point:
    default_color = "red"

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __gt__(self, other):
        return self.x > other.x and self.y > other.y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    # static method
    @classmethod
    def zero(cls):
        cls(0, 0)

    # Instance method
    def draw(self):
        print(f"Point ({self.x}, {self.y})")


point = Point(4, 5)
point2 = Point(4, 5)
point.draw()
print(type(point))
print(isinstance(point, Point))
print(point)
print(point == point2)

print(str(point + point2))
