import java.util.*;
public class calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println("Choose an operation b/w +, -, *, /");
        String op = sc.next();

        if (op.equals("+"))
            System.out.println(a + b);
        else if(op.equals("-"))
            System.out.println(a - b);
        else if(op.equals("*"))
            System.out.println(a * b);
        else if(op.equals("/"))
            System.out.println(a / b);
        else 
            System.out.println("Invalid Operation");
    }
}