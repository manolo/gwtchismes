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
import com.google.gwt.core.client.GWT;

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

  private HashMap intervalStrs = new HashMap();

  private final FlexTable grid = new FlexTable();
  private final GWTCSampleI18n i18n = (GWTCSampleI18n)GWT.create(GWTCSampleI18n.class);

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

    // Configure interval locale
    intervalStrs.put("format.date", "MMM  dd, yyyy");
    intervalStrs.put("format.day", "(ddd.)");
    intervalStrs.put("key.checkin", i18n.key_checkin());
    intervalStrs.put("key.checkout", i18n.key_checkout());
    intervalStrs.put("key.nights", i18n.key_nights());
    intervalStrs.put("key.interval", i18n.key_interval());
    intervalStrs.put("key.change", i18n.key_change());
    intervalStrs.put("key.checkin.button", i18n.key_checkin_button());
    intervalStrs.put("key.checkout.button", i18n.key_checkout_button());
    intervalStrs.put("key.calendar.checkin.title", i18n.key_calendar_checkin_title());
    intervalStrs.put("key.calendar.checkout.title", i18n.key_calendar_checkout_title());
    intervalStrs.put("key.calendar.help", i18n.key_calendar_help());
    
    // Create the button that shows the wait dialog when is clicked by the user
    Button waitButton = new GWTCButton(i18n.button_wait());
    waitButton.addClickListener(new ClickListener() {
      public void onClick(Widget sender) {
        wait.show(5);
      }
    });

    // Create a GWTAlert widget
    final GWTCAlert alert = new GWTCAlert();
    alert.setText(i18n.hello_message());
    alert.hide();

    // Create the button that shows the alert dialog when is clicked by the user
    GWTCButton alertButton = new GWTCButton();
    alertButton.addStyleName("SampleButton");
    alertButton.setText(i18n.button_alert());
    alertButton.addClickListener(new ClickListener() {
      public void onClick(Widget sender) {
        alert.show();
      }
    });

    // Create a sample disabled GWTCButton
    GWTCButton disabledButton = new GWTCButton(i18n.button_disabled());
    disabledButton.setEnabled(false);

    // Create a new GWTCPrint Button
    GWTCPrint printButton = new GWTCPrint(i18n.button_print());

    // Create a layout1 interval-selector and set the locale in english
    GWTCIntervalSelector interval1 = new GWTCIntervalSelector(1);
    interval1.setLocale(intervalStrs);

    // Create a layout2 interval-selector and set the locale in english
    GWTCIntervalSelector interval2 = new GWTCIntervalSelector(2);
    interval2.setLocale(intervalStrs);

    // Create a layout3 interval-selector and set the locale in spanish
    GWTCIntervalSelector interval3 = new GWTCIntervalSelector(3);
    interval3.setLocale(intervalStrs);
    
    // Create a layout4 interval-selector and set the locale in spanish
    GWTCIntervalSelector interval4 = new GWTCIntervalSelector(4);
    interval4.setLocale(intervalStrs);

    // Create a date-picker without the close button, and with the help button disabled
    final GWTCDatePicker dPicker1 = new GWTCDatePicker(false);
    dPicker1.disableCloseButton();
    dPicker1.disableYearButtons();
    dPicker1.setHelp(null);
    dPicker1.addChangeListener(new ChangeListener() {
      public void onChange(Widget sender) {
        alert.alert(dPicker1.getSelectedDateStr("MMMM dd, yyyy (dddd)"));
      }
    });

    // Create a date-picker with all buttons enabled 
    final GWTCDatePicker dPicker2 = new GWTCDatePicker(false);
    dPicker2.setMinimalDate(GWTCDatePicker.increaseYear(new Date(), -10));
    dPicker2.setMaximalDate(GWTCDatePicker.increaseYear(new Date(), 10));
    dPicker2.addChangeListener(new ChangeListener() {
      public void onChange(Widget sender) {
        alert.alert(dPicker2.getSelectedDateStr("dddd,  dd/MMMM/yyyy"));
      }
    });
    dPicker2.drawCalendar();

    // Create a default date-picker and a launcher button
    final GWTCDatePicker dPicker3 = new GWTCDatePicker(true);
    dPicker3.addChangeListener(new ChangeListener() {
      public void onChange(Widget widget) {
        alert.alert(dPicker3.getSelectedDateStr("dd/MMM/yyyy"));
      }
    });
    final GWTCButton dButton = new GWTCButton(i18n.button_picker());
    dButton.addClickListener(new ClickListener() {
      public void onClick(Widget sender) {
        dPicker3.show(null);
      }
    });

    // Create a progress bar and a launcher button
    final GWTCProgress progressBar = new GWTCProgress(40,
        GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT
            | GWTCProgress.SHOW_NUMBERS | GWTCProgress.SHOW_AS_DIALOG);
    progressBar.setText(i18n.progress_title());
    progressBar.setTotalMessage(i18n.progress_total());
    progressBar.setPercentMessage(i18n.progress_percent());
    progressBar.setHoursMessage(i18n.progress_hours());
    progressBar.setMinutesMessage(i18n.progress_minutes());
    progressBar.setSecondsMessage(i18n.progress_seconds());
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

    final GWTCButton pButton = new GWTCButton(i18n.button_progress(), new ClickListener() {
          public void onClick(Widget sender) {
            progressBar.show();
            t.scheduleRepeating(200);
          }
        });

    GWTCBox box1 = new GWTCBox();
    box1.setTitle(i18n.title_intervals_box());
    box1.add(interval1);
    box1.add(interval2);
    box1.add(interval3);
    box1.add(interval4);

    GWTCBox box2 = new GWTCBox();
    box2.setTitle(i18n.title_buttons_box());
    box2.add(waitButton);
    box2.add(alertButton);
    box2.add(disabledButton);
    box2.add(disabledButton);
    box2.add(printButton);
    box2.add(dButton);
    box2.add(pButton);
    //box2.setStyleName(GWTCBox.STYLE_BLUE);

    GWTCBox box3 = new GWTCBox();
    box3.setTitle(i18n.title_pickers_box());
    box3.add(dPicker1, DockPanel.WEST);
    box3.add(dPicker2, DockPanel.EAST);

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
