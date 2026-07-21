package com.library;

import com.library.repository.BookRepository;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {
        ApplicationContext springContext = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookRepository bookRepository = springContext.getBean("bookRepository", BookRepository.class);
        BookService bookService = springContext.getBean("bookService", BookService.class);

        bookRepository.display();
        bookService.display();
    }
}