/*
 * ClientReservationAuthentication.java
 *
 * Created on September 14, 2006, 1:49 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package com.mirai.xmas.client.values;

/**
 *
 * @author jmanuel
 */
public class ClientReservationAuthentication {
    //private boolean authenticated = false;
    private Long idReservationMirai;
    private Integer cancellationCode;
    
    /** Creates a new instance of ClientReservationAuthentication */
    public ClientReservationAuthentication() {
    }
    
    public ClientReservationAuthentication(Long idReservationMirai, Integer cancellationCode) {
        this.idReservationMirai = idReservationMirai;
        this.cancellationCode = cancellationCode;
    }
    
    public Long getIdReservationMirai() {
        return idReservationMirai;
    }
    
    public void setIdReservationMirai(Long idReservationMirai) {
        this.idReservationMirai = idReservationMirai;
    }
    
    public Integer getCancellationCode() {
        return cancellationCode;
    }
    
    public void setCancellationCode(Integer cancellationCode) {
        this.cancellationCode = cancellationCode;
    }
    
    /*
    public boolean getAuthenticated() {
        if (miraiIdReservation != null && miraiIdReservation.trim().length() > 0) {
            return authenticated;
        }
        return false;
    }
    
    public void setAuthenticated(boolean value) {
        if (miraiIdReservation != null && miraiIdReservation.trim().length() > 0
                && cancellationCode != null && cancellationCode.trim().length() > 0) {
            this.authenticated = value;
        } else {
            this.authenticated = false;
        }
    }
     */
}
