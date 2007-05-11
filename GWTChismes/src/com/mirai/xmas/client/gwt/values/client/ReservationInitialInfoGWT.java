package com.mirai.xmas.client.gwt.values.client;

import java.util.Vector;
import java.util.HashMap;
import com.google.gwt.user.client.rpc.IsSerializable;

public class ReservationInitialInfoGWT implements IsSerializable {
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT>
     */
    private Vector chainHotels;
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.CountryIso3166GWT>
     */
    private Vector countriesIso3166Vector;
    
    /**
     * @gwt.typeArgs <java.lang.String,com.mirai.xmas.client.gwt.values.client.CreditCardTypeGWT>
     */
    private HashMap creditCardsTypes;
    
    // Constructores
    public ReservationInitialInfoGWT() {
    }
    
    // Getters y setters
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT>
     */
    public Vector getChainHotels() {
        return chainHotels;
    }
    public void setChainHotels(Vector availableHotels) {
        this.chainHotels = availableHotels;
    }
    
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.CountryIso3166GWT>
     */
    public Vector getCountriesIso3166Vector() {
        return countriesIso3166Vector;
    }
    public void setCountriesIso3166Vector(Vector countriesIso3166Vector) {
        this.countriesIso3166Vector = countriesIso3166Vector;
    }
    
    /**
     * @gwt.typeArgs <java.lang.String, com.mirai.xmas.client.gwt.values.client.CreditCardTypeGWT>
     */
    public HashMap getCreditCardsTypes() {
        return creditCardsTypes;
    }
    public void setCreditCardsTypes(HashMap creditCardsTypes) {
        this.creditCardsTypes = creditCardsTypes;
    }
}
