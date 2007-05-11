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

import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * This widget is an alert dialog
 * 
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCWait { }</li>
 * <li>.gwtc-wait-bg{ }</li>
 * <li>.GWTCWait.gwtc-wait-table{ }</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-msg{ }</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-img{ }</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-img.gwtc-wait-image{ }</li>
 * </ul>
 * 
 */
public class GWTCWait extends Composite {

    public static final String StyleCWait = "GWTCWait";

    public static final String StyleCWaitBg = "gwtc-wait-bg";

    public static final String StyleCWaitTable = "gwtc-wait-table";

    public static final String StyleCWaitMsgCell = "gwtc-wait-cell-msg";

    public static final String StyleCWaitImgCell = "gwtc-wait-cell-img";

    public static final String StyleCWaitImg = "gwtc-wait-image";

    private String styleName = "GWTCWait";

    private DialogBox waitDlg = new DialogBox();

    private Label txt = new Label("");

    private Image img = new Image("gwtc-wait-loading.gif");

    private FocusPanel pageBackground = new FocusPanel();

    private FlexTable contentTable = new FlexTable();

    public GWTCWait() {
        waitDlg.setStyleName(styleName);

        pageBackground.addStyleName(GWTCWait.StyleCWaitBg);
        pageBackground.setSize("100%", "100%");
        RootPanel.get().add(pageBackground, 0, 0);

        contentTable.setStyleName(GWTCWait.StyleCWaitTable);
        contentTable.getCellFormatter().addStyleName(0, 0, GWTCWait.StyleCWaitMsgCell);
        contentTable.setWidget(0, 0, txt);

        contentTable.getCellFormatter().addStyleName(1, 0, GWTCWait.StyleCWaitImgCell);
        contentTable.setWidget(1, 0, img);
        img.addStyleName(GWTCWait.StyleCWaitImg);

        waitDlg.setWidget(contentTable);
        hide();

        initWidget(new DockPanel());
    }

    public void addStyleName(String s) {
        waitDlg.addStyleName(s);
    }

    public void setCaption(String s) {
        waitDlg.setText(s);
    }

    public void setMessage(String s) {
        txt.setText(s);
    }

    public void setImg(String i) {
        img.setUrl(i);
    }

    public void show(int timeout) {
        if (timeout > 0) {
            Timer t = new Timer() {
                public void run() {
                    hide();
                }
            };
            t.schedule(timeout * 1000);
        }
        waitDlg.show();
        pageBackground.setVisible(true);
        contentTable.setVisible(true);
        // contentTable.setStyleName("gwtc-wait-table");
        // Explorer problems
        // waitDlg.getWidget().setVisible(true);
    }

    public void hide() {
        waitDlg.hide();
        contentTable.setVisible(false);
        pageBackground.setVisible(false);
        // contentTable.setStyleName("off");
        // waitDlg.getWidget().setVisible(false);
    }
}
