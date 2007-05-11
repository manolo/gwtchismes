package com.mirai.xmas.client.utils;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import java.util.Vector;

import org.apache.log4j.Logger;

import com.mirai.xmas.client.services.BaseService2;
import com.mirai.xmas.client.services.HotelInfoService;
import com.mirai.xmas.client.services.I18nService;
import com.mirai.xmas.values.XBookingValue;
import com.mirai.xmas.values.XBookingType;
import com.mirai.xmas.values.XPriceBoardValue;
import com.mirai.xmas.values.XReservationAttributesTranslatedValue;
import com.mirai.xmas.values.XProvider;
import com.mirai.xmas.values.XCardGuarantee;
import com.mirai.xmas.values.XBoardType;
import com.hotelebusiness.ReservationSystem.values.MEmailNoticeValue;
import com.hotelebusiness.ReservationSystem.values.MHotelInfoValue;
import com.hotelebusiness.ReservationSystem.values.MReservationFilterValue;
import com.hotelebusiness.ReservationSystem.values.MNoticeValue;
import com.hotelebusiness.ReservationSystem.util.CalendarUtils;
import com.hotelebusiness.ReservationSystem.util.CreditCardUtils;
import com.hotelebusiness.ReservationSystem.util.MailUtils;
import com.hotelebusiness.ReservationSystem.util.ObjectUtils;


public class NotificationUtils {
	public static final Locale MIRAI_LOCALE = new Locale("es", "ES");
	
	public static final String MIRAI_EMAIL_ADMIN = "dpto.admin@hotel-e-business.com";
	public static final String MIRAI_EMAIL_ADMIN_FRANCE = "dpto.admin.france@hotel-e-business.com";
	
    public static final int OP_USERRESERVATION   = 0; // Is a reservation
    public static final int OP_USERCANCELLATION  = 1; // User has cancelled the reservation
    public static final int OP_HOTELCANCELLATION = 2; // Hotel has cancelled the reservation
    
    public static final String I18nKEYMIRAIRESERVATIONSUBJECT = "notification.reservation.email.mirai.subject";
    public static final String I18nKEYMIRAIRESERVATIONBODY = "notification.reservation.email.mirai.body.xmas";
    public static final String I18nKEYMIRAICANCELLATIONSUBJECT = "notification.cancellation.email.mirai.subject";
    public static final String I18nKEYMIRAICANCELLATIONBODY = "notification.cancellation.email.hotel.body";
    public static final String I18nKEYUSERCANCELLATIONSUBJECT = "notification.cancellation.email.user.subject";
    public static final String I18nKEYUSERCANCELLATIONBODY = "notification.cancellation.email.user.body";
    public static final String I18nKEYHOTELCANCELLATIONBODYFORMIRAI = "notification.cancellation.email.hotel.body";
    public static final String I18nKEYHOTELCANCELLATIONSUBJECTFORMIRAI = "notification.cancellation.email.mirai.subject";
    public static final String I18nKEYRESERVATIONFAXBODY = "notification.reservation.fax.body";
    public static final String I18nKEYCANCELLATIONFAXBODY = "notification.cancellation.fax.body";
    public static final String I18nKEYHOTELRESERVATIONSUBJECT = "notification.reservation.email.hotel.subject";
    public static final String I18nKEYHOTELRESERVATIONBODY = "notification.reservation.email.hotel.body.xmas";
    public static final String I18nKEYHOTELCANCELLATIONBODY = "notification.cancellation.email.hotel.body";
    public static final String I18nKEYHOTELCANCELLATIONSUBJECT = "notification.cancellation.email.hotel.subject";
    public static final String I18nKEYUSERRESERVATIONSUBJECT = "notification.reservation.email.user.subject";
    public static final String I18nKEYUSERRESERVATIONBODY = "notification.reservation.email.user.body";
    public static final String I18nKEYHOTELCANCELLATIONBODYFORHOTEL = "notification.cancellation.email.hotel.body";
    public static final String I18nKEYHOTELCANCELLATIONSUBJECTFORHOTEL = "notification.cancellation.email.hotel.subject";
    public static final String I18nKEYHOTELCANCELLATIONBODYFORUSER = "notification.cancellation.email.user.body";
    public static final String i18nKEYHOTELCANCELLATIONSUBJECTFORUSER = "notification.cancellation.email.user.subject";
    
    private final static String PAY_FORMAT = "notification.reservation.user.payformat";
    private final static String SEE_CARD_KEY= "notification.reservation.see.card.key.html";
    private final static String CARDINFO_USER= "notification.reservation.user.guarantee.card";
    private final static String CARD_FAX= "notification.reservation.hotel.guarantee.fax";
    private final static String CARDINFO_HOTEL= "notification.reservation.hotel.guarantee.card";
    private final static String CARDINFO_2_HOTEL= "notification.reservation.hotel.guarantee.2.card";
    private final static String MIRAI_INVOICE_COMPANY= "notification.reservation.hotel.mirai.invoice.company.head";
    private final static String MIRAI_INVOICE_COMPANY_SUBJECT= "notification.reservation.hotel.mirai.invoice.company.subject";
    private final static String FREE_PRICE = "key.offers.free";
    private final static String RESLINE_PRICE_INTERVAL= "notification.reservation.line.prices.by.intervals";
    private final static String RESLINE_PRICE_DAYS= "notification.reservation.line.prices.by.days";
    private final static String RESLINE_SUMMARY= "notification.reservation.line.summary";
    
    private static Logger logger = Logger.getLogger(NotificationUtils.class);
    
    /**
     * Notificar el exito de la reserva al hotel, a Mirai y a el cliente
     * @param reservation
     */
    public static void notifyReservation(XBookingValue ev, Vector attributesTranslated,
            String cancelPolicyI18n, String cancelPolicyI18nEnglish,
            boolean sendEmailToUser, boolean sendEmailToHotel, boolean sendFaxToHotel, boolean sendEmailToMirai)
            throws Exception {
        doGenericNotification(ev, attributesTranslated, null, cancelPolicyI18n, cancelPolicyI18nEnglish,
                ev.getLanguageCode(), null, null, null, sendEmailToUser, sendEmailToMirai, sendEmailToHotel, OP_USERRESERVATION);
    }
    
    private static void doGenericNotification(XBookingValue reservation,
    		Vector reservLangAttributesTranslated, String additionalText, 
            String cancelPolicyI18n, String cancelPolicyI18nEnglish, String language,
            String userEmail, String miraiEmail, String hotelEmail,
            boolean sendEmailToUser, boolean sendEmailToMirai, boolean sendEmailToHotel,
            int operation) {
    	
    	Long idtokenprovider = reservation.getIdtokenprovider();
    	Locale locale = new Locale(language);
        try {
    		XProvider xmasprov = HotelInfoService.getHotelInfoCore(idtokenprovider);
        	
        	HashMap objArrayLocalesTable = new HashMap();
            HashMap hotelInfoValuesTable = new HashMap();
            HashMap attributesTranslatedTable = new HashMap();
            HashMap cancelPoliciesTable = new HashMap(); 
            attributesTranslatedTable.put(language, reservLangAttributesTranslated);
            cancelPoliciesTable.put(language, cancelPolicyI18n);
            if (cancelPolicyI18nEnglish != null && ! language.equals("en")) {
                cancelPoliciesTable.put("en", cancelPolicyI18nEnglish);
            }
            
            Calendar dateCal = Calendar.getInstance();
            String MSK = null;
            String MBK = null;
            //String HFBK = null;
            String HMSK = null;
            String HMBK = null;
            String USK = null;
            String UBK = null;
            if (operation == NotificationUtils.OP_USERRESERVATION) {
            	dateCal.setTime(reservation.getReservationDate());
                MSK = NotificationUtils.I18nKEYMIRAIRESERVATIONSUBJECT;
                MBK = NotificationUtils.I18nKEYMIRAIRESERVATIONBODY;
//                HFBK = NotificationUtils.I18nKEYRESERVATIONFAXBODY;
                HMSK = NotificationUtils.I18nKEYHOTELRESERVATIONSUBJECT;
                HMBK = NotificationUtils.I18nKEYHOTELRESERVATIONBODY;
                USK = NotificationUtils.I18nKEYUSERRESERVATIONSUBJECT;
                UBK = NotificationUtils.I18nKEYUSERRESERVATIONBODY;
            } else if (operation == NotificationUtils.OP_USERCANCELLATION) {
            	dateCal.setTime(reservation.getCancelDate());
                MSK = NotificationUtils.I18nKEYMIRAICANCELLATIONSUBJECT;
                MBK = NotificationUtils.I18nKEYMIRAICANCELLATIONBODY;
//                HFBK = NotificationUtils.I18nKEYCANCELLATIONFAXBODY;
                HMSK = NotificationUtils.I18nKEYHOTELCANCELLATIONSUBJECT;
                HMBK = NotificationUtils.I18nKEYHOTELCANCELLATIONBODY;
                USK = NotificationUtils.I18nKEYUSERCANCELLATIONSUBJECT;
                UBK = NotificationUtils.I18nKEYUSERCANCELLATIONBODY;
            } else {  // iOperation == iHotelCancellation
//            	dateCal.setTime(ev.getReservationRevision().getRevisiondate());
                MSK = NotificationUtils.I18nKEYHOTELCANCELLATIONSUBJECTFORMIRAI;
                MBK = NotificationUtils.I18nKEYHOTELCANCELLATIONBODYFORMIRAI;
//                HFBK = NotificationUtils.I18nKEYCANCELLATIONFAXBODY;
                HMSK = NotificationUtils.I18nKEYHOTELCANCELLATIONSUBJECTFORHOTEL;
                HMBK = NotificationUtils.I18nKEYHOTELCANCELLATIONBODYFORHOTEL;
                USK = NotificationUtils.i18nKEYHOTELCANCELLATIONSUBJECTFORUSER;
                UBK = NotificationUtils.I18nKEYHOTELCANCELLATIONBODYFORUSER;
            }
            
            if (sendEmailToHotel) {
                String subjectKey = HMSK;
                String bodyKey = HMBK;
                
                String replyTo = reservation.getClientEmail() != null ? reservation.getClientEmail() : null;
                String emailFrom = NotificationUtils.MIRAI_EMAIL_ADMIN;
                
                Vector notices = new Vector();
                // Llenar el vector the notices con las personas a las que notificar
                if (hotelEmail == null) {
                    notices = BaseService2.getInstance().getMREHotelInfoManager().getHotelNotices(idtokenprovider);
                } else { 
                    notices.addElement(new MEmailNoticeValue(hotelEmail, Short.valueOf((short) 1), null, Short.valueOf((short) 7), null, locale, true));
                }
                
                // Rellenar los datos con los que notificar a las personas
                for (Iterator itNotices = notices.iterator(); itNotices.hasNext(); ) {
                    
                    MNoticeValue notice = (MNoticeValue)itNotices.next();
                    
                    if (notice instanceof MEmailNoticeValue) {
                        MEmailNoticeValue emailNotice = (MEmailNoticeValue)notice;
                        Locale currentLocale = emailNotice.getLocale();
                        
                        MHotelInfoValue hiv = (MHotelInfoValue)hotelInfoValuesTable.get(currentLocale.getLanguage());
                        if (hiv == null) {
                            hiv = BaseService2.getInstance().getMREHotelInfoManager().getHotelInfoValue(idtokenprovider, currentLocale.getLanguage());
                            hotelInfoValuesTable.put(currentLocale.getLanguage(), hiv);
                        }
                        
                        Vector thisLangAttributesTrans = (Vector)attributesTranslatedTable.get(currentLocale.getLanguage());
                        if (thisLangAttributesTrans == null) {
                            if (reservation.getAttributes() != null && reservation.getAttributes().size() > 0) {
                                // Traducir los atributos html para mostrarlos
                                thisLangAttributesTrans = I18nService.translateAttributesReserv(reservation.getAttributes(), currentLocale.getLanguage());
                                attributesTranslatedTable.put(currentLocale.getLanguage(), thisLangAttributesTrans); 
                            }
                        }
                        
                        String thisCancelPolicyI18n = (String)cancelPoliciesTable.get(currentLocale.getLanguage());
                        if (thisCancelPolicyI18n == null) {
                            if (reservation.getCancellationPolicy() != null) {
                                thisCancelPolicyI18n = I18nService.getCancellationPolicyString(reservation, currentLocale.getLanguage());
                                cancelPoliciesTable.put(currentLocale.getLanguage(), thisCancelPolicyI18n);
                            }
                        }
                        
                        Object[][] data = (Object[][]) objArrayLocalesTable.get(currentLocale.getLanguage());
                        if (data == null) {
                            data = getReservationNotificationArrays(reservation, hiv, xmasprov,
                                    thisLangAttributesTrans, thisCancelPolicyI18n, currentLocale, true, true);
                            objArrayLocalesTable.put(currentLocale.getLanguage(), data);
                        }
                        
                        Object[] textData = data[0];
                        Object[] htmlData = data[1];
                        
                        String subjectToSend = I18nService.getMessageResourceString(subjectKey, textData, currentLocale);
                        String bodyToSendText = I18nService.getMessageResourceString(bodyKey, textData, currentLocale);
                        String bodyToSendHtml = I18nService.getMessageResourceString(bodyKey + ".html", htmlData, currentLocale);
                        if (additionalText != null && additionalText.length() > 0) {
                            bodyToSendText = additionalText + "\n\n\n" + bodyToSendText;
                            if (bodyToSendHtml != null && bodyToSendHtml.length() > 0) {
                                bodyToSendHtml = "<html>" + additionalText.replaceAll("\n", "<br/>") + "<br/><br/><br/>\n" + bodyToSendHtml + "\n</html>";
                            }
                        }
                        System.out.println("Sending Noti to Hotel Id: " + reservation.getFullReservationCode() + " loc: " + currentLocale + " From: " + emailFrom + " To: " + emailNotice.getEmail()
                                + " Operation:" + operation);
                        MailUtils.sendEmailWithThreads(logger, emailNotice.getEmail(), replyTo, emailFrom, subjectToSend, bodyToSendText, bodyToSendHtml);
                    }
                }
            }
            
            if (sendEmailToMirai) {
                String emailTo = miraiEmail != null ? miraiEmail : NotificationUtils.MIRAI_EMAIL_ADMIN;
                String emailFrom = reservation.getClientEmail() != null ? reservation.getClientEmail() : NotificationUtils.MIRAI_EMAIL_ADMIN;
                Locale miraiLocale = NotificationUtils.MIRAI_LOCALE;
                String subjectkey = MSK;
                String bodykey = MBK;
                if (xmasprov.getCountrySource() == 2) {
                    emailTo = NotificationUtils.MIRAI_EMAIL_ADMIN_FRANCE;
                }
                MHotelInfoValue hiv = (MHotelInfoValue)hotelInfoValuesTable.get(miraiLocale.getLanguage());
                if (hiv == null) {
            		hiv = BaseService2.getInstance().getMREHotelInfoManager().getHotelInfoValue(idtokenprovider, miraiLocale.getLanguage());
                	hotelInfoValuesTable.put(miraiLocale.getLanguage(), hiv);
                }
                
                Vector thisLangAttributesTrans = (Vector)attributesTranslatedTable.get(miraiLocale.getLanguage());
                if (thisLangAttributesTrans == null) {
                    if (reservation.getAttributes() != null && reservation.getAttributes().size() > 0) {
                        // Traducir los atributos html para mostrarlos
                        thisLangAttributesTrans = I18nService.translateAttributesReserv(reservation.getAttributes(), miraiLocale.getLanguage());
                        attributesTranslatedTable.put(miraiLocale.getLanguage(), thisLangAttributesTrans); 
                    }
                }
                
                String thisCancelPolicyI18n = (String)cancelPoliciesTable.get(miraiLocale.getLanguage());
                if (thisCancelPolicyI18n == null) {
                    if (reservation.getCancellationPolicy() != null) {
                        thisCancelPolicyI18n = I18nService.getCancellationPolicyString(reservation, miraiLocale.getLanguage());
                        cancelPoliciesTable.put(miraiLocale.getLanguage(), thisCancelPolicyI18n);
                    }
                }
                
                Object[][] data = (Object[][]) objArrayLocalesTable.get(miraiLocale.getLanguage());
                if (data == null) {
                    data = getReservationNotificationArrays(reservation, hiv, xmasprov,
                            thisLangAttributesTrans, thisCancelPolicyI18n, miraiLocale, true, true);
                    objArrayLocalesTable.put(miraiLocale.getLanguage(), data);
                }
                Object[] textData = data[0];
                Object[] htmlData = data[1];
                String subjectToSend = I18nService.getMessageResourceString(subjectkey, textData, miraiLocale);
                String bodyToSendText = I18nService.getMessageResourceString(bodykey, textData, miraiLocale);
                String bodyToSendHtml = I18nService.getMessageResourceString(bodykey + ".html", htmlData, miraiLocale);
                if (additionalText != null && additionalText.length() > 0) {
                    bodyToSendText = additionalText + "\n\n\n" + bodyToSendText;
                    if (bodyToSendHtml != null && bodyToSendHtml.length() > 0) {
                        bodyToSendHtml = "<html>" + additionalText.replaceAll("\n", "<br/>") + "<br/><br/><br/>\n" + bodyToSendHtml + "\n</html>";
                    }
                }
                System.out.println("Sending Noti to Mirai Id: " + reservation.getFullReservationCode() + " loc: " + locale + " From: " + emailFrom + " To: " + emailTo
                        + " Operation:" + operation);
                MailUtils.sendEmailWithThreads(logger, emailTo, null, emailFrom, subjectToSend, bodyToSendText, bodyToSendHtml);
            }
            
            /*
            if (sendEmailToHotel || sendFaxToHotel) {
                String replyTo = reservation.getClientEmail() != null ? reservation.getClientEmail() : null;
                String emailFrom = NotificationUtils.MIRAI_EMAIL_ADMIN;
                for (int i = 0; notices != null && i < notices.size(); i++) {
                    Object element = notices.elementAt(i);
                    if (element instanceof EmailNoticeValue && sendEmailToHotel) {
                        EmailNoticeValue v = (EmailNoticeValue) element;
                        Locale currentLocale = v.getLocale();
                        String emailTo = v.getEmail();
                        String subjectKey = HMSK;
                        String bodyKey = HMBK;
                        HotelInfoValue hiv = (HotelInfoValue)hotelInfoValuesTable.get(currentLocale.getLanguage());
                        if (hiv == null) {
                    		hiv = BaseService2.getInstance().getHotelInfoManager().getHotelInfoValue(idtokenprovider, currentLocale.getLanguage());
                        	hotelInfoValuesTable.put(currentLocale.getLanguage(), hiv);
                        }
                        Object[] textData = (Object[]) objArrayLocalesTableText.get(currentLocale.getLanguage());
                        if (textData == null) {
                            textData = NotificationUtils.getReservationNotificationArray(reservation, hiv, xmasprov, currentLocale, false);
                            objArrayLocalesTableText.put(currentLocale.getLanguage(), textData);
                        }
                        Object[] htmlData = (Object[]) objArrayLocalesTableHtml.get(currentLocale.getLanguage());
                        if (htmlData == null) {
                            htmlData = NotificationUtils.getReservationNotificationArray(reservation, hiv, xmasprov, currentLocale, true);
                            objArrayLocalesTableHtml.put(currentLocale.getLanguage(), htmlData);
                        }
                        String subjectToSend = I18nUtils.getMessageResourceString(subjectKey, textData, currentLocale);
                        String bodyToSendText = I18nUtils.getMessageResourceString(bodyKey, textData, currentLocale);
                        String bodyToSendHtml = I18nUtils.getMessageResourceString(bodyKey + ".html", htmlData, currentLocale);
                        if (additionalText != null && additionalText.length() > 0) {
                            bodyToSendText = additionalText + "\n\n\n" + bodyToSendText;
                            if (bodyToSendHtml != null && bodyToSendHtml.length() > 0) {
                                bodyToSendHtml = "<html>" + additionalText.replaceAll("\n", "<br/>") + "<br/><br/><br/>\n" + bodyToSendHtml + "\n</html>";
                            }
                        }
                        System.out.println("Sending Noti to Hotel Id: " + reservation.getFullReservationCode() + " loc: " + currentLocale + " From: " + emailFrom + " To: " + emailTo
                                + " Operation:" + operation);
                        MailUtils.sendEmailWithThreads(logger, emailTo, replyTo, emailFrom, subjectToSend, bodyToSendText, bodyToSendHtml);
                    } else if (element instanceof FaxNoticeValue && sendFaxToHotel) {
                        FaxNoticeValue v = (FaxNoticeValue) element;
                        Locale currentLocale = v.getLocale();
                        String faxTo = v.getFax();
                        String bodyKey = HFBK;
                        Object[] textData = (Object[]) objArrayLocalesTableText.get(currentLocale.getLanguage());
                        String bodyToSendText = I18nUtils.getMessageResourceString(bodyKey, textData, currentLocale);
                        if (additionalText != null && additionalText.length() > 0) {
                            bodyToSendText = additionalText + "\n\n\n" + bodyToSendText;
                        }
                        System.out.println("Sending Fax to Hotel Id: " + reservation.getFullReservationCode() + " loc: " + currentLocale + " From: " + emailFrom + " To: " + faxTo
                                + " Operation:" + operation);
                        MailUtils.sendFaxWithThreads(logger, emailFrom, faxTo, bodyToSendText, xmasprov.getCountrySource());
                    }
                }
            }
            */
            
            if (sendEmailToUser && (reservation.getClientEmail() != null || userEmail != null)) {
                String emailTo = userEmail != null ? userEmail : reservation.getClientEmail();
                if (ObjectUtils.isValidEmail(emailTo)) {
                    String reservLanguage = reservation.getLanguageCode();
                    Locale currentLocale = new Locale(reservLanguage);
                    MHotelInfoValue hiv = (MHotelInfoValue)hotelInfoValuesTable.get(reservLanguage);
                    if (hiv == null) {
                    	hiv = BaseService2.getInstance().getMREHotelInfoManager().getHotelInfoValue(idtokenprovider, reservLanguage);
                    }
                    
                    Vector thisLangAttributesTrans = (Vector)attributesTranslatedTable.get(reservLanguage);
                    if (thisLangAttributesTrans == null) {
                        if (reservation.getAttributes() != null && reservation.getAttributes().size() > 0) {
                            // Traducir los atributos html para mostrarlos
                            thisLangAttributesTrans = I18nService.translateAttributesReserv(reservation.getAttributes(), reservLanguage);
                            attributesTranslatedTable.put(reservLanguage, thisLangAttributesTrans); 
                        }
                    }
                    
                    String thisCancelPolicyI18n = (String)cancelPoliciesTable.get(reservLanguage);
                    if (thisCancelPolicyI18n == null) {
                        if (reservation.getCancellationPolicy() != null) {
                            thisCancelPolicyI18n = I18nService.getCancellationPolicyString(reservation, reservLanguage);
                            cancelPoliciesTable.put(reservLanguage, thisCancelPolicyI18n);
                        }
                    }
                    
                    String emailFrom = getEmailHotelFrom(reservation.getIdtokenprovider(), xmasprov, hiv);
                    String subjectkey = USK;
                    String bodykey = UBK;
                    Object[][] data = (Object[][]) objArrayLocalesTable.get(currentLocale.getLanguage());
                    if (data == null) {
                        data = getReservationNotificationArrays(reservation, hiv, xmasprov,
                                thisLangAttributesTrans, thisCancelPolicyI18n, currentLocale, true, true);
                        objArrayLocalesTable.put(currentLocale.getLanguage(), data);
                    }
                    Object[] textData = data[0];
                    Object[] htmlData = data[1];
                    String subjectToSend = I18nService.getMessageResourceString(subjectkey, textData, currentLocale);
                    String bodyToSendText = I18nService.getMessageResourceString(bodykey, textData, currentLocale);
                    String bodyToSendHtml = I18nService.getMessageResourceString(bodykey + ".html", htmlData, currentLocale);
                    if (additionalText != null && additionalText.length() > 0) {
                        bodyToSendText = additionalText + "\n\n\n" + bodyToSendText;
                        if (bodyToSendHtml != null && bodyToSendHtml.length() > 0 && (!bodyToSendHtml.equals(bodykey + ".html"))) {
                            bodyToSendHtml = "<html>" + additionalText.replaceAll("\n", "<br/>") + "<br/><br/><br/>\n" + bodyToSendHtml + "\n</html>";
                        } else {
                            bodyToSendHtml = null;
                        }
                    }
                    System.out.println("Sending Noti to User Id: " + reservation.getFullReservationCode() + " loc: " + currentLocale + " From: " + emailFrom + " To: " + emailTo
                            + " Operation: " + operation);
                    MailUtils.sendEmailWithThreads(logger, emailTo, null, emailFrom, subjectToSend, bodyToSendText, bodyToSendHtml);
                }
            }
        } catch (Exception ex) {
            System.out.println("Error sending e-mail to notify reservation\n" + ex.getMessage());
            ex.printStackTrace();
        }
    }
    
    private static String getEmailHotelFrom(Long idtokenprovider, XProvider xmp, MHotelInfoValue hiv) throws Exception {
        String ret = null;
        
        if (xmp != null && xmp.getEmailContact() != null && xmp.getEmailContact().length() > 0) {
            ret = xmp.getEmailContact();
        } else {
            Vector f = (Vector) BaseService2.getInstance().getMREHotelInfoManager().getHotelEmails(idtokenprovider);
            if (f != null && f.size() > 0) {
                ret = ((MEmailNoticeValue) f.elementAt(0)).getEmail();
            } else {
                if (hiv != null && hiv.getEmail() != null && hiv.getEmail().length() > 0) {
                    ret = hiv.getEmail();
                } else {
                    ret = NotificationUtils.MIRAI_EMAIL_ADMIN;
                }
            }
        }
        
        return ret;
    }
    
    private static Object[][] getReservationNotificationArrays(XBookingValue reservation, MHotelInfoValue hiv, XProvider xmasprov,
    		Vector attributesTranslated, String cancelPolicyI18n, Locale locale, boolean returnText, boolean returnHtml) throws Exception {
        
        // El objecto de retorno son dos arrays, uno conteniendo los datos en formato text y el otro los datos en formato html
        Object[][] result = new Object[2][];
        
        // Valores comunes a text y html
        // Obtener la cabecera de la factura con el nombre adecuado de la compania dependiendo del pais
        String keyMiraiCompanyHead = null;
        String miraiCompanySubject = null;
        if (hiv.getTokenprovidervalue() != null) {
            Integer cs= hiv.getTokenprovidervalue().getCountrysource();
            if (cs == null)
                cs= new Integer(1); // Por defecto la empresa que factura es Mirai Espana
            keyMiraiCompanyHead= MIRAI_INVOICE_COMPANY + "." + cs;
            String keyMiraiCompanySubject= MIRAI_INVOICE_COMPANY_SUBJECT + "." + cs;
            miraiCompanySubject= I18nService.getMessageResourceString(keyMiraiCompanySubject, null, locale);
        } else {
            miraiCompanySubject= "";
        }
        
        String clientCompany = reservation.getClientCompany() != null? reservation.getClientCompany() : "";
        String clientPhone = reservation.getClientPhone() != null ? reservation.getClientPhone() : "";
        String clientFax = reservation.getClientFax() != null ? reservation.getClientFax() : "";
        String clientComments = reservation.getClientComments() != null ? reservation.getClientComments() : "";
        String reservDate = I18nUtils.getI18nFullDate(reservation.getReservationDate(), locale);
        String checkinDate = I18nUtils.getI18nDate(reservation.getCheckinDate(), locale);
        String checkoutDate = I18nUtils.getI18nDate(reservation.getCheckoutDate(), locale);
        String totalPrice = I18nUtils.getPriceFormatted(reservation.getTotalPriceAfterTax(), reservation.getCurrencyCode() , locale);
        String seeCardText = getTextSeeCard(reservation.getIdtokenprovider(), reservation.getIdReservationMirai(), locale);
        String cardInfoHotelText = getTextForCardGuarantee(locale, reservation.getCardGuarantee(),
                reservation.getGuarantee(), CARDINFO_HOTEL, "");
        String cardGuaranteeMethod = "";
        if (reservation.getGuarantee() != null && reservation.getGuarantee().intValue() == 2) {
            cardGuaranteeMethod = I18nService.getMessageResourceString(CARD_FAX, null, locale);
        }
        String hotelTelephone = hiv.getI18nTelephone() != null ? hiv.getI18nTelephone() : "";
        // Check if there is a fax number for the guarantee
        String faxGuarantee;
        if (xmasprov.isFaxGuarantee() && xmasprov.getFaxNumber() != null && xmasprov.getFaxNumber().length() > 2) {
            // There is a fax for the guarantee. It is the fax number to show
            faxGuarantee = ObjectUtils.formatPhone(xmasprov.getFaxNumber(), hiv.getIdCountry());
        } else {
            // There is no fax number for guarantee. Show the one in HotelInfoValue
            faxGuarantee = hiv.getI18nFax() != null ? hiv.getI18nFax() : "";
        }
        String hotelEmail = hiv.getEmail() != null ? hiv.getEmail() : "";
        String hotelUrl = hiv.getUrl() != null ? hiv.getUrl() : "";
        
        String cardInfoUserText = getTextForCardGuarantee(locale, reservation.getCardGuarantee(), reservation.getGuarantee(),
                CARDINFO_USER, "");
        String cancelDate = I18nUtils.getI18nFullDate(reservation.getCancelDate(), locale);
        String taxIncluded = I18nService.getMessageResourceString("key.tax.included", null, locale);
        
        // Atributos de la reserva
        Vector[] attributesArray = splitAttributesTypes(attributesTranslated);
        
        String[] agreementAttributesText = null;
        String[] htmlAttributesText = null;
        if (attributesArray != null) {
            // Separar los atributos en atributos html y agreements
            Vector htmlAttributes = attributesArray[0];
            Vector agreementAttributes = attributesArray[1];
            
            // Sacar cada uno de los atributos en formato text y formato html (devuelve un array con la posicion 0 para formato text y la 1 para formato html) 
            agreementAttributesText = getAttributesTexts(agreementAttributes);
            htmlAttributesText = getAttributesTexts(htmlAttributes);
        }
        
        String cardInfo2HotelText = getTextForCardGuarantee(locale, reservation.getCardGuarantee(), reservation.getGuarantee(),
                CARDINFO_2_HOTEL, ""); 
        
        String[] summaryDataReservLines = getSummaryTextForReservationLine(locale, reservation.getReservationLines(), "", reservation.getCurrencyCode());
        
        String commission = ObjectUtils.formatCentsPrice(reservation.getCommission(), 2, locale);
        
        String webStr = "";
        if (reservation.getHsri() != null && reservation.getHsri().trim().equals("segitur")) {
            webStr = I18nService.getMessageResourceString("reservation.origin.spaininfo", null, locale);
        } else {
            webStr = hiv.getUrl() != null ? hiv.getUrl() : "";
        }
        
        if (returnText == true) {
            Object[] t = new Object[57];
            
            // Rellena el array de retorno text
            t[0] = reservation.getIdReservationMirai().toString();
            t[1] = reservation.getClientFirstName();
            t[2] = reservation.getClientLastName();
            t[3] = reservation.getClientEmail();
            t[4] = clientCompany;
            t[5] = clientPhone;
            t[6] = clientFax;
            t[7] = clientComments;
            t[8] = reservDate;
            t[9] = checkinDate;
            t[10] = checkoutDate;
            t[11] = totalPrice;
            t[14] = summaryDataReservLines[0]; 
            t[15] = cardInfoHotelText;
            t[16] = cardGuaranteeMethod;
            t[17] = reservation.getHsri();
            t[18] = reservation.getHsli();
            t[19] = reservation.getIpssl();
            t[20] = reservation.getIp();
            t[21] = reservation.getIpforwarded();
            t[22] = reservation.getClientCountry();
            t[23] = reservation.getLanguageCode();
            t[24] = cancelPolicyI18n;
            t[25] = hiv.getType();
            t[26] = hiv.getName();
            t[27] = hiv.getCategory();
            t[28] = hiv.getAddress();
            t[29] = hiv.getCp();
            t[30] = hiv.getLocation();
            t[31] = hotelTelephone;
            t[32] = faxGuarantee;
            t[33] = hotelEmail;
            t[34] = hotelUrl;
            t[35] = reservation.getCancelCode().toString();
            t[37] = reservation.getIdReservationMirai().toString();
            t[38]= reservation.getIdtokenprovider().toString();
            t[39]= cardInfoUserText;
            t[40] = cancelDate;
            t[41] = taxIncluded;
            t[45] = commission;
            t[47]= "";
            t[48]= hiv.getIdsolid().toString();
            t[49]= I18nService.getMessageResourceString(PAY_FORMAT, null, locale);
            t[50] = cardInfo2HotelText;
            t[51] = agreementAttributesText != null ? agreementAttributesText[0] : "";
            t[52] = htmlAttributesText != null ? htmlAttributesText[0] : "";
            t[53] = keyMiraiCompanyHead != null ? I18nService.getMessageResourceString(keyMiraiCompanyHead, null, locale) : "";
            t[54] = miraiCompanySubject;
            t[55] = reservation.getCurrencyCode();
            t[56] = webStr;
            
            // Rellenamos el array de vuelta. En la posicin 0 va el formato texto
            result[0] = t;
        }
        
        if (returnHtml == true) {
            Object[] h = new Object[57];
            
            // Rellena el array de retorno html
            h[0] = reservation.getIdReservationMirai().toString();
            h[1] = reservation.getClientFirstName();
            h[2] = reservation.getClientLastName();
            h[3] = reservation.getClientEmail();
            h[4] = clientCompany;
            h[5] = clientPhone;
            h[6] = clientFax;
            h[7] = clientComments;
            h[8] = reservDate;
            h[9] = checkinDate;
            h[10] = checkoutDate;
            h[11] = totalPrice;
            h[14] = summaryDataReservLines[1];
            
            String cardInfoHotelHtml = getTextForCardGuarantee(locale, reservation.getCardGuarantee(),
                    reservation.getGuarantee(), CARDINFO_HOTEL + ".html", seeCardText);
            if (cardInfoHotelHtml == null) {
                cardInfoHotelHtml = cardInfoHotelText.replaceAll("\n", "<br>");
            }
            h[15] = cardInfoHotelHtml;
            h[16] = cardGuaranteeMethod;
            h[17] = reservation.getHsri();
            h[18] = reservation.getHsli();
            h[19] = reservation.getIpssl();
            h[20] = reservation.getIp();
            h[21] = reservation.getIpforwarded();
            h[22] = reservation.getClientCountry();
            h[23] = reservation.getLanguageCode();
            h[24] = cancelPolicyI18n;
            h[25] = hiv.getType();
            h[26] = hiv.getName();
            h[27] = hiv.getCategory();
            h[28] = hiv.getAddress();
            h[29] = hiv.getCp();
            h[30] = hiv.getLocation();
            h[31] = hotelTelephone;
            h[32] = faxGuarantee;
            h[33] = hotelEmail;
            h[34] = hotelUrl;
            h[35] = reservation.getCancelCode().toString();
            h[37]= reservation.getIdReservationMirai().toString();
            h[38]= reservation.getIdtokenprovider().toString();
            String cardInfoUserHtml = getTextForCardGuarantee(locale, reservation.getCardGuarantee(), reservation.getGuarantee(),
                    CARDINFO_USER + ".html", seeCardText);
            if (cardInfoUserHtml == null) {
                cardInfoUserHtml = cardInfoUserText.replaceAll("\n", "<br>");
            }
            h[39] = cardInfoUserHtml;
            h[40] = cancelDate;
            h[41] = taxIncluded;
            h[45] = commission;
            h[47]= "";
            h[48]= hiv.getIdsolid().toString();
            h[49]= I18nService.getMessageResourceString(PAY_FORMAT + ".html", null, locale);
            String cardInfo2HotelHtml = getTextForCardGuarantee(locale, reservation.getCardGuarantee(), reservation.getGuarantee(),
                    CARDINFO_2_HOTEL + ".html", seeCardText);
            if (cardInfo2HotelHtml == null) {
                cardInfo2HotelHtml = cardInfo2HotelText.replaceAll("\n", "<br>");
            }
            h[50] = cardInfo2HotelHtml;
            h[51] = agreementAttributesText != null ? agreementAttributesText[1] : "";
            h[52] = htmlAttributesText != null ? htmlAttributesText[1] : "";
            h[53] = keyMiraiCompanyHead != null ? I18nService.getMessageResourceString(keyMiraiCompanyHead + ".html", null, locale) : "";
            h[54] = miraiCompanySubject;
            h[55] = reservation.getCurrencyCode();
            h[56] = webStr;
            // Rellenamos el array de vuelta. En la posicion 1 va el formato html
            result[1] = h;
        }
        
        
        //o[36]= getTextForReservationLine(MRinterf, MRUses, MROfferTitle, MRIncluded, locale, numDecimals, ev.getReservationlines(), currencyText);
        
        /*
        o[12]= ev.getNumadults();
        o[13]= ev.getNumchildren();
        o[50]= card_info_2_hotel;
        // No se suele usar
        o[36]= getTextForReservationLine(MRinterf, MRUses, MROfferTitle, MRIncluded, locale, numDecimals, ev.getReservationlines(), currencyText);
        o[39]= card_info_user;
        o[40]=   i18nFullDate(MRinterf, locale, ev.getCanceldate());
        o[42]= tpv == null ? "" : tpv.getFaxNumber(); // Fax de Enviar Garantia.
        o[43]= geti18nAttributes(MRinterf, locale, ev.getAttributes()).elementAt(0); // otros elementos del formulario en txt
        o[44]= "";
        o[45]= i18nPrice(locale, numDecimals, ev.getCommission());
        o[46]= geti18nAttributes(MRinterf, locale, ev.getAttributes()).elementAt(1); // otros elementos del formulario en html
		*/
        
        
        
        /*
        // For the hotel write the web as spain.info
        */
        
		return result;
    }
    
    private static Vector[] splitAttributesTypes(Vector attributesTranslated) {
        if (attributesTranslated == null) {
            System.out.println("attributesTranslated is null");
            return null;
        }
        Vector htmlAttributes = new Vector();
        Vector agreementAttributes = new Vector();
        
        for (Iterator itAttributes = attributesTranslated.iterator(); itAttributes.hasNext(); ) {
            XReservationAttributesTranslatedValue attrTranslated = (XReservationAttributesTranslatedValue)itAttributes.next();
            if (attrTranslated.getIdtype().intValue() == XReservationAttributesTranslatedValue.HOTEL_AGREEMENT
                    || attrTranslated.getIdtype().intValue() == XReservationAttributesTranslatedValue.MIRAI_AGREEMENT
                    || attrTranslated.getIdtype().intValue() == XReservationAttributesTranslatedValue.MIRAI_ATTR) {
                agreementAttributes.add(attrTranslated);
            } else if (attrTranslated.getIdtype().intValue() == XReservationAttributesTranslatedValue.HOTEL_ATTR) {
                htmlAttributes.add(attrTranslated);
            }
        }
        return new Vector[]{htmlAttributes, agreementAttributes};
    }
    
    private static String[] getAttributesTexts(Vector attributes) {
        String[] ret = new String[2];
        StringBuffer rettxt= new StringBuffer();
        StringBuffer rethtml = new StringBuffer();
        if (attributes != null) {
            rethtml.append("<ul>");
            for (Iterator itAttributes = attributes.iterator(); itAttributes.hasNext();) {
                XReservationAttributesTranslatedValue ra= (XReservationAttributesTranslatedValue)itAttributes.next();
                String n = ra.getTitle();
                String v = ra.getValue();
                if (v != null && v.length() > 0) {
                    rettxt.append(" - ").append(n).append(": ").append(v).append("\n");
                    rethtml.append(" <li>").append(n.replaceAll("\n", "<br/>")).append(": ").append(v).append("</li>\n");
                } else {
                    rettxt.append(" - ").append(n).append("\n");
                    rethtml.append(" <li>").append(n.replaceAll("\n", "<br/>")).append("</li>\n");
                }
            }
            rethtml.append("</ul>\n");
        }
        ret[0] = rettxt.toString();
        ret[1] = rethtml.toString();
        
        return ret;
    }
    
    
    public static void notifyReservationFilterFailed(XProvider xmasprovider, MHotelInfoValue hotelInfo, XBookingValue reservation,
    		MReservationFilterValue reservationFilter, boolean allowsReservation) throws Exception {
        String sender = MIRAI_EMAIL_ADMIN;
        
        if (reservationFilter.getNotificateMirai() == true) {
            Locale locale = new Locale("es");
            
            Vector body = getReservationAttemptTexts(locale, reservation, hotelInfo, xmasprovider, reservationFilter, allowsReservation);
            String subjectToSend = (String) body.elementAt(0);
            String bodyToSendTxt = (String) body.elementAt(1);
            String bodyToSendHtml = (String) body.elementAt(2);
            
            String to = MIRAI_EMAIL_ADMIN;
            MailUtils.sendEmailWithThreads(null, to, null, sender, subjectToSend, bodyToSendTxt, bodyToSendHtml);
        }
        if (reservationFilter.getNotificateHotel() == true) {
            Vector notices = HotelInfoService.getHotelEmails(reservation.getIdtokenprovider());
            for (Iterator itNotices = notices.iterator(); itNotices.hasNext(); ) {
                MEmailNoticeValue v = (MEmailNoticeValue)itNotices.next();
                String to = v.getEmail();
                
                Vector texts = getReservationAttemptTexts(v.getLocale(), reservation, hotelInfo, xmasprovider, reservationFilter, allowsReservation);
                String subjectToSend = (String) texts.elementAt(0);
                String bodyToSendTxt = (String) texts.elementAt(1);
                String bodyToSendHtml = (String) texts.elementAt(2);
                
                MailUtils.sendEmailWithThreads(null, to, null, sender, subjectToSend, bodyToSendTxt, bodyToSendHtml);
            }
        }
        if (reservationFilter.getNotificateUser() == true) {
        	Locale reservationLocale = new Locale(reservation.getLanguageCode());
            Vector texts = getReservationAttemptTexts(reservationLocale, reservation, hotelInfo, xmasprovider, reservationFilter, allowsReservation);
            String subjectToSend = (String) texts.elementAt(0);
            String bodyToSendTxt = (String) texts.elementAt(1);
            String bodyToSendHtml = (String) texts.elementAt(2);
            
            String to = reservation.getClientEmail();
            MailUtils.sendEmailWithThreads(null, to, null, sender, subjectToSend, bodyToSendTxt, bodyToSendHtml);
        }
    }
    
    private static String getTextForCardGuarantee(Locale locale, XCardGuarantee card,
            Integer guarantee, String card_key, String seeCardText) {
        System.out.println("En getTextForCardGuarantee: guarantee: " + guarantee + ", card: " + card);
        
        if (card == null || guarantee == null || guarantee.intValue() != 1 || card.getCardTypeCode() == null) {
            return "";
        }
        Object args[]= new Object[7];
        args[0]= card.getCardTypeCode();
        args[1]= CreditCardUtils.getFullCardNumber(card.getCardNumber());
        args[2]= card.getCardName();
        args[3]= card.getUntilMonth().toString();
        args[4]= card.getUntilYear().toString();
        //args[4]= i18nNumber(locale, new Long(card.getUntilyear().longValue()));
        args[5]= seeCardText;
        if (card.getCvv2() != null && card.getCvv2().length() > 0) {
            args[6]= " CVV2: " + card.getCvv2();
        } else {
            args[6]= "";
        }
        System.out.println("TextForCardGuarantee: " + I18nService.getMessageResourceString(card_key, args, locale));
        return I18nService.getMessageResourceString(card_key, args, locale);
    }
    
    private static String getTextSeeCard(Long idhotel, Long idreservation, Locale locale) {
        Object args2[]= new Object[3];
        args2[1]= idhotel.toString();
        args2[2]= idreservation.toString();
        System.out.println("SEE CARD KEY: " + I18nService.getMessageResourceString(SEE_CARD_KEY, args2, locale));
        
        return I18nService.getMessageResourceString(SEE_CARD_KEY, args2, locale);
    }
    
    
    private static String[] getSummaryTextForReservationLine(Locale locale, Vector reservationLines, 
            String taxReservation, String currencyCode) {
        
        String freePriceText = I18nService.getMessageResourceString(FREE_PRICE, null, locale);
        
        String[] ret = new String[2];
        ret[0] = "";
        ret[1] = "";
        if (reservationLines == null || reservationLines.size() == 0) {
            // No hay reservation lines. Devolver strings vacios
            return ret;
        }
        
        // Agrupamos las reservationlines por usos iguales en una hashtable
        // Key: el UseOccupationValue
        // Value: Vector de 3 elementos: Amount (Short), Vector de Dias (Date), Vector de precios (Long)
        for (Iterator iter= reservationLines.iterator(); iter.hasNext();) {
            XBookingType rlv = (XBookingType) iter.next();
            int amount = rlv.getAmountToReserve();
            
            String sumPricesWithTaxesText = null;
            StringBuffer allPricesWithTaxesText = new StringBuffer();
            String sumPricesWithTaxesHtml = null;
            StringBuffer allPricesWithTaxesHtml = new StringBuffer();
            
            Date lastDay = null;
            String lastBoardRateCode = null;
            //int lastIndex = 0;
            int index = 0;
            Vector priceBoardsVector = rlv.getPriceBoardsVector();
            Vector boards = new Vector();
            BigDecimal partialPriceWithTaxes = BigDecimal.valueOf(0L);
            for (Iterator itDays = priceBoardsVector.iterator(); itDays.hasNext(); ) {
                XPriceBoardValue priceBoard = (XPriceBoardValue)itDays.next();
                
                Date day = priceBoard.getPricedate();
                BigDecimal priceWithTaxes = priceBoard.getPriceWithTaxes();
                //BigDecimal priceWithoutTaxes = priceBoard.getPriceWithoutTaxes();
                XBoardType board = priceBoard.getBoard();
                String boardText = getTextBoard(board, locale);
                boards.add(boardText);
                if (lastDay == null || lastBoardRateCode == null) {
                    lastDay = day;
                    lastBoardRateCode = board.getRateCode();
                }
                
                BigDecimal priceAmount = priceWithTaxes.multiply(BigDecimal.valueOf(amount));
                Object args[]= new Object[8];
                args[1]= I18nUtils.getI18nDate(day, locale);
                day= CalendarUtils.addDaysToDate(day, 1);
                args[2]= I18nUtils.getI18nDate(day, locale);
                args[3]= String.valueOf(1);
                if (priceWithTaxes.doubleValue() > 0) {
                    args[0] = I18nUtils.getPriceFormatted(priceWithTaxes, currencyCode, locale);
                    args[4] = I18nUtils.getPriceFormatted(priceAmount, currencyCode, locale);
                    args[6] = currencyCode;
                } else {
                    args[0] = freePriceText;
                    args[4] = freePriceText;
                    args[6] = "";
                }
                args[5]= boardText;
                // TODO: Asterisco. Mirar cuando haya ofertas
                args[7]= "";  // Asterisco para las ofertas (por ahora no se muestra, no hay ofertas)
                allPricesWithTaxesText.append(I18nService.getMessageResourceString(RESLINE_PRICE_DAYS, args, locale)).append("\n");
                System.out.println("En NotificationUtils. allPricesWithTaxesText: " + allPricesWithTaxesText.toString());
                allPricesWithTaxesHtml.append(I18nService.getMessageResourceString(RESLINE_PRICE_DAYS + ".html", args, locale)).append("\n");
                System.out.println("En NotificationUtils. allPricesWithTaxesHtml: " + allPricesWithTaxesHtml.toString());
                
                if (index + 1 == priceBoardsVector.size()) {
                    args[1]= I18nUtils.getI18nDate(lastDay, locale);
                    args[3]= "";
                    if (priceWithTaxes.doubleValue() > 0) {
                        args[4] = I18nUtils.getPriceFormatted(priceAmount, currencyCode, locale);
                    } else {
                        args[4] = "";
                    }
                    sumPricesWithTaxesText = I18nService.getMessageResourceString(RESLINE_PRICE_INTERVAL, args, locale) + "\n";
                    sumPricesWithTaxesHtml = I18nService.getMessageResourceString(RESLINE_PRICE_INTERVAL + ".html", args, locale) + "\n";
                }
                partialPriceWithTaxes = partialPriceWithTaxes.add(priceAmount);
                index ++;
            }
            Object t[]= new Object[16];
            Object h[]= new Object[16];
            t[0] = ObjectUtils.collectionToString(boards); //theboard; //TODO: board by days
            h[0] = t[0];
            t[1] = Integer.valueOf(rlv.getOccupation().getNumAdults());
            h[1] = t[1];
            t[2]  = Integer.valueOf(rlv.getOccupation().getNumAdults());
            h[2] = t[2];
            t[3] = Integer.valueOf(rlv.getOccupation().getNumChildren());
            h[3] = t[3];
            t[4] = Integer.valueOf(rlv.getOccupation().getNumChildren());
            h[4] = t[4];
            t[5] = getTextRoomType(rlv.getRoomTypeCode(), rlv.getRoomTypeName(), locale);
            h[5] = t[5];
            t[6]= Integer.valueOf(amount);
            h[6] = t[6];
            t[7] = allPricesWithTaxesText.toString();
            h[7] = allPricesWithTaxesHtml.toString();
            t[8] = sumPricesWithTaxesText;
            h[8] = sumPricesWithTaxesHtml;
            t[9]= I18nUtils.getPriceFormatted(partialPriceWithTaxes, currencyCode, locale);
            h[9] = t[9];
            t[10]= taxReservation;
            h[10] = t[10];
            t[11]= currencyCode;
            h[11] = t[11];
            
            // TODO: Cambiar estos valores cuando haya ofertas
            t[12] = "";
            h[12] = t[12];
            t[13] = "";
            h[13] = t[13];
            t[14] = "";
            h[14] = t[14];
            t[15] = "";
            h[15] = t[15];
            
            // Rellenar los strings de retorno
            ret[0] += I18nService.getMessageResourceString(RESLINE_SUMMARY, t, locale) + "\n";
            ret[1] += I18nService.getMessageResourceString(RESLINE_SUMMARY + ".html", h, locale) + "\n";
        }
        return ret;
    }
    
    private static String getTextBoard(XBoardType board, Locale locale) {
        return board.getRateName();
    }
    
    private static String getTextRoomType(String roomTypeCode, String roomTypeName, Locale locale) {
        if (roomTypeName != null && roomTypeName.trim().length() > 0) {
            return roomTypeName;
        } else {
            return roomTypeCode;
        }
    }
    
    private final static String RES_ATTEMPT_BODY = "notification.reservation.attempt.body";
    private final static String RES_ATTEMPT_SUBJECT = "notification.reservation.attempt.subject";
    private final static String RES_ATTEMPT_REASON = "notification.reservation.attempt.reason";
    private final static String RES_ATTEMPT_RESERVDATA = "notification.reservation.attempt.reservdata";
    private final static String RES_WARNING_BODY = "notification.reservation.warning.body";
    private final static String RES_WARNING_SUBJECT = "notification.reservation.warning.subject";
    
    private static Vector getReservationAttemptTexts(Locale locale, XBookingValue reservation,
    		MHotelInfoValue hotelInfo, XProvider xmasprov, MReservationFilterValue reservationFilter,
    		boolean allowsReservation) throws Exception {
        
        Vector ret = new Vector();
        
        String subjectKey = RES_ATTEMPT_SUBJECT;
        String bodyKey = RES_ATTEMPT_BODY;
        if (allowsReservation == true) {
            subjectKey = RES_WARNING_SUBJECT;
            bodyKey = RES_WARNING_BODY;
        }
        
        String subject = I18nService.getMessageResourceString(subjectKey, null, locale);
        String reason = I18nService.getMessageResourceString(RES_ATTEMPT_REASON + reservationFilter.getIdReservationFilter(), null, locale);
        
        Object[][] reservDataArray = getReservationNotificationArrays(reservation, hotelInfo, xmasprov, null, null, locale, true, false);
        
        Object[] textData = reservDataArray[0];
        String reservationText = I18nService.getMessageResourceString(RES_ATTEMPT_RESERVDATA, textData, locale);
        String body = I18nService.getMessageResourceString(bodyKey,
                new Object[] {reason, reservationText, reservation.getFullReservationCode(), hotelInfo.getName()}, locale);
        
        ret.add(subject);
        ret.add(body);
        ret.add(null);
        
        return ret;
    }
    
    /**
     * Enviar correos de cancelacion
     * @param reservation
     * @param sendToUser
     * @param sendToHotelemail
     * @param sendToMirai
     * @throws Exception
     */
    public static void notifyCancellation(XBookingValue reservation, boolean sendToUser, boolean sendToHotelemail, boolean sendToMirai) throws Exception {
        doGenericNotification(reservation, null, null, null, null, reservation.getLanguageCode(), null, null,
                "jmanuel@miraiespana.com", sendToUser, sendToHotelemail, sendToMirai, NotificationUtils.OP_USERCANCELLATION);
    }
}
