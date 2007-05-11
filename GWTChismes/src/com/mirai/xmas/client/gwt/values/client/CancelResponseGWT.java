package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class CancelResponseGWT implements IsSerializable {
    private boolean isCancelled;
    private String errorText;
    
    // Constructores
    public CancelResponseGWT() {
        this.isCancelled = false;
    }
    
    public CancelResponseGWT(boolean isCancelled) {
        this.isCancelled = isCancelled;
    }
    
    // Getters y setters
    public boolean isCancelled() {
        return isCancelled;
    }
    public void setCancelled(boolean isCancelled) {
        this.isCancelled = isCancelled;
    }
    
    public String getErrorText() {
        return errorText;
    }
    public void setErrorText(String errorText) {
        this.errorText = errorText;
    }
}
