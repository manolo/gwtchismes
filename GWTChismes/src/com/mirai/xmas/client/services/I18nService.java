package com.mirai.xmas.client.services;

import java.util.Locale;
import java.util.Vector;
import java.util.HashMap;


import org.apache.log4j.Logger;

import com.hotelebusiness.ReservationSystem.values.MHotelInfoValue;
import com.mirai.xmas.values.XBookingValue;
import com.mirai.xmas.client.utils.I18nUtils;
import com.mirai.xmas.utils.LocaleUtils;
import com.mirai.xmas.exceptions.GetFormatException;

public class I18nService {
    final static String FULLDATE_FORMAT_KEY= "format.date.and.time";
    final static String DATE_FORMAT_KEY= "format.date";
    
    private static Logger logger= Logger.getLogger(I18nUtils.class);
    
    /**
     * Devuelve el mensaje internacionalizado en el lenguage seleccionado para el bundle por defecto (Interface)
     * @param key La key de internacionalizacion del mensaje
     * @param params Los parametros de sustitucion en los huecos correspondientes
     * @param locale El locale del lenguage a usar
     * @return El String del mensaje internacionalizado
     */
    public static String getMessageResourceString(
            String key,
            Object[] params,
            Locale locale) {
        String text = null;
        int languageIndex = LocaleUtils.getLanguageNumber(locale);
        
        try {
            text = BaseService2.getInstance().getMREInternationalManager().getStringInterfaceFromKey(key, languageIndex);
        } catch (Exception ex) {
            logger.warn("En getMessageResourceString. Error getting interface key " + key + " in language " + locale.getLanguage() + "\n" + ex.getMessage());
            text = "?? key " + key + " not found ??";
        }
        logger.debug("En getMessageResourceString. Found text: " + text + " for key: " + key + ", locale: " + locale);
        
        return LocaleUtils.substituteParameters(text, params, locale);
    }
    
    public static HashMap getMessagesTable(String[] keys, Locale locale) {
        HashMap result = null;
        try {
            int languageIndex = LocaleUtils.getLanguageNumber(locale);
            
            result = BaseService2.getInstance().getMREInternationalManager().getStringsTableFromKeys(keys, languageIndex);
        } catch (Exception ex) {
            logger.error("En getMessagesTable. Error trayendo la tabla de internacionalizacion. " + ex.getMessage());
            ex.printStackTrace();
        }
        return result;
    }
    
    /**
     * Devuelve el formato de fecha (sin hora) como String en el locale seleccionado
     * @param locale
     * @return El String de la fecha en el formato apropiado
     */
    public static String getI18nDateFormat(Locale locale) throws GetFormatException {
        String format = getMessageResourceString(DATE_FORMAT_KEY, null, locale);
        if (format == null || format.equals(DATE_FORMAT_KEY) || format.startsWith("???" + DATE_FORMAT_KEY)) {
            logger.error(
                "Error: En getI18nDateFormat. Locale: "
                    + locale
                    + ", key: "
                    + DATE_FORMAT_KEY
                    + ", returns: "
                    + format
                    + ". Setting to default");
            throw new GetFormatException();
        }
        return format;
    }
    
    /**
     * Devuelve el formato de fecha y hora como String en el locale seleccionado
     * @param locale
     * @return El String de la fecha y hora en el formato apropiado
     */
    public static String getI18nFullDateFormat(Locale locale) throws GetFormatException {
        String format = getMessageResourceString(FULLDATE_FORMAT_KEY, null, locale);
        if (format == null || format.equals(FULLDATE_FORMAT_KEY) || format.startsWith("???" + FULLDATE_FORMAT_KEY)) {
            logger.error(
                "Error: En getI18nFullDateFormat. Locale: "
                    + locale
                    + ", key: "
                    + FULLDATE_FORMAT_KEY
                    + ", returns: "
                    + format
                    + ". Setting to default");
            throw new GetFormatException();
        }
        return format;
    }
    
    public static Vector translateAttributesReserv(Vector attributes, String languageCode) throws Exception {
        return BaseService2.getInstance().getMREInternationalManager().translateAttributesReserv(attributes, languageCode);
    }
    
    public static Vector getHotelHtmlAttrs(Long idtokenprovider, int languageIndex) {
        try {
            Vector htmlAttrs = BaseService2.getInstance().getMREInternationalManager().getAllStringsOfType(idtokenprovider, I18nUtils.HTML_ATTRIBUTES_TYPE, languageIndex);
            
            return htmlAttrs;
        } catch (Exception ex) {
            logger.error("En getHotelHtmlAttrs. Error getting all values of html attributes for hotel: " + idtokenprovider + " in language " + languageIndex);
            ex.printStackTrace();
            
            return null;
        }
    }
    
    public static String getHotelAgreement(Long idtokenprovider, int languageIndex, MHotelInfoValue hotelInfo, MHotelInfoValue chainInfo) throws Exception {
        String hotelAgree = BaseService2.getInstance().getMREInternationalManager().getStringFromId(idtokenprovider, 1L, languageIndex, I18nUtils.HOTEL_AGREEMENTS_TYPE);
        if (hotelAgree == null || hotelAgree.trim().length() == 0) {
            // Probar en ingles
            if (languageIndex != 1) {
                hotelAgree = BaseService2.getInstance().getMREInternationalManager().getStringFromId(idtokenprovider, 1L, 1, I18nUtils.HOTEL_AGREEMENTS_TYPE);
            }
        }
        if (hotelAgree == null || hotelAgree.trim().length() == 0) {
            hotelAgree = BaseService2.getInstance().getMREInternationalManager().getStringFromId(Long.valueOf(0), 1L, languageIndex, I18nUtils.HOTEL_AGREEMENTS_TYPE);
        }
        if (hotelAgree == null || hotelAgree.trim().length() == 0) {
            hotelAgree = BaseService2.getInstance().getMREInternationalManager().getStringFromId(Long.valueOf(0), 1L, 1, I18nUtils.HOTEL_AGREEMENTS_TYPE);
        }
        if (hotelAgree != null && hotelAgree.trim().length() > 0) {
            hotelAgree = replaceAgreementKeys(hotelAgree, hotelInfo, chainInfo);
        }
        return hotelAgree;
    }
    
    private static String replaceAgreementKeys(String hotelAgree, MHotelInfoValue hiv, MHotelInfoValue civ) {
        //hotelAgree = hotelAgree.replaceAll("JSESSIONID", session == null ? "" : session);
        if (hiv != null) {
            hotelAgree = hotelAgree.replaceAll("HOTEL_NAME", hiv.getType() + " " + hiv.getName() + " " + hiv.getCategory());
            hotelAgree = hotelAgree.replaceAll("HOTEL_ADDRESS", hiv.getAddress() + " (" + hiv.getCp() + ") " + hiv.getLocation());
            hotelAgree = hotelAgree.replaceAll("HOTEL_ID", "" + hiv.getIdhotel());
        }
        if (civ != null && civ.getIdhotel() != null && civ.getIdhotel().longValue() > 0) {
            hotelAgree = hotelAgree.replaceAll("CHAIN_NAME", civ.getType() + " " + civ.getName() + " " + civ.getCategory());
            hotelAgree = hotelAgree.replaceAll("CHAIN_ADDRESS", civ.getAddress() + " (" + civ.getCp() + ") " + civ.getLocation());
        }
        return hotelAgree;
    }
    
    public static String getCancellationPolicyString(XBookingValue reservation, String languageCode) throws Exception {
        return BaseService2.getInstance().getMREInternationalManager().getCancellationPolicyString(reservation, languageCode);
    }
    
    public static void resetCacheInterface() {
        try {
            logger.info("En resertCacheInternational. Vamos a resetear la cache de interfaz");
            BaseService2.getInstance().getMREInternationalManager().resetCacheInterface();
        } catch (Exception ex) {
            logger.error("En resetCacheInternational. Excepcion reseteando la cache de interface. " + ex.getMessage());
            ex.printStackTrace();
        }
    }
}
