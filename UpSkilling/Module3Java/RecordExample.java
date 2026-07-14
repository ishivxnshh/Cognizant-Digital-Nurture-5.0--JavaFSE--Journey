package Upskilling.Module3Java;

import java.util.List;
import java.util.stream.Collectors;

// Record
record Person(String name, int age) { }

public class RecordExample {

    public static void main(String[] args) {

        // Create Person objects
        Person p1 = new Person("Alice", 22);
        Person p2 = new Person("Bob", 16);
        Person p3 = new Person("Charlie", 20);

        // Print records
        System.out.println("Person Details:");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);

        // Store records in a list
        List<Person> people = List.of(p1, p2, p3);

        // Filter persons with age 18 or above
        List<Person> adults = people.stream()
                                    .filter(person -> person.age() >= 18)
                                    .collect(Collectors.toList());

        // Display filtered list
        System.out.println("\nPeople with Age 18 or Above:");

        for (Person person : adults) {
            System.out.println(person);
        }

    }

}