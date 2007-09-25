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


import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.MouseListenerCollection;
import com.google.gwt.user.client.ui.SourcesMouseEvents;
import com.google.gwt.user.client.ui.Widget;


/**
 * @author Manuel Carrasco Moñino
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
        if (GWTCHelper.isIE6())
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

}
