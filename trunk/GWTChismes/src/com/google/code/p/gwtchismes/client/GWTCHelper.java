/*
 * Copyright 2007 Manuel Carrasco Moñino. (manuel_carrasco at users.sourceforge.net) 
 * http://code.google.com/p/gwtchismes
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.*;
import com.google.gwt.core.client.*;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco Moñino <h3>Helper Class</h3>
 *         <p>
 *         Utility class for the gwtchismes library
 *         </p>
 */
public class GWTCHelper {

    /**
     * Detection of Internet Explorer 6.x
     * 
     * @return true if the browser is ie6
     */
    public static native boolean isIE6() /*-{
              return (window.XMLHttpRequest)? false: true;
            }-*/;


    public static void maximizeWidget(Widget widget) {
        if (widget == null)
            return;
        int w = Math.max(getVisibleWidth(), Window.getClientWidth());
        int h = Math.max(getVisibleHeight(), Window.getClientHeight());
        widget.setSize(w + "px", h + "px");
    }

    private static native int getVisibleWidth() /*-{
               return $wnd.document.documentElement.clientWidth;
            }-*/;

    private static native int getVisibleHeight() /*-{
               return $wnd.document.documentElement.clientHeight;
            }-*/;

    public static String internationalize(String s, Object[] os) {
        for (int i = 0; i < os.length; i++) {
            String o = "" + (os[i] != null ? os[i] : "");
            String c = "{" + i + "}";
            for (;;) {
                int pos = s.indexOf(c);
                if (pos < 0)
                    break;
                String trail = "";
                if (pos + c.length() < s.length())
                    trail = s.substring(pos + c.length());
                s = s.substring(0, pos) + o + trail;
            }
        }
        return s;
    }

    public static String internationalize(String s, String o) {
        Object[] os = { o };
        return internationalize(s, os);
    }

    public static boolean isHostedMode() {
        return !GWT.isScript();
    }

    public static String getLocationUrl() {
        return Window.Location.getHref();
    }

    public static native Element getHeadElement() /*-{
           return ($doc.head);
          }-*/;

    public static String getScriptLocation(String id) {
        Element js = DOM.getElementById(id);
        if (js == null)
            return "";
        String url = DOM.getElementAttribute(js, "src");
        if (url == null)
            return "";
        return url;
    }

    public static String calculateLocation(String url, String asset) {
        return (url.contains("://") ? url.replaceFirst("[^/][^/]+$", "") : "") + asset;
    }

    public static void insertCSS(String url) {
        if (DOM.getElementById(url) != null)
            return;
        Element head = null;
        Element body = RootPanel.getBodyElement();
        Element doc = DOM.getParent(body);
        for (int i = 0; i < DOM.getChildCount(doc); i++) {
            Element child = DOM.getChild(doc, i);
            if (child.toString().toLowerCase().contains("head")) {
                head = child;
                break;
            }
        }
        if (head == null) {
            head = DOM.createElement("head");
            DOM.appendChild(doc, head);
        }
        Element css = DOM.createElement("link");
        DOM.setElementAttribute(css, "rel", "stylesheet");
        DOM.setElementAttribute(css, "type", "text/css");
        DOM.setElementAttribute(css, "href", url);
        DOM.setElementAttribute(css, "id", url);
        DOM.appendChild(head, css);
    }

    public static void insertJS(String id, String url) {
        Element js = DOM.getElementById(id);
        Element parent = RootPanel.getBodyElement();
        if (js != null) {
            parent = DOM.getParent(js);
            DOM.removeChild(parent, js);
        }
        js = DOM.createElement("script");
        DOM.appendChild(parent, js);
        DOM.setElementAttribute(js, "src", url);
        DOM.setElementAttribute(js, "type", "text/javascript");
        DOM.setElementAttribute(js, "id", id != null ? id : url);
    }

    public static void insertCrossScript(String url, Class c, String method) {
        url = url + "?call=" + "@" + c.getName() + "::" + method + "()";
        insertJS(null, url);
    }

    public static String getProtocolAndHostFromUrl(String url) {
        return url.replaceAll("([^/])[/?][^/].*$", "$1");
    }

    public static String getProtocolFromUrl(String url) {
        return url.toLowerCase().matches("^http") ? url.toLowerCase().replaceFirst("^(https*)", "$1") : "http";
    }

    public static String getHostFromUrl(String url) {
        return url.toLowerCase().replaceFirst("^https*\\://", "").replaceAll("[\\?:/].*$", "");
    }

    public static String getSrvltContPathFromUrl(String url) {
        return url.replaceFirst("^https*\\://[^/]+/+", "").replaceAll("[\\?:/].*$", "");
    }

    public static String getParameterFromUrl(String url, String key) {
        String reg = "[?&]" + key + "=";
        url = url.replaceAll("&amp;", "&");
        return url.matches(".*" + reg + ".*") ? url.replaceFirst("^.*[?&]" + key + "=", "").replaceAll("&.*$", "") : null;
    }
}
