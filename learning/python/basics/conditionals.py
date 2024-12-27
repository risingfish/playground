age = 13
if age >= 18:
    print("You are an adult.")
elif 12 < age < 18:
    print("You are a teenager")
else:
    print("You are a child")

name = "Zac"

if not name.strip():
    print("String is not empy")

# Ternary
# message = age >= 18 ? "Eligible" : "Not eligible"
message = "Eligible" if age >= 18 else "No eligible"
