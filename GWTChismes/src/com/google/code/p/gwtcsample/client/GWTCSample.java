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

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.code.p.gwtchismes.client.GWTCPrint;
import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.code.p.gwtchismes.client.GWTCSimpleBox;
import com.google.code.p.gwtchismes.client.GWTCTabPanel;
import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.*;

/**
 * @author Manuel Carrasco Moñino
 *         <h3>Class description</h3>
 *         Examples for learning the usage of the GWTChismes library
 */
public class GWTCSample implements EntryPoint {

  private static final String STYLE_SAMPLE_CONTAINER = "sampleContainer";

private HashMap intervalStrs = new HashMap();

  private final FlexTable grid = new FlexTable();
  private final GWTCSampleI18n i18n = (GWTCSampleI18n)GWT.create(GWTCSampleI18n.class);
  
  private final GWTCAlert alert = new GWTCAlert();
  private final GWTCWait wait = new GWTCWait();
  
  GWTCSample() {
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
      
      alert.setText(i18n.hello_message());
      wait.setMessage("Please wait ...");
  }

  /**
   * The entry point method, called automatically by loading a module that declares an implementing class as an entry point.
   */
  public void onModuleLoad() {
    GWTCTabPanel tp = new GWTCTabPanel();
    
    GWTCBox p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
    testDatePicker(p1);
    tp.add(p1, "Date Picker");
    
    p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
    testIntervalSelector(p1);
    tp.add(p1, "Interval Selector");

    p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
    testButtons(p1);
    tp.add(p1, "Buttons");

    p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
    testProgressBar(p1);
    tp.add(p1, "Progress Bar");

    p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
    testBigBox(p1);
    tp.add(p1, "Rounded Box");

        
    tp.selectTab(0);  
    RootPanel.get().add(tp);
  }
  
  
  public void testIntervalSelector(GWTCBox box) {
      // Create a layout1 interval-selector and set the locale in english
      GWTCIntervalSelector interval1 = new GWTCIntervalSelector(1);
      interval1.setLocale(intervalStrs);
      
      // Create a layout2 interval-selector and set the locale in english
      GWTCIntervalSelector interval2 = new GWTCIntervalSelector(2);
      interval2.setLocale(intervalStrs);
      interval2.disableYearButtons();

      // Create a layout3 interval-selector and set the locale in spanish
      GWTCIntervalSelector interval3 = new GWTCIntervalSelector(3);
      interval3.setLocale(intervalStrs);
      
      // Create a layout4 interval-selector and set the locale in spanish
      GWTCIntervalSelector interval4 = new GWTCIntervalSelector(4);
      interval4.setLocale(intervalStrs);

      // Create a layout5 interval-selector and set the locale in spanish
      GWTCIntervalSelector interval5 = new GWTCIntervalSelector(5);
      interval5.setLocale(intervalStrs);

      // Create a layout6 interval-selector and set the locale in spanish
      GWTCIntervalSelector interval6 = new GWTCIntervalSelector(6);
      interval6.setLocale(intervalStrs);
      

      FlexTable grid = new FlexTable();
      grid.addStyleName("intervalTable");
      grid.setText(0, 0, "Layout 1");
      grid.setText(0, 1, "Layout 2");
      grid.setWidget(1,0,interval1);
      grid.setWidget(1,1,interval2);
      grid.setText(2, 0, "Layout 3");
      grid.setText(2, 1, "Layout 4");
      grid.setWidget(3,0,interval3);
      grid.setWidget(3,1,interval4);
      grid.setText(4, 0, "Layout 5");
      grid.setText(4, 1, "Layout 6");
      grid.setWidget(5,0,interval5);
      grid.setWidget(5,1,interval6);
      
      box.setTitle(i18n.title_intervals_box());
      box.add(grid);
  }
  
  public void testDatePicker(GWTCBox box) {
      // Create a date-picker without the close button, and with the help button disabled
      final GWTCDatePicker dPicker1 = new GWTCDatePicker(false);
      dPicker1.disableCloseButton();
      dPicker1.disableYearButtons();
      dPicker1.setHelp(null);
      dPicker1.setMinimalDate(GWTCDatePicker.increaseDate(new Date(), -365));
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

      box.setTitle(i18n.title_pickers_box());
      box.add(dPicker1, DockPanel.WEST);
      box.add(dPicker2, DockPanel.EAST);
      
  }

  public void testButtons(Panel box) {
      
      // Create the button that shows the wait dialog when is clicked by the user
      GWTCButton waitButton = new GWTCButton(i18n.button_wait());
      waitButton.setType(GWTCButton.BUTTON_TYPE_0);
      waitButton.addClickListener(new ClickListener() {
        public void onClick(Widget sender) {
          wait.show(5);
        }
      });

      // Create the button that shows the alert dialog when is clicked by the user
      GWTCButton alertButton = new GWTCButton(GWTCButton.BUTTON_TYPE_1, "");
      alertButton.addStyleName("SampleButton");
      alertButton.setText(i18n.button_alert());
      alertButton.setType(GWTCButton.BUTTON_TYPE_1);
      alertButton.addClickListener(new ClickListener() {
        public void onClick(Widget sender) {
          alert.show();
        }
      });

      // Create a sample disabled GWTCButton
      GWTCButton disabledButton = new GWTCButton(i18n.button_disabled());
      alertButton.setType(GWTCButton.BUTTON_TYPE_2);
      disabledButton.setEnabled(false);
      
      // Create a new GWTCPrint Button
      GWTCPrint printButton = new GWTCPrint(i18n.button_print());
      
      box.setTitle(i18n.title_buttons_box());
      box.add(waitButton);
      box.add(alertButton);
      box.add(disabledButton);
      box.add(disabledButton);
      box.add(printButton);
  }
  
  public void testProgressBar(GWTCBox box) {
      class pTimer extends Timer {
          int done = 0;
          int total = 400;
          GWTCProgress prgBar;
          boolean doLoop;
          public pTimer(GWTCProgress p, boolean l) {
              prgBar = p;
              doLoop = l;
          }
          public void run() {
              if (done == 0 && doLoop == false) {
                  prgBar.show();
              }
              if (done >= total ) {
                  done = 0;
                  if  (doLoop == false) {
                      cancel();
                      prgBar.hide();
                  }
              }
              prgBar.setProgress(done, total);
              done += 15;
          }
      }

      // Create a progress bar that is looping for ever
      final GWTCProgress prgBar1 = new GWTCProgress(20, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_LEFT_TEXT | GWTCProgress.SHOW_NUMBERS);
      prgBar1.setText("gwt-file.jar");
      prgBar1.addStyleName("gwtcu-thinBar");
      final Timer t2 = new pTimer(prgBar1, true);
      t2.scheduleRepeating(200);

      // Create a progress bar and a launcher button
      final GWTCProgress prgBar2 = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS | GWTCProgress.SHOW_AS_DIALOG);
      prgBar2.setText(i18n.progress_title());
      prgBar2.setTotalMessage(i18n.progress_total());
      prgBar2.setPercentMessage(i18n.progress_percent());
      prgBar2.setHoursMessage(i18n.progress_hours());
      prgBar2.setMinutesMessage(i18n.progress_minutes());
      prgBar2.setSecondsMessage(i18n.progress_seconds());
      final Timer t = new pTimer(prgBar2, false);

      final GWTCButton pButton = new GWTCButton(i18n.button_progress(), new ClickListener() {
            public void onClick(Widget sender) {
                t2.cancel();
                prgBar2.show();
                t.scheduleRepeating(200);
            }
        });
      
      box.setTitle("TODO: i18n ProgressBars");
      box.add(prgBar1);
      box.add(pButton);

  }

  public void testProgressWithLeftText() {
  }

  public void testProgressDialog() {
      final GWTCProgress progressBar = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS | GWTCProgress.SHOW_AS_DIALOG);
      progressBar.setText(i18n.progress_title());
      progressBar.setTotalMessage(i18n.progress_total());
      progressBar.setPercentMessage(i18n.progress_percent());
      progressBar.setHoursMessage(i18n.progress_hours());
      progressBar.setMinutesMessage(i18n.progress_minutes());
      progressBar.setSecondsMessage(i18n.progress_seconds());
      progressBar.setProgress(55, 105);
      progressBar.show();
      RootPanel.get().add(progressBar);
      final Timer t = new Timer() {
          int done = 0;
          int total = 400;

          public void run() {
              if (done >= total) {
                  cancel();
                  progressBar.hide();
                  done = 0;
              }
              System.out.println(done + " " + total);
              progressBar.setProgress(done, total);
              done += 15;
          }
      };
      t.scheduleRepeating(200);
  }

  String  styles[] = {GWTCBox.StyleFlat, GWTCBox.StyleBlue, GWTCBox.StyleGrey};
  GWTCBox bigBox = new GWTCBox();
  public void testBigBox(GWTCBox box) {
      GWTCButton b = new GWTCButton("Change Style", new ClickListener() {
          int t = 0;
        public void onClick(Widget sender) {
            for(int i=0; i<3; i++) {
                bigBox.removeStyleName(styles[i]);
            }
            t = t >=2 ? 0 : t+1;
            bigBox.setStyleName(styles[0]);
            bigBox.addStyleName(styles[t]);
        }
      });
      for(int i=0; i<40; i++) {
          bigBox.add(new Label("This is the line " + i));
      }
      box.add(b);
      box.add(bigBox);
  }
  
  public void testTabPanel() {
      GWTCTabPanel tp = new GWTCTabPanel();
      tp.add(new Label("aaa"), "Tab1");
      tp.add(new Label("aaa"), "Tab2");
      tp.selectTab(0);
      RootPanel.get().add(tp);
  }
  public void testDecoratorPanel() {
      Panel pp = new DecoratorPanel();
      pp.add(new Label(pp.getClass().getName()));
      RootPanel.get().add(pp);
      pp.setStyleName(GWTCBox.StyleFlat);
    }

    public void testGWTCBox() {
        for (String style : Arrays.asList(null, GWTCBox.StyleBlue, GWTCBox.StyleGrey) ) {
            GWTCBox pp = new GWTCBox(style);
            pp.setTitle("Title");
            pp.setText("Content");
            pp.add(new Label(pp.getClass().getName()));
            RootPanel.get().add(pp);
        }
    }

    public void testGWTCSympleBox() {
        GWTCSimpleBox box = new GWTCSimpleBox();
        Label b1 = new Label("B1");
        box.add(b1, DockPanel.NORTH);
        Label b2 = new Label("B1");
        box.add(b2, DockPanel.NORTH);
        RootPanel.get().add(box);
    }
    
    public void testPopupDatePicker() {
        GWTCDatePicker p = new GWTCDatePicker(true);
        p.show(null);
    }

    public void testIntervalSelectorLayout(int layout) {
        GWTCIntervalSelector i = new GWTCIntervalSelector(layout);
        RootPanel.get().add(i);
    }
    
  
  
}
