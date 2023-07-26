---
publishDate: 'Jan 5 2023'
title: 'List, Set and Dictionary Python Comprehensions'
image: '~/assets/images/python.webp'
category: 'Tutorials'
tags: ['python', 'development', 'list', 'set', 'dictionary', 'comprehensions']
---

List, set, and dictionary comprehensions are concise ways to create new sequences from existing sequences in Python. They are often faster and more memory-efficient than using traditional loops and functions like map(), filter(), and for to achieve the same result. In this article, we will explore how to use comprehensions in Python and compare them to their traditional counterparts.

### 📝 List Comprehensions

List comprehensions are a concise way to create a new list from an existing list or iterable. Here is an example of creating a new list of the squares of the numbers 0 through 9 using a traditional for loop:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = []

for number in numbers:
  squares.append(number ** 2)

print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

We can achieve the same result using a list comprehension like this:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = [number ** 2 for number in numbers]

print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

List comprehensions can also include an optional condition, called a predicate, which is used to filter the elements of the list. Here is an example of creating a new list of the even squares of the numbers 0 through 9 using a list comprehension with a predicate:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
even_squares = [number ** 2 for number in numbers if number % 2 == 0]

print(even_squares)  # [0, 4, 16, 36, 64]
```

### 🧩 Nested Loops in List Comprehensions

List comprehensions can also include multiple for clauses to perform a nested loop. Here is an example of creating a new list of all the possible pairs of numbers from 0 through 3 using a traditional for loop:

```python
pairs = []

for i in range(4):
  for j in range(4):
    pairs.append((i, j))

print(pairs)  # [(0, 0), (0, 1), (0, 2), (0, 3), (1, 0), (1, 1), (1, 2), (1, 3), (2, 0), (2, 1), (2, 2), (2, 3), (3, 0), (3, 1), (3, 2), (3, 3)]
```

We can achieve the same result using a list comprehension with two for clauses like this:

```python
pairs = [(i, j) for i in range(4) for j in range(4)]

print(pairs)  # [(0, 0), (0, 1), (0, 2), (0, 3), (1, 0), (1, 1), (1, 2), (1, 3), (2, 0), (2, 1), (2, 2), (2, 3), (3, 0), (3, 1), (3, 2), (3, 3)]
```
### 🧰 Multiple Conditionals in List Comprehensions

List comprehensions can also include multiple conditionals to specify more complex logic. Here is an example of creating a new list of the numbers 0 through 9, but with the even numbers replaced with "even" and the odd numbers replaced with "odd" using a traditional for loop and an if-else statement:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
labels = []

for number in numbers:
  if number % 2 == 0:
    labels.append("even")
  else:
    labels.append("odd")

print(labels)  # ["even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd"]
```
We can achieve the same result using a list comprehension with multiple conditionals like this:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
labels = ["even" if number % 2 == 0 else "odd" for number in numbers]

print(labels)  # ["even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd"]
```

### 🌀 Nested List Comprehensions

List comprehensions can be nested to create more complex sequences. Here is an example of creating a new list of the multiplication tables for the numbers 0 through 3 using a traditional for loop and a nested for loop:

```python
tables = []

for i in range(4):
  table = []
  for j in range(4):
    table.append(i * j)
  tables.append(table)

print(tables)  # [[0, 0, 0, 0], [0, 1, 2, 3], [0, 2, 4, 6], [0, 3, 6, 9]]
```

We can achieve the same result using a nested list comprehension like this:

```python
tables = [[i * j for j in range(4)] for i in range(4)]

print(tables)  # [[0, 0, 0, 0], [0, 1, 2, 3], [0, 2, 4, 6], [0, 3, 6, 9]]
```

### 🔢 Set Comprehensions

Set comprehensions are similar to list comprehensions, but they create a new set rather than a list.

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = set()

for number in numbers:
  squares.add(number ** 2)

print(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}
```
We can achieve the same result using a set comprehension like this:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = {number ** 2 for number in numbers}

print(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}
```

### 📖 Dictionary Comprehensions

Dictionary comprehensions are similar to list and set comprehensions, but they create a new dictionary rather than a list or set.

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = {}

for number in numbers:
  squares[number] = number ** 2

print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
```
We can achieve the same result using a dictionary comprehension like this:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = {number: number ** 2 for number in numbers}

print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
```

### 🔍 Comparison to Traditional Loops and Functions

Comprehensions can often be more concise and faster than their traditional counterparts. Here is an example of creating a new list of the squares of the numbers 0 through 9 using the **map()** function and a lambda function:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = list(map(lambda x: x ** 2, numbers))

print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

And here is an example of creating a new list of the even squares of the numbers 0 through 9 using the **filter()** and **map()** functions and a lambda function:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
even_squares = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers)))

print(even_squares)  # [0, 4, 16, 36, 64]
```

While these traditional approaches are still valid, comprehensions offer a more concise and Pythonic way to achieve the same results.
Conclusion

List, set, and dictionary comprehensions are concise and efficient ways to create new sequences from existing sequences in Python. They are often faster and more memory-efficient than using traditional loops and functions like for, **map()**, and **filter()**. Comprehensions can include conditionals and nested loops to specify more complex logic, and they can be nested to create more complex sequences. They are a powerful and flexible tool that can make your code more readable and efficient.

### 🙋 Get in touch

If you have any questions or suggestions I will be happy to read them, you can email me to [me@ivansalazar.dev](mailto:me@ivansalazar.dev)