package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.ui.*;
import com.google.gwt.user.client.*;

/**
 * <p>
 * A panel that covers the document area and avoids user actions.
 * </p>
 * 
 * @author Manuel Carrasco Moñino
 * 
 * <h3>CSS Style Rules</h3> 
 * <ul> 
 *  <li>.GWTCBackPanel { Panel }</li> 
 *  <li>size and z-index are setted by code</li> 
 * </ul>
 * 
 */
public class GWTCBackPanel extends FocusPanel {

    private String style = "GWTCBackPanel";
    private int zIndex = 998;

    public GWTCBackPanel() {
        super();
        addStyleName(style);
        setZIndex(zIndex);
    }

    /**
     * Show the layer and maximizes it into all available area
     */
    public void show() {
        if (!isAttached()) {
            RootPanel.get().add(this, 0, 0);
        }
        setVisible(true);
        GWTCHelper.maximizeWidget(this);
    }

    /**
     * Hide the layer
     */
    public void hide() {
        setSize("0px", "0px");
        setVisible(false);
    }

    /**
     * Set the zIndex value
     * 
     * @param z
     */
    public void setZIndex(int z) {
        DOM.setStyleAttribute(getElement(), "z-index", String.valueOf(zIndex));
    }
}