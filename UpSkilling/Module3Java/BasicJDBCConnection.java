package Upskilling.Module3Java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class BasicJDBCConnection {

    public static void main(String[] args) {

        // Database details
        String url = "jdbc:mysql://localhost:3306/studentdb";
        String username = "root";
        String password = "admin";

        try {

            // Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(url, username, password);

            // Create Statement
            Statement stmt = con.createStatement();

            // Execute SELECT Query
            String query = "SELECT * FROM students";
            ResultSet rs = stmt.executeQuery(query);

            // Display Data
            System.out.println("Student Records");

            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name") + " " +
                    rs.getInt("age")
                );
            }

            // Close Resources
            rs.close();
            stmt.close();
            con.close();

        } catch (Exception e) {

            System.out.println(e);

        }

    }

}