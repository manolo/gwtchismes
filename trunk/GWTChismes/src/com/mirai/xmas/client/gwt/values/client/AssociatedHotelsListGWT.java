package com.mirai.xmas.client.gwt.values.client;

import java.util.Vector;
import com.google.gwt.user.client.rpc.IsSerializable;

public class AssociatedHotelsListGWT implements IsSerializable {
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT>
     */
    private Vector associatedHotels;
    
    public AssociatedHotelsListGWT() {
        associatedHotels = new Vector();
    }
    
    public void addHotel(HotelInfoValueGWT hotelInfo) {
        associatedHotels.add(hotelInfo);
    }
    
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT>
     */
    public Vector getAssociatedHotels() {
        return associatedHotels;
    }
    public void setAssociatedHotels(Vector associatedHotels) {
        this.associatedHotels = associatedHotels;
    }
}
