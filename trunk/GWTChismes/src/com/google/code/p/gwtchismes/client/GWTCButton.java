/*
 Copyright (c) 2007 Manuel Carrasco (manuel.carrasco@alcala.org)  

 This library is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.

 This library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 Lesser General Public License for more details.
 */
package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.*;
import com.google.gwt.user.client.ui.*;

/**
 * This class is a wrapper that adds SourcesMouseEvents 
 * implementation for the GWTButton Widget.
 *  
 * IE6 buttons does not support :hover nor :active classes, 
 * this widget uses javascript to emulate this behaviour.
 * 
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.gwtc-Button { }</li>
 * <li>.gwtc-Button.gwtc-Hover, .gwtc-Button:hover { }</li>
 * <li>.gwtc-Button.gwtc-Active, .gwtc-Button:active { }</li>
 * </ul>
 * 
 */
public class GWTCButton extends Button implements SourcesMouseEvents {
    public static final String CBUTTON = "gwtc-Button";

    public static final String CHOVER = "gwtc-Hover";

    public static final String CACTIVE = "gwtc-Active";

    private void setupGWTCButton() {
        addStyleName(GWTCButton.CBUTTON);
        sinkEvents(Event.MOUSEEVENTS);
        if (isIE6())
            addMouseListener(mouseOverListener);
    }

    public GWTCButton() {
        super();
        setupGWTCButton();
    }

    public GWTCButton(String html) {
        super(html);
        setupGWTCButton();
    }

    public GWTCButton(String html, ClickListener listener) {
        super(html, listener);
        setupGWTCButton();
    }

    // SourcesMouseEvents Methods
    private MouseListenerCollection mouseListeners = new MouseListenerCollection();

    public void addMouseListener(MouseListener listener) {
        if (mouseListeners == null) {
            mouseListeners = new MouseListenerCollection();
        }
        mouseListeners.add(listener);
    }

    public void removeMouseListener(MouseListener listener) {
        if (mouseListeners != null) {
            mouseListeners.remove(listener);
        }
    }
    
    public void onBrowserEvent(Event event) {
        super.onBrowserEvent(event);
        switch (DOM.eventGetType(event)) {
        case Event.ONMOUSEDOWN:
        case Event.ONMOUSEUP:
        case Event.ONMOUSEMOVE:
        case Event.ONMOUSEOVER:
        case Event.ONMOUSEOUT:
            if (mouseListeners != null)
                mouseListeners.fireMouseEvent(this, event);
            break;
        }
    }

    // Static Methods
    public static final MouseListener mouseOverListener = new MouseListener() {
        public void onMouseUp(Widget sender, int x, int y) {
        }

        public void onMouseMove(Widget sender, int x, int y) {
            sender.removeStyleName(GWTCButton.CACTIVE);
        }

        public void onMouseLeave(Widget sender) {
            sender.removeStyleName(GWTCButton.CHOVER);
            sender.removeStyleName(GWTCButton.CACTIVE);
        }

        public void onMouseEnter(Widget sender) {
            sender.addStyleName(GWTCButton.CHOVER);
        }

        public void onMouseDown(Widget sender, int x, int y) {
            sender.addStyleName(GWTCButton.CACTIVE);
        }
    };

    // Native JS method to detect ie6
    public static native boolean isIE6()
    /*-{
     return (window.XMLHttpRequest)? false: true;
     }-*/;

}
