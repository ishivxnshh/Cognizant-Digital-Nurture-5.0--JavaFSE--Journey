# FactoryMethodPatternExample

This exercise shows the Factory Method pattern using simple document types.

## Files

- `Document.java` - common document interface
- `WordDocument.java` - concrete Word document
- `PdfDocument.java` - concrete PDF document
- `ExcelDocument.java` - concrete Excel document
- `DocumentFactory.java` - abstract factory
- `WordDocumentFactory.java` - creates Word documents
- `PdfDocumentFactory.java` - creates PDF documents
- `ExcelDocumentFactory.java` - creates Excel documents
- `FactoryDemo.java` - demo class

## Run

```bash
cd "c:\Users\Shivansh\Documents\Cognizant Digital Nurture 5.0 (JavaFSE) Journey\Exercise Solutions (By Cognizant)\Data structures and Algorithms\Exercise2-EcommerceSearch"
javac *.java
java FactoryDemo
```