package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("BookService initialized successfully");
        System.out.println("Available books: " + bookRepository.findAll());
        bookRepository.display();
    }
}