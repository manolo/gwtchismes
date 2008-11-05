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
 * <p>
 * <b>A widget to pick a date from a calendar panel.</b> 
 * </p>
 * @author Manuel Carrasco Moñino
 * 
 * <h3>Features</h3>
 * <ul>
 * <li>It can be implemented as a modal and dragable dialog or it can be included into a panel.</li>
 * <li>It can be inside of a decorated box with rounded corners</li>
 * <li>The dialog position is calculated on the fly to avoid be positioned out of the visible area</li>
 * <li>Configurable restrictions: minimalDate, maximalDate</li>
 * <li>Congigurable texts: caption and help</li>
 * <li>Configurable buttons</li>
 * <li>Uses GWT-i18n for date formating.</li>
 * <li>The class provides useful public methods for Date manipulation</li>
 * </ul>
 * 
 * <h3>Example</h3>
 * <pre>
    // Create a GWTCDatePicker that will be shown as a dialog  with animation
    final GWTCDatePicker picker = new GWTCDatePicker(GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_ANIMATION );
    
    // Disable nextYear/previousYear buttons
    picker.disableYearButtons();
    
    // Configure date limits
    picker.setMinimalDate(GWTCDatePicker.increaseYear(new Date(), -1));
    picker.setMaximalDate(GWTCDatePicker.increaseYear(new Date(), 10));
    
    // Add the action to be performed when the user selects a day
    picker.addChangeListener(new ChangeListener() {
        public void onChange(Widget sender) {
            Window.alert(picker.getSelectedDateStr(&quot;MMMM dd, yyyy (dddd)&quot;));
        }
    });
 * </pre>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCDatePicker { GWTCDatePicket container }</li>
 * <li>.GWTCDatePicker .GWTCDatePicker-help { help dialog } </li>
 * <li>.GWTCDatePicker .GWTCDatePicker-box {GWTCDatePicket container when it is a GWTCBox} </li>
 * <li>.GWTCDatePicker .Caption { calendar text title}</li>
 * <li>.GWTCDatePicker .panelButtons { panel with navigation buttons }</li>
 * <li>.GWTCDatePicker .panelButtons .topButtons { container of top navigation buttons }</li>
 * <li>.GWTCDatePicker .panelButtons .bottomButtons { container of bottom navigation buttons }</li>
 * <li>.GWTCDatePicker .panelButtons .header { text with the current month and year }</li>
 * 
 * <li>.GWTCDatePicker .panelDays { text with the current month and year }</li>
 * <li>.GWTCDatePicker .panelDays .weekHeader { week headers row}</li>
 * <li>.GWTCDatePicker .panelDays .weekHeader .cellDayNames { cells with day names} </li>
 * <li>.GWTCDatePicker .panelDays .cellEmpty { cell without days }</li>
 * <li>.GWTCDatePicker .panelDays .cellDays { primary style on each cell that has days }</li>
 * <li>.GWTCDatePicker .panelDays .invalidDay { cell with days which can not be selected because are out of the allowed interval }</li>
 * <li>.GWTCDatePicker .panelDays .today { today } </li>
 * <li>.GWTCDatePicker .panelDays .selectedDay { selected day }</li>
 * <li>.GWTCDatePicker .panelDays .afterSelected { days after the selected day and before the maximal day } </li>
 * <li>.GWTCDatePicker .panelDays .beforeSelected { days before the selected day and after the minimal day}</li>
 * </ul>
 * 
 */
public class GWTCDatePicker extends Composite implements ClickListener, SourcesChangeEvents {

    private String styleName = "GWTCDatePicker";
    private static final String StyleHelp = "-help";
    private static final String StyleBox = "-box";

    private static final String StyleCButtons = "panelButtons";
    private static final String StyleCTopButtons = "topButtons";
    private static final String StyleCBottomButtons = "bottomButtons";
    private static final String StyleCHeader = "header";

    private static final String StyleCGrid = "panelDays";
    private static final String StyleCWeekHeader = "weekHeader";
    private static final String StyleCCellDayNames = "cellDayNames";
    private static final String StyleCCellEmpty = "cellEmpty";
    private static final String StyleCCellDays = "cellDays";
    private static final String StyleCInvalidDay = "invalidDay";
    private static final String StyleCToday = "today";
    private static final String StyleCSelected = "selectedDay";
    private static final String StyleCAfterSelected = "afterSelected";
    private static final String StyleCBeforeSelected = "beforeSelected";
    
    public static final int CONFIG_DIALOG = 1;
    public static final int CONFIG_DRAW_BOX = 2;
    public static final int CONFIG_AUTOHIDE = 4;
    public static final int CONFIG_ANIMATION = 8;


    private Date minimalDate = setHourToZero(new Date());
    private Date selectedDate = setHourToZero(new Date());
    private Date cursorDate =  getFirstDayOfMonth(selectedDate);
    private Date maximalDate = GWTCDatePicker.increaseDate(selectedDate, 365);
    private boolean needsRedraw = true;

    // Internationalizable elements
    private static final DateTimeConstants dateTimeConstants = (DateTimeConstants) GWT.create(DateTimeConstants.class);
    private static final int weekStart = Integer.valueOf(dateTimeConstants.firstDayOfTheWeek()).intValue() - 1;;

    private GWTCAlert help = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE);
    private String helpStr = "Calendar-Picker is a component of GWTChismes library.\n" + "(c) Manuel Carrasco 2007\nhttp://code.google.com/p/gwtchismes\n\n" + "Navigation buttons:\n"
            + "\u003c Previous Month\n\u003e Next Month\n\u00AB Previous Year\n\u00BB Next Year\n- Actual Month\nx Close\n ";

    // Containers
    private DialogBox calendarDlg = null;
    private Panel outer = new VerticalPanel();
    
    // Dates panel
    private final FlexTable grid = new FlexTable();
    
    // Navigation Buttons
    private final DockPanel navButtons = new DockPanel();
    private final DockPanel bottomButtons = new DockPanel();
    private final DockPanel topButtons = new DockPanel();
    private final HTML titleBtn = new HTML();
    private final GWTCButton helpBtn = new GWTCButton("?", this);
    private final GWTCButton closeBtn = new GWTCButton("x", this);
    private final GWTCButton actualMBtn = new GWTCButton("-", this);
    private final GWTCButton prevMBtn = new GWTCButton("&lt;", this);
    private final GWTCButton prevYBtn = new GWTCButton("\u00AB", this);
    private final GWTCButton nextMBtn = new GWTCButton("\u003e", this);
    private final GWTCButton nextYBtn = new GWTCButton("\u00BB", this);
    private HorizontalPanel prevButtons = new HorizontalPanel();
    private HorizontalPanel nextButtons = new HorizontalPanel();

    
    /**
     * This constructor is deprecated.
     * 
     * @param dialog
     *            true if you want an independient and drageable dialog box when the picker is showed
     * @deprecated
     */
    public GWTCDatePicker(boolean dialog) {
        if (dialog)
            initialize(CONFIG_DIALOG);
        else
            initialize(0);

    }

    /**
     * Base constructor. 
     * Different options can be passed joining these constant using the or bit wise operator
     * <ul>
     * <li>CONFIG_DIALOG         show as modal dialog</li>
     * <li>CONFIG_DRAW_BOX       put a GWTCBox arround the datapicker</li>
     * <li>CONFIG_AUTOHIDE       autohide dialog when the user click out of the picker</li>
     * <li>CONFIG_ANIMATION      animate the dialog box when it is showed/hidden</li>
     * </ul>
     * Example
     * <pre>
     * new GWTCDatePicker(GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_AUTOHIDE)
     * </pre>     
     *  
     * @param config
     *      cofiguration options.
     */
    public GWTCDatePicker(int config) {
        initialize(config);
    }
    
    public void onAttach() {
        super.onAttach();
        drawCalendar();
    }

    private void initialize(int config) {
        if ((config & CONFIG_DRAW_BOX) == CONFIG_DRAW_BOX) {
            outer = new GWTCBox();
        }
        if ((config & CONFIG_DIALOG) == CONFIG_DIALOG) {
            calendarDlg = new DialogBox((config & CONFIG_AUTOHIDE)== CONFIG_AUTOHIDE);
            calendarDlg.setWidget(outer);
            calendarDlg.setAnimationEnabled((config & CONFIG_ANIMATION)== CONFIG_ANIMATION);
            initWidget(new DockPanel());
        } else {
            initWidget(outer);
            disableCloseButton();
        }
        
        setStyleName(styleName);

        if ((config & CONFIG_DRAW_BOX) == CONFIG_DRAW_BOX) {
            addStyleName(styleName + StyleBox);
        }
        
        help.addStyleName(styleName + StyleHelp);

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

        Date firstDate = getFirstDayOfMonth(cursorDate);
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
    


    /**
     * show the calendar container, if the calendar picker is a dialog box and param sender is not null the dialog is positioned near of it
     * 
     * @param sender
     *            the widget that the user has clicked
     */
    public void show(Widget sender) {
        setCursorDate(selectedDate);
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
        Date fd = getFirstDayOfMonth(d);
        if (isVisibleMonth(fd, 0)) {
            this.needsRedraw = true;
            cursorDate = fd;
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
     *            representation of the desired format
     * @return String
     */
    public String getSelectedDateStr(String format) {
        return formatDate(format, selectedDate);
    }

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
            setSelectedDate(setHourToZero(new Date(cursorDate.getYear(), cursorDate.getMonth(), cell.getDay())));
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

    private static final int CONST_YEARS = 1;
    private static final int CONST_MONTHS = 2;
    private static final int CONST_DAYS = 3;

    /**
     * Add days to a reference Date
     * 
     * @param d
     *            Date of reference
     * @param n
     *            number of days to increase (for decreasing use negative values)
     * @return the new Date
     */
    public static Date increaseDate(Date d, int n) {
        Date ret = GWTCDatePicker.add(d, n, GWTCDatePicker.CONST_DAYS);
        return ret;
    }

    /**
     * Add months to a reference Date. 
     * If the day of source date doesn't exist in the destination month, set this to the last day of that 
     * 
     * @param date
     *            Date of reference
     * @param n
     *            number of months to increase (for decreasing use negative values)
     * @return the new Date
     */
    public static Date increaseMonth(Date date, int n) {
        if (date.getDate() > 28) {
            Date currentMonthFirstDay = getFirstDayOfMonth(date);
            GWTCDatePicker.add(currentMonthFirstDay, n, GWTCDatePicker.CONST_MONTHS);
            int currentMonthDays = daysInMonth(date);
            int finalMonthDays = daysInMonth(currentMonthFirstDay);
            if (currentMonthDays > finalMonthDays) {
                return GWTCDatePicker.add(currentMonthFirstDay, n, GWTCDatePicker.CONST_MONTHS);
            }
        }
        return GWTCDatePicker.add(date, n, GWTCDatePicker.CONST_MONTHS);
    }

    /**
     * Add years to a reference Date
     * 
     * @param d
     *            Date of reference
     * @param n
     *            number of years to increase (for decreasing use negative values)
     * @return the new Date
     */
    public static Date increaseYear(Date d, int n) {
        return GWTCDatePicker.add(d, n, GWTCDatePicker.CONST_YEARS);
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
     * Calculate diference in days between two days
     * 
     * @param a
     *            Date
     * @param b
     *            Date
     * @return the difference in days between b and a (b - a)
     */
    public static int compareDate(Date a, Date b) {
        long d1 = setHourToZero(a).getTime();
        long d2 = setHourToZero(b).getTime();
        return (int) ((d2 - d1) / 1000 / 60 / 60 / 24);
    }

    /*
     * Increase/decrease a date based in a type parameter which specifies the type of operation
     * 
     * @param time
     *            in milliseconds since 1-1-1970
     * @param value
     *            interval to add (use negative values to decrease)
     * @param type
     *            type of addition (1=days, 2=months, 3=years, 4=hours
     * @return number of milliseconds from 1-1-1970
     */
    private static Date add(Date date, int value, int type) {
        Date d = setHourToZero(new Date(date.getTime()));
        if (type == CONST_YEARS)
            d.setYear(d.getYear() + value);
        if (type == CONST_MONTHS)
            d.setMonth(d.getMonth() + value);
        if (type == CONST_DAYS)
            d.setDate(d.getDate() + value);
        return d;
    }

    /**
     * Returns true or false whether a month has selectable days in the allowed interval
     * 
     * @param date
     *            Date of the selected day
     * @param months
     *            increment of months
     * @return true if the month has selectable days
     */
    private boolean isVisibleMonth(Date date, int months) {
        Date d = GWTCDatePicker.increaseMonth(date, months);
        if (GWTCDatePicker.compareDate(minimalDate, getLastDayOfMonth(d)) < 0 || GWTCDatePicker.compareDate(maximalDate, getFirstDayOfMonth(d)) > 0) {
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
        
        // a hack to set milliseconds to zero
        long t = d.getTime() / 1000;
        t = t * 1000;

        return new Date(t);
    }
    
    /**
     * Get the first day of the month
     * 
     * @param date
     *            Date
     */
    public static Date getFirstDayOfMonth(Date date) {
        return setHourToZero (new Date(date.getYear(), date.getMonth(), 1));
    }

    /**
     * Get the last day of the month
     * 
     * @param date
     *            Date
     */
    public static Date getLastDayOfMonth(Date date) {
        return increaseDate(getFirstDayOfMonth(date), daysInMonth(date) - 1 );
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
     * @deprecated
     */
    static public String formatDate(String format, Date date, String[] months, String days[]) {
        return formatDate(format, date);
    }

    /**
     * Method for formating dates using DateTimeFormat
     * 
     * @param format
     *            format patern as explained in DataTimeFormat (GyMdhHmsSakKzv')
     * @param date
     *            the date to represent
     * @return formated string
     */
    static public String formatDate(String format, Date date) {
        if (date == null)
            return "NULL";
        if (format == null)
            format = DateTimeFormat.getLongDateFormat().getPattern();
        else
            format = format.replaceAll("dddd", "EEEE").replaceAll("ddd", "EEE");
        return DateTimeFormat.getFormat(format).format(date);
    }

    /*
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
