# This is a global variable
message2 = 'Hello World 2!'


def greet():
    if True:
        # this a block level scope, scoped to the function
        message = "Hello World!"

    print(message)

    # Python creates a local variable that shadows the global variable
    message2 = "Hello World 2 Internal!"
    print(message2)


greet()
print(message2)
