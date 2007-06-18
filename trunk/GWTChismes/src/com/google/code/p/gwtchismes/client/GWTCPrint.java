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
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco
 * <h3>Class description</h3>
 * <p>
 * This widget is a button (com.google.code.p.gwtchismes.client.GWTCButton) to print the current page.
 * When the user click the button the browser opens the print dialog 
 * and the print button is hidden for 5 seconds
 * </p>
 *  
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCPrint { }</li>
 * </ul>
 * 
 */
public class GWTCPrint extends Composite {
    private String styleName = "GWTCPrint";
    private GWTCButton printButton = new GWTCButton("Print");
    public GWTCPrint() {
        initPrintWidget();
    }
    public GWTCPrint(String t) {
        initPrintWidget();
        printButton.setText(t);
    }
    public void initPrintWidget() {
        printButton.addStyleName(styleName);
        printButton.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                print();
            }
        });
        initWidget(printButton);
    }
    public void addStyleName(String s) {
        printButton.addStyleName(s);
    }
    public void setText(String s) {
        printButton.setText(s);
    }
    public void print() {
        printButton.setVisible(false);
        printWindow();
        Timer t = new Timer() {
            public void run() {
                printButton.setVisible(true);
            }
        };
        t.schedule(5 * 1000);
    }
    
    public static native void printWindow()
    /*-{
     window.print();
     }-*/;
}
