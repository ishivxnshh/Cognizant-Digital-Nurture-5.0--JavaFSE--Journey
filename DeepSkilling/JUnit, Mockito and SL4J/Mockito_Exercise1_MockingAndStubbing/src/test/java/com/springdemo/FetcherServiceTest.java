package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class FetcherServiceTest {

    @Test
    public void testFetchDataReturnsCorrectValue() {
        DataFetcher mockFetcher = mock(DataFetcher.class);
        when(mockFetcher.fetchData()).thenReturn("Mock Data");

        FetcherService service = new FetcherService(mockFetcher);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }

    @Test
    public void testFetchStatusIsStubbed() {
        DataFetcher mockFetcher = mock(DataFetcher.class);
        when(mockFetcher.fetchStatus()).thenReturn("MOCK_OK");

        FetcherService service = new FetcherService(mockFetcher);

        assertEquals("MOCK_OK", service.fetchStatus());
    }
}
