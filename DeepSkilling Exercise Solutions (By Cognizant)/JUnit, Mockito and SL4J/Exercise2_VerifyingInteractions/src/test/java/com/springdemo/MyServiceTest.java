package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class MyServiceTest {

    @Test
    public void testGetDataIsInvokedWhenFetchingData() {
        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService serviceUnderTest = new MyService(mockApi);

        // Act
        serviceUnderTest.fetchData();

        // Assert
        verify(mockApi).getData();
    }
}