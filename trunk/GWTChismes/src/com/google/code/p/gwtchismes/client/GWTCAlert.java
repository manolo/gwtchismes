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


import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.*;

/**
 * @author Manuel Carrasco Moñino
 *         <h3>Class description</h3>
 *   <p>      
 * This widget is a modal dialog for displaying alerts. It is based in a
 * {@link com.google.gwt.user.client.ui.PopupPanel} as container
 * </p>
   <h3>Example</h3>
    <pre>
        final GWTCAlert alert = new GWTCAlert(); 
        alert.alert("Hello, you can put here any message"); 
    </pre>        
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
    static public int OPTION_SQUARED = 2;
    static public int OPTION_ROUNDED_GREY = 4;
    static public int OPTION_ROUNDED_BLUE = 8;
    
    FocusWidget focusWidget = null;

    private boolean okButtonDisabled = false;
    
    private PopupPanel alertDlg = new PopupPanel();
    FlexTable contentTable = new FlexTable();
    private HTML txt = new HTML();
    private GWTCButton okButton = new GWTCButton("OK");
    public GWTCAlert() {
        this(0);
    }

    public GWTCAlert(int options) {
        
        if ((options & OPTION_DISABLE_OK_BUTTON) == OPTION_DISABLE_OK_BUTTON)
            okButtonDisabled = true;
        
        if ((options & OPTION_ROUNDED_GREY) == OPTION_ROUNDED_GREY) {
          alertDlg = new GWTCPopupBox(GWTCBox.STYLE_NORMAL);
          alertDlg.setStyleName(GWTCAlert.StyleCAlertBox);
        } else  if ((options & OPTION_ROUNDED_BLUE) == OPTION_ROUNDED_BLUE) {
          alertDlg = new GWTCPopupBox(GWTCBox.STYLE_BLUE);
          alertDlg.setStyleName(GWTCAlert.StyleCAlertBox);
        } else {
          alertDlg = new PopupPanel();
          alertDlg.setStyleName(GWTCAlert.StyleCAlert);
          alertDlg.setAnimationEnabled(true);
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
        initWidget(new DockPanel());
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
    public void setLocale(String ok) {
        okButton.setHTML(ok);
    }

    /**
     * Set the message text
     * 
     * @param s
     *            the message to display
     */
    public void setText(String s) {
        txt.setHTML(s);
        //txt.setText(s);
    }

    /**
     * Set the message text and show the dialog
     * 
     * @param s
     *            the message to display
     */
    public void alert(String s) {
        setText(s.replaceAll("\\n", "<br/>").replaceAll(" ", "&nbsp;"));
        show();
    }

    public void alert(String s, FocusWidget focus) {
        setText(s.replaceAll("\\n", "<br/>").replaceAll(" ", "&nbsp;"));
        focusWidget = focus;
        show();
    }

    /**
     * Show the alert dialog 
     */
    public void show() {
        alertDlg.show();
        contentTable.setVisible(true);
        alertDlg.center();
    }   
    
    /**
     * Hide the dialog box
     */
    public void hide() {
        alertDlg.hide();
        contentTable.setVisible(false);
    }

    public boolean isOkButtonDisabled() {
        return okButtonDisabled;
    }

    public void setOkButtonDisabled(boolean b) {
        okButtonDisabled = b;
        okButton.setVisible(! okButtonDisabled );
    }
}
