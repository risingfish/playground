class Animal:
    def __init__(self, age):
        self.age = age

    def eat(self):
        print('eat')


class Mammal(Animal):
    def __init__(self):
        super().__init__(1)
        self.weight = 2

    def walk(self):
        print("walk")


class Fish(Animal):
    def swim(self):
        print("swim")


print("============= Mammal")
m = Mammal()
m.eat()
m.walk()
print(m.age)
print(m.weight)

print("============= Fish")
f = Fish(2)
f.swim()
print(f.age)

print("============= Instanceof")
print(isinstance(m, Mammal))
print(isinstance(m, Animal))
print(isinstance(m, object))
print("======================= Subclass of Animal")
print(isinstance(m, Animal))
