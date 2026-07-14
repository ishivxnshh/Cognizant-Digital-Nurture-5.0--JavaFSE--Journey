package Upskilling.Module3Java;

public class PatternMatchingSwitch {

    // Method to check object type
    static void checkType(Object obj) {

        switch (obj) {

            case Integer i ->
                System.out.println(i + " is an Integer.");

            case String s ->
                System.out.println("\"" + s + "\" is a String.");

            case Double d ->
                System.out.println(d + " is a Double.");

            case null ->
                System.out.println("Object is null.");

            default ->
                System.out.println("Unknown Object Type.");

        }

    }

    public static void main(String[] args) {

        checkType(100);
        checkType("Hello Java");
        checkType(45.75);
        checkType(true);

    }

}