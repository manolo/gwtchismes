package com.mirai.xmas.client.gwt.values.client;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.google.gwt.user.client.rpc.IsSerializable;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class I18nGWT implements IsSerializable {
    public int weekStart = 0;
    public String [] days;
    public String [] months;
    private Date serverHour = null;
    
    
   /**
    * This field is a Map that must always contain Strings as its keys and
    * values.
    * 
    * @gwt.typeArgs <java.lang.String,java.lang.String>
    */
    public Map map = new HashMap();
    public String getMsg(String m){
        String ret  = (String) map.get(m);
        return (ret!=null ? ret:  m);
    }
    
    public Date getServerHour() {
        return serverHour;
    }
    public void setServerHour(Date hour) {
        this.serverHour = hour;
    }
}