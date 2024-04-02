package com.spellCardCreator.entities;

public abstract class Entity
{
	private int id;

	public Entity(int id) {
		setId(id);
	}

	public Entity() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}