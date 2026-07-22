package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class JUnitAssertionSamplesTest {

    @Test
    void testVariousAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }

    @Test
    void testArraysMatch() {
        int[] expected = {10, 20, 30};
        int[] actual   = {10, 20, 30};
        assertArrayEquals(expected, actual);
    }
}
