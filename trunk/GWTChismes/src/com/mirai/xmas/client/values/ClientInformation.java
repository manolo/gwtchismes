/*
 * ClientInformation.java
 *
 * Created on October 19, 2006, 12:36 PM
 *
 */

package com.mirai.xmas.client.values;

/**
 *
 * @author jmanuel
 */
public class ClientInformation {
    private String ip;
    private String ipForwarded;
    private String ip443;
    private String hsri;
    private String hsli;
    private String languageCode;
    private String host;
    
    /** Creates a new instance of ClientInformation */
    public ClientInformation() {
    }
    
    public String getIp() {
        return ip;
    }
    
    public void setIp(String ip) {
        this.ip = ip;
    }
    
    public String getIpForwarded() {
        return ipForwarded;
    }

    public void setIpForwarded(String ipForwarded) {
        this.ipForwarded = ipForwarded;
    }

    public String getIp443() {
        return ip443;
    }

    public void setIp443(String ip443) {
        this.ip443 = ip443;
    }
    
    public String getHsri() {
        return hsri;
    }
    
    public void setHsri(String hsri) {
        this.hsri = hsri;
    }

    public String getHsli() {
        return hsli;
    }

    public void setHsli(String hsli) {
        this.hsli = hsli;
    }
    
    public String getLanguageCode() {
    	return languageCode;
    }
    public void setLanguageCode(String language) {
    	this.languageCode = language;
    }
    
    public String getHost() {
    	return host;
    }
    public void setHost(String host) {
    	this.host = host;
    }
}
