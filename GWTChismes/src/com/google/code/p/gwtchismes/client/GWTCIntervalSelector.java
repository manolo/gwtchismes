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
 * @author Manuel Carrasco Moñino
 * <h3>Class description</h3>
        <p> A widget to select an interval betwen two dates. </p>
        <p>You can configure minimalDate, maximalDate, layout, and number of days for the interval. </p>
   <h3>Example</h3>
    <pre>
        // Configure internationalized strings using english language
        private String[] days_en = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
        private String[] months_en = new String[] { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };
        private HashMap strs_en = new HashMap();
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
        
        // Create a layout1 interval-selector and set the locale in english 
        GWTCIntervalSelector interval1 = new GWTCIntervalSelector(1);
        interval1.setLocale(strs_en, days_en, months_en, 0);
    </pre>        
        
     <h3>CSS Style Rules</h3>
       <ul>
         <li>  .GWTCIntervalSelector { GWTCIntervalSelector main container} </li>
       </ul>     
     
     <p> css styles for layouttype=1
       <ul>
        <li>.GWTCIntervalLayout1 {container table}</li>
        <li>.SelectorContainer {row that contains the table with the selection widgets}</li>
        <li>.DateChanger { class for the table container of selection widgets } </li> 
        <li>.DateChanger.DateSelector { class for the cell with the link that lauch the DatePicker} </li>
        <li>.DateChanger.NighsSelectorLabel  {class for the cell with the interval label } </li>
        <li>.DateChanger.NightsSelectorListBox { class for the cell with the interval selector box } </li>
        
        <li>.InfoContainer  {row that contains the table with information about the interval } </li> 
        <li> .DateInfo { class for the table container of info about the interval } </li>
        <li> .DateInfo.CheckinInfo { class for the row <tr> with the info of the begin of interval } <li>
        <li> .DateInfo.CheckoutInfo { class for the row <tr> with the info of the end of interval } <li>
        <li> .DateLabel (class for the cell with the date label) </li>
        <li> .DateValue (class for the cell with the date value) </li>
        <li> .DateWeekD (class for the cell with the weekday name) </li>
        <li> .ColLabels (aditional class for the cells of the fisrt column) </li>
       </ul>
      </p>
      
     <p> css styles for layouttype=2
     <ul>
        <li>.GWTCIntervalLayout2 {container table}</li>
        <li> .CheckinInfo { class for the row <tr> with the info of the begin of interval } <li>
        <li> .checkinLabel {class for the label for the first day in interval } </li>
        <li> .checkinDateLabel {class for the label with the initial date in interval} </li>
        <li> .checkinWeekLabel { class for the label with the weekday name ) </li>
        <li> .checkinButton {class for the button that launchs the DatePicker for initial day} </li>
        
        <li> .CheckoutInfo { class for the row <tr> with the info of the end of interval } <li>
        <li> .checkoutLabel {class for the label for the last day in interval } </li>
        <li> .checkoutDateLabel {class for the label with the lastl date in interval} </li>
        <li> .checkoutWeekLabel { class for the label with the weekday name ) </li>
        <li> .checkoutButton {class for the button that launchs the DatePicker for end day} </li>
        
        <li> .DateInfo { class for the row <tr> with the iterval info} </li>
        <li> .durationLabel { class of the duration label} </li>
        
        <li> .ColLabels { aditional class for cells in the first column } </li>
       </ul> 
      </p>
      
     <p> css styles for layouttype=3
      <ul>
        <li>.GWTCIntervalLayout3 {container table}</li>
        <li> .CheckinInfo { class for the row <tr> with the info of the begin of interval } <li>
        <li> .checkinLabel {class for the label for the first day in interval } </li>
        <li> .checkinDateLabel {class for the label with the initial date in interval} </li>
        <li> .checkinWeekLabel { class for the label with the weekday name ) </li>
        <li> .checkinButton {class for the button that launchs the DatePicker for initial day} </li>

        <li> .DateInfo { class for the row <tr> with the iterval info} </li>
        <li> .durationLabel { class of the duration label} </li>
        
        <li> .ColLabels { aditional class for cells in the first column } </li>
       </ul>
      </p>   
 */
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

    private String longDateFormat = DateTimeFormat.getLongDateFormat().getPattern();
    private String weekDayFormat = "(EEE)";

    /**
     * Constructor
     *  
     * @param layoutType type of layout for the interval selector
     */
    public GWTCIntervalSelector(int layoutType) {
        outer.setStyleName(styleName);
        initWidget(outer);
        this.initListeners();
        setMaxdays(maxdays);
        this.layoutType = layoutType;
        drawIntervalWidget(layoutType);
        checkoutCalendar.addStyleName("GWTCDatePickerCheckout");
        checkinCalendar.addStyleName("GWTCDatePickerCheckin");
    }

    /**
     * Draws the widget using the layout passed as argument
     * 
     * @param layout (supported layouts 1 2 y 3)
     */
    public void drawIntervalWidget(int layout) {
        outer.clear();
        FlexTable grid = new FlexTable();
        outer.add(grid);
        nightsListBoxContainer.clear();
        nightsListBoxContainer.add(nightsListBox);

        grid.addStyleName("GWTCIntervalLayout" + layout);

        if (layout==1){
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
            
        } else if (layout==2 || layout==3){
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

            if (layout == 2) {
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
            if (layout == 3) {
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
        if (nightsFromBox == 0 || layoutType != 2 )
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

        // checkoutCalendar.drawCalendar();

        intervalValue.setText("" + getNights());
    }

    /**
     *  set the first day of the interval
     *   
     * @param d Date
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
     *  A collection to store click listeners
     */
    private ChangeListenerCollection changeListeners;

    /**
     * method for th onClick event 
     */
    public void onClick(Widget sender) {
        if (changeListeners != null)
            changeListeners.fireChange(this);
    }

    /**
     * Adds a click listener
     * 
     * @param listener
     */
    public void addChangeListener(ChangeListener listener) {
        if (changeListeners == null)
            changeListeners = new ChangeListenerCollection();
        changeListeners.add(listener);
    }

    /**
     * Removes a click listener
     * 
     * @param listener
     */
    public void removeChangeListener(ChangeListener listener) {
        if (changeListeners != null)
            changeListeners.remove(listener);
    }

    /**
     *  Configure the default listeners for the elements of this interval selector  
     */
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

    /**
     *  a clicklistener preconfigured to launch DatePicker when the user clicks the buttons
     */
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
    /**
     *  The internationalized hash map.
     */
    private Map strs = new HashMap();

    /**
     * An useful method to extract internaitonalized string for the Map str
     * 
     * @param m key string to internationalize
     * @return String the internationalized string
     */
    private String getMsg(String m) {
        String ret = null;
        if (strs != null)
            ret = (String) strs.get(m);
        return (ret != null ? ret : m);
    }

    /**
     * <p>
     * Method for internationalize the components of this interval selector
     * </p>
     * <p>
     * You have to provide a Map with ant least these keys
     * </p>
     * <ul >
     * <li>format.date {format for date representation, default 'dd MMMM, yyyy'} </li>
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
     * <li>key.calendar.help </li>
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
/*
        if (getMsg("format.date")!=null) {
            longDateFormat = getMsg("format.date");
        }
        if (getMsg("format.day") != null) {
            weekDayFormat = getMsg("format.day");
        }
*/
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
     *          Date
     */
    public void setMinimalDate(Date d) {
        checkinCalendar.setMinimalDate(d);
    }

}
