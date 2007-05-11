package com.mirai.xmas.client.gwt.values.client;

import java.util.Date;
import java.util.Vector;

import com.google.gwt.user.client.rpc.IsSerializable;

public class BookingTypeGWT implements IsSerializable {
    private String bookingId;
    private String roomTypeCode;
    private String roomTypeName;
    private String extraText;
    private Date initDate;
    private Date endDate;
    private OccupationGWT occupation;
    private String totalPricePerRoomAfterTaxStr;
    private String totalPricePerRoomBeforeTaxStr;
    private Long totalPricePerRoomAfterTaxLong;
    private Long totalPricePerRoomBeforeTaxLong;

    /** 
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.BoardTypeGWT>
     */
    private Vector priceBoards;
    private int amountToReserve;
    
    // Constructores
    public BookingTypeGWT() {
    }
    
    // Getters y setters
    public int getAmountToReserve() {
        return amountToReserve;
    }
    public void setAmountToReserve(int amountToReserve) {
        this.amountToReserve = amountToReserve;
    }
    public String getBookingId() {
        return bookingId;
    }
    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }
    public Date getEndDate() {
        return endDate;
    }
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    public String getExtraText() {
        return extraText;
    }
    public void setExtraText(String extraText) {
        this.extraText = extraText;
    }
    public Date getInitDate() {
        return initDate;
    }
    public void setInitDate(Date initDate) {
        this.initDate = initDate;
    }
    
    public OccupationGWT getOccupation() {
        return occupation;
    }
    public void setOccupation(OccupationGWT occupation) {
        this.occupation = occupation;
    }

    /** 
     * @gwt.typeArgs <com.mirai.xmas.client.gwt.values.client.BoardTypeGWT>
     */
    public Vector getPriceBoards() {
        return priceBoards;
    }
    public void setPriceBoards(Vector priceBoards) {
        this.priceBoards = priceBoards;
    }
    public String getRoomTypeCode() {
        return roomTypeCode;
    }
    public void setRoomTypeCode(String roomTypeCode) {
        this.roomTypeCode = roomTypeCode;
    }
    public String getRoomTypeName() {
        return roomTypeName;
    }
    public void setRoomTypeName(String roomTypeName) {
        this.roomTypeName = roomTypeName;
    }
    
    public String getTotalPricePerRoomBeforeTaxStr() {
        return totalPricePerRoomBeforeTaxStr;
    }
    public void setTotalPricePerRoomBeforeTaxStr(String totalPricePerRoomBeforeTax) {
        this.totalPricePerRoomBeforeTaxStr = totalPricePerRoomBeforeTax;
    }
    
    public String getTotalPricePerRoomAfterTaxStr() {
        return totalPricePerRoomAfterTaxStr;
    }
    public void setTotalPricePerRoomAfterTaxStr(String totalPricePerRoomAfterTax) {
        this.totalPricePerRoomAfterTaxStr = totalPricePerRoomAfterTax;
    }
    
    public Long getTotalPricePerRoomBeforeTaxLong() {
        return totalPricePerRoomBeforeTaxLong;
    }
    public void setTotalPricePerRoomBeforeTaxLong(Long totalPricePerRoomBeforeTax) {
        this.totalPricePerRoomBeforeTaxLong = totalPricePerRoomBeforeTax;
    }
    
    public Long getTotalPricePerRoomAfterTaxLong() {
        return totalPricePerRoomAfterTaxLong;
    }
    public void setTotalPricePerRoomAfterTaxLong(Long totalPricePerRoomAfterTax) {
        this.totalPricePerRoomAfterTaxLong = totalPricePerRoomAfterTax;
    }
}
