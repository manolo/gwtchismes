/*
 * I18nUtils.java
 *
 * Created on October 3, 2006, 12:08 PM
 *
 */

package com.mirai.xmas.client.utils;

import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.Currency;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.math.BigDecimal;

import com.mirai.xmas.client.services.I18nService;
import com.hotelebusiness.ReservationSystem.util.ObjectUtils;
import com.mirai.xmas.exceptions.GetFormatException;
import org.apache.log4j.Logger;


/**
 * Clase con metodos estaticos relacionados con la internacionalizacion del interfaz de cliente
 * 
 * @author jmanuel
 */
public class I18nUtils {
	private static Logger logger = Logger.getLogger(I18nUtils.class);
	public final static int INTERFACE_TYPE = 4;
    public final static int HOTEL_AGREEMENTS_TYPE = 8;
    public final static int HTML_ATTRIBUTES_TYPE = 9;
	
    final static String FULLDATE_FORMAT_DEFAULT= "MMM-dd-yyyy HH:mm:ss";
    final static String DATE_FORMAT_DEFAULT= "MMM-dd-yyyy";
    
    // Cachea los formatos de fecha para no pedirlos al servidor
    public static String dateFormat = null;
    public static String dateTimeFormat = null;
    
    /** Creates a new instance of I18nUtils */
    public I18nUtils() {
    }
    
    
    /*
     * Devuelve el mensaje internacionalizado en el lenguage seleccionado para el bundle por defecto (Interface)
     * @param key La key de internacionalizacion del mensaje
     * @param params Los parametros de sustitucion en los huecos correspondientes
     * @param locale El locale del lenguage a usar
     * @return El String del mensaje internacionalizado
     */
    /*
    public static String getInternationalizationString(
            int type,
            String key,
            Object[] params,
            Locale locale){
        
        return BaseService2.getInstance().getInternationalManager().getStringInterfaceFromKey(key, params, locale);
    }
    */
    
    
    /**
     * Devuelve la fecha (sin hora) como String en el formato del locale seleccionado
     * @param date
     * @param locale
     * @return El String de la fecha en el formato apropiado
     */
    public static String getI18nDate(Date date, Locale locale) {
        String ret= "NULL";
        if (date == null)
            return ret;
        
        String format = null;
        if (dateFormat != null) {
            // Ya hay almacenado un dateFormat
            format = dateFormat;
        } else {
            // No hay dateFormat guardado. Buscar en el servidor
            try {
                dateFormat = I18nService.getI18nDateFormat(locale);
                format = dateFormat;
            } catch (GetFormatException ex) {
                // Problemas buscando el formato en servidor. Devolvemos el default
                format = DATE_FORMAT_DEFAULT;
            }
        }
        
        try {
            Format f = new SimpleDateFormat(format, locale);
            ret = f.format(date);
        } catch (IllegalArgumentException e) {
            try {
                Format f = new SimpleDateFormat(DATE_FORMAT_DEFAULT, locale);
                ret = f.format(date);
            } catch (IllegalArgumentException ee) {
                logger.error("En getI18nDate. Exception aplicando el dateFormat: " + ee.getMessage());
                ee.printStackTrace();
            }
        }
        return ret;
    }
    
    /**
     * Devuelve la fecha y hora como String en el formato del locale seleccionado
     * @param date
     * @param locale
     * @return El String de la fecha y hora en el formato apropiado
     */
    public static String getI18nFullDate(Date date, Locale locale) {
        String ret= "NULL";
        if (date == null)
            return ret;
        
        String format = null;
        if (dateTimeFormat != null) {
            // Ya hay almacenado un dateTimeFormat
            format = dateTimeFormat;
        } else {
            try {
                dateTimeFormat = I18nService.getI18nFullDateFormat(locale);
                format = dateTimeFormat;
            } catch (GetFormatException ex) {
                format = FULLDATE_FORMAT_DEFAULT;
            }
        }
        
        try {
            Format f = new SimpleDateFormat(format, locale);
            ret = f.format(date);
        } catch (IllegalArgumentException e) {
            try {
                Format f= new SimpleDateFormat(FULLDATE_FORMAT_DEFAULT, locale);
                ret= f.format(date);
            } catch (IllegalArgumentException ee) {
                logger.error("En getI18nFullDate. Exception aplicando dateFormat: " + ee.getMessage());
                ee.printStackTrace();
            }
        }
        return ret;
    }
    
    
    /**
     * Devuelve el String del precio en el formato del locale seleccionado 
     * @param price
     * @param currencyCode El codigo de la moneda en formato ISO 4217
     * @param locale
     * @return El String con el precio en el formato del locale
     */
    public static String getPriceFormatted(BigDecimal price, String currencyCode, Locale locale) {
    	Currency currency = Currency.getInstance(currencyCode);
    	
    	return ObjectUtils.formatDoubleNumber(price.doubleValue() ,currency.getDefaultFractionDigits(), locale, true);
    }
    
    /*
    public static Vector loadMonthsItems(Locale locale) {
        Vector allMonthsItems = new Vector();
        
        KeyI18nPair anyMonthTag = FilterTypesFactory.getInstance().getAnyMonthTag();
        String i18nText = I18nUtils.getMessageResourceString(anyMonthTag.getI18nKey(), null, locale);
        SelectItem anyMonthSelect = new SelectItem(anyMonthTag.getId(), i18nText);
        allMonthsItems.add(anyMonthSelect);
        
        Calendar c = Calendar.getInstance();
        c.set(Calendar.MONTH, 0);
        c.set(Calendar.DAY_OF_MONTH,1);
        for (int i= 0; i < 12; i++) {
            YearMonthValue month = new YearMonthValue(c.getTime(), locale);
            //ret.add(month);
            
            SelectItem select = new SelectItem("" + (i + 1), month.getMonthString());
            allMonthsItems.add(select);
            
            c.add(Calendar.MONTH, 1);
        }
        return allMonthsItems;
    }
    
    public static Vector loadAllDaysMonthItems(Locale locale) {
        Vector allDaysMonthItems = new Vector();
        
        KeyI18nPair anyDayTag = FilterTypesFactory.getInstance().getAnyDayTag();
        String i18nText = getMessageResourceString(anyDayTag.getI18nKey(), null, locale);
        
        SelectItem anyDaySelect = new SelectItem(anyDayTag.getId(), i18nText);
        allDaysMonthItems.add(anyDaySelect);
        
        for (int i=1; i<=31; i++) {
            SelectItem select = new SelectItem("" + i, "" + i);
            allDaysMonthItems.add(select);
        }
        return allDaysMonthItems;
    }
    
    
    public static Vector loadYearsItems(Locale locale) {
        Vector allYearsItems = new Vector();
        
        Calendar a = Calendar.getInstance();
        int y = a.get(Calendar.YEAR);
        for (int i= -2; i < 3; i++) {
            YearValue year = new YearValue(y + i, locale);
            
            SelectItem select = new SelectItem("" + year.getYear(), year.getYearString());
            
            allYearsItems.add(select);
        }
        return allYearsItems;
    }
    */
    
    
    public static String[] getAllMonthNames(Locale l) {
        Format f= new SimpleDateFormat("MMMM", l);
        String ret[] = new String[12];
        Calendar c = Calendar.getInstance();
        c.set(Calendar.DAY_OF_MONTH, 1);
        for (int i=0; i< 12; i++){
            c.set(Calendar.MONTH, i);
            ret[i]= f.format(c.getTime());
        }
        return ret;
    }
    
    public static String[] getAllDayNames(Locale l) {
        Format f= new SimpleDateFormat("EEEE", l);
        String ret[] = new String[12];
        Calendar c = Calendar.getInstance();
        for (int i=0; i< 7; i++){
            c.set(Calendar.DAY_OF_WEEK, i+1);
            ret[i]= f.format(c.getTime());
        }
        return ret;
    }
    public static int getWeekStart(Locale l) {
        int ret = Calendar.getInstance(l).getFirstDayOfWeek() - 1 ;
        return ret;
    }
    
    public String getFullMonthName(Date d, Locale l){
        //Format f= new SimpleDateFormat("MMM", l);
        Format f= new SimpleDateFormat("MMMM", l);
        return f.format(d);
    }
    public String getFullDayName(Date d, Locale l){
        //Format f= new SimpleDateFormat("MMM", l);
        Format f= new SimpleDateFormat("MMMM", l);
        return f.format(d);
    }
}
