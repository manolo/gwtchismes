/*
 * CountryIso3166.java
 *
 * Created on September 28, 2006, 4:46 PM
 *
 */

package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

/**
 *
 * @author jmanuel
 */
public class CountryIso3166GWT implements IsSerializable {
    private String countryCode;
    private String countryName;
    
    /** Creates a new instance of CountryIso3166 */
    public CountryIso3166GWT() {
    }
    
    public String getCountryCode() {
        return countryCode;
    }
    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }
    
    public String getCountryName() {
        return countryName;
    }
    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }
}
