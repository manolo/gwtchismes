package com.mirai.xmas.client.gwt.values.client;

import java.util.Vector;
import com.google.gwt.user.client.rpc.IsSerializable;

public class PreReservationResponseGWT implements IsSerializable {
    private BookingValueGWT bookingValueGwt;
    private String cancellationPolicyText;
    /**
     * @gwt.typeArgs <java.lang.String>
     */
    private Vector htmlAttributesStr;
    private String hotelAgreement;
    
    // Constructores
    public PreReservationResponseGWT() {
    }
    
    public PreReservationResponseGWT(BookingValueGWT bookingGwt, String cancellationPolicyText, Vector htmlAttributesStr, String hotelAgreement) {
        this.bookingValueGwt = bookingGwt;
        this.cancellationPolicyText = cancellationPolicyText;
        this.htmlAttributesStr = htmlAttributesStr;
        this.hotelAgreement = hotelAgreement;
    }
    
    // Getters y setters
    public BookingValueGWT getBookingValueGwt() {
        return bookingValueGwt;
    }
    public void setBookingValueGwt(BookingValueGWT bookingGwt) {
        this.bookingValueGwt = bookingGwt;
    }
    
    public String getCancellationPolicyText() {
        return cancellationPolicyText;
    }
    public void setCancellationPolicyText(String cancellationPolicyText) {
        this.cancellationPolicyText = cancellationPolicyText;
    }
    
    public String getHotelAgreement() {
        return hotelAgreement;
    }
    public void setHotelAgreement(String hotelAgreement) {
        this.hotelAgreement = hotelAgreement;
    }
    
    /**
     * @gwt.typeArgs <java.lang.String>
     */
    public Vector getHtmlAttributesStr() {
        return htmlAttributesStr;
    }
    public void setHtmlAttributesStr(Vector htmlAttributesStr) {
        this.htmlAttributesStr = htmlAttributesStr;
    }
}
