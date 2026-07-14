package Upskilling.Module3Java;

import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Create HashMap
        HashMap<Integer, String> students = new HashMap<>();

        // Number of students
        System.out.print("Enter the number of students: ");
        int n = sc.nextInt();

        // Add student details
        for (int i = 1; i <= n; i++) {

            System.out.print("Enter Student ID: ");
            int id = sc.nextInt();
            sc.nextLine();

            System.out.print("Enter Student Name: ");
            String name = sc.nextLine();

            students.put(id, name);
        }

        // Retrieve student name by ID
        System.out.print("\nEnter Student ID to search: ");
        int searchId = sc.nextInt();

        if (students.containsKey(searchId)) {
            System.out.println("Student Name: " + students.get(searchId));
        } else {
            System.out.println("Student ID not found.");
        }

        sc.close();
    }

}