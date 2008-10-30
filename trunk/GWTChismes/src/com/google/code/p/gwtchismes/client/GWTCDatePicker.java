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

import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.constants.DateTimeConstants;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ChangeListenerCollection;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.SourcesChangeEvents;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco Moñino
 * 
 * <h3>Class description</h3>
 * <p>
 * A widget to pick a date. It can be implemented as an independent dialog box or it can be included into another widget.
 * </p>
 * <p>
 * You can configure minimalDate, maximalDate, cursorDate and help text
 * It uses GWT-i18n for day names, month names, help, and weekStart
 * </p>
 * <p>
 * This class has public static methods useful for Date manipulation
 * </p>
 * <h3>Example</h3>
 * 
 * <pre>
 * // Create a GWTCDatePicker that is show into the page
 * final GWTCDatePicker picker_en = new GWTCDatePicker(false);
 * // Disable close button, becouse it is not a dialog
 * picker_en.disableCloseButton();
 * // Configure date limits
 * picker_en.setMinimalDate(GWTCDatePicker.increaseYear(new Date(), -1));
 * picker_en.setMaximalDate(GWTCDatePicker.increaseYear(new Date(), 10));
 * // Add an action when the user selects a day
 * picker_en.addChangeListener(new ChangeListener() {
 *     public void onChange(Widget sender) {
 *         Window.alert(picker_en.getSelectedDateStr(&quot;MMMM dd, yyyy (dddd)&quot;));
 *     }
 * });
 * // Repaint the calendar
 * picker_en.drawCalendar();
 * 
 * </pre>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCDatePicker { GWTCDatePicket container }</li>
 * <li>.Caption { calendar text }</li>
 * <li>.Cal_Buttons { navigation buttons }</li>
 * <li>.Cal_TopButtons { container of top navigation buttons }</li>
 * <li>.Cal_BottomButtons { container of bottom navigation buttons }</li>
 * <li>.Cal_Header { text with the current month and year }</li>
 * <li>.Cal_WeekHeader { week headers row}</li>
 * <li>.Cal_CellDayNames { cells with day names} </li>
 * <li>.Cal_CellEmpty { cell without days }</li>
 * <li>.Cal_CellDay { primary style on each cell that has days }</li>
 * <li>.Cal_InvalidDay { cell with days which can not be selected because are out of the allowed interval }</li>
 * <li>.Cal_Selected { selected day }</li>
 * <li>.Cal_AfterSelected { days after the selected day and before the maximal day } </li>
 * <li>.Cal_BeforeSelected { days before the selected day and after the minimal day}</li>
 * <li>.Cal_Today { today } </li>
 * <li>.Cal_Help { help dialog } </li>
 * <li>.Cal_NoBox { container when it is not drawn a box } </li>
 * </ul>
 */
public class GWTCDatePicker extends Composite implements ClickListener, SourcesChangeEvents {

    private String styleName = "GWTCDatePicker";

    private static String StyleCButtons = "Cal_Buttons";
    private static String StyleCTopButtons = "Cal_TopButtons";
    private static String StyleCBottomButtons = "Cal_BottomButtons";

    private static String StyleCHeader = "Cal_Header";

    private static String StyleCGrid = "Cal_Grid";

    private static String StyleCWeekHeader = "Cal_WeekHeader";

    private static String StyleCCellDayNames = "Cal_CellDayNames";

    private static String StyleCCellEmpty = "Cal_CellEmpty";

    private static String StyleCCellDays = "Cal_CellDays";

    private static String StyleCInvalidDay = "Cal_InvalidDay";

    private static String StyleCSelected = "Cal_Selected";

    private static String StyleCAfterSelected = "Cal_AfterSelected";

    private static String StyleCBeforeSelected = "Cal_BeforeSelected";

    private static String StyleCToday = "Cal_Today";

    private static String StyleHelp = "Cal_Help";
    
    private static String StyleNoBox = "Cal_NoBox";


    private Date minimalDate = setHourToZero(new Date());

    private Date selectedDate = setHourToZero(new Date());

    private Date cursorDate = setHourToZero(new Date());

    private Date maximalDate = GWTCDatePicker.increaseDate(selectedDate, 365);

    // Internationalizable elements
    protected static DateTimeConstants dateTimeConstants = (DateTimeConstants) GWT.create(DateTimeConstants.class);
    private int weekStart = Integer.valueOf(dateTimeConstants.firstDayOfTheWeek()).intValue() - 1;;

    private final GWTCAlert help = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE);
    private String helpStr = "Calendar-Picker is a component of GWTChismes library.\n" + "(c) Manuel Carrasco 2007\nhttp://code.google.com/p/gwtchismes\n\n" + "Navigation buttons:\n"
            + "\u003c Previous Month\n\u003e Next Month\n\u00AB Previous Year\n\u00BB Next Year\n- Actual Month\nx Close\n ";

    // Containers
    private DialogBox calendarDlg = null;

    private Panel outer = new VerticalPanel();
    
    // Date grid
    private final FlexTable grid = new FlexTable();
    
    // Navigation Buttons
    private final DockPanel navButtons = new DockPanel();

    private final DockPanel bottomButtons = new DockPanel();

    private final DockPanel topButtons = new DockPanel();
    
    private final HTML titleBtn = new HTML();

    private final GWTCButton helpBtn = new GWTCButton("?", this);

    private final GWTCButton closeBtn = new GWTCButton("x", this);

    private final GWTCButton actualMBtn = new GWTCButton("-", this);

    // public final GWTCButton prevMBtn = new GWTCButton("\u003c", this);
    private final GWTCButton prevMBtn = new GWTCButton("&lt;", this);

    private final GWTCButton prevYBtn = new GWTCButton("\u00AB", this);

    private final GWTCButton nextMBtn = new GWTCButton("\u003e", this);

    private final GWTCButton nextYBtn = new GWTCButton("\u00BB", this);

    private HorizontalPanel prevButtons = new HorizontalPanel();

    private HorizontalPanel nextButtons = new HorizontalPanel();

    private boolean needsRedraw = true;

    public static int CONFIG_DIALOG = 1;
    public static int CONFIG_BORDERS = 2;
    public static int CONFIG_AUTOHIDE = 4;
    public static int CONFIG_SCROLL_INTO = 8;
    
    /**
     * Constructor, you need specify the behaviour: floating dialog box or embeded widget
     * 
     * @param dialog
     *            true if you wan an independient and drageable dialog box when the picker is showed
     */
    public GWTCDatePicker(boolean dialog) {
        if (dialog)
            initialize(CONFIG_DIALOG);
        else
            initialize(0);

    }

    public GWTCDatePicker(int config) {
        initialize(config);
    }
    
    public void onAttach() {
        super.onAttach();
        adjustDimensions();
    }

    private void initialize(int config) {
        if ((config & CONFIG_BORDERS) == CONFIG_BORDERS) {
            outer = new GWTCBox();
        } else {
            outer.addStyleName(StyleNoBox);
        }
        if ((config & CONFIG_DIALOG) == CONFIG_DIALOG) {
            calendarDlg = new DialogBox((config & CONFIG_AUTOHIDE)== CONFIG_AUTOHIDE);
            calendarDlg.setWidget(outer);
            calendarDlg.setAnimationEnabled(true);
            initWidget(new DockPanel());
        } else {
            initWidget(outer);
            drawCalendar();
            disableCloseButton();
        }
        setStyleName(styleName);
        help.addStyleName(StyleHelp);

        navButtons.setStyleName(GWTCDatePicker.StyleCButtons);
        titleBtn.setStyleName(GWTCDatePicker.StyleCHeader);

        navButtons.add(bottomButtons, DockPanel.SOUTH);
        navButtons.add(topButtons, DockPanel.NORTH);

        prevButtons.add(prevYBtn);
        prevButtons.add(prevMBtn);
        nextButtons.add(nextMBtn);
        nextButtons.add(nextYBtn);

        bottomButtons.addStyleName(StyleCBottomButtons);
        bottomButtons.add(prevButtons, DockPanel.WEST);
        bottomButtons.add(actualMBtn, DockPanel.CENTER);
        bottomButtons.add(nextButtons, DockPanel.EAST);
        bottomButtons.setVerticalAlignment(DockPanel.ALIGN_MIDDLE);
        bottomButtons.setCellVerticalAlignment(actualMBtn, HasAlignment.ALIGN_MIDDLE);
        bottomButtons.setCellHorizontalAlignment(prevButtons, DockPanel.ALIGN_LEFT);
        bottomButtons.setCellHorizontalAlignment(nextButtons, DockPanel.ALIGN_RIGHT);
        bottomButtons.setCellHorizontalAlignment(actualMBtn, HasAlignment.ALIGN_CENTER);
        bottomButtons.setCellWidth(actualMBtn, "100%");
        actualMBtn.setWidth("100%");

        topButtons.addStyleName(StyleCTopButtons);
        topButtons.add(helpBtn, DockPanel.WEST);
        topButtons.add(titleBtn, DockPanel.CENTER);
        topButtons.add(closeBtn, DockPanel.EAST);
        topButtons.setVerticalAlignment(DockPanel.ALIGN_MIDDLE);
        topButtons.setCellVerticalAlignment(titleBtn, HasAlignment.ALIGN_MIDDLE);
        topButtons.setCellHorizontalAlignment(helpBtn, DockPanel.ALIGN_LEFT);
        topButtons.setCellHorizontalAlignment(closeBtn, DockPanel.ALIGN_RIGHT);
        topButtons.setCellHorizontalAlignment(titleBtn, HasAlignment.ALIGN_CENTER);
        topButtons.setCellWidth(titleBtn, "100%");

    }

    /**
     * Sets the object's style name to the calendar container, removing all other styles.
     * 
     * @see com.google.gwt.user.client.ui.UIObject#setStyleName(java.lang.String)
     */
    public void setStyleName(String s) {
        styleName = s;
        if (calendarDlg != null) {
            calendarDlg.setStyleName(styleName);
        } else
            outer.setStyleName(styleName);
    }

    /**
     * Adds a secondary or dependent style name to this object
     * 
     * @see com.google.gwt.user.client.ui.UIObject#addStyleName(java.lang.String)
     */
    public void addStyleName(String s) {
        if (calendarDlg != null) {
            calendarDlg.addStyleName(s);
        } else
            outer.addStyleName(s);
    }

    /**
     * Draw or redraw all calendar elements into the container
     * 
     */
    public void drawCalendar() {
        if (this.isVisible() == false)
            return;
        if (!needsRedraw)
            return;
        
        grid.setStyleName(GWTCDatePicker.StyleCGrid);
        grid.setCellSpacing(0);

        outer.clear();
        outer.add(navButtons);
        outer.add(grid);

        titleBtn.setHTML(GWTCDatePicker.formatDate("MMMM, yyyy", cursorDate));

        grid.getRowFormatter().setStyleName(0, GWTCDatePicker.StyleCWeekHeader);
        int l = 0;
        for (int i = weekStart; i < 7; i++) {
            grid.getCellFormatter().setStyleName(0, l, GWTCDatePicker.StyleCCellDayNames);
            grid.setText(0, l++, dateTimeConstants.shortWeekdays()[i]);
        }
        if (l < 7) {
            grid.getCellFormatter().setStyleName(0, l, GWTCDatePicker.StyleCCellDayNames);
            grid.setText(0, l++, dateTimeConstants.shortWeekdays()[0]);
        }

        Date firstDate = new Date(cursorDate.getYear(), cursorDate.getMonth(), 1);
        long todayNum = 1 + GWTCDatePicker.compareDate(firstDate, new Date());
        long minimalNum = 1 + GWTCDatePicker.compareDate(firstDate, minimalDate);
        long maximalNum = 1 + GWTCDatePicker.compareDate(firstDate, maximalDate);
        long selectedNum = 1 + GWTCDatePicker.compareDate(firstDate, selectedDate);
        // long cursorNum = 1 + GWTCDatePicker.compareDate(firstDate, cursorDate);
        int firstWDay = firstDate.getDay();
        int numOfDays = GWTCDatePicker.daysInMonth(cursorDate);
        int j = 0 + weekStart;

        for (int i = 1; i < 7; i++) { // each row in the grid
            for (int k = 0; k < 7; k++, j++) { // each day in the week
                int displayNum = (firstWDay < weekStart) ? (j - firstWDay - 6) : (j - firstWDay + 1);
                if (j < firstWDay || displayNum > numOfDays || displayNum <= 0) {
                    grid.getCellFormatter().setStyleName(i, k, GWTCDatePicker.StyleCCellEmpty);
                    grid.setHTML(i, k, "&nbsp;");
                } else {
                    HTML html = new CellHTML(displayNum);
                    grid.getCellFormatter().setStyleName(i, k, GWTCDatePicker.StyleCCellDays);
                    html.setStyleName(GWTCDatePicker.StyleCCellDays);
                    if (displayNum < minimalNum || displayNum > maximalNum) {
                        html.addStyleName(GWTCDatePicker.StyleCInvalidDay);
                        grid.getCellFormatter().addStyleName(i, k, GWTCDatePicker.StyleCInvalidDay);
                    } else if (displayNum == selectedNum) {
                        html.addStyleName(GWTCDatePicker.StyleCSelected);
                        grid.getCellFormatter().addStyleName(i, k, GWTCDatePicker.StyleCSelected);
                        html.addClickListener(this);
                    } else if (displayNum >= selectedNum) {
                        html.addStyleName(GWTCDatePicker.StyleCAfterSelected);
                        grid.getCellFormatter().addStyleName(i, k, GWTCDatePicker.StyleCAfterSelected);
                        html.addClickListener(this);
                    } else {
                        html.addStyleName(GWTCDatePicker.StyleCBeforeSelected);
                        grid.getCellFormatter().addStyleName(i, k, GWTCDatePicker.StyleCBeforeSelected);
                        html.addClickListener(this);
                    }
                    if (displayNum == todayNum) {
                        html.addStyleName(GWTCDatePicker.StyleCToday);
                        grid.getCellFormatter().addStyleName(i, k, GWTCDatePicker.StyleCToday);
                    }
                    // else if (displayNum == cursorNum) {
                    // grid.getCellFormatter().addStyleName(i, k, "Cal_Cursor");
                    // }
                    grid.setWidget(i, k, html);
                }
            }
        }
        prevMBtn.setEnabled(isVisibleMonth(cursorDate, -1));
        nextMBtn.setEnabled(isVisibleMonth(cursorDate, 1));
        prevYBtn.setEnabled(isVisibleMonth(cursorDate, -12));
        nextYBtn.setEnabled(isVisibleMonth(cursorDate, 12));

        needsRedraw = false;
        adjustDimensions();
    }
    
    private void adjustDimensions() {
       int incr = outer instanceof GWTCSimpleBox ? 30 : 2;
       navButtons.setWidth(grid.getOffsetWidth() + "px");
       outer.setWidth(grid.getOffsetWidth() + incr + "px");
       if (calendarDlg != null) 
           calendarDlg.setWidth(outer.getOffsetWidth() + "px");
    }
    
    private void moveIntoVisibleArea() {
        if (calendarDlg != null) {
            int w = Window.getClientWidth() + Window.getScrollLeft();
            int xd = calendarDlg.getAbsoluteLeft();
            int wd = grid.getOffsetWidth() + 40;
            
            if ( (xd + wd) > w ) {
                xd = xd - ((xd + wd) - w);
            }
            int h = Window.getClientHeight() + Window.getScrollTop();
            int yd = calendarDlg.getAbsoluteTop();
            int hd = calendarDlg.getOffsetHeight();
            if ( (yd + hd) > h ) {
                yd = yd - ((yd + hd) - h);
            }
            calendarDlg.setPopupPosition(xd, yd);
        }
    }


    /**
     * show the calendar container, if the calendar picker is a dialog box and param sender is not null the dialog is positioned near of it
     * 
     * @param sender
     *            the widget that the user has clicked
     */
    public void show(Widget sender) {
        this.drawCalendar();
        if (calendarDlg == null) {
            outer.setVisible(true);
        } else {
            if (sender != null) {
                calendarDlg.setPopupPosition(sender.getAbsoluteLeft() + 20, sender.getAbsoluteTop() + 10);
            } else {
                calendarDlg.center();
            }
            calendarDlg.show();
        }
        moveIntoVisibleArea();
        adjustDimensions();
        DOM.scrollIntoView(grid.getElement());
    }


    /**
     * Hide the calendar container.
     * 
     */
    public void hide() {
        if (calendarDlg != null) {
            if (calendarDlg.isAttached()) {
                calendarDlg.hide();
            }
        } else
            outer.setVisible(false);
    }

    /**
     * Set the text for the caption of the dialog box. It is only available if the calendar is shown as a dialog.
     * 
     * @param t
     *            the message to display
     */
    public void setText(String t) {
        if (calendarDlg != null)
            calendarDlg.setText(t);
    }

    /**
     * Set the help text.
     * 
     * @param t
     *            the help message to display, if t is null help button is disabled
     */
    public void setHelp(String t) {
        helpStr = t;
        if (t == null || t.length() == 0)
            helpBtn.setVisible(false);
        else
            helpBtn.setVisible(true);
    }

    /**
     * Disable the close Button
     */
    public void disableCloseButton() {
        this.closeBtn.setVisible(false);
    }
    /**
     * Disable buttons for year jumping
     */
    public void disableYearButtons() {
        this.nextYBtn.setVisible(false);
        this.prevYBtn.setVisible(false);
    }



    /**
     * Set the date where the calendar is positioned
     * 
     * @param d
     *            Date
     */
    public void setCursorDate(Date d) {
        Date fd = new Date(d.getYear(), d.getMonth(), 1);
        if (isVisibleMonth(fd, 0)) {
            this.needsRedraw = true;
            cursorDate = setHourToZero(fd);
        }
    }

    /**
     * Set the date selected by the user
     * 
     * @param d
     *            Date
     */
    public void setSelectedDate(Date d) {
        d = setHourToZero(d);
        if (GWTCDatePicker.compareDate(d, selectedDate) != 0) {
            needsRedraw = true;
            selectedDate = d;
            setCursorDate(d);
            drawCalendar();
        }
    }

    /**
     * Set the minimal selectable date
     * 
     * @param d
     *            Date
     */
    public void setMinimalDate(Date d) {
        this.needsRedraw = true;
        minimalDate = setHourToZero(d);
        if (cursorDate.getTime() < minimalDate.getTime() || selectedDate.getTime() < minimalDate.getTime())
            this.setSelectedDate(d);
        if (maximalDate.getTime() < minimalDate.getTime())
            maximalDate = d;
    }

    /**
     * Set the maximal selectable date
     * 
     * @param d
     *            Date
     */
    public void setMaximalDate(Date d) {
        this.needsRedraw = true;
        maximalDate = setHourToZero(d);
        if (cursorDate.getTime() > maximalDate.getTime() || selectedDate.getTime() > maximalDate.getTime())
            this.setSelectedDate(d);
        if (minimalDate.getTime() > maximalDate.getTime())
            minimalDate = d;
    }

    /**
     * Get the date selected by the user
     * 
     * @return Date
     */
    public Date getSelectedDate() {
        return selectedDate;
    }

    /**
     * Get a string with the selected date in the desired format
     * 
     * @param format
     *            representation of the desired format [dddd ddd dd yyyy yy MMMM MMM MM]
     * @return String
     */
    public String getSelectedDateStr(String format) {
        return formatDate(format, selectedDate);
    }

    /*
     * (non-Javadoc)
     */
    private ChangeListenerCollection changeListeners;

    /*
     * (non-Javadoc)
     * 
     * @see com.google.gwt.user.client.ui.ClickListener#onClick(com.google.gwt.user.client.ui.Widget)
     */
    public void onClick(Widget sender) {
        if (sender == prevMBtn) {
            setCursorDate(GWTCDatePicker.increaseMonth(cursorDate, -1));
            drawCalendar();
        } else if (sender == nextMBtn) {
            setCursorDate(GWTCDatePicker.increaseMonth(cursorDate, 1));
            drawCalendar();
        } else if (sender == prevYBtn) {
            setCursorDate(GWTCDatePicker.increaseYear(cursorDate, -1));
            drawCalendar();
        } else if (sender == nextYBtn) {
            setCursorDate(GWTCDatePicker.increaseYear(cursorDate, 1));
            drawCalendar();
        } else if (sender == actualMBtn) {
            setCursorDate(new Date());
            drawCalendar();
        } else if (sender == helpBtn) {
            // Window.alert(helpStr);
            help.alert(helpStr.replaceAll("\\n", "<br/>"));
        } else if (sender == closeBtn) {
            if (calendarDlg != null) {
                calendarDlg.hide();
            } else {
                outer.setVisible(false);
            }
        } else if (sender instanceof CellHTML) {
            CellHTML cell = (CellHTML) sender;
            setSelectedDate(new Date(cursorDate.getYear(), cursorDate.getMonth(), cell.getDay()));
            if (changeListeners != null)
                changeListeners.fireChange(this);
        } else {
            // an unknown click listener
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.google.gwt.user.client.ui.SourcesChangeEvents#addChangeListener(com.google.gwt.user.client.ui.ChangeListener)
     */
    public void addChangeListener(ChangeListener listener) {
        if (changeListeners == null)
            changeListeners = new ChangeListenerCollection();
        changeListeners.add(listener);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.google.gwt.user.client.ui.SourcesChangeEvents#removeChangeListener(com.google.gwt.user.client.ui.ChangeListener)
     */
    public void removeChangeListener(ChangeListener listener) {
        if (changeListeners != null)
            changeListeners.remove(listener);
    }

    public static final int CONST_YEARS = 1;
    public static final int CONST_MONTHS = 2;
    public static final int CONST_DAYS = 3;

    /**
     * Add days to a reference Date
     * 
     * @param d
     *            Date of reference
     * @param n
     *            number of days to increase (for decrease use negative values)
     * @return the new Date
     */
    public static Date increaseDate(Date d, int n) {
        Date ret = new Date(GWTCDatePicker.add(d.getTime(), n, GWTCDatePicker.CONST_DAYS));
        return ret;
    }

    /**
     * Add months to a reference Date
     * 
     * @param d
     *            Date of reference
     * @param n
     *            number of months to increase (for decrease use negative values)
     * @return the new Date
     */
    public static Date increaseMonth(Date d, int n) {
        if (d.getDate() > 28) {
            Date tmp = new Date(d.getTime());
            tmp.setDate(1);
            GWTCDatePicker.add(tmp.getTime(), n, GWTCDatePicker.CONST_MONTHS);
            int d1 = daysInMonth(d);
            int d2 = daysInMonth(tmp);
            if (d1 > d2)
                d.setDate(d2);
        }

        return new Date(GWTCDatePicker.add(d.getTime(), n, GWTCDatePicker.CONST_MONTHS));
    }

    /**
     * Add years to a reference Date
     * 
     * @param d
     *            Date of reference
     * @param n
     *            number of years to increase (for decrease use negative values)
     * @return the new Date
     */
    public static Date increaseYear(Date d, int n) {
        return new Date(GWTCDatePicker.add(d.getTime(), n, GWTCDatePicker.CONST_YEARS));
    }

    /**
     * Calculate the number of days in a month
     * 
     * @param d
     *            reference date
     * @return the number of days in this month [1...31]
     */
    public static int daysInMonth(Date d) {
        int m = d.getMonth();
        switch (m) {
        case 1:
            int y = d.getYear() + 1900;
            return  (y % 4 == 0 && y % 100 != 0) ? 29 : 28;
        case 3: case 5: case 8: case 10: 
            return 30;
        default:
            return 31;
        }
    }

    /**
     * Calculate the number of days betwen two dates
     * 
     * @param a
     *            Date
     * @param b
     *            Date
     * @return the difference in days betwen b and a (b - a)
     */
    public static int compareDate(Date a, Date b) {
        long d1 = setHourToZero(a).getTime();
        long d2 = setHourToZero(b).getTime();
        return (int) ((d2 - d1) / 1000 / 60 / 60 / 24);
    }

    /**
     * Increase/decrease a date based in a type parameter which specifies the type of operation
     * 
     * This method is coded enterely in native javascript because it has native methods to increase dates
     * 
     * @param time
     *            in milliseconds since 1-1-1970
     * @param value
     *            interval to add (use negative values to decrease)
     * @param type
     *            type of addition (1=days, 2=months, 3=years, 4=hours
     * @return number of milliseconds from 1-1-1970
     */
    private static long add(long time, int value, int type) {
        Date d = new Date(time);
        d.setHours(12);
        if (type == 1)
            d.setYear(d.getYear() + value);
        if (type == 2)
            d.setMonth(d.getMonth() + value);
        if (type == 3)
            d.setDate(d.getDate() + value);
        return d.getTime();
    }
    /**
     * This method returns true or false whether a month has selectable days in the allowed interval
     * 
     * @param date
     *            Date of the selected day
     * @param months
     *            increment of months
     * @return true if the month has selectable days
     */
    private boolean isVisibleMonth(Date date, int months) {
        Date d = GWTCDatePicker.increaseMonth(date, months);
        Date firstD = new Date(d.getTime());
        firstD.setDate(1);
        Date lastD = new Date(d.getTime());
        lastD.setDate(GWTCDatePicker.daysInMonth(d));

        if (GWTCDatePicker.compareDate(minimalDate, lastD) < 0) {
            return false;
        }
        if (GWTCDatePicker.compareDate(maximalDate, firstD) > 0) {
            return false;
        }
        return true;
    }

    /**
     * Set hour, minutes, second and milliseconds to zero.
     * 
     * @param date
     *            Date
     * @return Modified date
     */
    public static Date setHourToZero(Date date) {
        Date d = new Date(date.getTime());
        d.setHours(12);
        d.setMinutes(0);
        d.setSeconds(0);
        // a trick to set milliseconds to zero
        long t = d.getTime() / 1000;
        t = t * 1000;
        return new Date(t);
    }

    /**
     * Create a new Date
     * 
     * @param y
     *            year (ie 1980)
     * @param m
     *            month (1...12)
     * @param d
     *            day of month (1...31)
     * @return new Date
     */
    public static Date newDateFromYMD(int y, int m, int d) {
        Date dat = new Date();
        dat.setDate(1);
        dat.setYear(y - 1900);
        dat.setMonth(m - 1);
        dat.setDate(d);
        return setHourToZero(dat);
    }

    /**
     * Basic method to format dates
     * 
     * @param format
     *            format patern as explained in DataTimeFormat (GyMdhHmsSakKzv')
     * @param date
     * @return formated string
     */
    static public String formatDate(String format, Date date, String[] months, String days[]) {
        return formatDate(format, date);
    }

    static public String formatDate(String format, Date date) {
        if (date == null)
            return "NULL";
        if (format == null)
            format = DateTimeFormat.getLongDateFormat().getPattern();
        else
            format = format.replaceAll("dddd", "EEEE").replaceAll("ddd", "EEE");
        return DateTimeFormat.getFormat(format).format(date);
    }

    /**
     * Basic Widget that represents each cell in the calendar picker
     * 
     */
    private static class CellHTML extends HTML {
        private int day;

        public CellHTML(int day) {
            super(String.valueOf(day));
            this.day = day;
        }

        public void addClickListener(ClickListener pickListener) {
            super.addClickListener(pickListener);
        }

        public int getDay() {
            return day;
        }

    }
}
