n = int(input("Enter your number: "))

if n % 2 != 0:
    spaces = 0
    while n > 0:
        stars = n * 2 - 1
        print(" " * spaces + "*" * stars)
        spaces += 1
        n -= 1
else:
    print("Input should be an odd number.")
