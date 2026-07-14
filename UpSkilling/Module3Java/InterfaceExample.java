package Upskilling.Module3Java;

// Interface
interface Playable {

    void play();

}

// Guitar class
class Guitar implements Playable {

    @Override
    public void play() {
        System.out.println("Guitar is playing.");
    }

}

// Piano class
class Piano implements Playable {

    @Override
    public void play() {
        System.out.println("Piano is playing.");
    }

}

// Main class
public class InterfaceExample {

    public static void main(String[] args) {

        // Create objects
        Guitar guitar = new Guitar();
        Piano piano = new Piano();

        // Call play() method
        guitar.play();
        piano.play();

    }

}