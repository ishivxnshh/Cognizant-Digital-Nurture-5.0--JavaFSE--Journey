package Upskilling.Module3Java;

import java.util.Scanner;

public class EvenorOddChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input number
        System.out.print("Enter an integer: ");
        int number = sc.nextInt();

        // Check even or odd
        if (number % 2 == 0) {
            System.out.println(number + " is Even.");
        } else {
            System.out.println(number + " is Odd.");
        }

        sc.close();
    }

}