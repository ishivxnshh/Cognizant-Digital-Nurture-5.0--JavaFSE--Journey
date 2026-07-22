package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {
        System.out.println("Loading Spring application context...");
        ApplicationContext springContext = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = springContext.getBean("bookService", BookService.class);
        bookService.display();

        System.out.println("Application context loaded successfully.");
    }
}