package com.springdemo;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class DataHandlerTest {

    @Test
    public void testProcessDataCallsGetData() {
        DataSource mockSource = mock(DataSource.class);
        DataHandler handler = new DataHandler(mockSource);

        handler.processData();

        verify(mockSource).getData();
    }
}
