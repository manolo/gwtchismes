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

import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

/**
 * This widget is an alert dialog
 *  
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCAlert { }</li>
 * <li>.GWTCAlert.gwtc-alert-table{ }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-msg{ }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-btn{ }</li>
 * <li>.GWTCAlert.gwtc-alert-table.gwtc-alert-cell-btn.gwtc-alert-button{ }</li>
 * </ul>
 * 
 */
public class GWTCAlert extends Composite {
    public static final String StyleCAlert = "GWTCAlert";

    public static final String StyleCAlertTable = "gwtc-alert-table";

    public static final String StyleCAlertMsgCell = "gwtc-alert-cell-msg";

    public static final String StyleCAlertBtnCell = "gwtc-alert-cell-btn";

    public static final String StyleCAlertBtn = "gwtc-alert-button";

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

    public void addStyleName(String s) {
        alertDlg.addStyleName(s);
    }

    public void setLocale(String ok) {
        okButton.setText(ok);
    }

    public void setText(String s) {
        txt.setText(s);
    }

    public void alert(String s) {
        setText(s);
        show();
    }

    public void show() {
        alertDlg.show();
        contentTable.setVisible(true);
    }

    public void hide() {
        alertDlg.hide();
        contentTable.setVisible(false);
    }
}
