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

import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.MouseListenerCollection;
import com.google.gwt.user.client.ui.SourcesMouseEvents;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco
 * <h3>Class description</h3>
 * <p>
 * This class is a wrapper that adds SourcesMouseEvents 
 * implementation for the GWTButton Widget.
 *  </p>
 *  <p>
 * IE6 buttons does not support :hover nor :active classes, 
 * this widget uses javascript to emulate this behaviour.
 * </p>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.gwtc-Button { }</li>
 * <li>.gwtc-Button.gwtc-Hover, .gwtc-Button:hover { class used when the mouse is over the widget}</li>
 * <li>.gwtc-Button.gwtc-Active, .gwtc-Button:active { class used when the mouse activate the button}</li>
 * </ul>
 * 
 */
public class GWTCButton extends Button implements SourcesMouseEvents {
    private static final String CBUTTON = "gwtc-Button";

    private static final String CHOVER = "gwtc-Hover";

    private static final String CACTIVE = "gwtc-Active";

    private void setupGWTCButton() {
        addStyleName(GWTCButton.CBUTTON);
        sinkEvents(Event.MOUSEEVENTS);
        if (isIE6())
            addMouseListener(mouseOverListener);
    }

    /**
     * Creates a button with no caption.
     */
    public GWTCButton() {
        super();
        setupGWTCButton();
    }

    /**
     * Creates a button with the given HTML caption.
     * 
     * @param html the HTML caption
     */
    public GWTCButton(String html) {
        super(html);
        setupGWTCButton();
    }

    /**
     * Creates a button with the given HTML caption and click listener.
     * 
     * @param html the HTML caption
     * @param listener the click listener
     */
    public GWTCButton(String html, ClickListener listener) {
        super(html, listener);
        setupGWTCButton();
    }

    // SourcesMouseEvents Methods
    private MouseListenerCollection mouseListeners = new MouseListenerCollection();

    /**
     * @see com.google.gwt.user.client.ui.SourcesMouseEvents#addMouseListener(com.google.gwt.user.client.ui.MouseListener)
     */
    public void addMouseListener(MouseListener listener) {
        if (mouseListeners == null) {
            mouseListeners = new MouseListenerCollection();
        }
        mouseListeners.add(listener);
    }

    /**
     * @see com.google.gwt.user.client.ui.SourcesMouseEvents#removeMouseListener(com.google.gwt.user.client.ui.MouseListener)
     */
    public void removeMouseListener(MouseListener listener) {
        if (mouseListeners != null) {
            mouseListeners.remove(listener);
        }
    }
    
    /**
     * @see com.google.gwt.user.client.ui.FocusWidget#onBrowserEvent(com.google.gwt.user.client.Event)
     */
    public void onBrowserEvent(Event event) {
        super.onBrowserEvent(event);
        if (mouseListeners != null)
            mouseListeners.fireMouseEvent(this, event);
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
    /**
     * Detection of Internet Explorer 6.x 
     * @return true if the browser is ie6
     */
    public static native boolean isIE6()
    /*-{
     return (window.XMLHttpRequest)? false: true;
     }-*/;

}
