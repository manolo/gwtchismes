package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class OccupationGWT implements IsSerializable {
    private int numAdults;
    private int numChildren;
    private int suppletoryBeds;
    
    public OccupationGWT() {
    }
    
    public int getNumAdults() {
        return numAdults;
    }
    public void setNumAdults(int numAdults) {
        this.numAdults = numAdults;
    }
    
    public int getNumChildren() {
        return numChildren;
    }
    public void setNumChildren(int numChildren) {
        this.numChildren = numChildren;
    }
    
    public int getSuppletoryBeds() {
        return suppletoryBeds;
    }
    public void setSuppletoryBeds(int suppletoryBeds) {
        this.suppletoryBeds = suppletoryBeds;
    }
}
