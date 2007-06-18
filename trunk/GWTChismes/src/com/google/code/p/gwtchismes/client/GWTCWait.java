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
 * @author Manuel Carrasco 
 * <h3>Class description</h3>
 * <p>
 * This widget is a dialog designed to appear when the application is working.
 * </p>
 *<p>
 * It has two components:
 * <ul>
 * <li>The background pannel designed to be possitioned over all widgets, so the user can not click any element.</li>
 * <li>The dialog box which has got a message and an image (annimated .gif)</li>
 * </ul>
 * </p>
 *   
 * 
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.gwtc-wait-bg{ class for the pannel that is over the page }</li>
 * <li>.GWTCWait    { class for the dialog box}</li>
 * <li>.GWTCWait.gwtc-wait-table{ container }</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-msg{ message cell}</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-img{ image cell}</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-img.gwtc-wait-image{ image }</li>
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

    /**
     * Adds a secondary or dependent style name to this object
     * @see com.google.gwt.user.client.ui.UIObject#addStyleName(java.lang.String)
     */
    public void addStyleName(String s) {
        waitDlg.addStyleName(s);
    }

    /**
     *  Set the caption text
     * @param s the internationalizated string
     */
    public void setCaption(String s) {
        waitDlg.setText(s);
    }

    /**
     *  Set the message text
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
        waitDlg.show();
        pageBackground.setVisible(true);
        contentTable.setVisible(true);
        // contentTable.setStyleName("gwtc-wait-table");
        // Explorer problems
        // waitDlg.getWidget().setVisible(true);
    }

    /**
     * Hide the wait dialog
     */
    public void hide() {
        waitDlg.hide();
        contentTable.setVisible(false);
        pageBackground.setVisible(false);
        // contentTable.setStyleName("off");
        // waitDlg.getWidget().setVisible(false);
    }
}
