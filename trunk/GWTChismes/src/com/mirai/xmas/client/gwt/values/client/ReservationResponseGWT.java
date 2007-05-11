package com.mirai.xmas.client.gwt.values.client;

import java.util.Vector;
import com.google.gwt.user.client.rpc.IsSerializable;

public class ReservationResponseGWT implements IsSerializable {
    private BookingValueGWT bookingValueGwt;
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.ReservationAttributesTranslatedValueGWT>
     */
    private Vector attributesTranslatedGwt;
    
    // Constructores
    public ReservationResponseGWT() {
    }
    
    public ReservationResponseGWT(BookingValueGWT bookingValueGwt, Vector attributesTranslatedGwt) {
        super();
        this.bookingValueGwt = bookingValueGwt;
        this.attributesTranslatedGwt = attributesTranslatedGwt;
    }
    
    // Getters y setters
    public BookingValueGWT getBookingValueGwt() {
        return bookingValueGwt;
    }
    public void setBookingValueGwt(BookingValueGWT bookingValueGwt) {
        this.bookingValueGwt = bookingValueGwt;
    }
    
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.ReservationAttributesTranslatedValueGWT>
     */
    public Vector getAttributesTranslatedGwt() {
        return attributesTranslatedGwt;
    }
    public void setAttributesTranslatedGwt(Vector attributesTranslatedGwt) {
        this.attributesTranslatedGwt = attributesTranslatedGwt;
    }
}
