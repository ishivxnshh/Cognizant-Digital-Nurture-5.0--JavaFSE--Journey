public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First logger instance acquired.");
        logger2.log("Second logger instance acquired.");

        System.out.println("Logger 1 hash code: " + System.identityHashCode(logger1));
        System.out.println("Logger 2 hash code: " + System.identityHashCode(logger2));
        System.out.println("Same instance: " + (logger1 == logger2));
    }
}