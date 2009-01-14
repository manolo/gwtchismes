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
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;


/**
 * <p>
 * <b>Widget designed to inform the user that the application is working</b>
 * </p>
 * @author Manuel Carrasco  Moñino
 *<p>
 * The widget has two components:
 * <ul>
 * <li>The background pannel designed to be possitioned over all widgets, so the user can not click any element.</li>
 * <li>The dialog box which has got a message and an image (annimated .gif)</li>
 * </ul>
 * </p>
   <h3>Example</h3>
    <pre>
        // Create a wait widget
        GWTCWait wait = new GWTCWait();
        wait.setMessage("Please wait ...");

        // Show the wait message, and set a timeout of 8 seconds for autohiding
        wait.show(8);

        // Execute an async call to the server
        EsampleServerAsync.method(new AsyncCallback() {
            public void onSuccess(ResponseGWT response) {
              // Hide the message when the response comes
              wait.hide();
            }
            public void onFailure(Throwable caught) {
              // Hide the message after an error
              wait.hide();
            }
        });
    </pre>        
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCWait    { main class for the composite container }</li>
 * <li>.GWTCWait .panel { class for the content table}</li>
 * <li>.GWTCWait .panel .msgCell { message cell }</li>
 * <li>.GWTCWait .panel .imgCell { image cell}</li>
 * <li>.GWTCWait .panel .imgCell .image { image }</li>
 *  <li>z-index is setted by code</li> 
 * </ul>
 * 
 */
public class GWTCWait extends Composite {

    private static final String MAIN_STYLE = "GWTCWait";

    private static final String STYLE_PANEL = "panel";

    private static final String STYLE_MSG = "msgCell";

    private static final String STYLE_IMG = "imgCell";

    private static final String STYLE_IMAGE = "image";

    private DialogBox dialog = new DialogBox();

    private Label txt = new Label("");

    private Image img = new Image("images/gwtc-wait-loading.gif");

    private FlexTable mainPanel = new FlexTable();
    
    private static GWTCBackPanel background = new GWTCBackPanel();

    private int zIndex = 999;

    /**
     *  Default constructor 
     */
    public GWTCWait() {
        initWidget(new HTML());

        dialog.setStyleName(GWTCWait.MAIN_STYLE);
        mainPanel.setStyleName(GWTCWait.STYLE_PANEL);
        mainPanel.getCellFormatter().addStyleName(0, 0, GWTCWait.STYLE_MSG);
        mainPanel.setWidget(0, 0, txt);
        mainPanel.getCellFormatter().addStyleName(1, 0, GWTCWait.STYLE_IMG);
        mainPanel.setWidget(1, 0, img);
        img.addStyleName(GWTCWait.STYLE_IMAGE);
        dialog.setWidget(mainPanel);
        
        setZIndex(zIndex);
    }

    @Override
    public void setStyleName(String s) {
        dialog.setStyleName(s);
    }

    @Override
    public void addStyleName(String s) {
        dialog.setStyleName(s);
    }

    /**
     * Set the caption text
     * @param s the internationalizated string
     */
    public void setCaption(String s) {
        dialog.setText(s);
    }

    /**
     * Set the message text
     * @param s the internationalizated string
     */
    public void setMessage(String s) {
        txt.setText(s);
    }

    /**
     *  Set the url of the image
     * @param i url where image resides
     */
    public void setImg(String i) {
        if (i == null)
            img.removeFromParent();
        else 
            img.setUrl(i);
    }

    /**
     *  Show the wait dialog for timeout seconds
     *  
     * @param timeout seconds to wait before hide the dialog (timeout=0 wait for ever)
     */
    public void show(int timeout) {
        if (timeout > 0) {
            Timer t = new Timer() {
                public void run() {
                    hide();
                }
            };
            t.schedule(timeout * 1000);
        }
        background.show();
        dialog.center();
    }
    

    /**
     * Hide the wait dialog
     */
    public void hide() {
        dialog.hide();
        background.hide();
    }

    /**
     * Set the zIndex value
     * 
     * @param z
     */
    public void setZIndex(int z) {
        zIndex = z;
        DOM.setStyleAttribute(dialog.getElement(), "zIndex", String.valueOf(zIndex));
        background.setZIndex(zIndex - 1);
    }
}
