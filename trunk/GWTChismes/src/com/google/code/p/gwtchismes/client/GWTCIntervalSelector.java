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

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ChangeListenerCollection;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Widget;

public class GWTCIntervalSelector extends Composite {

    private String styleName = "GWTCIntervalSelector";

    private int maxdays = 365 * 2;

    private final HorizontalPanel outer = new HorizontalPanel();

    private final Label checkinLabel = new Label("Checkin");

    private final Label checkinWeekLabel = new Label();

    private final Label checkinDateLabel = new Label();

    private final Button checkinButton = new Button("...");

    private final Hyperlink checkinA = new Hyperlink();

    private final GWTCDatePicker checkinCalendar = new GWTCDatePicker(true);

    private final Label checkoutLabel = new Label("Checkout");

    private final Label checkoutWeekLabel = new Label();

    private final Label checkoutDateLabel = new Label();

    private final Button checkoutButton = new Button("...");

    private final GWTCDatePicker checkoutCalendar = new GWTCDatePicker(true);

    private final Label durationLabel = new Label("Duration");

    private final Label nightsLabel = new Label("Nights");

    private final Label intervalValue = new Label();

    private final HorizontalPanel nightsListBoxContainer = new HorizontalPanel();

    private ListBox nightsListBox = new ListBox();

    int layoutType = 1;

    private String longDateFormat = "dd MMMM, yyyy";

    private String weekDayFormat = "(ddd)";

    public GWTCIntervalSelector(int layoutType) {
        outer.setStyleName(styleName);
        initWidget(outer);
        this.initListeners();
        setMaxdays(maxdays);
        this.layoutType = layoutType;
        if (layoutType == 2)
            layoutW(2);
        if (layoutType == 3)
            layoutW(3);
        if (layoutType == 1)
            layout1();
    }

    public void layout1() {
        outer.clear();
        FlexTable grid = new FlexTable();
        outer.add(grid);
        nightsListBoxContainer.clear();
        nightsListBoxContainer.add(nightsListBox);

        grid.addStyleName("GWTCIntervalLayout1");
        grid.getRowFormatter().addStyleName(0, "SelectorContainer");
        grid.getRowFormatter().addStyleName(1, "InfoContainer");

        FlexTable tSelector = new FlexTable();
        tSelector.addStyleName("DateChanger");
        tSelector.setWidget(0, 0, checkinA);
        tSelector.getCellFormatter().addStyleName(0, 0, "DateSelector");
        tSelector.setWidget(0, 1, nightsLabel);
        tSelector.getCellFormatter().addStyleName(0, 0, "NighsSelectorLabel");
        tSelector.setWidget(0, 2, nightsListBoxContainer);
        tSelector.getCellFormatter().addStyleName(0, 0, "NightsSelectorListBox");
        grid.setWidget(0, 0, tSelector);

        FlexTable tInfo = new FlexTable();
        tInfo.addStyleName("DateInfo");
        tInfo.getRowFormatter().addStyleName(0, "CheckinInfo");
        tInfo.getRowFormatter().addStyleName(1, "CheckoutInfo");
        tInfo.setWidget(0, 0, checkinLabel);
        tInfo.getCellFormatter().addStyleName(0, 0, "DateLabel");
        tInfo.setWidget(0, 1, checkinDateLabel);
        tInfo.getCellFormatter().addStyleName(0, 1, "DateValue");
        tInfo.setWidget(0, 2, checkinWeekLabel);
        tInfo.getCellFormatter().addStyleName(0, 2, "DateWeekD");
        tInfo.setWidget(1, 0, checkoutLabel);
        tInfo.getCellFormatter().addStyleName(1, 0, "DateLabel");
        tInfo.setWidget(1, 1, checkoutDateLabel);
        tInfo.getCellFormatter().addStyleName(1, 1, "DateValue");
        tInfo.setWidget(1, 2, checkoutWeekLabel);
        tInfo.getCellFormatter().addStyleName(1, 2, "DateWeekD");
        grid.setWidget(1, 0, tInfo);
        for (int i = 0; i < 3; i++) {
            tInfo.getCellFormatter().addStyleName(i, 0, "ColLabels");
        }
        tSelector.getCellFormatter().addStyleName(0, 0, "ColLabels");

    }

    public void layoutW(int t) {
        outer.clear();
        FlexTable grid = new FlexTable();
        outer.add(grid);
        nightsListBoxContainer.clear();
        nightsListBoxContainer.add(nightsListBox);

        grid.addStyleName("GWTCIntervalLayout" + t);

        int idx = 0;
        grid.getRowFormatter().addStyleName(idx, "CheckinInfo");
        HorizontalPanel checkinInfo = new HorizontalPanel();
        grid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateLabel);
        checkinInfo.add(checkinWeekLabel);
        checkinInfo.add(checkinButton);
        checkinLabel.addStyleName("checkinLabel");
        checkinDateLabel.addStyleName("checkinDateLabel");
        checkinWeekLabel.addStyleName("checkinWeekLabel");
        checkinButton.addStyleName("checkinButton");
        grid.setWidget(idx, 1, checkinInfo);
        idx++;

        if (t == 2) {
            grid.getRowFormatter().addStyleName(idx, "CheckoutInfo");
            HorizontalPanel checkoutInfo = new HorizontalPanel();
            grid.setWidget(idx, 0, checkoutLabel);
            checkoutInfo.add(checkoutDateLabel);
            checkoutInfo.add(checkoutWeekLabel);
            checkoutInfo.add(checkoutButton);
            checkoutLabel.addStyleName("checkoutLabel");
            checkoutDateLabel.addStyleName("checkoutDateLabel");
            checkoutWeekLabel.addStyleName("checkoutWeekLabel");
            checkoutButton.addStyleName("checkoutButton");
            grid.setWidget(idx, 1, checkoutInfo);

            idx++;
            grid.getRowFormatter().addStyleName(idx, "DateInfo");
            HorizontalPanel nightsInfo = new HorizontalPanel();
            durationLabel.addStyleName("durationLabel");
            grid.setWidget(idx, 0, durationLabel);
            grid.setWidget(idx, 1, nightsInfo);
            nightsInfo.add(intervalValue);
            nightsInfo.add(nightsLabel);
            idx++;

        }
        if (t == 3) {
            grid.getRowFormatter().addStyleName(idx, "DateSelect");
            HorizontalPanel nightsInfo = new HorizontalPanel();
            durationLabel.addStyleName("durationLabel");
            grid.setWidget(idx, 0, durationLabel);
            grid.setWidget(idx, 1, nightsInfo);
            nightsInfo.add(nightsListBoxContainer);
            nightsInfo.add(nightsLabel);
            idx++;
        }
        for (int i = 0; i < idx; i++) {
            grid.getCellFormatter().addStyleName(i, 0, "ColLabels");
        }
    }

    // Methods
    public void updateInputsFromNights() {
        checkoutCalendar.setSelectedDate(GWTCDatePicker.increaseDate(getInitDate(), nightsListBox.getSelectedIndex()));
        checkoutDateLabel.setText(checkoutCalendar.getSelectedDateStr(longDateFormat));
        checkoutWeekLabel.setText(checkoutCalendar.getSelectedDateStr(weekDayFormat));
        checkoutCalendar.drawCalendar();
        intervalValue.setText("" + getNights());
        updateInputs();
    }

    public void updateInputsFromCheckout() {
        int nights = getNights();
        if (nights >= 0)
            nightsListBox.setItemSelected(nights, true);
        updateInputs();
    }

    public void updateInputsFromCheckin() {
        checkoutCalendar.setMinimalDate(getInitDate());
        checkoutCalendar.setMaximalDate(GWTCDatePicker.increaseDate(getInitDate(), maxdays));
        if (layoutType != 2) {
            int nbox = nightsListBox.getSelectedIndex();
            checkoutCalendar.setSelectedDate(GWTCDatePicker.increaseDate(getInitDate(), nbox));
        }
        int nights = getNights();
        if (nights >= 0)
            nightsListBox.setItemSelected(nights, true);
        updateInputs();
    }

    public void updateInputs() {
        checkinDateLabel.setText(checkinCalendar.getSelectedDateStr(longDateFormat));
        checkinWeekLabel.setText(checkinCalendar.getSelectedDateStr(weekDayFormat));

        checkoutDateLabel.setText(checkoutCalendar.getSelectedDateStr(longDateFormat));
        checkoutWeekLabel.setText(checkoutCalendar.getSelectedDateStr(weekDayFormat));

        checkoutCalendar.drawCalendar();

        intervalValue.setText("" + getNights());
    }

    // Setters
    public void setInitDate(Date d) {
        checkinCalendar.setSelectedDate(d);
        updateInputsFromCheckin();
    }

    public void setNights(int n) {
        nightsListBox.setItemSelected(n, true);
        updateInputsFromNights();
    }

    public void setMaxdays(int d) {
        this.maxdays = d;
        nightsListBox = new ListBox();
        nightsListBoxContainer.clear();
        nightsListBoxContainer.add(nightsListBox);

        nightsListBox.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                updateInputsFromNights();
            }
        });

        for (int i = 0; i <= maxdays; i++)
            nightsListBox.addItem("" + i);
        updateInputs();
    }

    // Getters
    public Date getInitDate() {
        return checkinCalendar.getSelectedDate();
    }

    public Date getEndDate() {
        return checkoutCalendar.getSelectedDate();
    }

    public int getNights() {
        return GWTCDatePicker.compareDate(getInitDate(), getEndDate());
    }

    // Listeners
    private ChangeListenerCollection changeListeners;

    public void onClick(Widget sender) {
        if (changeListeners != null)
            changeListeners.fireChange(this);
    }

    public void addChangeListener(ChangeListener listener) {
        if (changeListeners == null)
            changeListeners = new ChangeListenerCollection();
        changeListeners.add(listener);
    }

    public void removeChangeListener(ChangeListener listener) {
        if (changeListeners != null)
            changeListeners.remove(listener);
    }

    // Configure widget listeners
    private void initListeners() {
        checkinCalendar.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                checkinCalendar.hide();
                updateInputsFromCheckin();
            }
        });
        checkoutCalendar.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                checkoutCalendar.hide();
                updateInputsFromCheckout();
            }
        });
        checkinButton.addClickListener(clickListener);
        checkinDateLabel.addClickListener(clickListener);
        checkinA.addClickListener(clickListener);
        checkinA.setTargetHistoryToken("");

        checkoutButton.addClickListener(clickListener);
        checkoutDateLabel.addClickListener(clickListener);
    }

    // Click Listener
    ClickListener clickListener = new ClickListener() {
        public void onClick(Widget sender) {
            if (sender == checkinButton || sender == checkinA) {
                checkinCalendar.show(sender);
                checkoutCalendar.hide();
            } else if (sender == checkoutButton) {
                checkoutCalendar.show(sender);
                checkinCalendar.hide();
            } else {
                return;
            }
        }
    };

    // Internationalization
    private Map strs = new HashMap();

    private String getMsg(String m) {
        String ret = null;
        if (strs != null)
            ret = (String) strs.get(m);
        return (ret != null ? ret : m);
    }

    /**
     * <p>
     * Method for internationalize all elements
     * </p>
     * <p>
     * You need to provide a Map with thesse keys
     * </p>
     * <ul >
     * <li>forma.date</li>
     * <li>forma.day</li>
     * <li>key.checkin</li>
     * <li>key.checkout</li>
     * <li>key.nights</li>
     * <li>key.interval</li>
     * <li>key.change</li>
     * <li>key.checkin.button</li>
     * <li>key.checkout.button</li>
     * <li>key.calendar.checkin.title</li>
     * <li>key.calendar.checkout.title</li>
     * <li>key.calendar.help</li>
     * </ul>
     * 
     * @param keys
     *            Map (key, string)
     * 
     * @param wdays
     *            array with the names of the days [Sunday ... Saturday]
     * @param months
     *            array with the names of the months [January ... December]
     * @param wStart
     *            first day of the week [1...7]
     */
    public void setLocale(Map keys, String[] wdays, String[] months, int wStart) {
        checkinCalendar.setLocale(wdays, months, wStart);
        checkoutCalendar.setLocale(wdays, months, wStart);
        strs = keys;

        longDateFormat = getMsg("format.date");
        weekDayFormat = getMsg("format.day");

        checkinLabel.setText(getMsg("key.checkin"));
        checkoutLabel.setText(getMsg("key.checkout"));
        nightsLabel.setText(getMsg("key.nights"));
        durationLabel.setText(getMsg("key.interval"));

        checkinA.setText(getMsg("key.change"));
        checkinButton.setText(getMsg("key.checkin.button"));
        checkoutButton.setText(getMsg("key.checkout.button"));

        checkinCalendar.setText(getMsg("key.calendar.checkin.title"));
        checkoutCalendar.setText(getMsg("key.calendar.checkout.title"));

        if (!getMsg("key.calendar.help").equals("key.calendar.help")) {
            checkinCalendar.setHelp(getMsg("key.calendar.help"));
            checkoutCalendar.setHelp(getMsg("key.calendar.help"));
        }

        updateInputs();
    }
}
