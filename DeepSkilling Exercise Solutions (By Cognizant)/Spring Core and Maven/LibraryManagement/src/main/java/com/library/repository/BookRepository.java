package com.library.repository;

import java.util.Arrays;
import java.util.List;

public class BookRepository {

    private static final List<String> BOOK_CATALOG = Arrays.asList(
            "Clean Code", "Effective Java", "Spring in Action"
    );

    public void display() {
        System.out.println("BookRepository initialized successfully");
    }

    public List<String> findAll() {
        return BOOK_CATALOG;
    }
}