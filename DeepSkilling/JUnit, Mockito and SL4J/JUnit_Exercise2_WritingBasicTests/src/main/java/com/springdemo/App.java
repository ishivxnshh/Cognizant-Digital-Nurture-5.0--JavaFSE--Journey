package com.springdemo;

public class App {

    public static void main(String[] args) {
        StringHelper helper = new StringHelper();

        System.out.println(helper.toUpperCase("hello world"));
        System.out.println("palindrome check: " + helper.isPalindrome("racecar"));
        System.out.println("word count: " + helper.wordCount("JUnit is great"));
    }
}
