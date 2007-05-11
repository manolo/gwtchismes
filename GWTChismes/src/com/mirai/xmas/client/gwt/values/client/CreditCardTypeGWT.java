package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class CreditCardTypeGWT implements IsSerializable {
    private String cardTypeCode;
    private String cardTypeName;
    
    // Constructores
    public CreditCardTypeGWT() {
    }

    
    // Getters y setters
    public String getCardTypeName() {
        return cardTypeName;
    }
    public void setCardTypeName(String cardTypeName) {
        this.cardTypeName = cardTypeName;
    }

    public String getCardTypeCode() {
        return cardTypeCode;
    }
    public void setCardTypeCode(String cardTypeCode) {
        this.cardTypeCode = cardTypeCode;
    }
    
}
