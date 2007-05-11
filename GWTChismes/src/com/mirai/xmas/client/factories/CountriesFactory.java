/*
 * CountriesFactory.java
 *
 * Created on September 28, 2006, 3:58 PM
 *
 */

package com.mirai.xmas.client.factories;

import java.util.HashMap;
import java.util.Vector;

//import javax.faces.model.SelectItem;

import com.mirai.xmas.client.gwt.values.client.CountryIso3166GWT;

/**
 *
 * @author jmanuel
 */
public class CountriesFactory {
    private static CountriesFactory instance;
    private HashMap countriesTranslatedTable;
    private HashMap countriesTranslatedSelectsTable;
    
    /** Creates a new instance of CountriesFactory */
    private CountriesFactory() {
        countriesTranslatedTable = new HashMap();
        countriesTranslatedSelectsTable = new HashMap();
        
        Vector countriesSpanish = new Vector();
        countriesSpanish.add(CountriesFactory.newCountryIso3166GWT("ES", "Espa�a"));
        countriesSpanish.add(CountriesFactory.newCountryIso3166GWT("FR", "Francia"));
        countriesSpanish.add(CountriesFactory.newCountryIso3166GWT("EN", "Gran Bretaña"));
/*        Vector countriesSpanishSelects = new Vector();
        countriesSpanishSelects.add(new SelectItem("ES", "España"));
        countriesSpanishSelects.add(new SelectItem("FR", "Francia"));
        countriesSpanishSelects.add(new SelectItem("EN", "Gran Bretaña")); */
        
        Vector countriesEnglish = new Vector();
        countriesEnglish.add(CountriesFactory.newCountryIso3166GWT("ES", "Spain"));
        countriesEnglish.add(CountriesFactory.newCountryIso3166GWT("FR", "France"));
        countriesEnglish.add(CountriesFactory.newCountryIso3166GWT("EN", "United Kingdom"));
        
        /*
        Vector countriesEnglishSelects = new Vector();
        countriesEnglishSelects.add(new SelectItem("ES", "Spain"));
        countriesEnglishSelects.add(new SelectItem("FR", "France"));
        countriesSpanishSelects.add(new SelectItem("EN", "United Kingdom")); */
        
        countriesTranslatedTable.put("es", countriesSpanish);
        countriesTranslatedTable.put("en", countriesEnglish);
        /*
        countriesTranslatedSelectsTable.put("es", countriesSpanishSelects);
        countriesTranslatedSelectsTable.put("en", countriesEnglishSelects);
        */
    }
    
    public static CountriesFactory getInstance() {
        if (instance == null) {
            instance = new CountriesFactory();
        }
        return instance;
    }
    
    public Vector getCountriesIso3166(String languageCode) {
        return (Vector)countriesTranslatedTable.get(languageCode);
    }
    
    public Vector getCountriesIso3166Selects(String languageCode) {
        return (Vector)countriesTranslatedSelectsTable.get(languageCode);
    }
    
    private static CountryIso3166GWT newCountryIso3166GWT(String code, String name){
        CountryIso3166GWT ret = new CountryIso3166GWT();
        ret.setCountryCode(code);
        ret.setCountryName(name);
        return ret;
        
    }
}