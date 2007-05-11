package com.mirai.xmas.client.gwt.utils.client;

import com.google.gwt.user.client.ui.FlexTable;
import com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT;

public class HelperClientGwt {
    private static String leftPadding(String text, String character, int maxNumberChars) {
        int lengthString = text.length();
        StringBuffer ret = new StringBuffer();
        for (int i = lengthString; i < maxNumberChars; i ++) {
            ret.append(character);
        }
        ret.append(text);
        return ret.toString();
    }
    public static String getPriceWithDecimals(long price, int currencyNumDecimals, String decimalSymbol) {
        long divisor = new Double((Math.pow(10, currencyNumDecimals))).longValue();
        long priceInteger = price / divisor;
        long priceDecimals = price % divisor;
        return priceInteger + decimalSymbol + leftPadding(String.valueOf(priceDecimals), "0", currencyNumDecimals);
    }

    public static void setHeaderHotelInfo(FlexTable grdHotelInfo, HotelInfoValueGWT hotel) {
        grdHotelInfo.addStyleName("HotelInfo");
        grdHotelInfo.clear();
        grdHotelInfo.setText(0, 0, hotel.getType() + " " + hotel.getName() + " " + hotel.getCategory());
        grdHotelInfo.getCellFormatter().addStyleName(0, 0, "HotelName");
        grdHotelInfo.setHTML(0, 1, hotel.getAddress() + "<br/>(" + hotel.getCp() + ") " + hotel.getLocation()+ " " + hotel.getProvince() + "<br/>" + hotel.getCountry());
        grdHotelInfo.getCellFormatter().addStyleName(0, 1, "HotelAddress");
    }

    

    public static Long getXMASHotelFromUrl() {
        Long ret = null;
        String value = UtilsClientValidators.getDigitsOnly(HelperClientGwt.getParameterFromUrl("hotel"));
        if (value == null)
            value = HelperClientGwt.getParameterFromUrl("idtokenprovider");
        if (value != null)
            ret = Long.valueOf(value);
        return ret;
    }

    public static native String getParameterFromUrl(String key)
    /*-{
     var l = null;
     try        {l = window.parent.document.location;}
     catch (e)  {l = document.location;}
     var r = new RegExp(key + "=([^=&#?]+)", "gi");
     var a = r.exec(l);
     if (a && a[1])  return a[1]; 
     return null;
     }-*/;
    
    public static native String getTopScroll ()
    /*-{
     return document.documentElement.scrollTop; 
     }-*/;

    public static native boolean isHostedMode()
    /*-{
     return $wnd.__gwt_isHosted();
     }-*/;
    
    public static String IdReservationToFull(Long id) {
        if (id == null)
            return "";
        String retleft= "";
        long left= id.longValue() / 100000;
        if (left < 10)
            retleft= "00000";
        else if (left < 100)
            retleft= "0000";
        else if (left < 1000)
            retleft= "000";
        else if (left < 10000)
            retleft= "00";
        else if (left < 100000)
            retleft= "0";
        String retright= "";
        long right= id.longValue() % 100000;
        if (right < 10)
            retright= "0000";
        else if (right < 100)
            retright= "000";
        else if (right < 1000)
            retright= "00";
        else if (right < 10000)
            retright= "0";
        return retleft + left + "-" + retright + right;
    }
}
