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
import java.util.Vector;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.event.dom.client.MouseOutEvent;
import com.google.gwt.event.dom.client.MouseOutHandler;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.event.dom.client.MouseOverHandler;
import com.google.gwt.event.logical.shared.HasValueChangeHandlers;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.constants.DateTimeConstants;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * <p>
 * <b>Simple date picker widget.</b>
 * Use it as the base of more complex widgets.
 * </p>
 * @author Manuel Carrasco Moñino
 * 
 * <h3>Features</h3>
 * <ul>
 * <li>Uses GWT-i18n for date formating.</li>
 * <li>The class provides useful public methods for Date manipulation</li>
 * <li>It supports week numbers</li>
 * </ul>
 * 
 * <h3>Example</h3>
 * <pre>
    // Create a GWTCDateSimplePicker
    GWTCDateSimplePicker picker = new GWTCDateSimplePicker(true);
    
    // Configure date limits
    picker.setMinimalDate(GWTCDatePicker.increaseYear(new Date(), -1));
    picker.setMaximalDate(GWTCDatePicker.increaseYear(new Date(), 10));
    
    // Add the action to be performed when the user selects a day
    picker.addChangeListener(new ChangeListener() {
        public void onChange(Widget sender) {
            Window.alert(picker.getSelectedDateStr(&quot;MMMM dd, yyyy (dddd)&quot;));
        }
    });
    
    // Put it in a panel
    RootPanel.get().add(picker);
 * </pre>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.weekHeader { week headers row}</li>
 * <li>.weekHeader .cellDayNames { cells with day names} </li>
 * <li>.panelDays { panel that contains all days }</li>
 * <li>.panelDays .cellEmpty { cell without days }</li>
 * <li>.panelDays .cellDays { primary style on each cell that has days }</li>
 * <li>.panelDays .invalidDay { cell with a day which can not be selected because are out of the allowed interval }</li>
 * <li>.panelDays .validDay { cell with selectable day }</li>
 * <li>.panelDays .today { today } </li>
 * <li>.panelDays .selectedDay { selected day }</li>
 * <li>.panelDays .afterSelected { days after the selected day and before the maximal day } </li>
 * <li>.panelDays .beforeSelected { days before the selected day and after the minimal day}</li>
 * </ul>
 * 
 */
public class GWTCSimpleDatePicker extends Composite implements ClickHandler, HasValueChangeHandlers<GWTCSimpleDatePicker> {

  private static final String StyleCCellEmpty = "cellEmpty";
  private static final String StyleCCellDays = "cellDays";
  private static final String StyleCInvalidDay = "invalidDay";
  private static final String StyleCValidDay = "validDay";
  private static final String StyleCToday = "today";
  private static final String StyleCWeekend = "weekend";
  private static final String StyleCSelected = "selectedDay";
  private static final String StyleCAfterSelected = "afterSelected";
  private static final String StyleCBeforeSelected = "beforeSelected";

  private static final String StyleCGrid = "panelDays";
  private static final String StyleCWeekHeader = "weekHeader";
  private static final String StyleCCellDayNames = "cellDayNames";
  private static final String StyleCCellWeekNumber = "cellWeekNumbers";

  private Date minimalDate = setHourToZero(new Date());
  private Date selectedDate = setHourToZero(new Date());
  private Date maximalDate = GWTCSimpleDatePicker.increaseDate(new Date(), 365);

  private Date cursorDate = getFirstDayOfMonth(new Date());
  private Date firstMonthDay = getFirstDayOfMonth(cursorDate);
  private long monthNumber = getMonthNumber(cursorDate);
  protected boolean needsRedraw = true;
  private boolean initialized = false;
  private int showWeekNumbers = 0;
  private boolean clickOnWeekNumbers = false;

  // Internationalizable elements
  public static final DateTimeConstants dateTimeConstants = (DateTimeConstants) GWT.create(DateTimeConstants.class);
  private static final int weekStart = Integer.valueOf(dateTimeConstants.firstDayOfTheWeek()).intValue() - 1;;
  public String[] WEEK_DAYS = dateTimeConstants.shortWeekdays();

  // Dates panel
  private final FlexTable calendarGrid = new FlexTable();

  protected GWTCSimpleDatePicker() {
  }

  public GWTCSimpleDatePicker(boolean create) {
    if (create)
      initWidget(calendarGrid);
  }
  

  @SuppressWarnings("deprecation")
  public void refresh() {

    if (!needsRedraw)
      return;
    needsRedraw = false;

    if (!initialized) {
      initialized = true;
      calendarGrid.clear();
      calendarGrid.setStyleName(StyleCGrid);
      calendarGrid.setCellSpacing(0);
      calendarGrid.getRowFormatter().setStyleName(0, StyleCWeekHeader);
      int l = 0;
      for (int i = weekStart; i < 7; i++) {
        calendarGrid.getCellFormatter().setStyleName(0, showWeekNumbers + l, StyleCCellDayNames);
        calendarGrid.setText(0, showWeekNumbers + l++, WEEK_DAYS[i]);
      }
      while (l < 7) {
        calendarGrid.getCellFormatter().setStyleName(0, showWeekNumbers + l, StyleCCellDayNames);
        calendarGrid.setText(0, showWeekNumbers + l++, WEEK_DAYS[0]);
      }
      for (int i = 1; i < 7; i++) {
        for (int k = 0; k < 7; k++) {
          CellHTML html = new CellHTML();
          calendarGrid.setWidget(i, showWeekNumbers + k, html);
          html.addClickHandler(this);
        }
        if (showWeekNumbers == 1) {}
      }
      if (showWeekNumbers == 1) {
        for (int i = 0; i < 7; i++) {
          calendarGrid.setText(i, 0, "");
          calendarGrid.getCellFormatter().setStyleName(i, 0, StyleCCellWeekNumber);
        }
      }
    }
    long todayNum = 1 + GWTCSimpleDatePicker.compareDate(firstMonthDay, new Date());
    long minimalNum = 1 + GWTCSimpleDatePicker.compareDate(firstMonthDay, minimalDate);
    long maximalNum = 1 + GWTCSimpleDatePicker.compareDate(firstMonthDay, maximalDate);
    int numOfDays = GWTCSimpleDatePicker.daysInMonth(cursorDate);
    long selectedNum = selectedDate != null ? 1 + GWTCSimpleDatePicker.compareDate(firstMonthDay, selectedDate) : -1;
    int firstWDay = firstMonthDay.getDay();
    int sunday = (7 - weekStart) % 7;
    int saturday = 6 - weekStart;

    int j = 0 + weekStart;
    for (int i = 1; i < 7; i++) { // each week
      for (int k = 0; k < 7; k++, j++) { // each day in the week
        int displayNum = (firstWDay < weekStart) ? (j - firstWDay - 6) : (j - firstWDay + 1);
        
        // weekNumbers
        if (showWeekNumbers == 1 && k == 6 - weekStart) {
          int firstNum = displayNum - (i == 1 ? 0 : 6 - weekStart);
          if (firstNum > numOfDays) {
            calendarGrid.setText(i, 0, "");
          } else {
            Date refDate = new Date(cursorDate.getYear(), cursorDate.getMonth(), firstNum);
            int week = getWeekOfYear(refDate);
            putWeekNumber(i, displayNum, week);
          }
        }

        // Each calendar cell
        String styles = "";
        boolean enabled = true;
        if (j < firstWDay || displayNum > numOfDays || displayNum < 1) {
          styles = StyleCCellEmpty;
          enabled = false;
          displayNum = 0;
        } else {
          if (displayNum < minimalNum || displayNum > maximalNum) {
            styles = StyleCInvalidDay;
            enabled = false;
          } else if (displayNum == selectedNum) {
            styles = StyleCValidDay + " " + StyleCSelected;
          } else if (displayNum >= selectedNum) {
            styles = StyleCValidDay + " " + StyleCAfterSelected;
          } else {
            styles = StyleCValidDay + " " + StyleCBeforeSelected;
          }
          if (displayNum == todayNum) {
            styles += " " + StyleCToday;
          }
          if (k == sunday || k == saturday) {
            styles += " " + StyleCWeekend;
          }
          styles += " " + StyleCCellDays;
        }

        CellHTML html = (CellHTML) calendarGrid.getWidget(i, showWeekNumbers + k);
        html.setEnabled(enabled);
        html.setDay(displayNum);
        html.setStyleName(styles);

      }
    }
  }

  @SuppressWarnings("deprecation")
  private void putWeekNumber(int i, int displayNum, int week) {
    if (clickOnWeekNumbers) {
      boolean enabled = true; 
      Date weekDate = getFirstDayOfWeek(new Date(cursorDate.getYear(), cursorDate.getMonth(), displayNum));
      int diff = compareDate(minimalDate, weekDate);
      if (diff < 0 && diff+7 <0)
        enabled = false;
      diff = compareDate(maximalDate, weekDate);
      if (diff > 0 && diff+7 >0)
        enabled = false;
      
      if (enabled) {
        CellHTML weekHtml = (CellHTML) calendarGrid.getWidget(i, 0);
        if (weekHtml == null) {
          weekHtml = new CellHTML();
          weekHtml.addClickHandler(this);
        }
        weekHtml.setEnabled(true);
        weekHtml.setDay(week);
        weekHtml.setDate(weekDate);
        calendarGrid.setWidget(i, 0, weekHtml);
        return;
      } 
    }
    calendarGrid.setHTML(i, 0, "<div class=\"disabled\">" + week + "</div>");
  }

  /**
   * Set the date where the calendar is positioned
   * 
   * @param d
   *            Date
   */
  public void setCursorDate(Date d) {
    d = setHourToZero(d);
    if (d.getTime() == cursorDate.getTime())
      return;
    if (!belongsToMonth(d))
      this.needsRedraw = true;
    cursorDate = d;
    firstMonthDay = getFirstDayOfMonth(d);
    monthNumber = getMonthNumber(d);
  }

  public boolean belongsToMonth(Date d) {
    return monthNumber == getMonthNumber(d);
  }

  /**
   * Returns true or false whether a month has selectable days in the allowed interval
   * 
   * @param months
   *            increment of months
   * @return true if the month has selectable days
   */
  public boolean isVisibleMonth(int months) {
    Date d = GWTCSimpleDatePicker.increaseMonth(cursorDate, months);
    Date min = getFirstDayOfMonth(minimalDate);
    Date max = getLastDayOfMonth(maximalDate);

    if (d.getTime() >= min.getTime() && d.getTime() <= max.getTime())
      return true;

    return false;
  }

  /**
   * Set the date selected by the user
   * 
   * @param d
   *            Date
   */
  public void setSelectedDate(Date d) {
    d = setHourToZero(d);
    if (d.getTime() == selectedDate.getTime())
      return;

    boolean a = belongsToMonth(selectedDate);
    boolean b = belongsToMonth(d);
    if (a && b && selectedDate.getTime() != d.getTime() || !a && b || a && !b)
      needsRedraw = true;

    selectedDate = d;
  }

  /**
   * Set the minimal selectable date
   * 
   * @param d
   *            Date
   */
  public void setMinimalDate(Date d) {
    d = setHourToZero(d);
    if (d.getTime() == minimalDate.getTime())
      return;

    boolean a = belongsToMonth(minimalDate);
    boolean b = belongsToMonth(d);
    if (!a && b || a && !b || a && b)
      needsRedraw = true;

    minimalDate = d;

    if (selectedDate.getTime() < d.getTime())
      selectedDate = d;
    if (maximalDate.getTime() < d.getTime())
      maximalDate = d;

  }

  /**
   * Set the maximal selectable date
   * 
   * @param d
   *            Date
   */
  public void setMaximalDate(Date d) {
    d = setHourToZero(d);
    if (d.getTime() == maximalDate.getTime())
      return;

    boolean a = belongsToMonth(maximalDate);
    boolean b = belongsToMonth(d);
    if (!a && b || a && b)
      needsRedraw = true;

    maximalDate = d;

    if (selectedDate.getTime() > d.getTime())
      selectedDate = d;
    if (minimalDate.getTime() > d.getTime())
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
   * Get the cursor date in this month
   * 
   * @return Date
   */
  public Date getCursorDate() {
    return cursorDate;
  }

  /**
   * Get the minimal selectable date
   * 
   * @return Date
   */
  public Date getMinimalDate() {
    return minimalDate;
  }

  /**
   * Get the maximal selectable date
   * 
   * @return Date
   */
  public Date getMaximalDate() {
    return maximalDate;
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

  public boolean setSelectedDateStr(String format, String dateStr) {
    Date d = parseDate(format, dateStr);
    if (d != null) {
      setSelectedDate(d);
      return true;
    }
    return false;
  }

  private static final int CONST_YEARS = 1;
  private static final int CONST_MONTHS = 2;
  private static final int CONST_WEEKS = 3;
  private static final int CONST_DAYS = 4;

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
    Date ret = add(d, n, CONST_DAYS);
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
  @SuppressWarnings("deprecation")
  public static Date increaseMonth(Date date, int n) {
    if (date.getDate() > 28) {
      Date currentMonthFirstDay = getFirstDayOfMonth(date);
      add(currentMonthFirstDay, n, CONST_MONTHS);
      int currentMonthDays = daysInMonth(date);
      int finalMonthDays = daysInMonth(currentMonthFirstDay);
      if (currentMonthDays > finalMonthDays) { return add(currentMonthFirstDay, n, CONST_MONTHS); }
    }
    return add(date, n, CONST_MONTHS);
  }

  @SuppressWarnings("deprecation")
  public static long getMonthNumber(Date d) {
    return d.getYear() * 12 + d.getMonth();
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
    return add(d, n, CONST_YEARS);
  }

  /**
   * Add weeks to a reference Date
   * 
   * @param d
   *            Date of reference
   * @param n
   *            number of weeks to increase (for decreasing use negative values)
   * @return the new Date
   */
  public static Date increaseWeek(Date d, int n) {
    return add(d, n, CONST_WEEKS);
  }

  /**
   * Calculate the number of days in a month
   * 
   * @param d
   *            reference date
   * @return the number of days in this month [1...31]
   */
  @SuppressWarnings("deprecation")
  public static int daysInMonth(Date d) {
    int m = d.getMonth();
    switch (m) {
      case 1:
        int y = d.getYear() + 1900;
        return (y % 4 == 0 && y % 100 != 0) ? 29 : 28;
      case 3:
      case 5:
      case 8:
      case 10:
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
    long diff = setHourToZero(b).getTime() - setHourToZero(a).getTime();
    double hours = Math.ceil((double) diff / (1000 * 60 * 60));
    int days = (int) (hours / 24);
    if (hours % 24 > 12)
      days += 1;
    return days;
  }

  /**
   * Increase/decrease a date based in a type parameter which specifies the type of operation
   * 
   * @param date
   *            date
   * @param value
   *            interval to add (use negative values to decrease)
   * @param type
   *            type of operation 
   * @return new date
   */
  @SuppressWarnings("deprecation")
  private static Date add(Date date, int value, int type) {
    Date d = setHourToZero(new Date(date.getTime()));
    if (type == CONST_YEARS)
      d.setYear(d.getYear() + value);
    if (type == CONST_MONTHS)
      d.setMonth(d.getMonth() + value);
    if (type == CONST_WEEKS)
      d.setDate(d.getDate() + 7 * value);
    if (type == CONST_DAYS)
      d.setDate(d.getDate() + value);
    return d;
  }

  /**
   * Increase/decrease a date based in a string which defines the interval
   * 
   * @param d
   *            reference day
   * @param s
   *            interval to add. Example: 1d, -3d, 4w, -3m, 4y
   *            
   * @return new date
   */
  public static Date add(Date d, String s) {
    if (s == null || s.length() == 0)
      return d;

    int n = Integer.valueOf(s.replaceAll("[^\\d\\-]", ""));
    if (n == 0 )
      return d;

    char c = s.toLowerCase().charAt(s.length() - 1);

    switch (c) {
      case 'd':
        return add(d, n, CONST_DAYS);
      case 'w':
        return add(d, n, CONST_WEEKS);
      case 'm':
        return add(d, n, CONST_MONTHS);
      case 'y':
        return add(d, n, CONST_YEARS);
      default:
        return d;
    }
  }

  /**
   * Method for formating dates using DateTimeFormat
   * 
   * @param format
   *            format patern as explained in DateTimeFormat (GyMdkHmsSEDahKzZv')
   * @param date
   *            the date to represent
   * @return formated string
   */
  static public String formatDate(String format, Date date) {
    if (format == null)
      format = DateTimeFormat.getLongDateFormat().getPattern();
    else
      format = format.replaceAll("dddd", "EEEE").replaceAll("ddd", "EEE");
    if (date == null)
      return format;
    return DateTimeFormat.getFormat(format).format(date);
  }

  static public Date parseDate(String format, String dateStr) {
    try {
      return DateTimeFormat.getFormat(format).parse(dateStr);
    } catch (Exception e) {
      return null;
    }
  }

  /**
   * Set hour, minutes, second and milliseconds to zero.
   * 
   * @param date
   *            Date
   * @return Modified date
   */
  @SuppressWarnings("deprecation")
  public static Date setHourToZero(Date date) {
    Date d = new Date(date.getTime());
    d.setHours(0);
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
  @SuppressWarnings("deprecation")
  public static Date getFirstDayOfMonth(Date date) {
    return setHourToZero(new Date(date.getYear(), date.getMonth(), 1));
  }

  /**
   * Get the last day of the month
   * 
   * @param date
   *            Date
   */
  public static Date getLastDayOfMonth(Date date) {
    return increaseDate(getFirstDayOfMonth(date), daysInMonth(date) - 1);
  }
  
  @SuppressWarnings("deprecation")
  public static int getWeekOfYear(Date date) {
      int base_wDay = 4;// - weekStart;
      Date jan01_Date = new Date(date.getYear(), 0, 1);
      int jan01_wDay = jan01_Date.getDay();
      int incr = jan01_wDay <= base_wDay ? (base_wDay- jan01_wDay) : (base_wDay + 7 - jan01_wDay);
      Date baseDay = GWTCSimpleDatePicker.increaseDate(jan01_Date, incr);
      Date baseSun = GWTCSimpleDatePicker.increaseDate(baseDay, - 4);
      if (jan01_wDay > 4) {
          int n = GWTCSimpleDatePicker.compareDate(baseSun, date);
          if (n < 0) {
              Date dec31 = new Date(date.getYear()-1, 11, 31);
              return getWeekOfYear(dec31);
          }
      }
      int diff = GWTCSimpleDatePicker.compareDate(baseSun, date);
      int ret =  (int)Math.ceil(1 + diff / 7);
      return ret;
  }

  
  @SuppressWarnings("deprecation")
  public static Date getFirstDayOfWeek(Date date) {
    int n = date.getDay();
    if (n< weekStart)
      n+=7;
    int diff = n - weekStart;
    return increaseDate(date, -diff);
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
  @SuppressWarnings("deprecation")
  public static Date newDateFromYMD(int y, int m, int d) {
    Date dat = new Date();
    dat.setDate(1);
    dat.setYear(y - 1900);
    dat.setMonth(m - 1);
    dat.setDate(d);
    return setHourToZero(dat);
  }

  /**
   * Basic Widget that represents each cell in the calendar picker
   * 
   */
  private static class CellHTML extends HTML {
    private int day = -1;
    private boolean enabled = true;
    private Date date = null;

    public Date getDate() {
    	return date;
    }

		public void setDate(Date date) {
    	this.date = date;
    	enabled = true;
    }

		public void setEnabled(boolean b) {
      enabled = b;
    }

    public boolean isEnabled() {
      return enabled;
    }

    public int getDay() {
      return day;
    }

    public void setDay(int d) {
      if (day != d) {
        day = d;
        setCellContent();
      }
    }

    public HandlerRegistration addClickHandler(ClickHandler handler) {
      super.addMouseOverHandler(mouseOverHandler);
      super.addMouseOutHandler(mouseOutHandler);
      return super.addClickHandler(handler);

    }

    private void setCellContent() {
      setHTML(day < 1 ? "&nbsp;" : String.valueOf(day));
    }

    MouseOverHandler mouseOverHandler = new MouseOverHandler() {
      public void onMouseOver(MouseOverEvent event) {
        ((Widget) event.getSource()).addStyleDependentName("over");
      }
    };
    MouseOutHandler mouseOutHandler = new MouseOutHandler() {
      public void onMouseOut(MouseOutEvent event) {
        ((Widget) event.getSource()).removeStyleDependentName("over");
      }
    };
  }

  public void hide() {
    setVisible(false);
  }

  public void show() {
    setVisible(true);
    if (!isAttached()) {
      RootPanel.get().add(this);
    }
  }

  public void show(Widget w) {
    show();
  }

  /**
   * Set the number of letters to show in the name of the week day 
   */
  public void setNumberOfLettersInDayNames(int n) {
    WEEK_DAYS = new String[7];
    for (int i = 0; i < 7; i++) {
      WEEK_DAYS[i] = dateTimeConstants.shortWeekdays()[i];
      if (n > 0 && n < WEEK_DAYS[i].length())
        WEEK_DAYS[i] = WEEK_DAYS[i].substring(0, n);
    }
  }

  @SuppressWarnings("deprecation")
  public void onClick(ClickEvent event) {
    if (event.getSource() instanceof CellHTML) {
      CellHTML cell = (CellHTML) event.getSource();
      if (cell.isEnabled()) {
      	Date d = cell.getDate() != null ? cell.getDate() : new Date(cursorDate.getYear(), cursorDate.getMonth(), cell.getDay());
        setSelectedDate(d);
        for (ValueChangeHandler<GWTCSimpleDatePicker> change : valueChanges) {
          change.onValueChange(valueChangeEvent);
        }
      }
    } else if (event.getSource() instanceof HasClickHandlers) {
      ((HasClickHandlers) event.getSource()).fireEvent(event);
    } else {
      System.out.println("GWTCSimpleDatePicker.onClidk, unkown type: " + event.getSource().getClass());
    }
  }

  ValueChangeEvent<GWTCSimpleDatePicker> valueChangeEvent = new ValueChangeEvent<GWTCSimpleDatePicker>(this) {};
  Vector<ValueChangeHandler<GWTCSimpleDatePicker>> valueChanges = new Vector<ValueChangeHandler<GWTCSimpleDatePicker>>();

  /**
   * Adds a change handler that will be executed when a new date is selected by the user.
   * It returns a HandlerRegistration that you can save and use to remove the handler.
   */
  public HandlerRegistration addValueChangeHandler(final ValueChangeHandler<GWTCSimpleDatePicker> handler) {
    valueChanges.add(handler);
    return new HandlerRegistration() {
      public void removeHandler() {
        valueChanges.remove(handler);
      }
    };
  }

  /**
   * Removes a previously added handler.
   * 
   * The normal way to do this in gwt 1.7 is using the HandlerRegistration 
   * returned when the handler was added, but this is needed because it is used 
   * by GWTCDatePickerAbstract
   * 
   */
  public void removeValueChangeHandler(ValueChangeHandler<GWTCSimpleDatePicker> handler) {
    valueChanges.remove(handler);
  }
  
  /**
   *  Show the week numbers
   */
  public void showWeekNumbers(boolean b) {
      if (b != (showWeekNumbers==1)) {
          initialized = false;
          needsRedraw = true;
      }
      showWeekNumbers = b ? 1 : 0;
  }
  
  /**
   * Add click handlers to week number labels in order to select the first day of this week's row 
   */
  public void clickOnWeekNumbers(boolean b) {
      if (b != clickOnWeekNumbers) {
          needsRedraw = true;
      }
      clickOnWeekNumbers = b;
  }

}
