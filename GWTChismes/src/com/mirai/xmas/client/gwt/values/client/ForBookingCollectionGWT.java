package com.mirai.xmas.client.gwt.values.client;

import java.util.Date;
import java.util.Vector;

import com.google.gwt.user.client.rpc.IsSerializable;

public class ForBookingCollectionGWT implements IsSerializable {
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.ForBookingObjectGWT>
     */    
    private Vector reservationLines;
    /**
     * @gwt.typeArgs <java.lang.String>
     */
    private Vector datesSelected;
    
    private Long idtokenprovider;
    private String hotelType;
    private String hotelName;
    private String hotelCategory;
    private Date checkinDate;
    private Date checkoutDate;
    private String currencyCode;
    private int currencyNumDecimals;
    private String currencySymbol;
    private String currencyDecimalSeparator;
    private String languageCode;
    
    
    // Constructor
    public ForBookingCollectionGWT() {
    }
    
    // Getters y setters
    public Long getIdtokenprovider() {
        return idtokenprovider;
    }
    public void setIdtokenprovider(Long idtokenprovider) {
        this.idtokenprovider = idtokenprovider;
    }
    
    public String getHotelName() {
        return hotelName;
    }
    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelType() {
        return hotelType;
    }
    public void setHotelType(String hotelType) {
        this.hotelType = hotelType;
    }

    public String getHotelCategory() {
        return hotelCategory;
    }
    public void setHotelCategory(String hotelCategory) {
        this.hotelCategory = hotelCategory;
    }

    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.ForBookingObjectGWT>
     */    
    public Vector getReservationLines() {
        return reservationLines;
    }
    public void setReservationLines(Vector reservationLines) {
        this.reservationLines = reservationLines;
    }
    
    public Date getCheckinDate() {
        return checkinDate;
    }
    public void setCheckinDate(Date checkinDate) {
        this.checkinDate = checkinDate;
    }
    
    public Date getCheckoutDate() {
        return checkoutDate;
    }
    public void setCheckoutDate(Date checkoutDate) {
        this.checkoutDate = checkoutDate;
    }
    
    /**
     * @gwt.typeArgs <java.lang.String>
     */
    public Vector getDatesSelected() {
        return datesSelected;
    }
    public void setDatesSelected(Vector datesSelected) {
        this.datesSelected = datesSelected;
    }
    
    public String getCurrencyCode() {
        return currencyCode;
    }
    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }
    
    public int getCurrencyNumDecimals() {
        return currencyNumDecimals;
    }
    public void setCurrencyNumDecimals(int currencyNumDecimals) {
        this.currencyNumDecimals = currencyNumDecimals;
    }
    
    public String getCurrencySymbol() {
        return currencySymbol;
    }
    public void setCurrencySymbol(String currencySymbol) {
        this.currencySymbol = currencySymbol;
    }
    
    public String getCurrencyDecimalSeparator() {
        return currencyDecimalSeparator;
    }
    public void setCurrencyDecimalSeparator(String currencySeparator) {
        this.currencyDecimalSeparator = currencySeparator;
    }
    
    public String getLanguageCode() {
        return languageCode;
    }

    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }
    
    public Vector getRoomsSelectedToReserve() {
        Vector roomsSelected = new Vector();
        for (int froIndex = 0; froIndex < reservationLines.size(); froIndex++) {
            ForBookingObjectGWT currentFro = (ForBookingObjectGWT)reservationLines.get(froIndex); 
            
            if (currentFro.getAmountToReserve() > 0) {
                roomsSelected.add(currentFro);
            }
        }
        return roomsSelected;
    }
}
