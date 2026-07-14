package Upskilling.Module3Java;

import java.util.Scanner;

public class RecursiveFibonacci {

    // Recursive method
    static int fibonacci(int n) {

        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input value of n
        System.out.print("Enter a positive integer: ");
        int n = sc.nextInt();

        if (n < 0) {
            System.out.println("Please enter a positive integer.");
        } else {
            System.out.println("Fibonacci number at position " + n + " = " + fibonacci(n));
        }

        sc.close();
    }

}