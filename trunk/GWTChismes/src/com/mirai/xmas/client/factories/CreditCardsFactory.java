package com.mirai.xmas.client.factories;

import java.util.HashMap;
import com.mirai.xmas.client.gwt.values.client.CreditCardTypeGWT;

public class CreditCardsFactory {
    private static CreditCardsFactory instance;
    private HashMap creditCardsTable;
    
    private CreditCardsFactory() {
        creditCardsTable = new HashMap();
        
        creditCardsTable.put("AX", CreditCardsFactory.newCreditCardTypeGWT("AX", "American Express"));
        creditCardsTable.put("CB", CreditCardsFactory.newCreditCardTypeGWT("CB", "Carte Blanche"));
        creditCardsTable.put("DN", CreditCardsFactory.newCreditCardTypeGWT("DN", "Diner's Club"));
        creditCardsTable.put("DS", CreditCardsFactory.newCreditCardTypeGWT("DS", "Discover Card"));
        creditCardsTable.put("JC", CreditCardsFactory.newCreditCardTypeGWT("JC", "JCB"));
        creditCardsTable.put("MC", CreditCardsFactory.newCreditCardTypeGWT("MC", "Master Card"));
        creditCardsTable.put("VI", CreditCardsFactory.newCreditCardTypeGWT("VI", "Visa"));
    }
    
    public static CreditCardsFactory getInstance() {
        if (instance == null) {
            instance = new CreditCardsFactory();
        }
        return instance;
    }
    
    public HashMap getCreditCardsTable() {
        return creditCardsTable;
    }
    
    private static CreditCardTypeGWT newCreditCardTypeGWT(String cardTypeCode, String cardTypeName) {
        CreditCardTypeGWT ret = new CreditCardTypeGWT();
        ret.setCardTypeCode(cardTypeCode);
        ret.setCardTypeName(cardTypeName);
        return ret;
    }

}
