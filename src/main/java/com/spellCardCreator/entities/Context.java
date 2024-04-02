package com.spellCardCreator.entities;

import java.sql.Connection;

import org.springframework.context.annotation.Bean;

public class Context {
    private final String dbName = "spellCardCreator";
    private Connection con;

    @Bean
    public Database db() {
        String path = "jdbc:sqlite:(directory del progetto+ directory del database)" + dbName;
    }
}

//TODO finire di scrivere dentro le virgolette di path SOSTITUIRE