package com.mirai.xmas.client.gwt.values.client;

import java.util.Vector;

import com.google.gwt.user.client.rpc.IsSerializable;

public class ForBookingObjectGWT extends BookingTypeGWT implements IsSerializable {
    
    /**
     * @gwt.typeArgs <java.lang.Integer>
     */    
    private Vector availableRoomsAmountVector;
    
    public ForBookingObjectGWT() {
    }
    
    // Getters y setters
/*    
    public String getBookingId() {
        return bookingId;
    }
    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
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
    
    public Date getInitDate() {
        return initDate;
    }
    public void setInitDate(Date initDate) {
        this.initDate = initDate;
    }
    
    public Date getEndDate() {
        return endDate;
    }
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    
    public Long getTotalPricePerRoomBeforeTaxLong() {
        return totalPricePerRoomBeforeTaxLong;
    }
    public void setTotalPricePerRoomBeforeTaxLong(Long totalPricePerRoomBeforeTaxLong) {
        this.totalPricePerRoomBeforeTaxLong = totalPricePerRoomBeforeTaxLong;
    }
    
    public String getTotalPricePerRoomBeforeTaxStr() {
        return totalPricePerRoomBeforeTaxStr;
    }
    public void setTotalPricePerRoomBeforeTaxStr(String totalPricePerRoomBeforeTaxStr) {
        this.totalPricePerRoomBeforeTaxStr = totalPricePerRoomBeforeTaxStr;
    }
    
    public Long getTotalPricePerRoomAfterTaxLong() {
        return totalPricePerRoomAfterTaxLong;
    }
    public void setTotalPricePerRoomAfterTaxLong(Long totalPricePerRoomAfterTaxLong) {
        this.totalPricePerRoomAfterTaxLong = totalPricePerRoomAfterTaxLong;
    }
    
    public String getTotalPricePerRoomAfterTaxStr() {
        return totalPricePerRoomAfterTaxStr;
    }
    public void setTotalPricePerRoomAfterTaxStr(String totalPricePerRoomAfterTaxStr) {
        this.totalPricePerRoomAfterTaxStr = totalPricePerRoomAfterTaxStr;
    }
    
    public HashMap getPriceBoards() {
        return priceBoards;
    }
    public void setPriceBoards(HashMap priceBoards) {
        this.priceBoards = priceBoards;
    }
    
    public OccupationGWT getOccupation() {
        return occupation;
    }
    public void setOccupation(OccupationGWT occupation) {
        this.occupation = occupation;
    }
    
    public String getExtraText() {
        return extraText;
    }
    public void setExtraText(String extraText) {
        this.extraText = extraText;
    }

    public int getAmountToReserve() {
        return amountToReserve;
    }
    public void setAmountToReserve(int amountToReserve) {
        this.amountToReserve = amountToReserve;
    }
*/

    public Vector getAvailableRoomsAmountVector() {
        return availableRoomsAmountVector;
    }
    public void setAvailableRoomsAmountVector(Vector availableRoomsAmountVector) {
        this.availableRoomsAmountVector = availableRoomsAmountVector;
    }
    
}

