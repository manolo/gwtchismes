package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class HotelInfoValueGWT implements IsSerializable {
    private Long idhotel;
    private String xidChain;
    private String xidHotel;
    private String name;
    private String address;
    private Long idCountry;
    private String country;
    private Long idProvince;
    private String province;
    private String cp;
    private String type;
    private String category;
    private String telephone;
    private String fax;
    private String location;
    private String url;
    private String email;
    private Short language;
    
    // Constructores
    public HotelInfoValueGWT() {
    }

    
    // Getters y setters
    public Long getIdhotel() {
        return idhotel;
    }
    public void setIdhotel(Long idhotel) {
        this.idhotel = idhotel;
    }
    
    public String getXidHotel() {
        return xidHotel;
    }
    public void setXidHotel(String xidHotel) {
        this.xidHotel = xidHotel;
    }
    
    public String getXidChain() {
        return xidChain;
    }
    public void setXidChain(String xidChain) {
        this.xidChain = xidChain;
    }
    
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }

    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }

    public String getCp() {
        return cp;
    }

    public void setCp(String cp) {
        this.cp = cp;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public Long getIdCountry() {
        return idCountry;
    }

    public void setIdCountry(Long idcountry) {
        this.idCountry = idcountry;
    }

    public Long getIdProvince() {
        return idProvince;
    }

    public void setIdProvince(Long idProvince) {
        this.idProvince = idProvince;
    }

    public Short getLanguage() {
        return language;
    }

    public void setLanguage(Short language) {
        this.language = language;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }    
}
 