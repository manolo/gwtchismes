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
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco
 *         <h3>Class description</h3>
 *   <p>      
 * This widget is a modal dialog for displaying alerts. It is based in a
 * {@link com.google.gwt.user.client.ui.DialogBox} as container
 * </p>
   <h3>Example</h3>
    <pre>
        final GWTCAlert alert = new GWTCAlert(); 
        alert.alert("Hello, you  can put here any message"); 
    </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCAlert { DialogBox container}</li>
 * <li>.GWTCAlert.gwtc-alert-table{ table into the container }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-msg{ Message cell }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-btn{ Button cell }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-btn.gwtc-alert-button{
 * Button }</li>
 * </ul>
 * 
 */
public class GWTCAlert extends Composite {
    private static final String StyleCAlert = "GWTCAlert";

    private static final String StyleCAlertTable = "gwtc-alert-table";

    private static final String StyleCAlertMsgCell = "gwtc-alert-cell-msg";

    private static final String StyleCAlertBtnCell = "gwtc-alert-cell-btn";

    private static final String StyleCAlertBtn = "gwtc-alert-button";

    private DialogBox alertDlg = new DialogBox();

    private Label txt = new Label();

    private GWTCButton okButton = new GWTCButton("OK");

    FlexTable contentTable = new FlexTable();

    public GWTCAlert() {

        alertDlg.setStyleName(GWTCAlert.StyleCAlert);

        contentTable.setStyleName(GWTCAlert.StyleCAlertTable);
        contentTable.getCellFormatter().addStyleName(0, 0, GWTCAlert.StyleCAlertMsgCell);
        contentTable.setWidget(0, 0, txt);

        contentTable.getCellFormatter().addStyleName(1, 0, GWTCAlert.StyleCAlertBtnCell);
        contentTable.setWidget(1, 0, okButton);
        okButton.addStyleName(GWTCAlert.StyleCAlertBtn);
        okButton.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                hide();
            }
        });
        alertDlg.setWidget(contentTable);
        hide();

        initWidget(new DockPanel());
    }

    /**
     * Adds a secondary or dependent style name to this object
     * 
     * @see com.google.gwt.user.client.ui.UIObject#addStyleName(java.lang.String)
     */
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
        okButton.setText(ok);
    }

    /**
     * Set the message text
     * 
     * @param s
     *            the message to display
     */
    public void setText(String s) {
        txt.setText(s);
    }

    /**
     * Set the message text and show the dialog
     * 
     * @param s
     *            the message to display
     */
    public void alert(String s) {
        setText(s);
        show();
    }

    /**
     * Show the dialog box
     */
    public void show() {
        alertDlg.show();
        contentTable.setVisible(true);
    }

    /**
     * Hide the dialog box
     */
    public void hide() {
        alertDlg.hide();
        contentTable.setVisible(false);
    }
}
