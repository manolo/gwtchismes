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
 * <li>.GWTCAlert { DialogBox container}</li>
 * <li>.GWTCAlert.gwtc-alert-table{ table into the container }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-msg{ Message cell }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-btn{ Button cell }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-btn.gwtc-alert-button{ Button }</li>
 * </ul>
 * 
 */
public class GWTCAlert extends Composite {
    public static final String StyleCAlert = "GWTCAlert";
    public static final String StyleCAlertBox = "GWTCAlertBox";
    public static final String StyleCAlertTable = "gwtc-alert-table";
    public static final String StyleCAlertMsgCell = "gwtc-alert-cell-msg";
    public static final String StyleCAlertBtnCell = "gwtc-alert-cell-btn";
    public static final String StyleCAlertBtn = "gwtc-alert-button";
    
    static public int OPTION_DISABLE_OK_BUTTON = 1;
    static public int OPTION_ROUNDED_FLAT = 2;
    static public int OPTION_ROUNDED_GREY = 4;
    static public int OPTION_ROUNDED_BLUE = 8;
    static public int OPTION_DISABLE_BACKGROUND = 16;
    static public int OPTION_ANIMATION = 32;
    
    FocusWidget focusWidget = null;

    private boolean okButtonDisabled = false;
    
    private PopupPanel alertDlg = new PopupPanel();
    FlexTable contentTable = new FlexTable();
    private HTML txt = new HTML();
    private GWTCButton okButton = new GWTCButton("OK");
    private GWTCBackPanel pageBackground = null;
    
    /**
     * Constructor with default options
     */
    public GWTCAlert() {
        this(0);
    }

    /**
     * Base constructor. 
     * Different options can be passed joining these constant using the or bit wise operator
     * <ul>
     * <li>OPTION_DISABLE_BACKGROUND    don't show the background layer</li>
     * <li>OPTION_ROUNDED_GREY          put a flat GWTCBox arround the alert</li>
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
        
        if ((options & OPTION_DISABLE_OK_BUTTON) == OPTION_DISABLE_OK_BUTTON)
            okButtonDisabled = true;
        
        if ((options & OPTION_ROUNDED_GREY) == OPTION_ROUNDED_GREY) {
          alertDlg = new GWTCPopupBox(GWTCBox.StyleGrey);
          alertDlg.addStyleName(GWTCAlert.StyleCAlertBox);
        } else  if ((options & OPTION_ROUNDED_BLUE) == OPTION_ROUNDED_BLUE) {
          alertDlg = new GWTCPopupBox(GWTCBox.StyleBlue);
          alertDlg.addStyleName(GWTCAlert.StyleCAlertBox);
        } else {
          alertDlg = new PopupPanel();
          alertDlg.setStyleName(GWTCAlert.StyleCAlert);
        }
        alertDlg.setAnimationEnabled((options & OPTION_ANIMATION) == OPTION_ANIMATION);

        if ((options & OPTION_DISABLE_BACKGROUND) != OPTION_DISABLE_BACKGROUND) {
            pageBackground = new GWTCBackPanel();
        }
        
        contentTable.setStyleName(GWTCAlert.StyleCAlertTable);
        contentTable.getCellFormatter().addStyleName(0, 0, GWTCAlert.StyleCAlertMsgCell);
        contentTable.setWidget(0, 0, txt);

        contentTable.getCellFormatter().addStyleName(1, 0, GWTCAlert.StyleCAlertBtnCell);
        
        contentTable.setWidget(1, 0, okButton);
        
        okButton.addStyleName(GWTCAlert.StyleCAlertBtn);
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
        
        alertDlg.add(contentTable);
        alertDlg.center();
        hide();
        initWidget(new SimplePanel());
    }
    
    public void addClickListener(ClickListener listener) {
        okButton.addClickListener(listener);
    }
    public void removeClickListener(ClickListener listener) {
        okButton.removeClickListener(listener);
    }

    public void addStyleName(String s) {
        alertDlg.addStyleName(s);
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
        if (pageBackground != null) 
            pageBackground.show();
        contentTable.setVisible(true);
        alertDlg.center();
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
        alertDlg.hide();
        contentTable.setVisible(false);
        if (pageBackground != null)
            pageBackground.hide();
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
}
