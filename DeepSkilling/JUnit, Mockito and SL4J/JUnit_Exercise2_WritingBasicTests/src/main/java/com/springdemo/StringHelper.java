package com.springdemo;

public class StringHelper {

    public String toUpperCase(String text) {
        if (text == null) return null;
        return text.toUpperCase();
    }

    public boolean isPalindrome(String word) {
        String rev = new StringBuilder(word).reverse().toString();
        return word.equals(rev);
    }

    public int wordCount(String sentence) {
        if (sentence == null || sentence.isBlank()) return 0;
        return sentence.trim().split("\\s+").length;
    }
}
