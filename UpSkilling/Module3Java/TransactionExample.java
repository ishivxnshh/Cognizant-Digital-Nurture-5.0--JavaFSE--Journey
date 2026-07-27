package Upskilling.Module3Java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class TransactionExample {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/bankdb";
        String username = "root";
        String password = "";

        Connection con = null;

        try {

            // Create connection
            con = DriverManager.getConnection(url, username, password);

            // Start transaction
            con.setAutoCommit(false);

            // Debit query
            String debitQuery = "UPDATE accounts SET balance = balance - ? WHERE account_no = ?";

            PreparedStatement debit = con.prepareStatement(debitQuery);

            debit.setDouble(1, 1000);
            debit.setInt(2, 101);

            debit.executeUpdate();

            // Credit query
            String creditQuery = "UPDATE accounts SET balance = balance + ? WHERE account_no = ?";

            PreparedStatement credit = con.prepareStatement(creditQuery);

            credit.setDouble(1, 1000);
            credit.setInt(2, 102);

            credit.executeUpdate();

            // Commit transaction
            con.commit();

            System.out.println("Money transferred successfully.");

            debit.close();
            credit.close();
            con.close();

        } catch (Exception e) {

            try {

                if (con != null) {
                    con.rollback();
                    System.out.println("Transaction rolled back.");
                }

            } catch (Exception ex) {
                System.out.println(ex);
            }

            System.out.println(e);

        }

    }

}