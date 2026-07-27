package Upskilling.Module3Java.CPClientServerChat;

import java.io.*;
import java.net.*;

public class Client {

    public static void main(String[] args) {

        try {

            // Connect to Server
            Socket socket = new Socket("localhost", 5000);

            // Input and Output Streams
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            // Send message
            out.println("Hello Server!");

            // Read server reply
            String reply = in.readLine();
            System.out.println("Server: " + reply);

            // Close resources
            in.close();
            out.close();
            socket.close();

        } catch (Exception e) {
            System.out.println(e);
        }

    }

}