/*
 * WebUtils.java
 *
 * Created on October 19, 2006, 6:36 PM
 *
 */

package com.mirai.xmas.client.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;

/**
 *
 * @author jmanuel
 */
public class WebUtils {
    
    /** Creates a new instance of WebUtils */
    public WebUtils() {
    }
    
    public static String getCookieValue(HttpServletRequest request, String name) {
        Cookie c = getCookie(request, name);
        return c != null ? c.getValue() : null;
    }
    
    public static void setCookie(HttpServletResponse response, String name, String value, String host, String path, int minutes) {
        Cookie aaa= new Cookie(name, value);
        if (host != null ){
            String[] tmp= host.split(":", 2);
            if (tmp.length == 2) {
                host= tmp[0];
            }
            if (host.length()>0){
                aaa.setDomain(host);
            }
        }
        if (path!=null){
            aaa.setPath("/");
        }
        aaa.setMaxAge(60 * minutes);
        //aaa.setSecure(false);
        response.addCookie(aaa);
    }
    
    private static Cookie getCookie(HttpServletRequest request, String name) {
        Cookie[] ccc= request.getCookies();
        for (int i= 0; ccc != null && i < ccc.length; i++) {
            Cookie c= ccc[i];
            if (c.getName().equalsIgnoreCase(name)) {
                return c;
            }
        }
        return null;
    }    
}
