# Returns a dictionary
# **user turns all names parameters into a dictionary object
def save_user(**user):
    print(user['id'])


save_user(id=1, name="admin")
