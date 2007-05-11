package com.mirai.xmas.client.gwt.values.client;

import com.google.gwt.user.client.rpc.IsSerializable;

public class ResponseGWT implements IsSerializable {
    private IsSerializable result;
    private boolean hasError;
    private String errorText;
    private String serverMessage;
    
    public ResponseGWT() {
    }
    
    // Getters y setters
    public IsSerializable getResult() {
        return result;
    }
    public void setResult(IsSerializable result) {
        this.result = result;
    }
    
    public boolean getHasError() {
        return hasError;
    }
    public void setHasError(boolean hasError) {
        this.hasError = hasError;
    }
    
    public String getErrorText() {
        return errorText;
    }
    public void setErrorText(String errorKey) {
        errorText = errorKey;
    }
    
    public String getServerMessage() {
        return serverMessage;
    }
    public void setServerMessage(String serverMessage) {
        this.serverMessage = serverMessage;
    }
}
