package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class CardGuaranteeGWT implements IsSerializable {
    private Long idReservationMirai;
    private String cardTypeCode;
    private String cardname;
    private String cardnumber;
    private String cvv2;
    private Short untilmonth;
    private Short untilyear;
    
    // Constructores
    public CardGuaranteeGWT() {
    }
    
    // Getters y setters
    public Long getIdReservationMirai() {
        return this.idReservationMirai;
    }
    public void setIdReservationMirai(Long idReservationMirai) {
        this.idReservationMirai = idReservationMirai;
    }

    public String getCardTypeCode() {
        return this.cardTypeCode;
    }
    public void setCardTypeCode(String cardTypeCode) {
        this.cardTypeCode = cardTypeCode;
    }

    public String getCardName() {
        return this.cardname;
    }

    public void setCardName(String cardname) {
        this.cardname = cardname;
    }

    public String getCardNumber() {
        return this.cardnumber;
    }

    public void setCardNumber(String cardnumber) {
        this.cardnumber = cardnumber;
    }

    public String getCvv2() {
        return this.cvv2;
    }

    public void setCvv2(String cvv2) {
        this.cvv2 = cvv2;
    }

    public Short getUntilMonth() {
        return this.untilmonth;
    }

    public void setUntilMonth(java.lang.Short untilmonth) {
        this.untilmonth = untilmonth;
    }

    public Short getUntilYear() {
        return this.untilyear;
    }

    public void setUntilYear(Short untilyear) {
        this.untilyear = untilyear;
    }

    public String toString() {
        StringBuffer str = new StringBuffer("{");

        str.append("idreservation=" + getIdReservationMirai() + " " + "cardTypeCode="
                + getCardTypeCode() + " " + "cardname=" + getCardName() + " "
                + "cardnumber=" + getCardNumber() + " " + "cvv2=" + getCvv2()
                + " " + "untilmonth=" + getUntilMonth() + " " + "untilyear="
                + getUntilYear());
        str.append('}');

        return (str.toString());
    }
}
