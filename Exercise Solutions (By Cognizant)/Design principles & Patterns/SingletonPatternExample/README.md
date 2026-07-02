# SingletonPatternExample

Exercise 1 — Design Principles & Patterns

## What this does

Demonstrates the Singleton pattern using a `Logger` class. Only one instance of `Logger` is ever created — `getInstance()` returns the same object every time.

## Files

- `Logger.java` — the singleton class
- `SingletonTest.java` — verifies both references point to the same instance

## Run

```bash
javac *.java
java SingletonTest
```