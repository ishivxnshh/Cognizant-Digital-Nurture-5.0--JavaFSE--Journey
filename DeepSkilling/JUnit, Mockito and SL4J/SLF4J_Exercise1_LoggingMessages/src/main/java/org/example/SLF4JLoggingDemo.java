package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SLF4JLoggingDemo {

    private static final Logger LOG = LoggerFactory.getLogger(SLF4JLoggingDemo.class);

    public static void main(String[] args) {
        LOG.debug("Application is starting up");
        LOG.info("SLF4J Logging demo is running");
        LOG.warn("This is a sample warning — review if needed");
        LOG.error("This is a sample error — action required");
    }
}
