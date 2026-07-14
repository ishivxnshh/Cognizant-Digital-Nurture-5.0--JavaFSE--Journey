package Upskilling.Module3Java;

import java.util.Scanner;

public class LeapYearChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input year
        System.out.print("Enter a year: ");
        int year = sc.nextInt();

        // Check leap year
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println(year + " is a Leap Year.");
        } else {
            System.out.println(year + " is Not a Leap Year.");
        }

        sc.close();
    }

}