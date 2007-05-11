/*
 */

package com.mirai.xmas.client.gwt.utils.client;


public abstract class UtilsClientValidators {
    public final static int CREDITCARDGUARANTEE = 1;
    public final static int FAXCARDGUARANTEE = 2;
    public final static int POSTFAXCARDGUARANTEE = 3;
    public final static int DINERS = 0; // diners
    public final static int AMERICAN_EXPRESS = 1; // amex
    public final static int VISA = 2; // Visa, visa
    public final static int MASTER_CARD = 3; // master
    public final static int DISCOVER = 4;
    public final static int AUSTRALIAN = 5;
    public final static int CARTE_BLANCHE = 6;
    public final static int JCB = 7;
    public final static int ACCESS = 8; // access

    private static int getCardTypeIndexOTA(String cardTypeStr) {
        if (cardTypeStr.equalsIgnoreCase("VI")) {
            return VISA;
        } else if (cardTypeStr.equalsIgnoreCase("AX")) {
            return AMERICAN_EXPRESS;
        } else if (cardTypeStr.equalsIgnoreCase("CB")) {
            return CARTE_BLANCHE;
        } else if (cardTypeStr.equalsIgnoreCase("DN")) {
            return DINERS;
        } else if (cardTypeStr.equalsIgnoreCase("DS")) {
            return DISCOVER;
        } else if (cardTypeStr.equalsIgnoreCase("JC")) {
            return JCB;
        } else if (cardTypeStr.equalsIgnoreCase("MC")) {
            return MASTER_CARD;
        }
        return -1;
    }
    
    private static boolean isValidType(String cardNumber, int type) {
        String digitsOnly = getDigitsOnly(cardNumber);
        if (digitsOnly==null || digitsOnly.length() < 4)
            return false;
        Integer identifier = new Integer(digitsOnly.substring(0, 4));
        int i = identifier.intValue();
        switch (type) {
        case DINERS:
            if (digitsOnly.length() != 14)
                return false;
            if ((i >= 3000 && i <= 3059) || (i >= 3600 && i <= 3699) || (i >= 3800 && i <= 3889))
                return true;
            return false;
        case AMERICAN_EXPRESS:
            if (digitsOnly.length() != 15)
                return false;
            if ((digitsOnly.startsWith("34") || digitsOnly.startsWith("37")))
                return true;
            return false;
        case VISA:
            if (digitsOnly.length() != 13 && digitsOnly.length() != 16)
                return false;
            if ('4' == digitsOnly.charAt(0))
                return true;
            return false;
        case MASTER_CARD:
            if (digitsOnly.length() != 16)
                return false;
            if (i >= 5100 && i <= 5599)
                return true;
            return false;
        case DISCOVER:
            if (digitsOnly.length() != 16)
                return false;
            if (digitsOnly.startsWith("6011"))
                return true;
            return false;
        case AUSTRALIAN:
            if (digitsOnly.length() != 16)
                return false;
            if (digitsOnly.startsWith("5610"))
                return true;
            return false;
        case CARTE_BLANCHE:
            if (digitsOnly.length() != 14)
                return false;
            if ((i >= 3890 && i <= 3899))
                return true;
            return false;
        case JCB:
            if (digitsOnly.length() != 16)
                return false;
            if ((i >= 3528 && i <= 3589))
                return true;
            return false;
        case ACCESS:
            if (digitsOnly.length() == 16)
                return true;
            return false;
        }
        return false;
    }

    public static boolean isValidCardNumber(String cardNumber) {
        String digitsOnly = getDigitsOnly(cardNumber);
        if (digitsOnly == null || digitsOnly.length() == 0)
            return false;
        int sum = 0;
        int digit = 0;
        int addend = 0;
        boolean timesTwo = false;
        for (int i = digitsOnly.length() - 1; i >= 0; i--) {
            digit = Integer.parseInt(digitsOnly.substring(i, i + 1));
            if (timesTwo) {
                addend = digit * 2;
                if (addend > 9) {
                    addend -= 9;
                }
            } else {
                addend = digit;
            }
            sum += addend;
            timesTwo = !timesTwo;
        }
        int modulus = sum % 10;
        return modulus == 0;
    }

    public static String getDigitsOnly(String s) {
        if (s==null) return null;
        StringBuffer digitsOnly = new StringBuffer();
        char c;
        for (int i = 0; i < s.length(); i++) {
            c = s.charAt(i);
            if (Character.isDigit(c)) {
                digitsOnly.append(c);
            }
        }
        if (digitsOnly.length() == 0)
            return null;
        return digitsOnly.toString();
    }


    public static boolean isValidCard(String cardNumber, String OTAcardTypeStr) {
        int typeIndex = getCardTypeIndexOTA(OTAcardTypeStr);
        if (typeIndex < 0) {
            return false;
        }
        return isValidCard(cardNumber, typeIndex);
    }
    public static boolean isValidCard(String cardNumber, int type) {
        if (!isValidType(cardNumber, type))
            return false;
        if (!isValidCardNumber(cardNumber))
            return false;
        return true;
    }
    
    
    public static boolean isValidPhone(String s){
        return isValidNumber(s, 5, 12);
    }
    public static boolean isValidEmail(String s){
        // email tiene que tener solo un @,  al menos un . despues de @ y caracteres validos
        if (s==null || s.length()==0){
            return false;
        }
        String[] tmp= s.split("@", 2);
        if (tmp.length == 2) {
            String[] tmp2 = tmp[1].split("\\.");
            if (tmp2.length>=2 && tmp2[1].length() > 1) {
                String t = tmp[0].replaceAll("[^A-z0-1.\\-+%_]", "");
                if (tmp[0].equals(t))
                    return true;
            }
        }
        return false;
    }
    public static boolean isValidCvv2(String s){
        return isValidNumber(s, 2, 3);
    }
    public static boolean isValidXMASCode(String s){
        return isValidNumber(s, 11, 0);
    }
    public static boolean isValidCancelCode(String s){
        return isValidNumber(s, 5, 7);
    }
    public static boolean isValidNumber(String s, int minsize, int maxsize){
        s = getDigitsOnly(s);
        if (s==null || (minsize >0 && s.length() < minsize) || (maxsize > 0 && s.length() > maxsize)){
            return false;
        }
        return true;
    }

}
