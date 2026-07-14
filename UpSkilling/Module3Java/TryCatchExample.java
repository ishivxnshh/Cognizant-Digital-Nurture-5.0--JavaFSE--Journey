package Upskilling.Module3Java;

import java.util.Scanner;

public class TryCatchExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {

            // Input two integers
            System.out.print("Enter first number: ");
            int num1 = sc.nextInt();

            System.out.print("Enter second number: ");
            int num2 = sc.nextInt();

            // Division
            int result = num1 / num2;

            System.out.println("Result = " + result);

        } catch (ArithmeticException e) {

            System.out.println("Error: Division by zero is not allowed.");

        }

        sc.close();
    }

}