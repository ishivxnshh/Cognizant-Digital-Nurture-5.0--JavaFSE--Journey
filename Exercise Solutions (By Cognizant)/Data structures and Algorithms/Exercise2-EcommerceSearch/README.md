# Exercise 2 - E-commerce Platform Search Function

## Big O Notation

Big O tells you how an algorithm scales as the input gets larger. It's useful for comparing two solutions without worrying about the machine they run on.

Common ones to know:
- O(1) - constant, doesn't depend on size
- O(log n) - fast, halves the problem each step (binary search)
- O(n) - goes through each element once (linear search)
- O(n^2) - nested loops, gets slow quickly

## Search - Best, Average and Worst Cases

Linear search:
- Best case: O(1) - the item is the first one
- Average case: O(n) - somewhere in the middle
- Worst case: O(n) - last element or not in the list

Binary search:
- Best case: O(1) - middle element matches
- Average case: O(log n)
- Worst case: O(log n) - element not found

## Which one to use?

For an e-commerce platform with thousands of products, binary search is clearly better. If the product list is sorted by ID, each search call cuts the remaining candidates in half. Linear search would have to scan every product in the worst case.

The trade-off is that binary search needs the array to be sorted. Linear search works on any order, so it's fine for small or unsorted lists.

## Files

- `Product.java` - product class with id, name and category
- `LinearSearch.java` - simple loop-based search
- `BinarySearch.java` - divide and conquer search (sorted array)
- `SearchTest.java` - runs both and prints results

## Run

```
cd "c:\Users\Shivansh\Documents\Cognizant Digital Nurture 5.0 (JavaFSE) Journey\Exercise Solutions (By Cognizant)\Data structures and Algorithms\Exercise2-EcommerceSearch"
javac *.java
java SearchTest
```
