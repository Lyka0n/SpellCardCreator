package com.spellCardCreator;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;

import com.spellCardCreator.entities.Database;

public class Context {
    
    @Bean
    public Database db() {
        return new Database();
    }
}
