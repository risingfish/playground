from abc import ABC, abstractmethod


class UIControl(ABC):
    @abstractmethod
    def draw(self):
        pass


# Inheritance
class TextBox(UIControl):
    def draw(self):
        print("TextBox")


# Duck typing
class TextBox2:
    def draw(self):
        print("TextBox")


# Inheritance
class DropDownList(UIControl):
    def draw(self):
        print("DropDownList")


# Duck typing
class DropDownList2:
    def draw(self):
        print("DropDownList")


def draw(controls):
    for control in controls:
        control.draw()


ddl = DropDownList()
tb = TextBox()
draw([ddl, tb])
