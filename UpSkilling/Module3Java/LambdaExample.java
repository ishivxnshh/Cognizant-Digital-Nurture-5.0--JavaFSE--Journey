package Upskilling.Module3Java;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaExample {

    public static void main(String[] args) {

        // Create a list of strings
        List<String> names = new ArrayList<>();

        names.add("John");
        names.add("Alice");
        names.add("David");
        names.add("Bob");

        // Sort the list using a lambda expression
        Collections.sort(names, (a, b) -> a.compareTo(b));

        // Display the sorted list
        System.out.println("Sorted Names:");

        for (String name : names) {
            System.out.println(name);
        }

    }

}