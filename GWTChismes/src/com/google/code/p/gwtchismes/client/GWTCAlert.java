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
import com.google.gwt.user.client.ui.*;

/**
 * <p>
 * <b>Modal dialog for displaying alerts.</b> 
 * </p>
 * @author Manuel Carrasco Moñino
 * 
 * <h3>Features</h3>
 * <ul>
 * <li>It can be shown inside of a decorated box with rounded corners</li>
 * <li>Possibility of showing a semitransparent background layer, avoiding the user interaction with other controls</li>
 * <li>Auto-hide after a configurable period</li>
 * <li>Customizable Ok-button.</li>
 * </ul>
 *  <h3>Example</h3>
 *   <pre>
      final GWTCAlert alert = new GWTCAlert(); 
      alert.alert("Hello, you can put here any message");
         
      alert = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE | GWTCAlert.OPTION_DISABLE_OK_BUTTON | GWTCAlert.OPTION_ANIMATION );
      alert.alert("This is a message that will desapear after a while", 3);
     </pre>     
 *   </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCAlert { main class for the composite container }</li>
 * <li>.GWTCAlert-box { class for the rounded panel, if it exists }</li>
 * <li>.GWTCAlert .panel .msgCell { message cell }</li>
 * <li>.GWTCAlert .panel .btnCell { button cell }</li>
 * <li>.GWTCAlert .panel .button { Button }</li>
 *  <li>z-index is setted by code</li> 
 * </ul>
 * 
 */
public class GWTCAlert extends Composite {
    static final String MAIN_STYLE = "GWTCAlert";
    static final String STYLE_BOX = "-box";
    static final String STYLE_PANEL = "panel";
    static final String STYLE_MSG = "msgCell";
    static final String STYLE_BTN = "btnCell";
    static final String STYLE_BUTTON = "button";
    
    static public int OPTION_DISABLE_OK_BUTTON = 1;
    static public int OPTION_ROUNDED_FLAT = 2;
    static public int OPTION_ROUNDED_GREY = 4;
    static public int OPTION_ROUNDED_BLUE = 8;
    static public int OPTION_DISABLE_BACKGROUND = 16;
    static public int OPTION_ANIMATION = 32;
    
    FocusWidget focusWidget = null;

    private boolean okButtonDisabled = false;
    
    private PopupPanel dialog = new PopupPanel();
    FlexTable contentTable = new FlexTable();
    private HTML txt = new HTML();
    private GWTCButton okButton = new GWTCButton("OK");
    private GWTCBackPanel background = null;

    private int zIndex = 999;
    
    /**
     * Constructor with default options
     */
    public GWTCAlert() {
        this(0);
    }

    /**
     * Main constructor. 
     * Different options can be passed joining these constant using the or bit wise operator
     * <ul>
     * <li>OPTION_DISABLE_BACKGROUND    don't show the background layer</li>
     * <li>OPTION_ROUNDED_FLAT          put a flat GWTCBox arround the alert</li>
     * <li>OPTION_ROUNDED_GREY          put a grey GWTCBox arround the alert</li>
     * <li>OPTION_ROUNDED_BLUE          put a blue GWTCBox arround the alert</li>
     * <li>OPTION_DISABLE_OK_BUTTON     don't show the OK button</li>
     * <li>CONFIG_ANIMATION      animate the dialog box when it is showed/hidden</li>    
     * </ul>
     *  
     * @param config
     *      cofiguration options.
     */
    public GWTCAlert(int options) {
        initWidget(new HTML());
        
        if ((options & OPTION_DISABLE_OK_BUTTON) == OPTION_DISABLE_OK_BUTTON)
            okButtonDisabled = true;
        
        if ((options & OPTION_ROUNDED_GREY) == OPTION_ROUNDED_GREY) {
          dialog = new GWTCPopupBox(GWTCBox.STYLE_GREY);
          dialog.addStyleName(GWTCAlert.MAIN_STYLE + STYLE_BOX);
        } else  if ((options & OPTION_ROUNDED_BLUE) == OPTION_ROUNDED_BLUE) {
          dialog = new GWTCPopupBox(GWTCBox.STYLE_BLUE);
          dialog.addStyleName(GWTCAlert.MAIN_STYLE + STYLE_BOX);
        } else  if ((options & OPTION_ROUNDED_FLAT) == OPTION_ROUNDED_FLAT) {
            dialog = new GWTCPopupBox(GWTCBox.STYLE_FLAT);
            dialog.addStyleName(GWTCAlert.MAIN_STYLE + STYLE_BOX);
        } else {
          dialog = new PopupPanel();
          dialog.setStyleName(GWTCAlert.MAIN_STYLE);
        }
        dialog.setAnimationEnabled((options & OPTION_ANIMATION) == OPTION_ANIMATION);

        if ((options & OPTION_DISABLE_BACKGROUND) != OPTION_DISABLE_BACKGROUND) {
            background = new GWTCBackPanel();
        }
        
        contentTable.setStyleName(GWTCAlert.STYLE_PANEL);
        contentTable.getCellFormatter().addStyleName(0, 0, GWTCAlert.STYLE_MSG);
        contentTable.setWidget(0, 0, txt);

        contentTable.getCellFormatter().addStyleName(1, 0, GWTCAlert.STYLE_BTN);
        
        contentTable.setWidget(1, 0, okButton);
        
        okButton.addStyleName(GWTCAlert.STYLE_BUTTON);
        okButton.addStyleName("gwtc-alert-rndbutton");
        this.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                hide();
                if (focusWidget != null)
                    focusWidget.setFocus(true);
                focusWidget = null;
            }
        });
        
        okButton.setVisible(! okButtonDisabled );
        
        dialog.add(contentTable);
        
        setZIndex(zIndex);
    }
    
    public void addClickListener(ClickListener listener) {
        okButton.addClickListener(listener);
    }
    public void removeClickListener(ClickListener listener) {
        okButton.removeClickListener(listener);
    }

    @Override
    public void setStyleName(String s) {
        dialog.setStyleName(s);
        
    }
    @Override
    public void addStyleName(String s) {
        dialog.addStyleName(s);
    }
    @Override
    public void addStyleDependentName(String s) {
        dialog.addStyleDependentName(s);
    }
    @Override
    public String toString() {
        return dialog.toString();
    }

    /**
     * Set the text for OK button
     * 
     * @param ok
     *            the internationalizated string
     */
    public void setOkButtonMsg(String ok) {
        okButton.setHTML(ok);
    }

    /**
     * Set the message text
     * 
     * @param s
     *            the message to display
     */
    public void setText(String s) {
        txt.setHTML(s.replaceAll("\\n", "<br/>").replaceAll(" ", "&nbsp;"));
    }

    /**
     * Sets the message text and shows the dialog
     * 
     * @param s
     *            the message to display
     */
    public void alert(String s) {
        setText(s);
        show();
    }

    /**
     * Sets the message text, shows the dialog, and automatically hides it after a period
     * 
     * @param s
     *            the message to display
     * @param timeout
     *            timeout in seconds for autohide           
     */
    public void alert(String s, int timeout) {
        setText(s);
        show(timeout);
    }

    /**
     * Sets the message text, shows the dialog and eventually moves the focus to the widget after the user pushes ok.
     * This is thought for validation messages in forms
     * 
     * @param s
     *            the message to display
     */
    public void alert(String s, FocusWidget focus) {
        setText(s.replaceAll("\\n", "<br/>").replaceAll(" ", "&nbsp;"));
        focusWidget = focus;
        show();
    }

    /**
     * Shows the alert dialog 
     */
    public void show() {
        dialog.center();
        if (background != null) 
            background.show();
        okButton.setFocus(true);
    }   
    
    /**
     * Shows the alert dialog, and hides it after a period
     *  
     * @param timeout
     *            timeout in seconds for autohide           
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
        show();
    }

    
    /**
     * Hides the dialog box
     */
    public void hide() {
        dialog.hide();
        if (background != null)
            background.hide();
    }

    /**
     * Disable the OK button. Useful for showing autohide messages.
     * 
     * @param b
     */
    public void setOkButtonDisabled(boolean b) {
        okButtonDisabled = b;
        okButton.setVisible(! okButtonDisabled );
    }
    /**
     * Set the zIndex value
     * 
     * @param z
     */
    public void setZIndex(int z) {
        DOM.setStyleAttribute(dialog.getElement(), "zIndex", String.valueOf(zIndex));
        background.setZIndex(z - 1);
    }
}
