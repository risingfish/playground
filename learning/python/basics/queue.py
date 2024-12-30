from collections import deque

q = deque([])
q.append(1)
q.append(2)
q.append(3)
q.append(4)
q.append(5)
q.append(6)
q.append(7)

q.popleft()
print(q)

if not q:
    print("Queue is empty")
