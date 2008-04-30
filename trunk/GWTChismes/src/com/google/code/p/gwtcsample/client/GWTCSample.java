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

import java.util.Date;
import java.util.HashMap;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.code.p.gwtchismes.client.GWTCPrint;
import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco Moñino
 *         <h3>Class description</h3>
 *         Examples for learning the usage of the GWTChismes library
 */
public class GWTCSample implements EntryPoint {
  private String[] days_en = new String[] { "Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday", "Saturday" };
  private String[] months_en = new String[] { "January", "February", "March",
      "April", "May", "June", "July", "August", "September", "October",
      "November", "December" };
  private String[] days_es = new String[] { "Domingo", "Lunes", "Martes",
      "Miércoles", "Jueves", "Viernes", "Sábado" };
  private String[] months_es = new String[] { "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
      "Noviembre", "Diciembre" };

  private HashMap strs_en = new HashMap();
  private HashMap strs_es = new HashMap();

  private final FlexTable grid = new FlexTable();

  /**
   * The entry point method, called automatically by loading a module that declares an implementing class as an entry point.
   */
  public void onModuleLoad() {
    /*
    final GWTCDatePicker pic = new GWTCDatePicker(GWTCDatePicker.CONFIG_BORDERS);
    pic.setMinimalDate(GWTCDatePicker.increaseYear(new Date(), -30));
    pic.setMaximalDate(GWTCDatePicker.increaseYear(new Date(), 30));
    final Label l = new Label();
    final TextBox a = new TextBox();
    GWTCButton b = new GWTCButton("Click");
    RootPanel.get().add(a);
    RootPanel.get().add(b);
    RootPanel.get().add(l);
    RootPanel.get().add(pic);
    b.addClickListener(new ClickListener(){
      public void onClick(Widget sender) {
        Date dd = GWTCDatePicker.increaseDate(pic.getSelectedDate(), Integer.parseInt(a.getText()));
        pic.setSelectedDate(dd);
        l.setText(pic.getSelectedDateStr("yyyy MM dd") + " " + pic.getSelectedDate().toString());
      }
    });
    
    if(true) return;
    */
    
    // Create a GWTCWait widget
    final GWTCWait wait = new GWTCWait();
    wait.setMessage("Please wait ...");
    wait.show(0);

    // Configure internationalized strings for english
    strs_en.put("format.date", "MMM  dd, yyyy");
    strs_en.put("format.day", "(ddd.)");
    strs_en.put("key.checkin", "Check-in:");
    strs_en.put("key.checkout", "Check-out:");
    strs_en.put("key.nights", "Nights");
    strs_en.put("key.interval", "Number of nights:");
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
    strs_es
        .put(
            "key.calendar.help",
            "Calendar-Picker es uno de los componentes de la libreria GWTChismes.\n"
                + "(c) Manuel Carrasco 2007\nhttp://code.google.com/p/gwtchismes\n\n"
                + "Pulsa sobre los botones de arriba para moverte por las distintas fechas permitidas\n"
                + "finalmente pulsa sobre la fecha deseada.");

    // Create the button that shows the wait dialog when is clicked by the user
    Button waitButton = new GWTCButton(
        "GWTCWait: click here to view wait dialog during 5 seconds");
    waitButton.addClickListener(new ClickListener() {
      public void onClick(Widget sender) {
        wait.show(5);
      }
    });

    // Create a GWTAlert widget
    final GWTCAlert alert = new GWTCAlert();
    alert.setText("Hello, this is an alert message");
    alert.hide();

    // Create the button that shows the alert dialog when is clicked by the user
    GWTCButton alertButton = new GWTCButton();
    alertButton.addStyleName("SampleButton");
    alertButton.setText("GWTCAlert: click here to view an alert dialog");
    alertButton.addClickListener(new ClickListener() {
      public void onClick(Widget sender) {
        alert.show();
      }
    });

    // Create a sample disabled GWTCButton
    GWTCButton disabledButton = new GWTCButton(
        "GWTCButton: This is a disabled button");
    disabledButton.setEnabled(false);

    // Create a new GWTCPrint Button
    GWTCPrint printButton = new GWTCPrint(
        "GWTCPrint: click to send this page to the printer");

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
    picker_es.setHelp((String) strs_es.get("key.calendar.help"));
    picker_es.addChangeListener(new ChangeListener() {
      public void onChange(Widget sender) {
        alert.alert(picker_es.getSelectedDateStr("dddd,  dd de MMMM de yyyy"));
      }
    });
    picker_es.drawCalendar();

    // Create a default date-picker and a launcher button
    final GWTCDatePicker dPicker = new GWTCDatePicker(true);
    dPicker.addChangeListener(new ChangeListener() {
      public void onChange(Widget widget) {
        alert.alert(dPicker.getSelectedDateStr("dd/MMM/yyyy"));
      }
    });
    final GWTCButton dButton = new GWTCButton(
        "GWTCDatePicker: click to show a centered DatePicker");
    dButton.addClickListener(new ClickListener() {
      public void onClick(Widget sender) {
        dPicker.show(null);
      }
    });

    // Create a progress bar and a launcher button
    final GWTCProgress progressBar = new GWTCProgress(40,
        GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT
            | GWTCProgress.SHOW_NUMBERS | GWTCProgress.SHOW_AS_DIALOG);
    progressBar.setTotalMessage("{0}% {1}/{2} KB. [{3} KB/s]");
    progressBar.setText("In process, please wait ...");
    final Timer t = new Timer() {
      int done = 0;
      int total = 400;

      public void run() {
        if (done >= total) {
          cancel();
          progressBar.hide();
          done = 0;
        }
        progressBar.setProgress(done, total);
        done += 15;
      }
    };

    final GWTCButton pButton = new GWTCButton(
        "GWTCProgress: click to show a progress dialog", new ClickListener() {
          public void onClick(Widget sender) {
            progressBar.show();
            t.scheduleRepeating(200);
          }
        });

    GWTCBox box1 = new GWTCBox();
    box1.setTitle("Diferent layouts for the GWTCIntervalSelector widget");
    box1.add(interval1);
    box1.add(interval2);
    box1.add(interval3);

    GWTCBox box2 = new GWTCBox();
    box2
        .setTitle("Examples using the GWTCButton. Note that the css class is changed when the mouse is over them  (this is a workaround for Internet Explorer 6).");
    box2.add(waitButton);
    box2.add(alertButton);
    box2.add(disabledButton);
    box2.add(disabledButton);
    box2.add(printButton);
    box2.add(dButton);
    box2.add(pButton);
    //box2.setStyleName(GWTCBox.STYLE_BLUE);

    GWTCBox box3 = new GWTCBox();
    box3
        .setTitle("These are two GWTCCalendarPicker configured with diferent restrictions, languages and buttons");
    box3.add(picker_en, DockPanel.WEST);
    box3.add(picker_es, DockPanel.EAST);

    // Distribute the widgets into a grid
    grid.setStyleName("GWTCSample");

    int row = 0;
    grid.setWidget(++row, 0, box1);
    grid.getFlexCellFormatter().setColSpan(row, 0, 2);
    grid.setWidget(++row, 0, box2);
    grid.getFlexCellFormatter().setColSpan(row, 0, 2);
    grid.setWidget(++row, 0, box3);
    grid.getFlexCellFormatter().setColSpan(row, 0, 2);

    // Put the grid into the rootpanel
    RootPanel.get().add(grid);

    wait.hide();
  }
}
