package com.springdemo;

import org.junit.Test;

import static org.junit.Assert.*;

public class AppTest {

    private final StringHelper helper = new StringHelper();

    @Test
    public void testToUpperCase() {
        assertEquals("HELLO", helper.toUpperCase("hello"));
    }

    @Test
    public void testIsPalindrome() {
        assertTrue(helper.isPalindrome("racecar"));
        assertFalse(helper.isPalindrome("hello"));
    }

    @Test
    public void testWordCount() {
        assertEquals(3, helper.wordCount("JUnit is great"));
        assertEquals(0, helper.wordCount(""));
    }
}
