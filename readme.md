# Day 1

Problem: Given a number N, check whether it is a even number or odd number.

Test Cases:

Input: 2
Output: Even

Input: 3
Output: Odd

Algorithm 1:

Checking the divisibility of 2

- Get the input number N
- Check whether the number is divisible by 2 by using the modulo operator
- If the number is divisible by 2, then print "Even" else print "Odd"

Algorithm 2:

Checking for the last digit of the number

- Get the input number N
- Get the last digit of the number
- Check if the last digit is 0, 2, 4, 6, 8 then print "Even" else print "Odd"

Algorithm 3:

Checking for the last bit of the number

- Get the input number N
- Check the last bit of the number
- If the last bit is 0, then print "Even" else print "Odd"

Algorithm 4:

Subtract the number by 2 until the number becomes 0 or 1

- Get the input number N
- Subtract the number by 2 until the number becomes 0 or 1
- If the number becomes 0, then print "Even" else print "Odd"

Algorithm 5:

Add the number by 2 until the number becomes N or exceeds N

- Get the input number N
- Add the number by 2 until the number becomes N or exceeds N
- If the number becomes N, then print "Even" else print "Odd"

Questions:

- [x] Prime Number
- [ ] writing one solutions instead of using built-in methods
- [x] time complexities - code optimization
- [ ] leet code examples
- [ ] pattern programming
- [ ] test cases - positive, negative, boundary, edge

1. To check whether a number is a even number or odd number
2. To check whether a number is a prime number or not
3. To check whether a number is a palindrome number or not
4. To check whether a number is a perfect number or not
5. To check whether a number is a armstrong number or not
6. To check whether a number is a fibonacci number or not

# Day 2

## 2. Prime Number

What is a prime number?

A prime number is a number that is greater than 1 and has only two factors: 1 and itself.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97...

Problem: Given a number N, check whether it is a prime number or not.

Test Cases:

Input: 2
Output: Prime

Input: 3
Output: Prime

Input: 4
Output: Not Prime

Input: 5
Output: Prime

Input: 6
Output: Not Prime

Algorithm 1:

- Get the input number N
- Find the number of factors of the number - subroutine <- numberOfFactors
- If the number of factors is 2, then print "Prime"
- Else if the number of factors is greater than 2, then print "Not Prime"

Homework Problems:

1. To check whether a number is a fibonacci number or not

Test Cases:

Input: 2
Output: Fibonacci

Input: 3
Output: Fibonacci

Input: 4
Output: Not Fibonacci

Input: 5
Output: Fibonacci

Input: 6
Output: Not Fibonacci

2. To check whether two numbers are amicable numbers or not

Test Cases:

Input: 220, 284
Output: Amicable

Input: 1184, 1210
Output: Amicable

Input: 2620, 2924
Output: Amicable

Input: 5020, 5563
Output: Not Amicable

3. To check whether a number is a perfect number or not

Explanation:

A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

Test Cases:

Input: 6
Output: Perfect

Input: 28
Output: Perfect

Input: 496
Output: Perfect

4. To check whether a number is a armstrong number or not

Explanation:

An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.

Test Cases:

Input: 153
Output: Armstrong

Input: 370
Output: Armstrong

Input: 9474
Output: Armstrong

5. To check whether a number is a palindrome number or not

Explanation:

A palindrome number is a number that remains the same when its digits are reversed.

Test Cases:

Input: 121
Output: Palindrome

Input: 123
Output: Not Palindrome

# Day 3

Time Complexity

### Topics

- Problem Solving
- Time Complexity
- Arrays & Strings
- Sorting & Searching Algorithms
- Recursion
- Pattern Programming
- Data Structures
  - Linked List
  - Stacks and Queues
