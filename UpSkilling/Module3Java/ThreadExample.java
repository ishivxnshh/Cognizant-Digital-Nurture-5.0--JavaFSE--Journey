package Upskilling.Module3Java;

// Thread class
class MyThread extends Thread {

    private String message;

    // Constructor
    MyThread(String message) {
        this.message = message;
    }

    // Run method
    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - " + i);
        }

    }

}

// Main class
public class ThreadExample {

    public static void main(String[] args) {

        // Create two threads
        MyThread thread1 = new MyThread("Thread 1 is running");
        MyThread thread2 = new MyThread("Thread 2 is running");

        // Start threads
        thread1.start();
        thread2.start();

    }

}