package com.springdemo;

public class FetcherService {

    private final DataFetcher dataFetcher;

    public FetcherService(DataFetcher dataFetcher) {
        this.dataFetcher = dataFetcher;
    }

    public String fetchData() {
        return dataFetcher.fetchData();
    }

    public String fetchStatus() {
        return dataFetcher.fetchStatus();
    }
}
