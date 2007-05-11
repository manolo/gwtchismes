package com.mirai.xmas.client.gwt.values.client;

import java.util.HashMap;
import java.util.Set;
import com.google.gwt.user.client.rpc.IsSerializable;

public class HtmlFormControlsGWT implements IsSerializable {
    private HashMap formControlsMap;
    
    public HtmlFormControlsGWT() {
        formControlsMap = new HashMap();
    }
    
    public void addControlValue(String controlName, String controlValue) {
        formControlsMap.put(controlName, controlValue);
    }
    
    public String getControlValue(String controlName) {
        return (String)formControlsMap.get(controlName);
    }
    
    public Set getControlsNames() {
        return formControlsMap.keySet();
    }
    
    public Set getControlsEntries() {
        return formControlsMap.entrySet();
    }
}
