package com.springdemo;

public class DataHandler {

    private final DataSource dataSource;

    public DataHandler(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public void processData() {
        dataSource.getData();
    }
}
