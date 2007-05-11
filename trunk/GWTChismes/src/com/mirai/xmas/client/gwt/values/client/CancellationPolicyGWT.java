package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class CancellationPolicyGWT implements IsSerializable {
    private String policyCode;
    private long policyTextI18nKey;
    private Integer minutesBeforeCheckinForCancelPenalty;
    private Integer minutesBeforeCheckinForNoShow;
    private CancellationPenaltyGWT prepaymentPenalty;
    private CancellationPenaltyGWT cancellationPenalty;
    private CancellationPenaltyGWT noShowPenalty;
    private String policyText;
    
    public CancellationPolicyGWT() {
    }

    public String getPolicyCode() {
        return policyCode;
    }

    public void setPolicyCode(String policyCode) {
        this.policyCode = policyCode;
    }

    public CancellationPenaltyGWT getCancellationPenalty() {
        return cancellationPenalty;
    }

    public void setCancellationPenalty(CancellationPenaltyGWT cancellationPenalty) {
        this.cancellationPenalty = cancellationPenalty;
    }

    public Integer getMinutesBeforeCheckinForCancelPenalty() {
        return minutesBeforeCheckinForCancelPenalty;
    }

    public void setMinutesBeforeCheckinForCancelPenalty(Integer minutesBeforeCheckinForCancelPenalty) {
        this.minutesBeforeCheckinForCancelPenalty = minutesBeforeCheckinForCancelPenalty;
    }

    public Integer getMinutesBeforeCheckinForNoShow() {
        return minutesBeforeCheckinForNoShow;
    }

    public void setMinutesBeforeCheckinForNoShow(Integer minutesBeforeCheckinForNoShow) {
        this.minutesBeforeCheckinForNoShow = minutesBeforeCheckinForNoShow;
    }

    public CancellationPenaltyGWT getNoShowPenalty() {
        return noShowPenalty;
    }

    public void setNoShowPenalty(CancellationPenaltyGWT noShowPenalty) {
        this.noShowPenalty = noShowPenalty;
    }

    public long getPolicyTextI18nKey() {
        return policyTextI18nKey;
    }

    public void setPolicyTextI18nKey(long policyTextI18nKey) {
        this.policyTextI18nKey = policyTextI18nKey;
    }

    public CancellationPenaltyGWT getPrepaymentPenalty() {
        return prepaymentPenalty;
    }

    public void setPrepaymentPenaltyGWT(CancellationPenaltyGWT prepaymentPenalty) {
        this.prepaymentPenalty = prepaymentPenalty;
    }
    
    public String toString() {
        StringBuffer ret = new StringBuffer();
        
        ret.append("{policyCode=").append(policyCode);
        ret.append(", policyTextI18nKey=").append(policyTextI18nKey);
        ret.append(", minutesBeforeCheckinForCancelPenalty=").append(minutesBeforeCheckinForCancelPenalty);
        ret.append(", minutesBeforeCheckinForNoShow=").append(minutesBeforeCheckinForNoShow);
        ret.append(", prepaymentPenalty=").append(prepaymentPenalty);
        ret.append(", cancellationPenalty=").append(cancellationPenalty);
        ret.append(", noShowPenalty=").append(noShowPenalty);
        ret.append("}");
        
        return ret.toString();
    }
}
