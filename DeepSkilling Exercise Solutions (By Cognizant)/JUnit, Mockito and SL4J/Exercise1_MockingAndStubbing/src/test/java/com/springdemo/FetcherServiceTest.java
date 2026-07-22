package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class FetcherServiceTest {

    @Test
    public void testFetchDataReturnsStubbedValue() {
        // Arrange
        DataFetcher stubbedFetcher = mock(DataFetcher.class);
        when(stubbedFetcher.fetchData()).thenReturn("Mock Data");
        FetcherService serviceUnderTest = new FetcherService(stubbedFetcher);

        // Act
        String actualData = serviceUnderTest.fetchData();

        // Assert
        assertEquals("Mock Data", actualData);
    }

    @Test
    public void testFetchStatusReturnsStubbedStatus() {
        // Arrange
        DataFetcher stubbedFetcher = mock(DataFetcher.class);
        when(stubbedFetcher.fetchStatus()).thenReturn("MOCK_OK");
        FetcherService serviceUnderTest = new FetcherService(stubbedFetcher);

        // Act
        String actualStatus = serviceUnderTest.fetchStatus();

        // Assert
        assertEquals("MOCK_OK", actualStatus);
    }
}
