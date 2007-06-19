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

package com.google.code.p.gwtcsample.client;

import java.util.HashMap;
import java.util.Date;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCPrint;
import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.Window;

/**
 * @author Manuel Carrasco Moñino
 *         <h3>Class description</h3>
 *         
 * Examples to teach about how to use the GWTChismes library
 * 
 */
public class GWTCSample implements EntryPoint {
    private String[] days_en = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
    private String[] months_en = new String[] { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };
    private String[] days_es = new String[] { "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" };
    private String[] months_es = new String[] { "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" };

    private HashMap strs_en = new HashMap();
    private HashMap strs_es = new HashMap();

    private final FlexTable grid = new FlexTable();
    
    
    /**
     * The entry point method, called automatically by loading a module that
     * declares an implementing class as an entry point.
     */
    public void onModuleLoad() {
        
        // Configure internationalized strings for english
        strs_en.put("format.date", "MMM  dd, yyyy");
        strs_en.put("format.day", "(ddd.)");
        strs_en.put("key.checkin", "Checkin");
        strs_en.put("key.checkout", "Checkout");
        strs_en.put("key.nights", "Nights");
        strs_en.put("key.interval", "Interval");
        strs_en.put("key.change", "Change");
        strs_en.put("key.checkin.button", "...");
        strs_en.put("key.checkout.button", "...");
        strs_en.put("key.calendar.checkin.title", "Select checkin date");
        strs_en.put("key.calendar.checkout.title", "Select checkout date");
        
        
        // Configure internationalized string for spanish
        strs_es.put("format.date", "MMM  dd, yyyy");
        strs_es.put("format.day", "(ddd.)");
        strs_es.put("key.checkin", "Fecha de entrada:");
        strs_es.put("key.checkout", "Fecha de salida");
        strs_es.put("key.nights", "noches");
        strs_es.put("key.interval", "Nro. de noches:");
        strs_es.put("key.change", "Cambiar");
        strs_es.put("key.checkin.button", "...");
        strs_es.put("key.checkout.button", "...");
        strs_es.put("key.calendar.checkin.title", "Seleccione la fecha de entrada");
        strs_es.put("key.calendar.checkout.title", "Seleccione la fecha de salida");
        strs_es.put("key.calendar.help", "Calendar-Picker es uno de los componentes de la libreria GWTChismes.\n(c) Manuel Carrasco 2007\nhttp://code.google.com/p/gwtchismes\n\nPulsa sobre los botones de arriba para moverte por las distintas fechas permitidas\nfinalmente pulsa sobre la fecha deseada.");

        // Create a GWTCWait widget, and hide it
        final GWTCWait wait = new GWTCWait();
        wait.setMessage("Please wait ...");
        wait.hide();
        
        // Create the button that shows the wait dialog when is clicked by the user 
        GWTCButton waitButton = new GWTCButton("Click here view a GWTCWait during 5 seconds");
        waitButton.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                wait.show(5);
            }
        });

        // Create a GWTAlert widget
        final GWTCAlert alert = new GWTCAlert(); 
        alert.setText("Hello, you  can put here any message"); 
        alert.hide();
        
        // Create the button that shows the alert dialog when is clicked by the user 
        GWTCButton alertButton = new GWTCButton();
        alertButton.addStyleName("SampleButton");
        alertButton.setText("Click here to show GWTCAlert dialog");
        alertButton.addClickListener(new ClickListener() { 
            public void onClick(Widget sender) { 
                alert.show(); 
            } 
        }); 
        
        // Create a sample disabled GWTCButton 
        GWTCButton disabledButton = new GWTCButton("This is a disabled button");
        disabledButton.setEnabled(false);
        
        // Create a new GWTCPrint Button
        GWTCPrint printButton = new GWTCPrint("This GWTCPrint allows you to print this page");
        
        // Create a layout1 interval-selector and set the locale in english 
        GWTCIntervalSelector interval1 = new GWTCIntervalSelector(1);
        interval1.setLocale(strs_en, days_en, months_en, 0);

        // Create a layout2 interval-selector and set the locale in english 
        GWTCIntervalSelector interval2 = new GWTCIntervalSelector(2);
        interval2.setLocale(strs_en, days_en, months_en, 0);

        // Create a layout3 interval-selector and set the locale in spanish 
        GWTCIntervalSelector interval3 = new GWTCIntervalSelector(3);
        interval3.setLocale(strs_es, days_es, months_es, 1);
        
        // Create a date-picker in english without the close button, and with the help button disabled
        final GWTCDatePicker picker_en = new GWTCDatePicker(false);
        picker_en.setLocale(days_en, months_en, 0);
        picker_en.disableCloseButton();
        picker_en.setHelp(null);
        picker_en.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                alert.alert(picker_en.getSelectedDateStr("MMMM dd, yyyy (dddd)"));
            }
        });
        
        // Create a date-picker in spanish
        final GWTCDatePicker picker_es = new GWTCDatePicker(false);
        picker_es.setLocale(days_es, months_es, 1);
        picker_es.setMinimalDate(GWTCDatePicker.increaseYear(new Date(), -10));
        picker_es.setMaximalDate(GWTCDatePicker.increaseYear(new Date(), 10));
        picker_es.setHelp((String)strs_es.get("key.calendar.help"));
        picker_es.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                alert.alert(picker_es.getSelectedDateStr("dddd,  dd de MMMM de yyyy"));
            }
        });
        picker_es.drawCalendar();

        
        // Distribute the widgets into a grid
        grid.setStyleName("GWTCSample");
        
        grid.setText(0, 0, "These are examples of GWTCButton. Note that the css class is changed when the mouse is over them  (this is a workarround for Internet Explorer 6).");
        grid.getFlexCellFormatter().setColSpan(0,0,2);
        grid.getCellFormatter().addStyleName(0, 0, "InfoCell");
        
        grid.setWidget(1, 0, waitButton);
        grid.getFlexCellFormatter().setColSpan(1,0,2);
        grid.setWidget(2, 0, alertButton);
        grid.getFlexCellFormatter().setColSpan(2,0,2);
        grid.setWidget(3, 0, disabledButton);
        grid.getFlexCellFormatter().setColSpan(3,0,2);
        grid.setWidget(4, 0, printButton);
        grid.getFlexCellFormatter().setColSpan(4,0,2);
        
        grid.setText(5, 0, "These are two GWTCCalendarPicker configured with diferent restrictions, languages and buttons");
        grid.getFlexCellFormatter().setColSpan(5,0,2);
        grid.getCellFormatter().addStyleName(5, 0, "InfoCell");
        
        grid.setWidget(6, 0, picker_en);
        grid.setWidget(6, 1, picker_es);
        
        grid.setText(7, 0, "These are diferent layouts for the GWTCIntervalSelector widget");
        grid.getFlexCellFormatter().setColSpan(7,0,2);
        grid.getCellFormatter().addStyleName(7, 0, "InfoCell");
        
        
        grid.setWidget(8, 0, interval1);
        grid.getFlexCellFormatter().setColSpan(8,0,2);
        grid.setWidget(9, 0, interval2);
        grid.getFlexCellFormatter().setColSpan(9,0,2);
        grid.setWidget(10, 0, interval3);
        grid.getFlexCellFormatter().setColSpan(10,0,2);


        // Put the grid into the rootpanel
        RootPanel.get().add(grid);
    }
}
