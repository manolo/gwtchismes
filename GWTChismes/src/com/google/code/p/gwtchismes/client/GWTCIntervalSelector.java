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

import java.util.Date;
import java.util.Map;

import com.google.gwt.i18n.client.DateTimeFormat;
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

/**
 *<p>
 *<b>A widget to select an interval betwen two dates.</b>
 *</p>
 * @author Manuel Carrasco Moñino 
 * 
 * <h3>Features</h3>
 * <ul>
 * <li>Configurable date limits and amount of days to select</li>
 * <li>Six layouts</li>
 * <li>Possibility of adding new layouts overriding the drawIntervalWidget method and using protected components.</li>
 * <h3>Example</h3>
 * <pre>
   // Configure internationalizable messages
   private HashMap strs = new HashMap();
   strs.put("format.date", "MMM  dd, yyyy");
   strs.put("format.day", "(ddd.)");
   strs.put("key.checkin", "Check-in");
   strs.put("key.checkout", "Check-out");
   strs.put("key.nights", "Nights");
   strs.put("key.interval", "Interval");
   strs.put("key.change", "Change check-in");
   strs.put("key.checkin.button", "");
   strs.put("key.checkout.button", "");
   strs.put("key.calendar.checkin.title", "Select check-in date");
   strs.put("key.calendar.checkout.title", "Select check-out date");
   strs.put("key.calendar.help", null);
   
   // Create a layout1 interval-selector and set the messages 
   GWTCIntervalSelector interval1 = new GWTCIntervalSelector(1);
   interval1.setI18nMessages(strs);
 * </pre>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCIntervalSelector { primary style for the main container}</li>
 * <li>.GWTCIntervalLayout[1..n] { secondary style for the main container }</li>
 * <li>.GWTCIntervalGrid { Style for the grid that contains all elements }</li>
 * <li>.checkinPicker { DataPicker for check-in selection } </li>
 * <li>.checkoutPicker { DataPicker for check-out selection } </li>
 * <li>.nightsBox { Listbox for selecting number of nights } </li>
 * <li>.checkoutButton { checkoutButton } </li>
 * <li>.checkinButton { checkinButton } </li>
 * <li>.labels { common style for all labels: checkin, checkout, interval } </li>
 * <li>.checkinLabel { Checkin Label } </li>
 * <li>.checkoutLabel { Checkout Label } </li>
 * <li>.durationLabel { Duration Label } </li>
 * <li>.nightsLabel { Nights Label } </li>
 * <li>.values { common style for date values: checkin, checkout} </li>
 * <li>.checkinDateValue { checkin value } </li>
 * <li>.checkoutDateValue { checkout value } </li>
 * <li>.checkinWeekValue { day of week checkin value } </li>
 * <li>.checkoutWeekValue { day of week checkout value } </li>
 * <li>.nightsValue { nights value } </li>
 * <li>.checkinRow { common style for all elements in the checkin Row } </li>
 * <li>.checkoutRow { common style for all elements in the checkout Row } </li>
 * <li>.nightsRow { common style for all elements in the nights Row } </li>
 * </ul>
 * </p>
 */
public class GWTCIntervalSelector extends Composite {

    private String styleName = "GWTCIntervalSelector";
    private static final String GWTCINTERVAL_LAYOUT = "GWTCIntervalLayout";
    private static final String GWTCINTERVAL_GRID = "GWTCIntervalGrid";

    private static final String PICKER_CHECKIN = "checkinPicker";
    private static final String PICKER_CHECKOUT = "checkoutPicker";
    private static final String NIGHTS_LIST_BOX = "nightsBox";

    private static final String CHECKOUT_BUTTON = "checkoutButton";
    private static final String CHECKIN_BUTTON = "checkinButton";

    protected static final String LABELS = "labels";
    protected static final String VALUES = "values";
    private static final String CHECKIN_LABEL = "checkinLabel";
    private static final String CHECKOUT_LABEL = "checkoutLabel";
    private static final String INTERVAL_LABEL = "durationLabel";
    private static final String NIGHTS_LABEL = "nightsLabel";

    private static final String CHECKIN_DATE_VALUE = "checkinDateValue";
    private static final String CHECKOUT_DATE_VALUE = "checkoutDateValue";
    private static final String CHECKIN_WEEK_VALUE = "checkinWeekValue";
    private static final String CHECKOUT_WEEK_VALUE = "checkoutWeekValue";
    private static final String NIGHTS_VALUE = "nightsValue";

    protected static final String CHECKIN_ROW = "checkinRow";
    protected static final String CHECKOUT_ROW = "checkoutRow";
    protected static final String NIGHTS_ROW = "nightsRow";

    public static final int LAYOUT_1 = 1;
    public static final int LAYOUT_2 = 2;
    public static final int LAYOUT_3 = 3;
    public static final int LAYOUT_4 = 4;
    public static final int LAYOUT_5 = 5;
    public static final int LAYOUT_6 = 6;

    protected int layoutType = 1;
    private int maxdays = 365 * 2;
    private String dateFormat = DateTimeFormat.getLongDateFormat().getPattern();
    private String weekDayFormat = "(EEE)";

    private final HorizontalPanel outer = new HorizontalPanel();
    
    protected GWTCDatePicker checkinCalendar;
    protected GWTCDatePicker checkoutCalendar;
    
    // These widgets are available in order to override the 
    private final FlexTable mainGrid = new FlexTable();
    protected final Label checkinLabel = new Label("Checkin");
    protected final Label checkinWeekValue = new Label();
    protected final Label checkinDateValue = new Label();
    protected final Button checkinButton = new Button("...");
    protected final Hyperlink changeCheckinLink = new Hyperlink();
    protected final Label checkoutLabel = new Label("Checkout");
    protected final Label checkoutWeekValue = new Label();
    protected final Label checkoutDateValue = new Label();
    protected final Button checkoutButton = new Button("...");
    protected final Label intervalLabel = new Label("Duration");
    protected final Label nightsLabel = new Label("Nights");
    protected final Label nightsValue = new Label();
    protected ListBox nightsListBox = new ListBox();

    public GWTCIntervalSelector() {
    }

    /**
     * Constructor
     * 
     * @param layout
     *            layout for the interval selector
     */
    public GWTCIntervalSelector(int layout) {
      initialize(layout);   
    }
    
    protected void initialize(int layout) {
        outer.setStyleName(styleName);
        outer.add(mainGrid);
        initWidget(outer);

        mainGrid.addStyleName(GWTCINTERVAL_GRID);
        mainGrid.addStyleName(GWTCINTERVAL_LAYOUT + layout);

        checkinLabel.addStyleName(LABELS);
        checkinDateValue.addStyleName(VALUES);
        checkinLabel.addStyleName(CHECKIN_LABEL);
        checkinDateValue.addStyleName(CHECKIN_DATE_VALUE);
        checkinWeekValue.addStyleName(CHECKIN_WEEK_VALUE);

        checkoutLabel.addStyleName(LABELS);
        checkoutDateValue.addStyleName(VALUES);
        checkoutLabel.addStyleName(CHECKOUT_LABEL);
        checkoutDateValue.addStyleName(CHECKOUT_DATE_VALUE);
        checkoutWeekValue.addStyleName(CHECKOUT_WEEK_VALUE);

        checkinButton.addStyleName(CHECKIN_BUTTON);
        checkoutButton.addStyleName(CHECKOUT_BUTTON);

        intervalLabel.addStyleName(LABELS);
        intervalLabel.addStyleName(INTERVAL_LABEL);
        nightsLabel.addStyleName(NIGHTS_LABEL);
        nightsValue.addStyleName(NIGHTS_VALUE);

        nightsListBox.addStyleName(NIGHTS_LIST_BOX);

        layoutType = layout;
        setDatePickerOptions(GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON);
        drawIntervalWidget();
    }

    /**
     * Draws the widget using the layout passed as argument
     * 
     */
    public void drawIntervalWidget() {
        switch (layoutType) {
        case LAYOUT_1:
            drawLayout1();
            break;
        case LAYOUT_2:
            drawLayout2();
            break;
        case LAYOUT_3:
            drawLayout3();
            break;
        case LAYOUT_4:
            drawLayout4();
            break;
        case LAYOUT_5:
            drawLayout5();
            break;
        case LAYOUT_6:
            drawLayout6();
            break;
        default:
            drawLayout1();
            break;
        }
    }

    private void drawLayout1() {
        mainGrid.getRowFormatter().addStyleName(1, "InfoContainer");

        FlexTable tSelector = new FlexTable();
        tSelector.setWidget(0, 0, changeCheckinLink);
        tSelector.setWidget(0, 1, nightsLabel);
        tSelector.setWidget(0, 2, nightsListBox);
        mainGrid.setWidget(0, 0, tSelector);

        FlexTable tInfo = new FlexTable();
        tInfo.getRowFormatter().addStyleName(0, CHECKIN_ROW);
        tInfo.getRowFormatter().addStyleName(1, CHECKOUT_ROW);
        tInfo.setWidget(0, 0, checkinLabel);
        tInfo.setWidget(0, 1, checkinDateValue);
        tInfo.setWidget(0, 2, checkinWeekValue);
        tInfo.setWidget(1, 0, checkoutLabel);
        tInfo.setWidget(1, 1, checkoutDateValue);
        tInfo.setWidget(1, 2, checkoutWeekValue);
        mainGrid.setWidget(1, 0, tInfo);
    }

    private void drawLayout2() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_ROW);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateValue);
        checkinInfo.add(checkinWeekValue);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);

        idx++;
        mainGrid.getRowFormatter().addStyleName(idx, CHECKOUT_ROW);
        HorizontalPanel checkoutInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkoutLabel);
        checkoutInfo.add(checkoutDateValue);
        checkoutInfo.add(checkoutWeekValue);
        checkoutInfo.add(checkoutButton);
        mainGrid.setWidget(idx, 1, checkoutInfo);
        checkoutDateValue.addClickListener(clickListener);
        checkoutWeekValue.addClickListener(clickListener);

        idx++;
        mainGrid.getRowFormatter().addStyleName(idx, NIGHTS_ROW);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, intervalLabel);
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.add(nightsValue);
        nightsInfo.add(nightsLabel);
    }

    private void drawLayout3() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_ROW);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateValue);
        checkinInfo.add(checkinWeekValue);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, NIGHTS_ROW);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.add(nightsListBox);
        mainGrid.setWidget(idx, 0, intervalLabel);
        nightsInfo.add(nightsLabel);
    }

    private void drawLayout4() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_ROW);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateValue);
        checkinInfo.add(checkinWeekValue);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);
        idx++;

        mainGrid.getCellFormatter().addStyleName(idx, 0, NIGHTS_ROW);
        mainGrid.setWidget(idx, 0, nightsLabel);
        nightsLabel.addStyleName(LABELS);

        FlexTable nightsInfo = new FlexTable();
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.setWidget(0,0, nightsListBox);
        nightsInfo.getCellFormatter().addStyleName(0, 0, NIGHTS_ROW);
        
        nightsInfo.setWidget(0, 1, checkoutLabel);
        nightsInfo.getCellFormatter().addStyleName(0, 1, CHECKOUT_ROW);
        nightsInfo.setWidget(0, 2, checkoutDateValue);
        nightsInfo.getCellFormatter().addStyleName(0, 2, CHECKOUT_ROW);
    }

    private void drawLayout5() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_ROW);
        mainGrid.setWidget(idx, 0, checkinLabel);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_ROW);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        checkinInfo.add(checkinDateValue);
        checkinInfo.add(checkinWeekValue);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 0, checkinInfo);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, NIGHTS_ROW);
        mainGrid.setWidget(idx, 0, nightsLabel);
        nightsLabel.addStyleName(LABELS);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, NIGHTS_ROW);
        mainGrid.setWidget(idx, 0, nightsListBox);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKOUT_ROW);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        nightsInfo.add(checkoutLabel);
        nightsInfo.add(checkoutDateValue);
        mainGrid.setWidget(idx, 0, nightsInfo);
    }

    private void drawLayout6() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_ROW);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateValue);
        checkinInfo.add(checkinWeekValue);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, NIGHTS_ROW);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.add(nightsListBox);
        mainGrid.setWidget(idx, 0, nightsLabel);
        nightsLabel.addStyleName(LABELS);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKOUT_ROW);
        mainGrid.setWidget(idx, 0, checkoutLabel);
        mainGrid.setWidget(idx, 1, checkoutDateValue);
    }
    
    public void configureDatePickers(int options, String buttonsLayout, int months, int monthsPerRow, int increment, int monthsInSelector) {
        options |= GWTCDatePicker.CONFIG_DIALOG;
        checkinCalendar = new GWTCDatePicker(options);
        checkoutCalendar = new GWTCDatePicker(options);
        checkinCalendar.addStyleName(PICKER_CHECKIN);
        checkoutCalendar.addStyleName(PICKER_CHECKOUT);
        checkinCalendar.configure(buttonsLayout, months, monthsPerRow, increment, monthsInSelector);
        checkoutCalendar.configure(buttonsLayout, months, monthsPerRow, increment, monthsInSelector);
        initListeners();
        setMaxdays(maxdays);
    }
    
    public void setDatePickerOptions(int options) {
        options |= GWTCDatePicker.CONFIG_DIALOG;
        checkinCalendar = new GWTCDatePicker(options);
        checkoutCalendar = new GWTCDatePicker(options);
        checkoutCalendar.addStyleName(PICKER_CHECKOUT);
        checkinCalendar.addStyleName(PICKER_CHECKIN);
        initListeners();
        setMaxdays(maxdays);
    }
    
    public FlexTable getGrid() {
        return mainGrid;
    }

    private void updateInputsFromNights() {
        checkoutCalendar.setSelectedDate(GWTCSimpleDatePicker.increaseDate(getInitDate(), nightsListBox.getSelectedIndex()));
        checkoutDateValue.setText(checkoutCalendar.getSelectedDateStr(dateFormat));
        checkoutWeekValue.setText(checkoutCalendar.getSelectedDateStr(weekDayFormat));
        nightsValue.setText("" + getNights());
        updateTextElements();
    }

    private void updateTextElementsFromCheckout() {
        int nights = getNights();
        if (nights >= 0)
            nightsListBox.setItemSelected(nights, true);
        updateTextElements();
    }

    private void updateTextElementsFromCheckin() {
        checkoutCalendar.setMinimalDate(getInitDate());
        checkoutCalendar.setMaximalDate(GWTCSimpleDatePicker.increaseDate(getInitDate(), maxdays));

        int nightsFromBox = nightsListBox.getSelectedIndex();
        if (nightsFromBox == 0 || layoutType != LAYOUT_2)
            checkoutCalendar.setSelectedDate(GWTCSimpleDatePicker.increaseDate(getInitDate(), nightsFromBox));

        int nights = getNights();
        if (nights >= 0)
            nightsListBox.setItemSelected(nights, true);

        updateTextElements();
    }

    protected void updateTextElements() {
        checkinDateValue.setText(checkinCalendar.getSelectedDateStr(dateFormat));
        checkinWeekValue.setText(checkinCalendar.getSelectedDateStr(weekDayFormat));

        checkoutDateValue.setText(checkoutCalendar.getSelectedDateStr(dateFormat));
        checkoutWeekValue.setText(checkoutCalendar.getSelectedDateStr(weekDayFormat));

        nightsValue.setText("" + getNights());
    }

    /**
     * set the first day of the interval
     * 
     * @param d
     *            Date
     */
    public void setInitDate(Date d) {
        checkinCalendar.setSelectedDate(d);
        updateTextElementsFromCheckin();
    }

    /**
     * Set the number of days in the interval
     * 
     * @param n
     */
    public void setNights(int n) {
        nightsListBox.setItemSelected(n, true);
        updateInputsFromNights();
    }

    /**
     * Configure the maximal days allowed
     * 
     * @param d
     */
    public void setMaxdays(int d) {
        this.maxdays = d;
        nightsListBox.clear();
        

        nightsListBox.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                updateInputsFromNights();
            }
        });

        for (int i = 0; i <= maxdays; i++)
            nightsListBox.addItem("" + i);
        updateTextElements();
    }

    /**
     * Gets the first day selected by the user
     * 
     * @return Date
     */
    public Date getInitDate() {
        return checkinCalendar.getSelectedDate();
    }

    /**
     * Gets the last day selected by the user
     * 
     * @return Date
     */
    public Date getEndDate() {
        return checkoutCalendar.getSelectedDate();
    }

    /**
     * Gets the number of nights selected by the user
     * 
     * @return int
     */
    public int getNights() {
        return GWTCSimpleDatePicker.compareDate(getInitDate(), getEndDate());
    }

    /**
     * A collection to store change listeners
     */
    private ChangeListenerCollection changeListeners = new ChangeListenerCollection();

    /**
     * Adds a change listener
     * 
     * @param listener
     */
    public void addChangeListener(ChangeListener listener) {
        if (listener != null)
            changeListeners.add(listener);
    }

    /**
     * Removes a change listener
     * 
     * @param listener
     */
    public void removeChangeListener(ChangeListener listener) {
        changeListeners.remove(listener);
    }

    /**
     * Configure the default listeners for the elements of this interval selector
     */
    protected void initListeners() {
        checkinCalendar.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                checkinCalendar.hide();
                updateTextElementsFromCheckin();
                changeListeners.fireChange(sender);
            }
        });
        
        checkoutCalendar.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                checkoutCalendar.hide();
                updateTextElementsFromCheckout();
                changeListeners.fireChange(sender);
            }
        });

        nightsListBox.addChangeListener(new ChangeListener(){
            public void onChange(Widget sender) {
                changeListeners.fireChange(sender);
            }
            
        });

        checkinButton.addClickListener(clickListener);
        checkinDateValue.addClickListener(clickListener);
        checkinWeekValue.addClickListener(clickListener);

        changeCheckinLink.addClickListener(clickListener);
        changeCheckinLink.setTargetHistoryToken("");

        checkoutButton.addClickListener(clickListener);
    }
    
    int calendarPosition = 0;
    public static final int PICKER_POSITION_NEAR_SENDER  = 0;
    public static final int PICKER_POSITION_NEAR_DATEVALUES  = 1;
    public static final int PICKER_POSITION_CENTERED  = 2;

    public void setDatePickerPosition(int position){
        calendarPosition = position;
    }

    /**
     * a clicklistener preconfigured to launch an appropiate DatePicker 
     * when the user push buttons o labels
     */
    protected ClickListener clickListener = new ClickListener() {
        public void onClick(Widget sender) {
            if (sender == checkinButton || sender == checkinDateValue || sender == checkinWeekValue || sender == changeCheckinLink) {
                if ((calendarPosition & PICKER_POSITION_NEAR_DATEVALUES) == PICKER_POSITION_NEAR_DATEVALUES)
                    checkinCalendar.show(checkinDateValue);
                else if ((calendarPosition &  PICKER_POSITION_CENTERED) == PICKER_POSITION_CENTERED)
                    checkinCalendar.center();
                else
                    checkinCalendar.show(sender);
                checkoutCalendar.hide();
            } else if (sender == checkoutButton || sender == checkoutDateValue || sender == checkoutWeekValue) {
                if ((calendarPosition & PICKER_POSITION_NEAR_DATEVALUES) == PICKER_POSITION_NEAR_DATEVALUES)
                    checkoutCalendar.show(checkoutDateValue);
                else if ((calendarPosition &  PICKER_POSITION_CENTERED) == PICKER_POSITION_CENTERED)
                    checkoutCalendar.center();
                else
                    checkoutCalendar.show(sender);
                checkinCalendar.hide();
            } else {
                return;
            }
        }
    };

    /**
     * <p>
     * Internationalize the components of this interval selector
     * </p>
     * <p>
     * You have to provide a Map(String, String) with at least these keys
     * </p>
     * <ul >
     * <li>key.checkin</li>
     * <li>key.checkout</li>
     * <li>key.nights</li>
     * <li>key.interval</li>
     * <li>key.change</li>
     * <li>key.checkin.button</li>
     * <li>key.checkout.button</li>
     * <li>key.calendar.checkin.caption</li>
     * <li>key.calendar.checkout.caption</li>
     * <li>key.calendar.help</li>
     * </ul>
     * 
     * @param keys
     */
    public void setI18nMessages(Map<String, String> keys) {
        GWTCDatePicker.internationalize(checkinLabel, keys, "key.checkin");
        GWTCDatePicker.internationalize(checkoutLabel, keys, "key.checkout");
        GWTCDatePicker.internationalize(nightsLabel, keys, "key.nights");
        GWTCDatePicker.internationalize(intervalLabel, keys, "key.interval");
        GWTCDatePicker.internationalize(changeCheckinLink, keys, "key.change");
        GWTCDatePicker.internationalize(checkinButton, keys, "key.checkin.button");
        GWTCDatePicker.internationalize(checkoutButton, keys, "key.checkout.button");
  
        checkinCalendar.setI18nMessages(keys);
        checkoutCalendar.setI18nMessages(keys);

        GWTCDatePicker.internationalize(checkinCalendar, keys, "key.calendar.checkin.caption");
        GWTCDatePicker.internationalize(checkoutCalendar, keys, "key.calendar.checkout.caption");
        GWTCDatePicker.internationalize(checkinCalendar, keys, "key.calendar.checkin.title");
        GWTCDatePicker.internationalize(checkoutCalendar, keys, "key.calendar.checkout.title");

        updateTextElements();
    }
    
    /**
     * @deprecated
     * Use setI18nMessages instead
     * @param keys
     */
    public void setLocale(Map<String, String> keys) {
        setI18nMessages(keys);
    }

    /**
     * Set the minimal selectable date for the interval
     * 
     * @param d
     *            Date
     */
    public void setMinimalDate(Date d) {
        checkinCalendar.setMinimalDate(d);
        if ( getInitDate() != null && GWTCDatePicker.compareDate(d, getInitDate()) < 0 ) {
            checkinCalendar.setSelectedDate(d);
        }
        updateTextElementsFromCheckin();
    }

    public void setMaximalDate(Date d) {
        checkinCalendar.setMaximalDate(d);
        if ( getInitDate() != null && GWTCDatePicker.compareDate(d, getInitDate()) > 0 ) {
            checkinCalendar.setSelectedDate(d);
        }
        updateTextElementsFromCheckin();
    }
    
    
    
    public Date getMinimalDate() {
        return checkinCalendar.getMinimalDate();
    }

    public Date getMaximalDate() {
        return checkinCalendar.getMaximalDate();
    }

    public int getMaxDays() {
        return maxdays;
    }

    public void setDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
        updateTextElements();
    }

    public void setWeekDayFormat(String weekDayFormat) {
        this.weekDayFormat = weekDayFormat;
        updateTextElements();
    }
    
}
