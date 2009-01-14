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
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco Moñino
 *         <h3>Class description</h3>
 *         Examples for learning the usage of the GWTChismes library
 */
public class GWTCSample implements EntryPoint {

  private static final String STYLE_SAMPLE_CONTAINER = "sampleContainer";

  private HashMap intervalStrs = new HashMap();
  private HashMap pickStrs = new HashMap();
  private HashMap pickTitStrs = new HashMap();

  private final GWTCSampleI18n i18n = (GWTCSampleI18n)GWT.create(GWTCSampleI18n.class);
  
  private final GWTCAlert alert = new GWTCAlert();
  private final GWTCAlert decorAlert = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE);
  private final GWTCWait wait = new GWTCWait();
  
  GWTCSample() {
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

      pickTitStrs.put("key.next.month.title", i18n.key_next_month_title());
      pickTitStrs.put("key.prev.month.title", i18n.key_prev_month_title());
      pickTitStrs.put("key.today.title", i18n.key_today_title());
      pickTitStrs.put("key.next.year.title", i18n.key_next_year_title());
      pickTitStrs.put("key.prev.year.title", i18n.key_prev_year_title());
      pickTitStrs.put("key.help.title", i18n.key_help_title());
      pickTitStrs.put("key.close.title", i18n.key_close_title());
      
      pickStrs.put("key.next.month", i18n.key_next_month());
      pickStrs.put("key.prev.month", i18n.key_prev_month());
      pickStrs.put("key.today", i18n.key_today());
      pickStrs.put("key.next.year", i18n.key_next_year());
      pickStrs.put("key.prev.year", i18n.key_prev_year());
      pickStrs.put("key.help", i18n.key_help());
      pickStrs.put("key.close", i18n.key_close());
      
      pickStrs.putAll(pickTitStrs);
      
      alert.setText(i18n.hello_message());
      wait.setMessage(i18n.wait_message());
  }

  public void onModuleLoad() {

        GWTCBox p1;
        GWTCTabPanel tp = new GWTCTabPanel();

        p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
        testButtons(p1);
        tp.add(p1, "Buttons");

        p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
        testDatePicker(p1);
        RootPanel.get().add(p1);
        tp.add(p1, "Date Picker");

        p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
        testIntervalSelector(p1);
        tp.add(p1, "Interval Selector");

        p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
        testProgressBar(p1);
        tp.add(p1, "Progress Bar");

        p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
        testBox(p1);
        testBigBox(p1);
        tp.add(p1, "Rounded Box");

        tp.selectTab(0);
        RootPanel.get().add(tp);
    }
  

  public Panel createPanelWithDescription(Widget widget, String description) {
      Panel panel = new HorizontalPanel();
      panel.addStyleName("samplePickerPanel");

      Label label = new Label(description);
      label.setStyleName("pickerLabel");
      panel.add(label);
      
      panel.add(widget);
      
      return panel;
  }
  public Widget createPickerExample(HashMap strs, String caption, String style, int options) {

      final GWTCDatePicker picker = new GWTCDatePicker(options);
      picker.setText(caption);
      picker.setI18nMessages(strs);
      if (style != null)
             picker.addStyleName(style);

      picker.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                alert.alert(((GWTCDatePicker) sender).getSelectedDateStr("MMMM dd, yyyy (dddd)"));
            }
      });

      if ( (options & GWTCDatePicker.CONFIG_DIALOG) == GWTCDatePicker.CONFIG_DIALOG ) {
          final GWTCButton button = new GWTCButton(i18n.button_picker());
          button.setImageSrc("images/gwtc-calendar.gif");
          button.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
              picker.show(button);
            }
          });
          return button;
      } else {
          return picker;
      }
  }
  
  public void testDatePicker(GWTCBox box) {
      int options;
      String descr;
      Widget widget;

      options = GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_ROUNDED_BOX | GWTCDatePicker.CONFIG_BACKGROUND;
      descr = "Modal picker in a rounded box, with rounded buttons, background,  and all options enabled";
      widget = createPickerExample(pickTitStrs, null, null, options);
      box.add(createPanelWithDescription(widget, descr));

      options = GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_NO_CLOSE_BUTTON | GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON| GWTCDatePicker.CONFIG_BACKGROUND | GWTCDatePicker.CONFIG_LAYOUT_2 |GWTCDatePicker.CONFIG_FLAT_BUTTONS;
      descr = "Modal layout 2 picker in a squared box, with flat buttons, background, caption, and disabled years and help buttons";
      widget = createPickerExample(pickTitStrs, "Please, select a date", null, options);
      box.add(createPanelWithDescription(widget, descr));

      options = GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON | GWTCDatePicker.CONFIG_FLAT_BUTTONS |  GWTCDatePicker.CONFIG_LAYOUT_3 | GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_BACKGROUND;
      descr = "Modal customized layout 3 picker, with internationalized buttons, background, and disabled years and help buttons";
      widget = createPickerExample(pickStrs,  null, "GWTCDatePicker-custom", options);
      box.add(createPanelWithDescription(widget, descr));
      
      options = GWTCDatePicker.CONFIG_DEFAULT;
      descr = "Default Layout, rounded buttons and all options enabled";
      widget = createPickerExample(pickTitStrs, null, null, options);
      box.add(createPanelWithDescription(widget, descr));
      
      options = GWTCDatePicker.CONFIG_NO_YEAR_BUTTON | GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_LAYOUT_2 | GWTCDatePicker.CONFIG_STANDARD_BUTTONS;
      descr = "Layout 2 with standard buttons, disabled years and disabled help";
      widget = createPickerExample(pickTitStrs, null, null, options);
      box.add(createPanelWithDescription(widget, descr));

      options = GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON | GWTCDatePicker.CONFIG_FLAT_BUTTONS |  GWTCDatePicker.CONFIG_LAYOUT_3;
      descr = "Layout 3 with link buttons, help and year buttons disabled and a customized style";
      widget = createPickerExample(pickStrs, null, "GWTCDatePicker-custom", options);
      box.add(createPanelWithDescription(widget, descr));
  }
  
  public void testIntervalSelector(GWTCBox box) {

        HashMap strs = new HashMap();
        strs.putAll(intervalStrs);
        strs.putAll(pickTitStrs);
        
        for(int i: new int[]{1,2,3,4,5,6} ) {
            GWTCIntervalSelector interval = new GWTCIntervalSelector(i);
            interval.setI18nMessages(strs);
            box.add(createPanelWithDescription(interval, "Layout " + i), DockPanel.SOUTH);
        }

        final GWTCIntervalSelector intervalCustomized = new CustomIntervalSelector(0);
        intervalCustomized.setDateFormat(DateTimeFormat.getShortDateFormat().getPattern().replace("yy", "yyyy"));
        intervalCustomized.setMaxdays(31);
        strs.putAll(pickStrs);
        intervalCustomized.setI18nMessages(strs);
        final Button customizedButton = new GWTCButton("Click",new ClickListener() {
            public void onClick(Widget sender) {
                String ci = GWTCDatePicker.formatDate(DateTimeFormat.getFullDateFormat().getPattern(), intervalCustomized.getInitDate());
                String co = GWTCDatePicker.formatDate(DateTimeFormat.getFullDateFormat().getPattern(), intervalCustomized.getEndDate());
                alert.alert("From: " + ci + "\nTo: " + co + "\n" + intervalCustomized.getNights() + " nights.");
            }
        });
        intervalCustomized.getGrid().setWidget(1,3, customizedButton);
        customizedButton.setVisible(false);
        intervalCustomized.addChangeListener(new ChangeListener(){
            public void onChange(Widget sender) {
                customizedButton.setVisible(true);
            }
        });
        box.add(createPanelWithDescription(intervalCustomized, "Customized layout"), DockPanel.NORTH);
        
    }
  
  public void testButtons(Panel box) {
      GWTCButton waitButton = new GWTCButton(GWTCButton.BUTTON_TYPE_0, i18n.button_picker());
      waitButton.addClickListener(new ClickListener() {
        public void onClick(Widget sender) {
          wait.show(5);
        }
      });
      box.add(createPanelWithDescription(waitButton, "GWTCButton type 0, it renders a default system button and add on-mouse-over events. Click on it for seeing modal GWTCWait"));

      GWTCButton alertButton = new GWTCButton(GWTCButton.BUTTON_TYPE_1, i18n.button_alert());
      alertButton.addClickListener(new ClickListener() {
        public void onClick(Widget sender) {
          alert.alert(i18n.button_alert());
        }
      });
      box.add(createPanelWithDescription(alertButton, "GWTCButton type 1. Click on it for seeing a modal alert"));

      GWTCButton alertButton2 = new GWTCButton(i18n.button_alert());
      alertButton2.setImageSrc("images/button/warning.gif");
      alertButton2.addClickListener(new ClickListener() {
        public void onClick(Widget sender) {
          decorAlert.alert(i18n.button_alert());
        }
      });
      box.add(createPanelWithDescription(alertButton2, "GWTCButton type 2. Click on it for seeing a modal and decorated alert"));
      
      
      GWTCButton disabledButton = new GWTCButton(i18n.button_disabled());
      disabledButton.setEnabled(false);
      disabledButton.setImageSrc("images/button/dialog-cancel.gif");
      box.add(createPanelWithDescription(disabledButton, "GWTCButton type 2 disabled."));
      
      // Create a new GWTCPrint Button
      GWTCPrint printButton = new GWTCPrint(i18n.button_print());
      box.add(createPanelWithDescription(printButton, "GWTCPrint button. It sends the page to the printer. Note that the button is hidden while the page is being printed"));
      
      box.setTitle(i18n.title_buttons_box());
      
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

      final GWTCProgress prgBar1 = new GWTCProgress(20, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_LEFT_TEXT | GWTCProgress.SHOW_NUMBERS);
      prgBar1.setText("gwt-file.jar");
      prgBar1.addStyleName("gwtcu-thinBar");
      final Timer t1 = new pTimer(prgBar1, true);
      t1.scheduleRepeating(500);
      

      // Create a progress bar and a launcher button
      final GWTCProgress prgBar2 = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS | GWTCProgress.SHOW_AS_DIALOG);
      prgBar2.setText(i18n.progress_title());
      prgBar2.setTotalMessage(i18n.progress_total());
      prgBar2.setPercentMessage(i18n.progress_percent());
      prgBar2.setHoursMessage(i18n.progress_hours());
      prgBar2.setMinutesMessage(i18n.progress_minutes());
      prgBar2.setSecondsMessage(i18n.progress_seconds());
      final Timer t2 = new pTimer(prgBar2, false);

      final GWTCButton pButton = new GWTCButton(i18n.button_progress(), new ClickListener() {
            public void onClick(Widget sender) {
                prgBar2.show();
                t2.scheduleRepeating(200);
            }
        });
      
      box.setTitle("TODO: i18n ProgressBars");
      box.add(prgBar1, DockPanel.WEST);
      box.add(pButton, DockPanel.WEST);

  }


  String  styles[] = {GWTCBox.DEFAULT_STYLE, GWTCBox.STYLE_BLUE, GWTCBox.STYLE_GREY};
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
      box.add(b, DockPanel.NORTH);
      box.add(bigBox, DockPanel.NORTH);
  }
  
  public void testBox(GWTCBox box) {
      
      GWTCBox mb = new GWTCBox(GWTCBox.STYLE_BLUE);
      mb.addStyleName("sampleBox");
      mb.setTitle("setTitle: Title is placed on the top");
      mb.setText("setText: Text is placed bellow the title");
      mb.add(new Label("NORTH 1"), DockPanel.NORTH);
      mb.add(new Label("SOUTH 1"), DockPanel.SOUTH);
      mb.add(new Label("WEST 1"), DockPanel.WEST);
      mb.add(new Label("EAST 1"), DockPanel.EAST);
      mb.add(new Label("CENTER"), DockPanel.CENTER);
      mb.add(new Label("NORTH 2"), DockPanel.NORTH);
      mb.add(new Label("NORTH 3"), DockPanel.NORTH);
      mb.add(new Label("SOUTH 2"), DockPanel.SOUTH);
      mb.add(new Label("SOUTH 3"), DockPanel.SOUTH);
      mb.add(new Label("WEST 2"), DockPanel.WEST);
      mb.add(new Label("WEST 3"), DockPanel.WEST);
      mb.add(new Label("EAST 2"), DockPanel.EAST);
      mb.add(new Label("EAST 3"), DockPanel.EAST);
      box.add(mb, DockPanel.WEST);
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
      pp.setStyleName(GWTCBox.DEFAULT_STYLE);
    }

    public void testGWTCBox() {
        for (String style : Arrays.asList(null, GWTCBox.STYLE_BLUE, GWTCBox.STYLE_GREY) ) {
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
