package Upskilling.Module3Java;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamAPIExample {

    public static void main(String[] args) {

        // Create a list of integers
        List<Integer> numbers = Arrays.asList(10, 15, 20, 25, 30, 35, 40);

        // Filter even numbers using Stream API
        List<Integer> evenNumbers = numbers.stream()
                                           .filter(num -> num % 2 == 0)
                                           .collect(Collectors.toList());

        // Display the result
        System.out.println("Even Numbers:");
        System.out.println(evenNumbers);

    }

}