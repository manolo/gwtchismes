package com.mirai.xmas.client.gwt.values.client;

import java.util.Date;
import java.util.Vector;
import com.google.gwt.user.client.rpc.IsSerializable;

public class CancelAuthenticateRespGWT implements IsSerializable {
    private boolean authenticated;
    private BookingValueGWT reservation;
    private boolean isCancellable = true;
    private Date limitTimeForCancellation;
    
    private Vector reservAttributes;
    
    // Constructores
    public CancelAuthenticateRespGWT() {
    }
    
    // Getters y setters
    public boolean isAuthenticated() {
        return authenticated;
    }
    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }
    public BookingValueGWT getReservation() {
        return reservation;
    }
    public void setReservation(BookingValueGWT reservation) {
        this.reservation = reservation;
    }

    public Vector getReservAttributes() {
        return reservAttributes;
    }

    public void setReservAttributes(Vector reservAttributes) {
        this.reservAttributes = reservAttributes;
    }
    
    public boolean isCancellable() {
        return isCancellable;
    }
    public boolean getIsCancellable() {
        return isCancellable;
    }
    public void setIsCancellable(boolean isCancellable) {
        this.isCancellable = isCancellable;
    }
    
    public Date getLimitTimeForCancellation() {
        return limitTimeForCancellation;
    }
    public void setLimitTimeForCancellation(Date limitTime) {
        this.limitTimeForCancellation = limitTime;
    }
}
