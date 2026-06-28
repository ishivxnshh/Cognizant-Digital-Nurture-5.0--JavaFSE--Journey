public class DocumentFactoryTest {
    public static void main(String[] args) {

        DocumentFactory factory;
        Document doc;

        // Word document
        factory = new WordDocumentFactory();
        doc = factory.createDocument();
        System.out.println("Type: " + doc.getType());
        doc.open();
        doc.save();
        doc.close();

        System.out.println();

        // PDF document
        factory = new PdfDocumentFactory();
        doc = factory.createDocument();
        System.out.println("Type: " + doc.getType());
        doc.open();
        doc.save();
        doc.close();

        System.out.println();

        // Excel document
        factory = new ExcelDocumentFactory();
        doc = factory.createDocument();
        System.out.println("Type: " + doc.getType());
        doc.open();
        doc.save();
        doc.close();
    }
}
