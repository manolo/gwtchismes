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
import java.util.HashMap;
import java.util.Map;

import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.DOM;
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
 * @author Manuel Carrasco Moñino <h3>Class description</h3>
 *         <p>
 *         A widget to select an interval betwen two dates.
 *         </p>
 *         <p>
 *         You can configure minimalDate, maximalDate, layout, and number of days for the interval.
 *         </p>
 *         <h3>Example</h3>
 * 
 *         <pre>
 * // Configure internationalized strings using english language
 * private HashMap strs_en = new HashMap();
 * strs_en.put(&quot;format.date&quot;, &quot;MMM  dd, yyyy&quot;);
 * strs_en.put(&quot;format.day&quot;, &quot;(ddd.)&quot;);
 * strs_en.put(&quot;key.checkin&quot;, &quot;Checkin&quot;);
 * strs_en.put(&quot;key.checkout&quot;, &quot;Checkout&quot;);
 * strs_en.put(&quot;key.nights&quot;, &quot;Nights&quot;);
 * strs_en.put(&quot;key.interval&quot;, &quot;Interval&quot;);
 * strs_en.put(&quot;key.change&quot;, &quot;Change&quot;);
 * strs_en.put(&quot;key.checkin.button&quot;, &quot;...&quot;);
 * strs_en.put(&quot;key.checkout.button&quot;, &quot;...&quot;);
 * strs_en.put(&quot;key.calendar.checkin.title&quot;, &quot;Select checkin date&quot;);
 * strs_en.put(&quot;key.calendar.checkout.title&quot;, &quot;Select checkout date&quot;);
 * 
 * // Create a layout1 interval-selector and set the locale in english 
 * GWTCIntervalSelector interval1 = new GWTCIntervalSelector(1);
 * interval1.setLocale(strs_en);
 * </pre>
 * 
 *         <h3>CSS Style Rules</h3>
 *         <ul>
 *         <li>.GWTCIntervalSelector { GWTCIntervalSelector main container}</li>
 *         <li>.GWTCIntervalLayout[1..n] {container table}</li>
 *         </ul>
 * 
 *         <p>
 *         css styles for layouttype=1
 *         <ul>
 *         <li>.SelectorContainer {row that contains the table with the selection widgets}</li>
 *         <li>.DateChanger { class for the table container of selection widgets }</li>
 *         <li>.DateChanger.DateSelector { class for the cell with the link that lauch the DatePicker}</li>
 *         <li>.DateChanger.NighsSelectorLabel {class for the cell with the interval label }</li>
 *         <li>.DateChanger.NightsSelectorListBox { class for the cell with the interval selector box }</li>
 * 
 *         <li>.InfoContainer {row that contains the table with information about the interval }</li>
 *         <li>.DateInfo { class for the table container of info about the interval }</li>
 *         <li>.DateInfo.CheckinInfo { class for the row
 *         <tr>
 *         with the info of the begin of interval }
 *         <li>
 *         <li>.DateInfo.CheckoutInfo { class for the row
 *         <tr>
 *         with the info of the end of interval }
 *         <li>
 *         <li>.DateLabel (class for the cell with the date label)</li>
 *         <li>.DateValue (class for the cell with the date value)</li>
 *         <li>.DateWeekD (class for the cell with the weekday name)</li>
 *         <li>.ColLabels (aditional class for the cells of the fisrt column)</li>
 *         </ul>
 *         </p>
 * 
 *         <p>
 *         css styles for layouttype=2
 *         <ul>
 *         <li>.GWTCIntervalLayout2 {container table}</li>
 *         <li>.CheckinInfo { class for the row
 *         <tr>
 *         with the info of the begin of interval }
 *         <li>
 *         <li>.checkinLabel {class for the label for the first day in interval }</li>
 *         <li>.checkinDateLabel {class for the label with the initial date in interval}</li>
 *         <li>.checkinWeekLabel { class for the label with the weekday name )</li>
 *         <li>.checkinButton {class for the button that launchs the DatePicker for initial day}</li>
 * 
 *         <li>.CheckoutInfo { class for the row
 *         <tr>
 *         with the info of the end of interval }
 *         <li>
 *         <li>.checkoutLabel {class for the label for the last day in interval }</li>
 *         <li>.checkoutDateLabel {class for the label with the lastl date in interval}</li>
 *         <li>.checkoutWeekLabel { class for the label with the weekday name )</li>
 *         <li>.checkoutButton {class for the button that launchs the DatePicker for end day}</li>
 * 
 *         <li>.DateInfo { class for the row
 *         <tr>
 *         with the iterval info}</li>
 *         <li>.durationLabel { class of the duration label}</li>
 * 
 *         <li>.ColLabels { aditional class for cells in the first column }</li>
 *         </ul>
 *         </p>
 * 
 *         <p>
 *         css styles for layouttype=3
 *         <ul>
 *         <li>.GWTCIntervalLayout3 {container table}</li>
 *         <li>.CheckinInfo { class for the row
 *         <tr>
 *         with the info of the begin of interval }
 *         <li>
 *         <li>.checkinLabel {class for the label for the first day in interval }</li>
 *         <li>.checkinDateLabel {class for the label with the initial date in interval}</li>
 *         <li>.checkinWeekLabel { class for the label with the weekday name )</li>
 *         <li>.checkinButton {class for the button that launchs the DatePicker for initial day}</li>
 * 
 *         <li>.DateInfo { class for the row
 *         <tr>
 *         with the iterval info}</li>
 *         <li>.durationLabel { class of the duration label}</li>
 * 
 *         <li>.ColLabels { aditional class for cells in the first column }</li>
 *         </ul>
 *         </p>
 */
public class GWTCIntervalSelector extends Composite {

    private String styleName = "GWTCIntervalSelector";
    protected static final String GWTCINTERVAL_LAYOUT = "GWTCIntervalLayout";
    protected static final String GWTCINTERVAL_GRID = "GWTCIntervalGrid";

    protected static final String CHECKOUT_BUTTON = "checkoutButton";
    protected static final String CHECKIN_BUTTON = "checkinButton";

    protected static final String CHECKIN_LABEL = "checkinLabel";
    protected static final String CHECKOUT_LABEL = "checkoutLabel";
    protected static final String DATE_LABEL = "DateLabel";
    protected static final String DURATION_LABEL = "durationLabel";

    protected static final String CHECKIN_WEEK_LABEL = "checkinWeekLabel";
    protected static final String CHECKOUT_WEEK_LABEL = "checkoutWeekLabel";
    protected static final String CHECKIN_DATE_LABEL = "checkinDateLabel";
    protected static final String CHECKOUT_DATE_LABEL = "checkoutDateLabel";

    protected static final String CHECKIN_INFO = "CheckinInfo";
    protected static final String CHECKOUT_INFO = "CheckoutInfo";
    protected static final String DATE_INFO = "DateInfo";

    private static final String INTERVAL_VALUE = "intervalValue";
    private static final String NIGHTS_LABEL = "nightsLabel";

    protected static final String COL_LABELS = "ColLabels";
    protected static final String NIGHTS_SELECTOR_LIST_BOX = "NightsSelectorListBox";
    protected static final String NIGHS_SELECTOR_LABEL = "NighsSelectorLabel";
    protected static final String DATE_SELECTOR = "DateSelector";
    protected static final String INFO_CONTAINER = "InfoContainer";
    protected static final String SELECTOR_CONTAINER = "SelectorContainer";
    protected static final String DATE_CHANGER = "DateChanger";
    protected static final String GWTCDATE_PICKER_CHECKIN = "GWTCDatePickerCheckin";
    protected static final String GWTCDATE_PICKER_CHECKOUT = "GWTCDatePickerCheckout";
    protected static final String DATE_WEEK_D = "DateWeekD";
    protected static final String DATE_VALUE = "DateValue";
    public static final int LAYOUT_1 = 1;
    public static final int LAYOUT_2 = 2;
    public static final int LAYOUT_3 = 3;
    public static final int LAYOUT_4 = 4;
    public static final int LAYOUT_5 = 5;
    public static final int LAYOUT_6 = 6;

    private final HorizontalPanel outer = new HorizontalPanel();
    protected final FlexTable mainGrid = new FlexTable();

    protected final Label checkinLabel = new Label("Checkin");

    protected final Label checkinWeekLabel = new Label();

    protected final Label checkinDateLabel = new Label();

    protected final Button checkinButton = new Button("...");

    protected final Hyperlink checkinA = new Hyperlink();

    private final GWTCDatePicker checkinCalendar = new GWTCDatePicker(true);

    protected final Label checkoutLabel = new Label("Checkout");

    protected final Label checkoutWeekLabel = new Label();

    protected final Label checkoutDateLabel = new Label();

    protected final Button checkoutButton = new Button("...");

    private final GWTCDatePicker checkoutCalendar = new GWTCDatePicker(true);

    protected final Label durationLabel = new Label("Duration");

    protected final Label nightsLabel = new Label("Nights");

    protected final Label intervalValue = new Label();

    protected ListBox nightsListBox = new ListBox();

    private int layoutType = 1;
    private int maxdays = 365 * 2;
    private String longDateFormat = DateTimeFormat.getLongDateFormat().getPattern();
    private String weekDayFormat = "(EEE)";

    /**
     * Constructor
     * 
     * @param layoutType
     *            type of layout for the interval selector
     */
    public GWTCIntervalSelector(int layoutType) {
        outer.setStyleName(styleName);
        outer.add(mainGrid);
        initWidget(outer);

        this.initListeners();
        setMaxdays(maxdays);

        mainGrid.addStyleName(GWTCINTERVAL_GRID);
        mainGrid.addStyleName(GWTCINTERVAL_LAYOUT + layoutType);

        checkoutCalendar.addStyleName(GWTCDATE_PICKER_CHECKOUT);
        checkinCalendar.addStyleName(GWTCDATE_PICKER_CHECKIN);

        checkinLabel.addStyleName(DATE_LABEL);
        checkinLabel.addStyleName(CHECKIN_LABEL);
        checkinDateLabel.addStyleName(DATE_VALUE);
        checkinDateLabel.addStyleName(CHECKIN_DATE_LABEL);
        checkinWeekLabel.addStyleName(DATE_WEEK_D);
        checkinWeekLabel.addStyleName(CHECKIN_WEEK_LABEL);

        checkoutLabel.addStyleName(DATE_LABEL);
        checkoutLabel.addStyleName(CHECKOUT_LABEL);
        checkoutDateLabel.addStyleName(DATE_VALUE);
        checkoutDateLabel.addStyleName(CHECKOUT_DATE_LABEL);
        checkoutWeekLabel.addStyleName(DATE_WEEK_D);
        checkoutWeekLabel.addStyleName(CHECKOUT_WEEK_LABEL);

        checkinButton.addStyleName(CHECKIN_BUTTON);
        checkoutButton.addStyleName(CHECKOUT_BUTTON);

        durationLabel.addStyleName(DURATION_LABEL);
        nightsLabel.addStyleName(NIGHTS_LABEL);
        intervalValue.addStyleName(INTERVAL_VALUE);

        nightsListBox.addStyleName(NIGHTS_SELECTOR_LIST_BOX);

        this.layoutType = layoutType;
        drawIntervalWidget(layoutType);
    }

    /**
     * Draws the widget using the layout passed as argument
     * 
     * @param layout
     *            (supported layouts 1 2 3 4 5 6)
     */
    public void drawIntervalWidget(int layout) {
        switch (layout) {
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
        mainGrid.getRowFormatter().addStyleName(0, SELECTOR_CONTAINER);
        mainGrid.getRowFormatter().addStyleName(1, INFO_CONTAINER);

        FlexTable tSelector = new FlexTable();
        tSelector.addStyleName(DATE_CHANGER);
        tSelector.setWidget(0, 0, checkinA);
        tSelector.getCellFormatter().addStyleName(0, 0, DATE_SELECTOR);
        tSelector.setWidget(0, 1, nightsLabel);
        tSelector.getCellFormatter().addStyleName(0, 1, NIGHS_SELECTOR_LABEL);
        tSelector.setWidget(0, 2, nightsListBox);
        tSelector.getCellFormatter().addStyleName(0, 2, NIGHTS_SELECTOR_LIST_BOX);
        mainGrid.setWidget(0, 0, tSelector);

        FlexTable tInfo = new FlexTable();
        tInfo.addStyleName(DATE_INFO);
        tInfo.getRowFormatter().addStyleName(0, CHECKIN_INFO);
        tInfo.getRowFormatter().addStyleName(1, CHECKOUT_INFO);
        tInfo.setWidget(0, 0, checkinLabel);
        tInfo.setWidget(0, 1, checkinDateLabel);
        tInfo.setWidget(0, 2, checkinWeekLabel);
        tInfo.setWidget(1, 0, checkoutLabel);
        tInfo.setWidget(1, 1, checkoutDateLabel);
        tInfo.setWidget(1, 2, checkoutWeekLabel);
        mainGrid.setWidget(1, 0, tInfo);
        for (int i = 0; i < 3; i++) {
            tInfo.getCellFormatter().addStyleName(i, 0, COL_LABELS);
        }
    }

    private void drawLayout2() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_INFO);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateLabel);
        checkinInfo.add(checkinWeekLabel);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);

        idx++;
        mainGrid.getRowFormatter().addStyleName(idx, CHECKOUT_INFO);
        HorizontalPanel checkoutInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkoutLabel);
        checkoutInfo.add(checkoutDateLabel);
        checkoutInfo.add(checkoutWeekLabel);
        checkoutInfo.add(checkoutButton);
        mainGrid.setWidget(idx, 1, checkoutInfo);

        idx++;
        mainGrid.getRowFormatter().addStyleName(idx, DATE_INFO);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, durationLabel);
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.add(intervalValue);
        nightsInfo.add(nightsLabel);
        idx++;

        for (int i = 0; i < idx; i++) {
            mainGrid.getCellFormatter().addStyleName(i, 0, COL_LABELS);
        }
    }

    private void drawLayout3() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_INFO);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateLabel);
        checkinInfo.add(checkinWeekLabel);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, DATE_INFO);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.add(nightsListBox);
        mainGrid.setWidget(idx, 0, durationLabel);
        nightsInfo.add(nightsLabel);
        idx++;

        for (int i = 0; i < idx; i++) {
            mainGrid.getCellFormatter().addStyleName(i, 0, COL_LABELS);
        }
    }

    private void drawLayout4() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_INFO);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateLabel);
        checkinInfo.add(checkinWeekLabel);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, DATE_INFO);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.add(nightsListBox);
        mainGrid.setWidget(idx, 0, nightsLabel);
        nightsInfo.add(checkoutLabel);
        nightsInfo.add(checkoutDateLabel);
        idx++;

        for (int i = 0; i < idx; i++) {
            mainGrid.getCellFormatter().addStyleName(i, 0, COL_LABELS);
        }
    }

    private void drawLayout5() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_INFO);
        mainGrid.setWidget(idx, 0, checkinLabel);
        idx++;

        HorizontalPanel checkinInfo = new HorizontalPanel();
        checkinInfo.add(checkinDateLabel);
        checkinInfo.add(checkinWeekLabel);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 0, checkinInfo);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, DATE_INFO);
        mainGrid.setWidget(idx, 0, nightsLabel);
        idx++;

        mainGrid.setWidget(idx, 0, nightsListBox);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKOUT_INFO);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        nightsInfo.add(checkoutLabel);
        nightsInfo.add(checkoutDateLabel);
        mainGrid.setWidget(idx, 0, nightsInfo);

        idx++;
    }

    private void drawLayout6() {
        int idx = 0;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKIN_INFO);
        HorizontalPanel checkinInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 0, checkinLabel);
        checkinInfo.add(checkinDateLabel);
        checkinInfo.add(checkinWeekLabel);
        checkinInfo.add(checkinButton);
        mainGrid.setWidget(idx, 1, checkinInfo);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, DATE_INFO);
        HorizontalPanel nightsInfo = new HorizontalPanel();
        mainGrid.setWidget(idx, 1, nightsInfo);
        nightsInfo.add(nightsListBox);
        mainGrid.setWidget(idx, 0, nightsLabel);
        idx++;

        mainGrid.getRowFormatter().addStyleName(idx, CHECKOUT_INFO);
        mainGrid.setWidget(idx, 0, checkoutLabel);
        mainGrid.setWidget(idx, 1, checkoutDateLabel);
        idx++;

        for (int i = 0; i < idx; i++) {
            mainGrid.getCellFormatter().addStyleName(i, 0, COL_LABELS);
        }
    }

    private void updateInputsFromNights() {
        checkoutCalendar.setSelectedDate(GWTCDatePicker.increaseDate(getInitDate(), nightsListBox.getSelectedIndex()));
        checkoutDateLabel.setText(checkoutCalendar.getSelectedDateStr(longDateFormat));
        checkoutWeekLabel.setText(checkoutCalendar.getSelectedDateStr(weekDayFormat));
        checkoutCalendar.drawCalendar();
        intervalValue.setText("" + getNights());
        updateInputs();
    }

    private void updateInputsFromCheckout() {
        int nights = getNights();
        if (nights >= 0)
            nightsListBox.setItemSelected(nights, true);
        updateInputs();
    }

    private void updateInputsFromCheckin() {
        checkoutCalendar.setMinimalDate(getInitDate());
        checkoutCalendar.setMaximalDate(GWTCDatePicker.increaseDate(getInitDate(), maxdays));

        int nightsFromBox = nightsListBox.getSelectedIndex();
        if (nightsFromBox == 0 || layoutType != LAYOUT_2)
            checkoutCalendar.setSelectedDate(GWTCDatePicker.increaseDate(getInitDate(), nightsFromBox));

        int nights = getNights();
        if (nights >= 0)
            nightsListBox.setItemSelected(nights, true);

        updateInputs();
    }

    private void updateInputs() {
        checkinDateLabel.setText(checkinCalendar.getSelectedDateStr(longDateFormat));
        checkinWeekLabel.setText(checkinCalendar.getSelectedDateStr(weekDayFormat));

        checkoutDateLabel.setText(checkoutCalendar.getSelectedDateStr(longDateFormat));
        checkoutWeekLabel.setText(checkoutCalendar.getSelectedDateStr(weekDayFormat));

        intervalValue.setText("" + getNights());
    }

    /**
     * set the first day of the interval
     * 
     * @param d
     *            Date
     */
    public void setInitDate(Date d) {
        checkinCalendar.setSelectedDate(d);
        updateInputsFromCheckin();
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
        updateInputs();
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
        return GWTCDatePicker.compareDate(getInitDate(), getEndDate());
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
    private void initListeners() {
        checkinCalendar.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                checkinCalendar.hide();
                updateInputsFromCheckin();
                changeListeners.fireChange(sender);
            }
        });
        checkoutCalendar.addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                checkoutCalendar.hide();
                updateInputsFromCheckout();
                changeListeners.fireChange(sender);
            }
        });
        checkinButton.addClickListener(clickListener);
        checkinDateLabel.addClickListener(clickListener);

        checkinA.addClickListener(clickListener);
        checkinA.setTargetHistoryToken("");

        checkoutButton.addClickListener(clickListener);
        // checkoutDateLabel.addClickListener(clickListener);
    }

    /**
     * a clicklistener preconfigured to launch DatePicker when the user clicks the buttons
     */
    ClickListener clickListener = new ClickListener() {
        public void onClick(Widget sender) {
            if (sender == checkinButton || sender == checkinA || sender == checkinDateLabel) {
                checkinCalendar.show(sender);
                checkoutCalendar.hide();
            } else if (sender == checkoutButton || sender == checkoutDateLabel) {
                checkoutCalendar.show(sender);
                checkinCalendar.hide();
            } else {
                return;
            }
        }
    };

    /**
     * The internationalized hash map.
     */
    private Map<String, String> strs = new HashMap<String, String>();

    /**
     * An useful method to extract internaitonalized string for the Map str
     * 
     * @param m
     *            key string to internationalize
     * @return String the internationalized string
     */
    private String getMsg(String m) {
        String ret = null;
        if (strs != null)
            ret = strs.get(m);
        return (ret != null ? ret : m);
    }

    /**
     * @deprecated
     */
    public void setLocale(Map keys, String[] wdays, String[] months, int wStart) {
        setLocale(keys);
    }

    /**
     * <p>
     * Method for internationalize the components of this interval selector
     * </p>
     * <p>
     * You have to provide a Map(String, String) with ant least these keys
     * </p>
     * <ul >
     * <li>format.date {format for date representation, default 'dd MMMM, yyyy'}</li>
     * <li>format.day {format for weekday representaion default '(ddd)'</li>
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
     */
    public void setLocale(Map<String, String> keys) {
        strs = keys;
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

    /**
     * Set the minimal selectable date for the interval
     * 
     * @param d
     *            Date
     */
    public void setMinimalDate(Date d) {
        checkinCalendar.setMinimalDate(d);
    }

    public void disableYearButtons() {
        checkinCalendar.disableYearButtons();
        checkoutCalendar.disableYearButtons();
    }

}
