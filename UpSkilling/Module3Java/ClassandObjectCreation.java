package Upskilling.Module3Java;

public class ClassandObjectCreation {
    
    // Attributes
    String make;
    String model;
    int year;

    // Constructor
    ClassandObjectCreation(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    void displayDetails() {
        System.out.println("Car Make : " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Car Year : " + year);
        System.out.println();
    }

    // Main method
    public static void main(String[] args) {

        // Create objects
        ClassandObjectCreation car1 = new ClassandObjectCreation("Toyota", "Corolla", 2022);
        ClassandObjectCreation car2 = new ClassandObjectCreation("Honda", "City", 2023);

        // Display details
        car1.displayDetails();
        car2.displayDetails();

    }

}