package com.spellCardCreator.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import com.spellCardCreator.entities.Card;
import com.spellCardCreator.entities.Database;
import com.spellCardCreator.entities.Entity;

public class DAOCards implements IDAO{

    @Autowired
    private Database db;

    public boolean create(Entity e) {
        /*  String spellName, String spellLevel, String spellClass, String spellSchool, String spellCastingTime,
            String spellRange, String spellComponents, String spellDuration, boolean spellConcentration,
            String spellDescription, String spellHigherLevels */
        Card c = (Card)e;
        
        String query = "INSERT INTO cards ";
        query += "(spellName, spellLevel, spellClass, spellSchool, spellCastingTime, spellRange, spellComponentsVerbal, spellComponentsSomatic, spellComponentsMaterial, spellDuration, spellConcentration, spellDescription, spellHigherLevels) ";
        query += "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        return db.update(query, c.getSpellName(), c.getSpellLevel(), c.getSpellClass(), c.getSpellSchool(), c.getSpellCastingTime(), c.getSpellRange(), c.isSpellComponentsVerbal() + "", c.isSpellComponentsSomatic() + "", c.isSpellComponentsMaterial() + "", c.getSpellDuration(), c.isSpellConcentration() + "", c.getSpellDescription(), c.getSpellHigherLevels());
    }

    public List<Entity> read(String query, String...params);

    public boolean update(Entity e);

    public boolean delete(int id);

}
