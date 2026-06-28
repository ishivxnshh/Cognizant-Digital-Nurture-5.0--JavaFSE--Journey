public abstract class DocumentFactory {
    public abstract Document createDocument();

    public void showDocument() {
        Document document = createDocument();
        document.open();
    }
}