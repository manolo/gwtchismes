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
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;


/**
 * @author Manuel Carrasco  Moñino
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
   <h3>Example</h3>
    <pre>
        final GWTCWait wait = new GWTCWait();
        wait.setMessage("Please wait ...");
        wait.hide();
        wait.show(5);
    </pre>        
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCWait    { main class for the dialog box and the pannel over the page}</li>
 * 
 * <li>.GWTCWait.gwtc-wait-bg{ class for the pannel that is over the page }</li>
 * 
 * <li>.GWTCWait.gwtc-wait-dlg{ class for the pannel containing the table}</li>
 * <li>.GWTCWait.gwtc-wait-table{ table }</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-msg{ message cell}</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-img{ image cell}</li>
 * <li>.GWTCWait.gwtc-wait-table.gwtc-wait-cell-img.gwtc-wait-image{ image }</li>
 * </ul>
 * 
 */
public class GWTCWait extends Composite {

    public static final String StyleCWait = "GWTCWait";

    public static final String StyleCWaitBg = "gwtc-wait-bg";
    
    public static final String StyleCWaitDlg = "gwtc-wait-dlg";

    public static final String StyleCWaitTable = "gwtc-wait-table";

    public static final String StyleCWaitMsgCell = "gwtc-wait-cell-msg";

    public static final String StyleCWaitImgCell = "gwtc-wait-cell-img";

    public static final String StyleCWaitImg = "gwtc-wait-image";

    private DialogBox waitDlg = new DialogBox();

    private Label txt = new Label("");

    private Image img = new Image("images/gwtc-wait-loading.gif");

    private FocusPanel pageBackground = new FocusPanel();

    private FlexTable contentTable = new FlexTable();

    public GWTCWait() {

        pageBackground.setStyleName(GWTCWait.StyleCWait);
        pageBackground.addStyleName(GWTCWait.StyleCWaitBg);
        // IE6 does has problems with 100% height so is better a huge size
        // pageBackground.setSize("100%", "100%");
        // pageBackground.setSize("100%", "99999px");
        RootPanel.get().add(pageBackground, 0, 0);

        waitDlg.setStyleName(GWTCWait.StyleCWait);
        waitDlg.addStyleName(GWTCWait.StyleCWaitDlg);
        contentTable.setStyleName(GWTCWait.StyleCWaitTable);
        contentTable.getCellFormatter().addStyleName(0, 0, GWTCWait.StyleCWaitMsgCell);
        contentTable.setWidget(0, 0, txt);

        contentTable.getCellFormatter().addStyleName(1, 0, GWTCWait.StyleCWaitImgCell);
        contentTable.setWidget(1, 0, img);
        img.addStyleName(GWTCWait.StyleCWaitImg);

        waitDlg.setWidget(contentTable);
        waitDlg.center();
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
        waitDlg.show();
        pageBackground.setVisible(true);
        contentTable.setVisible(true);
        center();
    }
    

    /**
     * Hide the wait dialog
     */
    public void hide() {
        waitDlg.hide();
        contentTable.setVisible(false);
        pageBackground.setVisible(false);
    }
    
    public void center() {
        // Maximize background 
    	GWTCHelper.maximizeWidget(pageBackground);
        // Center the dialog
    	waitDlg.center();
        //GWTCHelper.centerPopupPanel(waitDlg);
    }

}
