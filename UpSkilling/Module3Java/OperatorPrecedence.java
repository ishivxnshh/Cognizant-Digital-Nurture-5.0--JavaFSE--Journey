package Upskilling.Module3Java;

public class OperatorPrecedence {

    public static void main(String[] args) {

        // Expression 1
        int result1 = 10 + 5 * 2;

        // Expression 2
        int result2 = (10 + 5) * 2;

        // Expression 3
        int result3 = 20 - 8 / 2;

        // Expression 4
        int result4 = (20 - 8) / 2;

        // Display results
        System.out.println("10 + 5 * 2 = " + result1);
        System.out.println("(10 + 5) * 2 = " + result2);
        System.out.println("20 - 8 / 2 = " + result3);
        System.out.println("(20 - 8) / 2 = " + result4);

        // Explanation
        System.out.println("\nOperator Precedence:");
        System.out.println("1. Parentheses () are evaluated first.");
        System.out.println("2. Multiplication (*) and Division (/) are evaluated next.");
        System.out.println("3. Addition (+) and Subtraction (-) are evaluated last.");

    }

}