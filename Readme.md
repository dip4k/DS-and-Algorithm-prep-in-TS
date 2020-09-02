# Data Structures & Algorithms practice in TypeScript

## Introduction

> This is practice repo for Udemy course [Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/) purely written in Typescript.

## Dev Setup

---

#### pre-requisite : node/deno installed

- using vs code (with prettier, eslint and typescript support installed)
- using eslint for code standard and prettier for formatting
- using (node + ts-node) or deno to run program files

### how to run

---

- clone this repo
- install npm packages by running --> npm install
- when using deno, execute program file by running --> deno run fileLocation/filename.ts
- when using node+ts-node --> ts-node fileLocation/filename.ts

## Will add test cases for testing program files

## Main Topics

---

### How to measure code/program quality?

#### Time complexity

- how much time needed to execute program as we increase input
  (input can be anything, and our code will perform operations on input)
- We express time complexity of code in terms of Big-O notation.
- O(1) - Big-O of one : _constant time_ --> will take same time to execute irespective of input
- O(n) - Big-O of N : _Linear time_ --> execution time will increase linearly as we increase input
- O(n^2)- Big-O of N-square : _Quadratic time_ --> execution time will increase quadratically(to the square of input) as we increase input

#### space complexity

- how much memory need for executing the program

### Data structures

---

### Array

---

#### programs

- [x] intro to array
- [x] own custom array
- [x] reverse given string
- [x] merge two sorted array into one (**bonus** : merge unsorted array in ascending or descending order)

#### Array operations and their time complexity

- insertion --> O(n)
- deletion --> O(n)
- search --> O(1)
- traversal --> o(1)

### Hash Table

---

#### programs

- [x] custom hash table
- [x] first recurring character
- [x] custom generic hash table

#### Time complexity

- search --> avg : O(1), worst : O(n)
- insertion --> avg : O(1), worst : O(n)
- deletion --> avg : O(1), worst : O(n)

#### Space complexity

- O(n)

### Linked-List

---

#### Programs

- [x] linked-list implementation in typescript

#### Opeartions

- prepend --> O(1)
- append ---> O(1)
- lookup --> O(n)
- insert --> O(n)
- delete --> O(n)

## Interview Questions

---

- [x] google-interview question
- [x] [two sum - from leet code](https://leetcode.com/problems/two-sum/)

### Array/string additional questions

- [x] [move zeroes to end - from leet code](https://leetcode.com/problems/move-zeroes/)
- [x] [contains duplicate - from leet code](https://leetcode.com/problems/contains-duplicate/description/)
- [x] [longest word - from coder byte](https://coderbyte.com/editor/Longest%20Word:JavaScript)
- [x] [rotate array (right shift) - from leet code](https://leetcode.com/problems/rotate-array/description/)

## Resources

- [master the interview mindmap](https://coggle.it/diagram/W5u8QkZs6r4sZM3J/t/master-the-interview)
- [algorithm mindmap](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)
