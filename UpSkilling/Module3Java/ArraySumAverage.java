package Upskilling.Module3Java;

import java.util.Scanner;

public class ArraySumAverage {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input number of elements
        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();

        int[] numbers = new int[n];
        int sum = 0;
        double average;

        // Read array elements
        System.out.println("Enter the array elements:");

        for (int i = 0; i < n; i++) {
            numbers[i] = sc.nextInt();
            sum += numbers[i];
        }

        // Calculate average
        average = (double) sum / n;

        // Display result
        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);

        sc.close();
    }

}