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
import com.google.gwt.user.client.ui.RootPanel;


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
public class GWTCWait extends GWTCPopupBox {

    private static final String MAIN_STYLE = "GWTCWait";

    private static final String STYLE_PANEL = "panel";

    private static final String STYLE_MSG = "msgCell";

    private static final String STYLE_IMG = "imgCell";

    private static final String STYLE_IMAGE = "image";

    private Label txt = new Label("");

    private Image img = new Image("images/gwtc-wait-loading.gif");

    private FlexTable mainPanel = new FlexTable();
    
    public GWTCWait() {
        super(GWTCPopupBox.OPTION_DISABLE_AUTOHIDE);
        
        if (RootPanel.get(MAIN_STYLE)!=null)
            RootPanel.get(MAIN_STYLE).setVisible(false);

        setStyleName(MAIN_STYLE);
        mainPanel.setStyleName(STYLE_PANEL);
        mainPanel.getCellFormatter().addStyleName(0, 0, STYLE_MSG);
        mainPanel.setWidget(0, 0, txt);
        mainPanel.getCellFormatter().addStyleName(1, 0, STYLE_IMG);
        mainPanel.setWidget(1, 0, img);
        img.addStyleName(STYLE_IMAGE);
        setWidget(mainPanel);
    }


    /**
     * Set the caption text
     * @param s the internationalizated string
     */
    public void setCaption(String s) {
        //dialog.setText(s);
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
        setVisible(true);
        center();
    }
    

    /**
     * Hide the wait dialog
     */
    public void hide() {
        super.hide();
        setVisible(false);
    }

}
