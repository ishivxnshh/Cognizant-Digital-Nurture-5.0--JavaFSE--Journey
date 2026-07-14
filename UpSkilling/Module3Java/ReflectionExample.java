package Upskilling.Module3Java;

import java.lang.reflect.Method;

// Sample class
class Student {

    public void display() {
        System.out.println("Welcome to Java Reflection!");
    }

}

public class ReflectionExample {

    public static void main(String[] args) {

        try {

            // Load the class dynamically
            Class<?> cls = Class.forName("Student");

            // Create object
            Object obj = cls.getDeclaredConstructor().newInstance();

            // Get all methods
            Method[] methods = cls.getDeclaredMethods();

            System.out.println("Methods in Student Class:");

            // Print method names
            for (Method method : methods) {
                System.out.println(method.getName());
            }

            // Invoke the display() method
            Method method = cls.getDeclaredMethod("display");
            method.invoke(obj);

        } catch (Exception e) {

            System.out.println(e);

        }

    }

}