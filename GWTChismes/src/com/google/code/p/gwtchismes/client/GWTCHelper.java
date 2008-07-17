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

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco Moñino
 *         <h3>Helper Class</h3>
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

    /**
     * This method move the panel near the widget provided. If widget is null, the panel is centered into the visible area of the browser. Hack: PopupPanel.center() does not work because it centers the panel in the window.
     * 
     * @param panel
     * @param widget
     */
    public static void positionPopupPanel(PopupPanel panel, Widget widget) {
        if (panel == null)
            return;

        int visibleW = getVisibleWidth();
        int visibleH = getVisibleHeight();
        int windowW = Window.getClientWidth();
        int windowH = Window.getClientHeight();
        int scrollLeft = Window.getScrollLeft();
        int scrollTop = Window.getScrollTop();
        int objectW = panel.getOffsetWidth();
        int objectH = panel.getOffsetHeight();

        if (widget != null) {
            // Put the panel near the widget
            int left = widget.getAbsoluteLeft() - 20;
            int top = widget.getAbsoluteTop() + 10;
            panel.setPopupPosition(left, top);
            // If part of the panel is not visible, move the scrollbars
            int xDiff = objectW + left - visibleW - scrollLeft;
            int yDiff = objectH + top - visibleH - scrollTop;
            if (xDiff < 0) {
                xDiff = left - scrollLeft;
                if (xDiff > 0)
                    xDiff = 0;
            }
            if (yDiff < 0) {
                yDiff = top - scrollTop;
                if (yDiff > 0)
                    yDiff = 0;
            }
            scrollTo(scrollLeft + xDiff, scrollTop + yDiff);
        } else {
            // Center the panel into the visible part of the document
            if (visibleW == 0 || visibleH == 0) {
                panel.center();
            } else if (visibleH > windowH) {
                panel.center();
            } else {
                int left = scrollLeft + ((visibleW + objectW) / 2) - objectW;
                int top = scrollTop + ((visibleH + objectH) / 2) - objectH;
                panel.setPopupPosition(left, top);
            }
        }
    }

    public static void centerPopupPanel(PopupPanel panel) {
        positionPopupPanel(panel, null);
    }

    public static void maximizeWidget(Widget widget) {
        if (widget == null)
            return;
        int w = Math.max(getVisibleWidth(), Window.getClientWidth());
        int h = Math.max(getVisibleHeight(), Window.getClientHeight());
        widget.setSize(w + "px", h + "px");
    }

    public static native void scrollTo(int x, int y) /*-{
            $wnd.scrollTo(x,y);
         }-*/;

    public static native int getVisibleWidth() /*-{
            return $wnd.document.documentElement.clientWidth;
         }-*/;

    public static native int getVisibleHeight() /*-{
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

    public static native boolean isHostedMode()/*-{
          try {
             return (window.external && window.external.gwtOnLoad && window.location.search.indexOf('gwt.hybrid')==-1);
          } catch(e) {return false;}
         }-*/;

    public static native String getLocationUrl() /*-{
        return ("" + $doc.location);
       }-*/;

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
    public static void insertJS (String id, String url) {
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
		DOM.setElementAttribute(js, "id", id!=null ? id : url);
    }

    public static void insertCrossScript(String url, Class c, String method) {
	url = url + "?call=" + "@" + c.getName() + "::" + method + "()";
	insertJS(null, url);
    }


	public static String getProtocolAndHostFromUrl(String url) {
		return url.replaceAll("([^/])[/?][^/].*$", "$1");
	}

	public static String getProtocolFromUrl(String url) {
		return url.matches("(?i)^http") ? url.replaceFirst("(?i)^(https*)", "$1") : "http";
	}

	public static String getHostFromUrl(String url) {
		return url.replaceFirst("(?i)^https*\\://", "").replaceAll("[\\?:/].*$", "");
	}

	public static String getParameterFromUrl(String url, String key) {
		String reg = "[?&]" + key + "=";
		return url.matches(".*" + reg + ".*") ? url.replaceFirst("^.*[?&]" + key + "=", "").replaceAll("&.*$", "") : null;
	}
}
