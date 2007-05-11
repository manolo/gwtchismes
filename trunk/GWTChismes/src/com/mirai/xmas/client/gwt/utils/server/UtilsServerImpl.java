package com.mirai.xmas.client.gwt.utils.server;

import java.util.Date;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.mirai.xmas.client.gwt.utils.client.UtilsServer;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;
import com.mirai.xmas.client.utils.I18nUtils;
import com.mirai.xmas.client.services.I18nService;
import java.util.Locale;


public class UtilsServerImpl extends RemoteServiceServlet implements UtilsServer {
    private String[] reservationIterfazKeys = new String [] {
            "format.date",
            "format.day",
            "key.checkin",
            "key.checkin.button",
            "key.checkout",
            "key.checkout.button",
            "key.nights",
            "key.next",
            "key.res.step1",
            "key.res.step2",
            "key.res.step3",
            "key.res.step4",
            "key.res.step5",
            "key.res.step6",
            "key.occupation",
            "key.occupation_1",
            "key.occupation_2",
            "key.occupation_3",
            "key.offers.amountrooms",
            "key.offers.total",
            "key.total.price",
            "key.tax.included",
            "key.type.room",
            "key.occupation",
            "key.amount",
            "key.price",
            "key.pay.in.hotel.a",
            "key.pay.in.hotel.b",
            "key.cancellation.policy",
            "key.accept.policy",
            "key.guest.details",
            "key.firstname",
            "key.lastname",
            "key.e-mail",
            "key.phone",
            "key.fax",
            "key.company",
            "key.country",
            "key.desired.services",
            "key.agreement",
            "key.comments",
            "key.guarantee.reservation",
            "key.type.card",
            "key.name.card",
            "key.number.card",
            "key.expiration.card",
            "key.cvv2.card",
            "errors.finalreserve",
            "key.cancel.code",
            "key.calendar.checkin.title",
            "key.calendar.checkout.title",
            "key.payment.method",
            "key.booking.details",
            "key.occupation",
            "key.accept.policy",
            "key.reservation.data",
            "key.reservation.code",
            "key.change",
            "key.without.availability",
            "key.important",
            "key.ok.reservation.code",
            "key.ok.cancel.code",
            "key.do.reserve",
            "key.duration",
            "key.interval",
            "key.mandatory.fields.help",
            "key.communication.error",
            "key.calendar.help",
            "key.hotelname",
            "key.category",
            "key.location",
            "key.commission.url",
            "key.book.now",
            "key.print",
            "errors.nights.required",
            "errors.no.items.to.reserve",
            //"errors.no.policy.accepted",
            "errors.firstname.required",
            "errors.lastname.required",
            "errors.email.required",
            "errors.card.name.required",
            "errors.card.expiration.invalid",
            "errors.cancellation.policy.agreement.required",
            "errors.mirai.confidential.agreement.required",
            "errors.hotel.confidential.agreement.required",
            "errors.too.many.room.types.to.reserve",
            "errors.phone.required",
            "errors.select.valid.hotel",
            "errors.card.type.required",
            "errors.card.number.invalid",
            "errors.communication.with.provider",
            "errors.getting.hotel.information",
            "errors.endate.before.initdate",
            "errors.prereserve",
            "errros.no.items.availables"
    };
    
    private String[] modifcancelInterfazKeys = new String[] {
            "key.cancel.reservation",
            "key.enter.reservation.code",
            "key.cancel.code",
            "key.enter.cancel.code",
            "key.next",
            "key.reservation.data",
            "key.reservation.code",
            "key.firstname",
            "key.lastname",
            "key.company",
            "key.checkin",
            "key.checkout",
            "key.nights",
            "key.occupation",
            "key.occupation_1",
            "key.occupation_2",
            "key.occupation_3",
            "key.is.canceled",
            "key.status",
            "key.phone",
            "key.fax",
            "key.total.price",
            "key.type.room",
            "key.board",
            "key.amount",
            "key.price",
            "key.total.price",
            "key.tax.included",
            "key.desired.services",
            "key.cancellation.policy",
            "key.comments",
            "key.confirm.cancel.reservation",
            "key.communication.error",
            "key.cancel.reserve",
            "errors.getting.hotel.information",
            "errors.reserve.params",
            "errors.communication.with.provider",
            "errors.reserve.not.cancelled",
            "exception.CancellationVetoException",
            "errors.invalid.reservation.code",
            "errors.invalid.cancel.code",
            "exception.CancellationVetoException"
    };
    
    public I18nGWT getI18n(String interfazName, String language) {
        Locale locale = new Locale(configureLanguage(language));
        String keys[];
        if (interfazName.equalsIgnoreCase("reservation")){
            keys = reservationIterfazKeys;
        } else if (interfazName.equalsIgnoreCase("modifcancel")) {
            keys = modifcancelInterfazKeys;
        } else {
            return null;
        }
        
        
        
        I18nGWT ret = new I18nGWT();
        ret.map = I18nService.getMessagesTable(keys, locale);
        
        /*
        for (int i=0; i<keys.length; i++) {
            String value = I18nService.getMessageResourceString(keys[i], null, locale);
            ret.map.put(keys[i], value);
        }
        */
        ret.days = I18nUtils.getAllDayNames(locale);
        ret.months = I18nUtils.getAllMonthNames(locale);
        ret.weekStart = I18nUtils.getWeekStart(locale);
        
        // Poner la fecha del servidor
        ret.setServerHour(new Date());
        
        return ret;
    }
    
    // Metodos de variables de session
    public String configureLanguage(String languageCode) {
        if (languageCode == null || languageCode.length() == 0) {
            languageCode = (String)this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
        }
        if (languageCode == null || languageCode.length() == 0) {
            languageCode = this.getThreadLocalRequest().getHeader("Accept-Language");
        }
        if (languageCode == null || languageCode.length() == 0) {
            languageCode = "en";
        } else {
            languageCode = languageCode.substring(0, 2).toLowerCase();
        }
        try {
            Locale locale;
            locale = new Locale(languageCode);
            this.getThreadLocalRequest().getSession().setAttribute("XMASLNG", locale.getLanguage());
        } catch (Exception e) {
            this.getThreadLocalRequest().getSession().setAttribute("XMASLNG", "en");
        }
        return (String) this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
    }
    
    public  void configureSession(String hotel, String hsri, String hsli, String lang) {
        
    }
    
    /*
    public static ClientInformation getClientInformation(HttpServletRequest request) {
        HttpSession session = request.getSession();
        ClientInformation clientInfo = (ClientInformation)session.getAttribute("clientInfo");
        if (clientInfo == null) {
            clientInfo = resetClientSessionInformation(null);
        }
        return clientInfo;
    }
    
    public static String getLanguageCode(HttpServletRequest request) {
        ClientInformation clientInfo = getClientInformation(request);
        String languageCode = clientInfo.getLanguageCode();
        if (languageCode == null || languageCode.length() == 0) {
            languageCode = "en";
            clientInfo.setLanguageCode(languageCode);
        }
        
        System.out.println("LANGUAGE::::: " + languageCode);
        return languageCode;
    }
    */
    
}
