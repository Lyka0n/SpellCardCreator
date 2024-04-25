package com.spellCardCreator.entities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
/* import java.sql.Statement; */

public class Database {
    private final String dbName = "spellCards.db";
    private Connection con;

    public Connection db() {
        if (con == null){
            String path = "jdbc:sqlite:" + dbName;
            try {
                con = DriverManager.getConnection(path);
                //Statement statement = con.createStatement();//
            } catch (SQLException e) {
                e.printStackTrace(System.err);
            }
        }
        return con;
    }

    /**
	 * Questo metodo si occupa di andare a modificare, aggiornare o eliminare i dati di un DB
	 * @param query
	 * @return true/false in caso di riuscita o meno (tramite un try/catch)
	 */
    public boolean update(String query) {
		try {
			PreparedStatement p = con.prepareStatement(query);
			p.executeUpdate();
			return true;
		}
		catch(SQLException e) {
			e.printStackTrace();
			return false;
		}
	}
	
	/**
	 * Questo metodo di occupa di andare a modificare, aggiornare o eliminare i dati di DB
	 * @param Una query con al suo interno dei ? al posto dei valori, che verrano sostituiti nell'esecuzione della query
	 * @param Un vettore di Stringhe params di una lunghezza pari al numero di ? nella query che andr� a sostituire caso per caso i ?
	 * @return true/false in caso di riuscita o meno (tramite un try/catch)
	 */
	public boolean update(String query, String...params) {
		try {
			PreparedStatement p = con.prepareStatement(query);
			
			for(int i = 0; i < params.length; i++)
				p.setString(i+1, params[i]);
			
			p.executeUpdate();
			return true;
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}


//TODO chiedere a Gren come gestire eccezioni per mancata connessione - row 19