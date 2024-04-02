package com.spellCardCreator.entities;

public class Card extends Entity{

    private String spellName;
    private String spellLevel;
    private String spellClass;
    private String spellSchool;
    private String spellCastingTime;
    private String spellRange;
    private String spellComponents;
    private String spellDuration;
    private boolean spellConcentration;    
    private String spellDescription;
    private String spellHigherLevels;

    public Card(){}

    public Card(int id, String spellName, String spellLevel, String spellClass, String spellSchool, String spellCastingTime,
            String spellRange, String spellComponents, String spellDuration, boolean spellConcentration,
            String spellDescription, String spellHigherLevels) {
        super(id);
        setSpellName(spellName);
        setSpellLevel(spellLevel);
        setSpellClass(spellClass);
        setSpellSchool(spellSchool);
        setSpellCastingTime(spellCastingTime);
        setSpellRange(spellRange);
        setSpellComponents(spellComponents);
        setSpellDuration(spellDuration);
        setSpellConcentration(spellConcentration);
        setSpellDescription(spellDescription);
        setSpellHigherLevels(spellHigherLevels);
    }

    public String getSpellName() {
        return spellName;
    }

    public void setSpellName(String spellName) {
        this.spellName = spellName;
    }

    public String getSpellLevel() {
        return spellLevel;
    }

    public void setSpellLevel(String spellLevel) {
        this.spellLevel = spellLevel;
    }

    public String getSpellClass() {
        return spellClass;
    }

    public void setSpellClass(String spellClass) {
        this.spellClass = spellClass;
    }

    public String getSpellSchool() {
        return spellSchool;
    }

    public void setSpellSchool(String spellSchool) {
        this.spellSchool = spellSchool;
    }

    public String getSpellCastingTime() {
        return spellCastingTime;
    }

    public void setSpellCastingTime(String spellCastingTime) {
        this.spellCastingTime = spellCastingTime;
    }

    public String getSpellRange() {
        return spellRange;
    }

    public void setSpellRange(String spellRange) {
        this.spellRange = spellRange;
    }

    public String getSpellComponents() {
        return spellComponents;
    }

    public void setSpellComponents(String spellComponents) {
        this.spellComponents = spellComponents;
    }

    public String getSpellDuration() {
        return spellDuration;
    }

    public void setSpellDuration(String spellDuration) {
        this.spellDuration = spellDuration;
    }

    public boolean isSpellConcentration() {
        return spellConcentration;
    }

    public void setSpellConcentration(boolean spellConcentration) {
        this.spellConcentration = spellConcentration;
    }

    public String getSpellDescription() {
        return spellDescription;
    }

    public void setSpellDescription(String spellDescription) {
        this.spellDescription = spellDescription;
    }

    public String getSpellHigherLevels() {
        return spellHigherLevels;
    }

    public void setSpellHigherLevels(String spellHigherLevels) {
        this.spellHigherLevels = spellHigherLevels;
    }   
}