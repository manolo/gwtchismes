package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class BoardTypeGWT implements IsSerializable {
    public static final int MIRAI_NOTHING_INCLUDED = 0;
    public static final int MIRAI_BREAKFAST_INCLUDED = 1;
    public static final int MIRAI_HALF_BOARD = 2;
    public static final int MIRAI_FULL_BOARD = 3;
    
    private String rateCode;
    private String rateName;
    
    private boolean breakfastIncluded;
    private boolean lunchIncluded;
    private boolean dinnerIncluded;
    
    private Integer mealPlanType;
    
    // Constructor
    public BoardTypeGWT() {
    }
    
    // Getters y setters
    public String getRateCode() {
        return rateCode;
    }
    
    public void setRateCode(String rateCode) {
        this.rateCode = rateCode;
    }
    
    public String getRateName() {
        return rateName;
    }
    
    public void setRateName(String rateName) {
        this.rateName = rateName;
    }

    public boolean getBreakfastIncluded() {
        return breakfastIncluded;
    }

    public void setBreakfastIncluded(boolean breakfastIncluded) {
        this.breakfastIncluded = breakfastIncluded;
    }

    public boolean getLunchIncluded() {
        return lunchIncluded;
    }

    public void setLunchIncluded(boolean lunchIncluded) {
        this.lunchIncluded = lunchIncluded;
    }

    public boolean getDinnerIncluded() {
        return dinnerIncluded;
    }

    public void setDinnerIncluded(boolean dinnerIncluded) {
        this.dinnerIncluded = dinnerIncluded;
    }

    public Integer getMealPlanType() {
        return mealPlanType;
    }

    public void setMealPlanType(Integer mealPlanType) {
        this.mealPlanType = mealPlanType;
    }
}
