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

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCDatePickerAbstract;
import com.google.code.p.gwtchismes.client.GWTCGlassPanel;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.code.p.gwtchismes.client.GWTCModalBox;
import com.google.code.p.gwtchismes.client.GWTCPrint;
import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker;
import com.google.code.p.gwtchismes.client.GWTCTabPanel;
import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco Moñino 
 * <h3>Class description</h3> 
 * Examples for learning the usage of the GWTChismes library
 */
public class GWTCSample implements EntryPoint {

	private static final String STYLE_SAMPLE_CONTAINER = "sampleContainer";

	private HashMap<String,String> intervalStrs = new HashMap<String,String>();
	private HashMap<String,String> pickStrs = new HashMap<String,String>();
	private HashMap<String,String> pickTitStrs = new HashMap<String,String>();

	private final GWTCSampleI18n i18n = (GWTCSampleI18n) GWT.create(GWTCSampleI18n.class);

	private final GWTCAlert alert = new GWTCAlert();
	private final GWTCAlert decorAlert = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE);
	private final GWTCWait wait = new GWTCWait();

	boolean testCode() {
		return false;
	}

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

		wait.setMessage(i18n.wait_message());
	}

	void setupLanguageLinks() {
		final Label english = new Label("English");
		final Label spanish = new Label("Spanish");
		final Label japanese = new Label("Japanese");
		final ClickHandler changeLocale = new ClickHandler() {
			public void onClick(ClickEvent event) {
				Widget sender = (Widget) event.getSource();
				if (sender == english) {
					Window.Location.assign("?locale=en");
				} else if (sender == spanish) {
					Window.Location.assign("?locale=es");
				} else if (sender == japanese) {
					Window.Location.assign("?locale=ja");
				}
			}
		};

		HorizontalPanel langPanel = new HorizontalPanel() {
			{
				setStyleName("langPanel");
				String loc = Window.Location.getParameter("locale");
				if (loc != null && !"en".equals(loc))
					add(english);
				if (!"es".equals(loc))
					add(spanish);
				if (!"ja".equals(loc))
					add(japanese);
				english.addClickHandler(changeLocale);
				spanish.addClickHandler(changeLocale);
				japanese.addClickHandler(changeLocale);

				if ("ja".equals(loc))
					alert.alert("This application has not been translated into Japanese yet.\n"
					      + "Nevertheless you can see how dates are displayed in japanese because DatePicker uses GWT DateTimeFormat");
			}
		};
		RootPanel.get().add(langPanel);
	}

	public void onModuleLoad() {
		if (testCode())
			return;

		setupLanguageLinks();

		GWTCBox p1;
		GWTCTabPanel tp = new GWTCTabPanel();

		p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
		testButtons(p1);
		tp.add(p1, i18n.tab_buttons());

		p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
		testRoundedBox(p1);
		tp.add(p1, i18n.tab_boxes());

		p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
		testChismes(p1);
		tp.add(p1, i18n.tab_modals());

		p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
		testDatePicker(p1);
		RootPanel.get().add(p1);
		tp.add(p1, i18n.tab_date());

		p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
		testIntervalSelector(p1);
		tp.add(p1, i18n.tab_interval());

		p1 = new GWTCBox(STYLE_SAMPLE_CONTAINER);
		testProgressBar(p1);
		tp.add(p1, i18n.tab_progress());

		tp.selectTab(0);

		RootPanel p = RootPanel.get("gwtchismes-sample");
		if (p == null)
			p = RootPanel.get();

		p.add(tp);

	}

	private Panel createPanelWithDescription(Widget widget, String description) {
		FlexTable panel = new FlexTable();
		panel.addStyleName("descrPanel");

		Label label = new Label(description);
		label.setStyleName("descrLabel");

		panel.setWidget(0, 0, label);
		panel.setWidget(0, 1, widget);
		panel.getCellFormatter().setWidth(0, 1, "100%");
		panel.getCellFormatter().setVerticalAlignment(0, 1, HasVerticalAlignment.ALIGN_TOP);
		widget.addStyleName("descrWidget");
		return panel;
	}

	public void testButtons(Panel box) {
		box.setTitle("GWTCButton");

		ClickHandler buttonClickHandler = new ClickHandler() {
			public void onClick(ClickEvent event) {
				alert.alert(i18n.alert_message());
			}
		};

		// Button type 0
		GWTCButton button = new GWTCButton(GWTCButton.BUTTON_TYPE_0, i18n.click_button(), buttonClickHandler);
		box.add(createPanelWithDescription(button, i18n.descr_button_0()));

		// Button type 1
		button = new GWTCButton(GWTCButton.BUTTON_TYPE_1, i18n.click_button(), buttonClickHandler);
		box.add(createPanelWithDescription(button, i18n.descr_button_1()));

		// Button with image
		button = new GWTCButton(i18n.click_button(), buttonClickHandler) {
			{
				setEnabled(false);
				setImageSrc("images/button/dialog-cancel.gif");
			}
		};
		box.add(createPanelWithDescription(button, i18n.descr_button_d()));

		// Print button
		button = new GWTCPrint(i18n.click_button());
		box.add(createPanelWithDescription(button, i18n.descr_button_p()));
	}

	public void testChismes(Panel box) {
		box.setTitle("GWTCGlassPanel, GWTCModalBox, GWTCWait & GWTCAlert");

		// GWTCGlassPanel
		final GWTCGlassPanel back = new GWTCGlassPanel();
		back.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				back.hide();
			}
		});
		GWTCButton button = new GWTCButton(GWTCButton.BUTTON_TYPE_1, i18n.click_button(), new ClickHandler() {
			public void onClick(ClickEvent envent) {
				back.show();
			}
		});
		box.add(createPanelWithDescription(button, i18n.descr_glass()));

		// GWTCModalBox
		final GWTCModalBox modal = new GWTCModalBox(GWTCModalBox.OPTION_ROUNDED_FLAT);
		modal.add(new Label(i18n.alert_message()));
		modal.setAnimationEnabled(true);
		button = new GWTCButton(GWTCButton.BUTTON_TYPE_1, i18n.click_button(), new ClickHandler() {
			public void onClick(ClickEvent event) {
				modal.center();
			}
		});
		box.add(createPanelWithDescription(button, i18n.descr_modal()));

		// GWTCWait
		button = new GWTCButton(GWTCButton.BUTTON_TYPE_1, i18n.click_button(), new ClickHandler() {
			public void onClick(ClickEvent event) {
				wait.show(5);
			}
		});
		box.add(createPanelWithDescription(button, i18n.descr_wait()));

		// GWTCAlert
		button = new GWTCButton(GWTCButton.BUTTON_TYPE_1, i18n.click_button());
		button.setImageSrc("images/button/warning.gif");
		button.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				alert.alert(i18n.alert_message());
			}
		});
		box.add(createPanelWithDescription(button, i18n.descr_alert_1()));

		// GWTCAlert in a rounded box
		button = new GWTCButton(i18n.click_button());
		button.setImageSrc("images/button/warning.gif");
		button.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				decorAlert.alert(i18n.alert_message());
			}
		});
		box.add(createPanelWithDescription(button, i18n.descr_alert_2()));

	}

	private Widget createPickerWidget(final GWTCSimpleDatePicker picker, final boolean asDialog) {
		picker.addValueChangeHandler(new ValueChangeHandler<GWTCSimpleDatePicker>() {
			public void onValueChange(ValueChangeEvent<GWTCSimpleDatePicker> event) {
				alert.alert(event.getValue().getSelectedDateStr("MMMM dd, yyyy (dddd)"));
				if (asDialog)
					picker.hide();
			}
		});

		if (asDialog) {
			final GWTCButton button = new GWTCButton(i18n.click_button());
			button.setImageSrc("images/gwtc-calendar.gif");
			button.addClickHandler(new ClickHandler() {
				public void onClick(ClickEvent event) {
					picker.show(button);
				}
			});
			return button;
		} else {
			return picker;
		}
	}

	public void testDatePicker(GWTCBox box) {
		box.setTitle("GWTCDatePicker");

		int options = GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_ROUNDED_BOX | GWTCDatePicker.CONFIG_BACKGROUND;
		GWTCDatePickerAbstract picker = new GWTCDatePicker(options);
		picker.setI18nMessages(pickTitStrs);
		Widget widget = createPickerWidget(picker, true);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_1()));

		options = GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_NO_CLOSE_BUTTON | GWTCDatePicker.CONFIG_NO_HELP_BUTTON
		      | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON | GWTCDatePicker.CONFIG_BACKGROUND | GWTCDatePicker.CONFIG_LAYOUT_2 | GWTCDatePicker.CONFIG_FLAT_BUTTONS;
		picker = new GWTCDatePicker(options);
		picker.setCaptionText("Please, select a date");
		picker.setI18nMessages(pickTitStrs);
		widget = createPickerWidget(picker, true);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_2()));

		options = GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON | GWTCDatePicker.CONFIG_FLAT_BUTTONS | GWTCDatePicker.CONFIG_LAYOUT_3
		      | GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_BACKGROUND;
		picker = new GWTCDatePicker(options);
		picker.setI18nMessages(pickStrs);
		picker.addStyleName("GWTCDatePicker-custom");
		widget = createPickerWidget(picker, true);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_3()));

		picker = new GWTCDatePicker(options, 2, "? x;p<->n");
		picker.setI18nMessages(pickStrs);
		picker.addStyleName("GWTCDatePicker-custom");
		widget = createPickerWidget(picker, true);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_4()));

		picker = new GWTCDatePickerCustom();
		widget = createPickerWidget(picker, true);
		picker.setI18nMessages(pickStrs);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_5()));

		options = GWTCDatePicker.CONFIG_DEFAULT;
		picker = new GWTCDatePicker(options);
		picker.setI18nMessages(pickTitStrs);
		widget = createPickerWidget(picker, false);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_6()));

		options = GWTCDatePicker.CONFIG_NO_YEAR_BUTTON | GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_LAYOUT_2
		      | GWTCDatePicker.CONFIG_STANDARD_BUTTONS;
		picker = new GWTCDatePicker(options);
		picker.setI18nMessages(pickTitStrs);
		widget = createPickerWidget(picker, false);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_7()));

		options = GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON | GWTCDatePicker.CONFIG_FLAT_BUTTONS | GWTCDatePicker.CONFIG_LAYOUT_3;
		picker = new GWTCDatePicker(options);
		picker.setI18nMessages(pickTitStrs);
		picker.addStyleName("GWTCDatePicker-custom");
		picker.addStyleName("ppp");
		widget = createPickerWidget(picker, false);
		box.add(createPanelWithDescription(widget, i18n.descr_picker_8()));

	}

	public void testIntervalSelector(GWTCBox box) {
		box.setTitle("GWTCIntervalSelector");

		HashMap<String,String> strs = new HashMap<String,String>();
		strs.putAll(intervalStrs);
		strs.putAll(pickTitStrs);

		for (int i : new int[] { 6, 5, 4, 3, 2, 1 }) {
			GWTCIntervalSelector interval = new GWTCIntervalSelector(i);
			interval.setI18nMessages(strs);
			box.add(createPanelWithDescription(interval, i18n.descr_interval_layout() + " " + i), DockPanel.SOUTH);
		}

		final GWTCIntervalSelector intervalCustomized = new CustomIntervalSelector(0);
		intervalCustomized.setDateFormat(DateTimeFormat.getShortDateFormat().getPattern().replace("yy", "yyyy"));
		intervalCustomized.setMaxdays(31);
		strs.putAll(pickStrs);
		intervalCustomized.setI18nMessages(strs);
		final Button customizedButton = new GWTCButton(i18n.click_button(), new ClickHandler() {
			public void onClick(ClickEvent event) {
				String ci = GWTCSimpleDatePicker.formatDate(DateTimeFormat.getFullDateFormat().getPattern(), intervalCustomized.getInitDate());
				String co = GWTCSimpleDatePicker.formatDate(DateTimeFormat.getFullDateFormat().getPattern(), intervalCustomized.getEndDate());
				alert.alert(ci + "\n" + co + "\n" + intervalCustomized.getNights());
			}

		});
		intervalCustomized.getGrid().setWidget(1, 3, customizedButton);
		customizedButton.setVisible(false);
		intervalCustomized.addValueChangeHandler(new ValueChangeHandler<GWTCIntervalSelector>() {
			@Override
      public void onValueChange(ValueChangeEvent<GWTCIntervalSelector> event) {
				customizedButton.setVisible(true);
      }
		});
		box.add(createPanelWithDescription(intervalCustomized, i18n.descr_interval_custom()), DockPanel.NORTH);

	}

	public void testProgressBar(GWTCBox box) {
		box.setTitle("GWTCProgress");

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
				if (done >= total) {
					done = 0;
					if (doLoop == false) {
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
		final Timer timer1 = new pTimer(prgBar1, true);
		timer1.scheduleRepeating(500);
		box.add(createPanelWithDescription(prgBar1, i18n.descr_progress_1()));

		final GWTCProgress prgBar2 = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS
		      | GWTCProgress.SHOW_AS_DIALOG);
		prgBar2.setText(i18n.progress_title());
		prgBar2.setTotalMessage(i18n.progress_total());
		prgBar2.setPercentMessage(i18n.progress_percent());
		prgBar2.setHoursMessage(i18n.progress_hours());
		prgBar2.setMinutesMessage(i18n.progress_minutes());
		prgBar2.setSecondsMessage(i18n.progress_seconds());
		final Timer timer2 = new pTimer(prgBar2, false);
		final GWTCButton button = new GWTCButton(i18n.click_button(), new ClickHandler() {
			public void onClick(ClickEvent event) {
				prgBar2.show();
				timer2.scheduleRepeating(200);
			}
		});
		box.add(createPanelWithDescription(button, i18n.descr_progress_2()));
	}

	String styles[] = { GWTCBox.DEFAULT_STYLE, GWTCBox.STYLE_BLUE, GWTCBox.STYLE_GREY };

	public void testRoundedBox(GWTCBox box) {
		box.setTitle("GWTCBox");

		final GWTCBox styleBox = new GWTCBox();
		styleBox.setText(i18n.box_msg());
		final GWTCButton button = new GWTCButton(i18n.click_button(), new ClickHandler() {
			int t = 0;

			public void onClick(ClickEvent event) {
				for (int i = 0; i < 3; i++) {
					styleBox.removeStyleName(styles[i]);
				}
				t = t >= 2 ? 0 : t + 1;
				styleBox.setStyleName(styles[0]);
				styleBox.addStyleName(styles[t]);
			}
		});
		HorizontalPanel horPanel = new HorizontalPanel() {
			{
				add(button);
				add(styleBox);
				setSpacing(2);
			}
		};
		box.add(createPanelWithDescription(horPanel, i18n.descr_box_1()));

		GWTCBox distributionBox = new GWTCBox(GWTCBox.STYLE_BLUE);
		distributionBox.addStyleName("sampleBox");
		distributionBox.setTitle("Title");
		distributionBox.setText("Text");
		distributionBox.add(new Label("NORTH 1"), DockPanel.NORTH);
		distributionBox.add(new Label("SOUTH 1"), DockPanel.SOUTH);
		distributionBox.add(new Label("WEST 1"), DockPanel.WEST);
		distributionBox.add(new Label("EAST 1"), DockPanel.EAST);
		distributionBox.add(new Label("CENTER"), DockPanel.CENTER);
		distributionBox.add(new Label("NORTH 2"), DockPanel.NORTH);
		distributionBox.add(new Label("NORTH 3"), DockPanel.NORTH);
		distributionBox.add(new Label("SOUTH 2"), DockPanel.SOUTH);
		distributionBox.add(new Label("SOUTH 3"), DockPanel.SOUTH);
		distributionBox.add(new Label("WEST 2"), DockPanel.WEST);
		distributionBox.add(new Label("WEST 3"), DockPanel.WEST);
		distributionBox.add(new Label("EAST 2"), DockPanel.EAST);
		distributionBox.add(new Label("EAST 3"), DockPanel.EAST);
		box.add(createPanelWithDescription(distributionBox, i18n.descr_box_2()));
	}

}
