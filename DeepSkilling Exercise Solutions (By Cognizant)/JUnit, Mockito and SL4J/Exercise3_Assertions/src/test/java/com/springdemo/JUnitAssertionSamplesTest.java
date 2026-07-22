package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class JUnitAssertionSamplesTest {

    @Test
    public void testCommonJUnitAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }

    @Test
    public void testArrayEquality() {
        int[] expectedValues = {10, 20, 30};
        int[] actualValues   = {10, 20, 30};
        assertArrayEquals(expectedValues, actualValues);
    }
}
