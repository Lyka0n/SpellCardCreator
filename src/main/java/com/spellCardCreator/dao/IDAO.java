package com.spellCardCreator.dao;

import java.util.List;

import com.spellCardCreator.entities.Entity;

public interface IDAO {
    public boolean create(Entity e);

    public List<Entity> read(String query, String...params);

    public boolean update(Entity e);

    public boolean delete(int id);
}