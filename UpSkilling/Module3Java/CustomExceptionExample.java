package Upskilling.Module3Java;

import java.util.Scanner;

// Custom Exception
class InvalidAgeException extends Exception {

    InvalidAgeException(String message) {
        super(message);
    }

}

public class CustomExceptionExample {

    // Method to check age
    static void checkAge(int age) throws InvalidAgeException {

        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above.");
        } else {
            System.out.println("Access Granted.");
        }

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        try {

            checkAge(age);

        } catch (InvalidAgeException e) {

            System.out.println("Exception: " + e.getMessage());

        }

        sc.close();
    }

}