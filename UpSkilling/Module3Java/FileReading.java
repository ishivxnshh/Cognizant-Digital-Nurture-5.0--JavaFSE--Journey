package Upskilling.Module3Java;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReading {

    public static void main(String[] args) {

        try {

            // Open the file
            File file = new File("output.txt");
            Scanner reader = new Scanner(file);

            System.out.println("File Contents:");

            // Read and display each line
            while (reader.hasNextLine()) {
                String line = reader.nextLine();
                System.out.println(line);
            }

            reader.close();

        } catch (FileNotFoundException e) {

            System.out.println("File not found.");

        }

    }

}