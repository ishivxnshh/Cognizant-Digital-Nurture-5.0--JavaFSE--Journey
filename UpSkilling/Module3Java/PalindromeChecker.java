package Upskilling.Module3Java;

import java.util.Scanner;

public class PalindromeChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input string
        System.out.print("Enter a string: ");
        String text = sc.nextLine();

        // Remove non-alphanumeric characters and convert to lowercase
        text = text.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        // Reverse the string
        String reversed = new StringBuilder(text).reverse().toString();

        // Check palindrome
        if (text.equals(reversed)) {
            System.out.println("The string is a Palindrome.");
        } else {
            System.out.println("The string is Not a Palindrome.");
        }

        sc.close();
    }

}