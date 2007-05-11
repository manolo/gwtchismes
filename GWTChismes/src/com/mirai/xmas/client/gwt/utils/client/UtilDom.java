package com.mirai.xmas.client.gwt.utils.client;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.Widget;

public class UtilDom {
    public static void adjustScrollBars(Widget w) {
        DOM.scrollIntoView(w.getElement());
    }

    public static void addCSS(String cssUrl) {
        Element head = getElementByTagName("head");
        Element cssLink = DOM.createElement("link");
        DOM.setAttribute(cssLink, "type", "text/css");
        DOM.setAttribute(cssLink, "rel", "stylesheet");
        DOM.setAttribute(cssLink, "href", cssUrl);
        DOM.appendChild(head, cssLink);
    }

    public native static Element getElementByTagName(String tagName)
    /*-{
     var elem = $doc.getElementsByTagName(tagName);
     return elem ? elem[0] : null;
     }-*/;
}
