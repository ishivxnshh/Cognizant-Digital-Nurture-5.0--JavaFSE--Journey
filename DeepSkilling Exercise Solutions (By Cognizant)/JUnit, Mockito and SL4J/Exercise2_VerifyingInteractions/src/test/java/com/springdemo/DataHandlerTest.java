package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class DataHandlerTest {

    @Test
    public void testGetDataIsInvokedWhenProcessingData() {
        // Arrange
        DataSource mockSource = mock(DataSource.class);
        DataHandler handlerUnderTest = new DataHandler(mockSource);

        // Act
        handlerUnderTest.processData();

        // Assert
        verify(mockSource).getData();
    }
}
