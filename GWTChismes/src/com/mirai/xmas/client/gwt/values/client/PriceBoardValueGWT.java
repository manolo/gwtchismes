package com.mirai.xmas.client.gwt.values.client;

import java.util.Date;
import com.google.gwt.user.client.rpc.IsSerializable;

public class PriceBoardValueGWT implements IsSerializable {
    final public static int  CURRENCY_DEFAULT=46;    
    final public static int  CURRENCY_EURO=46;
    final public static int  CURRENCY_USDOLLAR=150;
    final public static int  CURRENCY_POUND=51;
    
    private Long idtokenprovider;
    private String roomTypeCode;
    private String priceWithTaxesStr;
    private String priceWithoutTaxesStr;
    private Long priceWithTaxesLong;
    private Long priceWithoutTaxesLong;
    private BoardTypeGWT board;
    private Date pricedate;
    //private Integer idslot;
    private Boolean isPriceOffer = Boolean.valueOf(false);
    
    // Constructores
    public PriceBoardValueGWT() {
    }
    
    // Getters y setters
    public Long getIdtokenprovider() {
        return idtokenprovider;
    }
    public void setIdtokenprovider(Long idtokenprovider) {
        this.idtokenprovider = idtokenprovider;
    }
    
    public String getRoomTypeCode() {
        return roomTypeCode;
    }
    public void setRoomTypeCode(String roomTypeCode) {
        this.roomTypeCode = roomTypeCode;
    }
    
    public Date getPricedate() {
        return pricedate;
    }
    public String getPriceWithTaxesStr() {
        return priceWithTaxesStr;
    }
    public String getPriceWithoutTaxesStr() {
        return priceWithoutTaxesStr;
    }
    
    public Long getPriceWithTaxesLong() {
        return priceWithTaxesLong;
    }
    public Long getPriceWithoutTaxesLong() {
        return priceWithoutTaxesLong;
    }
    
    public void setPricedate(Date priceDate) {
        this.pricedate = priceDate;
    }
    public void setPriceWithTaxesStr(String price) {
        this.priceWithTaxesStr = price;
    }
    public void setPriceWithoutTaxesStr(String price) {
        this.priceWithoutTaxesStr = price;
    }
    
    public void setPriceWithTaxesLong(Long price) {
        this.priceWithTaxesLong = price;
    }
    public void setPriceWithoutTaxesLong(Long price) {
        this.priceWithoutTaxesLong = price;
    }
    
    public BoardTypeGWT getBoard() {
        return board;
    }
    public void setBoard(BoardTypeGWT board) {
        this.board = board;
    }
    
    public Boolean getIsPriceOffer() {
        return this.isPriceOffer;
    }
    public void setIsPriceOffer(Boolean value) {
        isPriceOffer = value;
    }
}
