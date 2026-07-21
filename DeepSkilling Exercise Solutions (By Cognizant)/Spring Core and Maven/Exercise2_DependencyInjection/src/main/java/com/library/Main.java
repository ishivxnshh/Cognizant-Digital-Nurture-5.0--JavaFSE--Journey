package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {
        ApplicationContext springContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService bookService = springContext.getBean("bookService", BookService.class);
        bookService.display();
    }
}