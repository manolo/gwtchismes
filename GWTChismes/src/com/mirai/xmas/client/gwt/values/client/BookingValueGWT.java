package com.mirai.xmas.client.gwt.values.client;

import java.util.Date;
import java.util.Vector;

import com.google.gwt.user.client.rpc.IsSerializable;

/**
 * Objeto de reserva (Informacion que se le pasa a NH)
 * Contiene informacion de la reserva y del cliente.
 * 
 * @author jmanuel
 *
 */
public class BookingValueGWT implements IsSerializable {
    private String idReservationHotel;
    private Long idReservationMirai;
    private Long idtokenprovider;
    private Date checkinDate;
    private Date checkoutDate;
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.BookingTypeGWT>
     */
    private Vector reservationLines;
    private String currencyCode;
    private int currencyNumDecimals;
    private String currencySymbol;
    private String currencyDecimalSeparator;
    private Date reservationDate;
    private String clientFirstName;
    private String clientLastName;
    private String clientTelephone;
    private String clientEmail;
    private String clientFax;
    private String clientCompany;
    private String clientCountry;
    private String clientComments;
    private String languageCode;
    private CancellationPolicyGWT cancellationPolicy;
    private Long totalPriceBeforeTaxLong;
    private Long totalPriceAfterTaxLong;
    private String totalPriceBeforeTaxStr;
    private String totalPriceAfterTaxStr;
    private boolean cancelled;
    private Date cancelDate;
    private Integer cancelCode;
    private Integer guarantee;
    private Integer commission;
    private int idCompanyMirai;
    private String hsri;
    private String hsli;
    private String ip;
    private String ipssl;
    private String ipforwarded;
    private String reservCountry;
    private String cancelPolicyI18n;
    /**
     * @gwt.typeArgs <java.lang.String>
     */    
    private Vector datesSelected;
    
    /**
     * Los atributos de la reserva traducidos para mostrarlos
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.ReservationAttributesTranslatedValueGWT>
     */
    private Vector attributesTranslated;
    
    // Constructores
    public BookingValueGWT() {
    }
    
    // Getters y setters
    public String getIdReservationHotel() {
        return idReservationHotel;
    }
    public void setIdReservationHotel(String idReservationHotel) {
        this.idReservationHotel = idReservationHotel;
    }
    
    public Long getIdReservationMirai() {
        return idReservationMirai;
    }
    public void setIdReservationMirai(Long idReservationMirai) {
        this.idReservationMirai = idReservationMirai;
    }
    
    public Long getIdtokenprovider() {
        return idtokenprovider;
    }
    public void setIdtokenprovider(Long idtokenprovider) {
        this.idtokenprovider = idtokenprovider;
    }
    
    public Date getCheckinDate() {
        return checkinDate;
    }
    public void setCheckinDate(Date checkinDate) {
        this.checkinDate = checkinDate;
    }
    
    public Date getCheckoutDate() {
        return checkoutDate;
    }
    public void setCheckoutDate(Date checkoutDate) {
        this.checkoutDate = checkoutDate;
    }
    
    public int getCurrencyNumDecimals() {
        return currencyNumDecimals;
    }
    public void setCurrencyNumDecimals(int currencyNumDecimals) {
        this.currencyNumDecimals = currencyNumDecimals;
    }
    
    public String getCurrencySymbol() {
        return currencySymbol;
    }
    public void setCurrencySymbol(String currencySymbol) {
        this.currencySymbol = currencySymbol;
    }
    
    public String getCurrencyDecimalSeparator() {
        return currencyDecimalSeparator;
    }
    public void setCurrencyDecimalSeparator(String currencySeparator) {
        this.currencyDecimalSeparator = currencySeparator;
    }
    
    public Integer getCancelCode() {
        return cancelCode;
    }
    public void setCancelCode(Integer cancelCode) {
        this.cancelCode = cancelCode;
    }
    public Date getCancelDate() {
        return cancelDate;
    }
    public void setCancelDate(Date cancelDate) {
        this.cancelDate = cancelDate;
    }
    
    public CancellationPolicyGWT getCancellationPolicy() {
        return cancellationPolicy;
    }
    public void setCancellationPolicy(CancellationPolicyGWT cancellationPolicy) {
        this.cancellationPolicy = cancellationPolicy;
    }
    
    public String getCancellationPolicyI18n() {
        return cancelPolicyI18n;
    }
    public void setCancellationPolicyI18n(String cancelPolicyI18n) {
        this.cancelPolicyI18n = cancelPolicyI18n;
    }
    
    public boolean isCancelled() {
        return cancelled;
    }
    public boolean getCancelled() {
        return cancelled;
    }
    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }
    public String getClientComments() {
        return clientComments;
    }
    public void setClientComments(String clientComments) {
        this.clientComments = clientComments;
    }
    public String getClientCompany() {
        return clientCompany;
    }
    public void setClientCompany(String clientCompany) {
        this.clientCompany = clientCompany;
    }
    public String getClientCountry() {
        return clientCountry;
    }
    public void setClientCountry(String clientCountry) {
        this.clientCountry = clientCountry;
    }
    public String getClientEmail() {
        return clientEmail;
    }
    public void setClientEmail(String clientEmail) {
        this.clientEmail = clientEmail;
    }
    public String getClientFax() {
        return clientFax;
    }
    public void setClientFax(String clientFax) {
        this.clientFax = clientFax;
    }
    public String getClientFirstName() {
        return clientFirstName;
    }
    public void setClientFirstName(String clientFirstName) {
        this.clientFirstName = clientFirstName;
    }
    public String getClientLastName() {
        return clientLastName;
    }
    public void setClientLastName(String clientLastName) {
        this.clientLastName = clientLastName;
    }
    public String getClientPhone() {
        return clientTelephone;
    }
    public void setClientPhone(String clientTelephone) {
        this.clientTelephone = clientTelephone;
    }
    public Integer getCommission() {
        return commission;
    }
    public void setCommission(Integer commission) {
        this.commission = commission;
    }
    public String getCurrencyCode() {
        return currencyCode;
    }
    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }
    
    public Integer getGuarantee() {
        return guarantee;
    }
    public void setGuarantee(Integer guarantee) {
        this.guarantee = guarantee;
    }
    
    public String getHsli() {
        return hsli;
    }
    public void setHsli(String hsli) {
        this.hsli = hsli;
    }
    public String getHsri() {
        return hsri;
    }
    public void setHsri(String hsri) {
        this.hsri = hsri;
    }
    public int getIdCompanyMirai() {
        return idCompanyMirai;
    }
    public void setIdCompanyMirai(int idCompanyMirai) {
        this.idCompanyMirai = idCompanyMirai;
    }
    public String getIp() {
        return ip;
    }
    public void setIp(String ip) {
        this.ip = ip;
    }
    public String getIpforwarded() {
        return ipforwarded;
    }
    public void setIpforwarded(String ipforwarded) {
        this.ipforwarded = ipforwarded;
    }
    public String getIpssl() {
        return ipssl;
    }
    public void setIpssl(String ipssl) {
        this.ipssl = ipssl;
    }
    public String getLanguageCode() {
        return languageCode;
    }
    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }
    public Date getReservationDate() {
        return reservationDate;
    }
    public void setReservationDate(Date reservationDate) {
        this.reservationDate = reservationDate;
    }
    /**
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.BookingTypeGWT>
     */    
    public Vector getReservationLines() {
        return reservationLines;
    }
    public void setReservationLines(Vector reservationLines) {
        this.reservationLines = reservationLines;
    }
    public Long getTotalPriceBeforeTaxLong() {
        return totalPriceBeforeTaxLong;
    }
    public void setTotalPriceBeforeTaxLong(Long totalPriceLong) {
        this.totalPriceBeforeTaxLong = totalPriceLong;
    }
    
    public Long getTotalPriceAfterTaxLong() {
        return totalPriceAfterTaxLong;
    }
    public void setTotalPriceAfterTaxLong(Long totalPriceLong) {
        this.totalPriceAfterTaxLong = totalPriceLong;
    }
    
    public String getTotalPriceBeforeTaxStr() {
        return totalPriceBeforeTaxStr;
    }
    public void setTotalPriceBeforeTaxStr(String totalPriceBeforeTaxStr) {
        this.totalPriceBeforeTaxStr = totalPriceBeforeTaxStr;
    }
    
    public String getTotalPriceAfterTaxStr() {
        return totalPriceAfterTaxStr;
    }
    public void setTotalPriceAfterTaxStr(String totalPriceAfterTaxStr) {
        this.totalPriceAfterTaxStr = totalPriceAfterTaxStr;
    }
    
    public Vector getDatesSelected() {
        return datesSelected;
    }
    public void setDatesSelected(Vector datesSelected) {
        this.datesSelected = datesSelected;
    }
    
    public String getReservCountry() {
        return reservCountry;
    }
    public void setReservCountry(String reservCountry) {
        this.reservCountry = reservCountry;
    }
    
    public Vector getAttributesTranslated() {
        return attributesTranslated;
    }
    public void setAttributesTranslated(Vector attributesTranslated) {
        this.attributesTranslated = attributesTranslated;
    }
}
