package Upskilling.Module3Java;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {

    public static void main(String[] args) {

        try {

            // Create HttpClient
            HttpClient client = HttpClient.newHttpClient();

            // Create HttpRequest
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.github.com"))
                    .GET()
                    .build();

            // Send request
            HttpResponse<String> response =
                    client.send(request, HttpResponse.BodyHandlers.ofString());

            // Display response
            System.out.println("Status Code: " + response.statusCode());

            System.out.println("\nResponse Body:");
            System.out.println(response.body());

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());

        }

    }

}