package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class CancellationPenaltyGWT implements IsSerializable {
    private String amountStr;
    private Long amountLong;
    private String percentStr;
    private Long percentLong;
    private Integer numberOfNights;
    private Boolean isRefundable;
    
    public CancellationPenaltyGWT() {
    }
    
    public String getAmountStr() {
        return amountStr;
    }
    public void setAmountStr(String amountStr) {
        this.amountStr = amountStr;
    }
    
    public Long getAmountLong() {
        return amountLong;
    }
    public void setAmountLong(Long amountLong) {
        this.amountLong = amountLong;
    }
    
    public String getPercentStt() {
        return percentStr;
    }
    public void setPercentStr(String percentStr) {
        this.percentStr = percentStr;
    }
    
    public Long getPercentLong() {
        return percentLong;
    }
    public void setPercentLong(long percentLong) {
        this.percentLong = new Long (percentLong);
    }
    
    public Boolean getIsRefundable() {
        return isRefundable;
    }

    public void setIsRefundable(Boolean isRefundable) {
        this.isRefundable = isRefundable;
    }

    public Integer getNumberOfNights() {
        return numberOfNights;
    }

    public void setNumberOfNights(Integer numberOfNights) {
        this.numberOfNights = numberOfNights;
    }
}
