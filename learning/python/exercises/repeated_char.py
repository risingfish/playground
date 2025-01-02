from pprint import pprint

sentence = "This is a common interview question"
counts = {}
for letter in sentence:
    if not letter in counts:
        counts[letter] = 1
    else:
        counts[letter] += 1

largest = -1
most = ''

for key, val in counts.items():
    if val > largest:
        largest = val
        most = key

pprint(counts, width=20)
print("---------------------------------------------")
print(most)

sorted_list = sorted(counts.items(), key=lambda x: x[1], reverse=True)
print(sorted_list[0])
