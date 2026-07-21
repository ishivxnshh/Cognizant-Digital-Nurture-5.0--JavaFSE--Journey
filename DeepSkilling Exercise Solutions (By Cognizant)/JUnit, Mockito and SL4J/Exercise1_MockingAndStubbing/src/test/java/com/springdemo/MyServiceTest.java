package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MyServiceTest {

    @Test
    public void testFetchDataReturnsMockedValue() {
        // Arrange
        ExternalApi stubbedApi = mock(ExternalApi.class);
        when(stubbedApi.getData()).thenReturn("Mock Data");

        MyService serviceUnderTest = new MyService(stubbedApi);

        // Act
        String actualResult = serviceUnderTest.fetchData();

        // Assert
        assertEquals("Mock Data", actualResult);
    }
}