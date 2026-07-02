# FactoryMethodPatternExample

Exercise 2 — Design Principles & Patterns

## What this does

Uses the Factory Method pattern to create different document types (Word, PDF, Excel) without the client code knowing which class gets instantiated. Each factory subclass overrides `createDocument()` and returns the appropriate object.

## Files

- `Document.java` — interface all document types implement
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java` — concrete document classes
- `DocumentFactory.java` — abstract factory with the `createDocument()` factory method
- `WordDocumentFactory.java`, `PdfDocumentFactory.java`, `ExcelDocumentFactory.java` — concrete factories
- `DocumentFactoryTest.java` — test class

## Run

```bash
javac *.java
java DocumentFactoryTest
```

## Output

```
Type: Word
Opening Word document...
Saving Word document...
Closing Word document.

Type: PDF
Opening PDF document...
Saving PDF document...
Closing PDF document.

Type: Excel
Opening Excel spreadsheet...
Saving Excel spreadsheet...
Closing Excel spreadsheet.
```
