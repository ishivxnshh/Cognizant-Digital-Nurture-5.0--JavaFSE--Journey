package Upskilling.Module3Java.CPClientServerChat;

import java.io.*;
import java.net.*;

public class Server {

    public static void main(String[] args) {

        try {

            // Create Server Socket
            ServerSocket serverSocket = new ServerSocket(5000);

            System.out.println("Server is waiting for client...");

            // Accept Client Connection
            Socket socket = serverSocket.accept();

            System.out.println("Client Connected.");

            // Input and Output Streams
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            // Read client message
            String message = in.readLine();
            System.out.println("Client: " + message);

            // Send reply
            out.println("Hello Client!");

            // Close resources
            in.close();
            out.close();
            socket.close();
            serverSocket.close();

        } catch (Exception e) {
            System.out.println(e);
        }

    }

}