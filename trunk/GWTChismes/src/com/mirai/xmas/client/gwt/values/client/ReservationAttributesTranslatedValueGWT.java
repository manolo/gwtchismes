package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class ReservationAttributesTranslatedValueGWT implements IsSerializable {
    private Long idreservation;
    private Integer idtype;
    private String idtitle18n;
    private String idvalue18n;
    private String languageCode;
    private String title;
    private String value;
    
    // Constructores
    public ReservationAttributesTranslatedValueGWT() {
    }

    // Getters y setters
    public Long getIdreservation() {
        return idreservation;
    }

    public void setIdreservation(Long idreservation) {
        this.idreservation = idreservation;
    }

    public String getIdtitle18n() {
        return idtitle18n;
    }

    public void setIdtitle18n(String idtitle18n) {
        this.idtitle18n = idtitle18n;
    }

    public Integer getIdtype() {
        return idtype;
    }

    public void setIdtype(Integer idtype) {
        this.idtype = idtype;
    }

    public String getIdvalue18n() {
        return idvalue18n;
    }

    public void setIdvalue18n(String idvalue18n) {
        this.idvalue18n = idvalue18n;
    }

    public String getLanguageCode() {
        return languageCode;
    }

    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
