package Upskilling.Module3Java;

// Base class
class Animal {

    void makeSound() {
        System.out.println("Animal makes a sound.");
    }

}

// Subclass
class Dog extends Animal {

    @Override
    void makeSound() {
        System.out.println("Bark");
    }

}

// Main class
public class InheritanceExample {

    public static void main(String[] args) {

        // Create Animal object
        Animal animal = new Animal();
        animal.makeSound();

        // Create Dog object
        Dog dog = new Dog();
        dog.makeSound();

    }

}