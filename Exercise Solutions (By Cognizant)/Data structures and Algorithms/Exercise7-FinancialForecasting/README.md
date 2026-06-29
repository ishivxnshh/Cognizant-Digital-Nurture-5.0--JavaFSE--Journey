# Exercise 7 - Financial Forecasting

## Recursion

Recursion means a method calls itself. Every recursive method needs a base case that stops it, and a recursive case that moves toward that base case.

It works well here because compound growth is the same operation repeated every year - so we can just let each recursive call handle one year.

## How the method works

Formula: FV = PV * (1 + r)^n

Instead of computing the power directly, each call multiplies by (1 + rate) once and passes the remaining years down.

Example - 3 years at 8%:
```
futureValue(10000, 0.08, 3)
  -> futureValue(10000, 0.08, 2) * 1.08
    -> futureValue(10000, 0.08, 1) * 1.08
      -> futureValue(10000, 0.08, 0) * 1.08
        -> 10000  (base case)
```

## Time complexity

O(n) - one call per year. Stack depth is also n, so space is O(n) too.

## Optimization

Since each call depends on the previous one, memoization doesn't really help here. But for problems where the same year might be computed from multiple branches, storing results in a HashMap would save time.

For very large n, the simple iterative version (just a loop) is safer because it avoids stack overflow and uses O(1) space.

## Files

- `FutureValueCalculator.java` - recursive method
- `ForecastTest.java` - test class

## Run

```
javac *.java
java ForecastTest
```
