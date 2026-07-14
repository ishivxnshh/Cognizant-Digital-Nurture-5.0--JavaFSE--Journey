package Upskilling.Module3Java;

import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Create ArrayList
        ArrayList<String> studentNames = new ArrayList<>();

        // Number of students
        System.out.print("Enter the number of students: ");
        int n = sc.nextInt();
        sc.nextLine();

        // Add names to the ArrayList
        for (int i = 1; i <= n; i++) {

            System.out.print("Enter student name " + i + ": ");
            String name = sc.nextLine();

            studentNames.add(name);
        }

        // Display all names
        System.out.println("\nStudent Names:");

        for (String name : studentNames) {
            System.out.println(name);
        }

        sc.close();
    }

}