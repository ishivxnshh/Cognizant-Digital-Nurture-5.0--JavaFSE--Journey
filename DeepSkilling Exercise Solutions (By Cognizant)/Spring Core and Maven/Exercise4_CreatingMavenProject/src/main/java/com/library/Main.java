package com.library;

public class Main {

    public static void main(String[] args) {
        System.out.printf("Hello and welcome to the Library Management System!%n");

        int totalBooks = 5;
        for (int bookIndex = 1; bookIndex <= totalBooks; bookIndex++) {
            System.out.println("Processing book entry #" + bookIndex);
        }

        System.out.println("All entries processed.");
    }
}