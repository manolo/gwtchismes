/*
 Copyright (c) 2007 Manuel Carrasco (manuel.carrasco@alcala.org)  
 
 Some code is from Alexei Sokolov (Simple CalendarWidget) http://gwt.components.googlepages.com/

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
import com.google.gwt.user.client.ui.SourcesChangeEvents;
import com.google.gwt.user.client.ui.Widget;

public class GWTCDatePicker extends Composite implements ClickListener, SourcesChangeEvents {

    // Configurable parameters
    private String styleName = "GWTCDatePicker";
    private Date minimalDate = setHourToZero(new Date());
    private Date selectedDate = setHourToZero(new Date());
    private Date cursorDate = setHourToZero(new Date());
    private Date maximalDate = GWTCDatePicker.increaseDate(selectedDate, 365);

    // Internazionalizable elements
    private String[] days = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
    private String[] months = new String[] { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };
    private int weekStart = 1;
    private String helpStr = "GWTC CalendarPicker\n\n\u003c Previous Month\n\u003e Next Month\n\u00AB Previous Year\n\u00BB Next Year\n- Actual Month\nx Close\n ";

    // Containers
    private final DockPanel outer = new DockPanel();
    private DialogBox calendarContainer = null;

    // Navigation Buttons
    public final DockPanel navButtons = new DockPanel();
    public final DockPanel bottonButtons = new DockPanel();
    public final DockPanel topButtons = new DockPanel();
    public final HTML titleBtn = new HTML();
    public final GWTCButton helpBtn = new GWTCButton("?", this);
    public final GWTCButton closeBtn = new GWTCButton("x", this);
    public final GWTCButton actualMBtn = new GWTCButton("-", this);
    //public final GWTCButton prevMBtn = new GWTCButton("\u003c", this);
    public final GWTCButton prevMBtn = new GWTCButton("&lt;", this);
    public final GWTCButton prevYBtn = new GWTCButton("\u00AB", this);
    public final GWTCButton nextMBtn = new GWTCButton("\u003e", this);
    public final GWTCButton nextYBtn = new GWTCButton("\u00BB", this);
    HorizontalPanel prevButtons = new HorizontalPanel();
    HorizontalPanel nextButtons = new HorizontalPanel();

    public GWTCDatePicker(boolean dialog) {
        if (dialog) {
            calendarContainer = new DialogBox();
            calendarContainer.setWidget(outer);
            initWidget(new DockPanel());
        } else {
            initWidget(outer);
            drawCalendar();
        }
        setStyleName(styleName);

        navButtons.setStyleName("Cal_Buttons");
        titleBtn.setStyleName("Cal_Header");

        navButtons.add(bottonButtons, DockPanel.SOUTH);
        navButtons.add(topButtons, DockPanel.NORTH);

        prevButtons.add(prevYBtn);
        prevButtons.add(prevMBtn);
        nextButtons.add(nextMBtn);
        nextButtons.add(nextYBtn);

        bottonButtons.add(prevButtons, DockPanel.WEST);
        bottonButtons.add(actualMBtn, DockPanel.CENTER);
        bottonButtons.add(nextButtons, DockPanel.EAST);
        bottonButtons.setVerticalAlignment(DockPanel.ALIGN_MIDDLE);
        bottonButtons.setCellVerticalAlignment(actualMBtn, HasAlignment.ALIGN_MIDDLE);
        bottonButtons.setCellHorizontalAlignment(prevButtons, DockPanel.ALIGN_LEFT);
        bottonButtons.setCellHorizontalAlignment(nextButtons, DockPanel.ALIGN_RIGHT);
        bottonButtons.setCellHorizontalAlignment(actualMBtn, HasAlignment.ALIGN_CENTER);
        bottonButtons.setCellWidth(actualMBtn, "100%");
        actualMBtn.setWidth("100%");

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

    public void setStyleName(String s) {
        styleName = s;
        if (calendarContainer != null) {
            calendarContainer.setStyleName(styleName);
        } else
            outer.setStyleName(styleName);
    }
    public void addStyleName(String s) {
        if (calendarContainer != null) {
            calendarContainer.addStyleName(s);
        } else
            outer.addStyleName(s);
    }

    public void drawCalendar() {

        FlexTable grid = new FlexTable();
        grid.setStyleName("Cal_Grid");
        grid.setCellSpacing(0);

        outer.clear();
        outer.add(navButtons, DockPanel.NORTH);
        outer.add(grid, DockPanel.CENTER);

        titleBtn.setHTML(GWTCDatePicker.formatDate("MMMM, yyyy", cursorDate, months, days));

        grid.getRowFormatter().setStyleName(0, "Cal_WeekHeader");
        int l = 0;
        for (int i = weekStart; i < 7; i++) {
            grid.getCellFormatter().setStyleName(0, l, "Cal_CellDayNames");
            grid.setText(0, l++, ((String) days[i]).substring(0, 3));
        }
        if (l < 7) {
            grid.getCellFormatter().setStyleName(0, l, "Cal_CellDayNames");
            grid.setText(0, l++, ((String) days[0]).substring(0, 3));
        }

        Date firstDate = new Date(cursorDate.getYear(), cursorDate.getMonth(), 1);
        long todayNum = 1 + GWTCDatePicker.compareDate(firstDate, new Date());
        long minimalNum = 1 + GWTCDatePicker.compareDate(firstDate, minimalDate);
        long maximalNum = 1 + GWTCDatePicker.compareDate(firstDate, maximalDate);
        long selectedNum = 1 + GWTCDatePicker.compareDate(firstDate, selectedDate);
        long cursorNum = 1 + GWTCDatePicker.compareDate(firstDate, cursorDate);
        int firstWDay = firstDate.getDay();
        int numOfDays = GWTCDatePicker.daysInMonth(cursorDate);
        int j = 0 + weekStart;

        boolean isIe6 = GWTCButton.isIE6();

        for (int i = 1; i < 7; i++) { // each row in the grid
            for (int k = 0; k < 7; k++, j++) { // each day in the week
                int displayNum = (firstWDay < weekStart) ? (j - firstWDay - 6) : (j - firstWDay + 1);
                if (j < firstWDay || displayNum > numOfDays || displayNum <= 0) {
                    grid.getCellFormatter().setStyleName(i, k, "Cal_CellEmpty");
                    grid.setHTML(i, k, "&nbsp;");
                } else {
                    HTML html = new CellHTML("<span>" + String.valueOf(displayNum) + "</span>", displayNum);
                    grid.getCellFormatter().setStyleName(i, k, "Cal_CellDays");
                    html.setStyleName("Cal_CellDays");
                    if (displayNum < minimalNum || displayNum > maximalNum) {
                        html.addStyleName("Cal_InvalidDay");
                        grid.getCellFormatter().addStyleName(i, k, "Cal_InvalidDay");
                    } else if (displayNum == selectedNum) {
                        html.addStyleName("Cal_Selected");
                        grid.getCellFormatter().addStyleName(i, k, "Cal_Selected");
                        html.addClickListener(this);
                    } else if (displayNum >= selectedNum) {
                        html.addStyleName("Cal_AfterSelected");
                        grid.getCellFormatter().addStyleName(i, k, "Cal_AfterSelected");
                        html.addClickListener(this);
                    } else {
                        html.addStyleName("Cal_BeforeSelected");
                        grid.getCellFormatter().addStyleName(i, k, "Cal_BeforeSelected");
                        html.addClickListener(this);
                    }
                    if (displayNum == todayNum) {
                        html.addStyleName("Cal_Today");
                        grid.getCellFormatter().addStyleName(i, k, "Cal_Today");
                    }
                    // else if (displayNum == cursorNum) {
                    // grid.getCellFormatter().addStyleName(i, k, "Cal_Cursor");
                    // }
                    grid.setWidget(i, k, html);
                    if (isIe6) {
                        html.addMouseListener(GWTCButton.mouseOverListener);
                    }
                }
            }
        }
        prevMBtn.setEnabled(isVisibleMonth(cursorDate, -1));
        nextMBtn.setEnabled(isVisibleMonth(cursorDate, 1));
        prevYBtn.setEnabled(isVisibleMonth(cursorDate, -12));
        nextYBtn.setEnabled(isVisibleMonth(cursorDate, 12));

    }
    public void show(Widget sender) {
        if (calendarContainer != null) {
            calendarContainer.show();
            if (sender != null) {
                int left = sender.getAbsoluteLeft() + 10 - 200;
                int top = sender.getAbsoluteTop() + 10;
                calendarContainer.setPopupPosition(left, top);
                DOM.scrollIntoView(calendarContainer.getElement());
            }
        } else
            outer.setVisible(true);
    }
    public void hide() {
        if (calendarContainer != null)
            calendarContainer.hide();
        else
            outer.setVisible(false);
    }

    public void setText(String t) {
        if (calendarContainer != null)
            calendarContainer.setText(t);
    }

    public void setHelp(String t) {
        helpStr = t;
        if (t == null || t.length() == 0)
            helpBtn.setEnabled(false);
        else
            helpBtn.setEnabled(true);
    }

    public void setCalendarStyle(String s) {
        styleName = s;
        drawCalendar();
    }

    public void setLocale(String[] d, String[] m, int s) {
        if (days.length >= 7)
            days = d;
        if (months.length >= 12)
            months = m;
        weekStart = s;
        drawCalendar();
    }

    public boolean isVisibleMonth(Date date, int months) {
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

    public void setCursorDate(Date d) {
        if (isVisibleMonth(d, 0)) {
            cursorDate = setHourToZero(d);
        }
    }

    public void setSelectedDate(Date d) {
        cursorDate = setHourToZero(d);
        selectedDate = cursorDate;
        drawCalendar();
    }

    public void setMinimalDate(Date d) {
        minimalDate = setHourToZero(d);
        if (maximalDate.getTime() < minimalDate.getTime())
            maximalDate = d;
        if (selectedDate.getTime() < minimalDate.getTime())
            selectedDate = d;
        if (cursorDate.getTime() < minimalDate.getTime())
            this.setSelectedDate(d);
    }

    public void setMaximalDate(Date d) {
        maximalDate = setHourToZero(d);
        if (minimalDate.getTime() > maximalDate.getTime())
            minimalDate = d;
        if (selectedDate.getTime() > maximalDate.getTime())
            selectedDate = d;
        if (cursorDate.getTime() > maximalDate.getTime())
            this.setSelectedDate(d);
    }

    public Date getSelectedDate() {
        return selectedDate;
    }

    public String getSelectedDateStr(String format) {
        return formatDate(format, selectedDate, months, days);
    }

    // /////////////////////////////////////////////////////////////////////////////
    // Listener Methods
    private ChangeListenerCollection changeListeners;

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
            Window.alert(helpStr);
        } else if (sender == closeBtn) {
            if (calendarContainer != null) {
                calendarContainer.hide();
            } else {
                outer.setVisible(false);
            }
        } else {
            CellHTML cell = (CellHTML) sender;
            setSelectedDate(new Date(cursorDate.getYear(), cursorDate.getMonth(), cell.getDay()));
            if (changeListeners != null) {
                changeListeners.fireChange(this);
            }
        }
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

    // /////////////////////////////////////////////////////////////////////////////
    // Utility static methods for manipulation of dates
    static final int YEARS = 1;
    static final int MONTHS = 2;
    static final int DAYS = 3;
    static final int HOURS = 4;
    static final int MINUTES = 5;
    static final int SECONDS = 6;

    public static Date increaseDate(Date d, int n) {
        Date ret = new Date(GWTCDatePicker.add(d.getTime(), n, GWTCDatePicker.DAYS));
        return ret;
    }

    public static Date increaseMonth(Date d, int n) {
        if (d.getDate() > 28) {
            Date tmp = new Date(d.getTime());
            tmp.setDate(1);
            GWTCDatePicker.add(tmp.getTime(), n, GWTCDatePicker.MONTHS);
            int d1 = daysInMonth(d);
            int d2 = daysInMonth(tmp);
            if (d1 > d2)
                d.setDate(d2);
        }

        return new Date(GWTCDatePicker.add(d.getTime(), n, GWTCDatePicker.MONTHS));
    }

    public static Date increaseYear(Date d, int n) {
        return new Date(GWTCDatePicker.add(d.getTime(), n, GWTCDatePicker.YEARS));
    }

    public static int daysInMonth(Date d) {
        Date nd = new Date(GWTCDatePicker.add(d.getTime(), 1, GWTCDatePicker.MONTHS));
        return GWTCDatePicker.compareDate(d, nd);
    }

    public static int compareDate(Date a, Date b) {
        long d1 = Date.UTC(a.getYear(), a.getMonth(), a.getDate(), 0, 0, 0);
        long d2 = Date.UTC(b.getYear(), b.getMonth(), b.getDate(), 0, 0, 0);
        return (int) ((d2 - d1) / 1000 / 60 / 60 / 24);
    }

    private static native long add(long time, int value, int type)
    /*-{
     var d = new Date(time);
     if (type == 1) d.setYear(d.getYear() + 1900 + value);
     if (type == 2) d.setMonth(d.getMonth() + value);
     if (type == 3) d.setDate(d.getDate() + value);
     if (type == 4) d.setHour(d.getHour() + value);
     if (type == 5) d.setMinute(d.getMinute() + value);
     if (type == 6) d.setSecond(d.getSecond() + value);
     if (type == 7) d.setMillisecond(d.getMillisecond() + value);
     return d.getTime();  
     }-*/;

    private static Date setHourToZero(Date d) {
        return new Date(Date.UTC(d.getYear(), d.getMonth(), d.getDate(), 0, 0, 0));
    }

    static public String formatDate(String format, Date date, String[] months, String days[]) {
        if (date == null || format == null || months == null || days == null)
            return "NULL";
        String ret = format;
        String month = months[date.getMonth()];
        String day = days[date.getDay()];
        String month_3 = month.length() >= 3 ? month.substring(0, 3) : month;
        String day_3 = day.length() >= 3 ? day.substring(0, 3) : day;
        String day_4 = day.length() >= 4 ? day.substring(0, 4) : day;
        ret = ret.replaceAll("dddd", day_4);
        ret = ret.replaceAll("ddd", day_3);
        ret = ret.replaceAll("dd", leftPadding(String.valueOf(date.getDate()), "0", 2));
        ret = ret.replaceAll("yyyy", String.valueOf(1900 + date.getYear()));
        ret = ret.replaceAll("yy", "" + leftPadding(String.valueOf(date.getYear() % 100), "0", 2));
        ret = ret.replaceAll("MMMM", month);
        ret = ret.replaceAll("MMM", month_3);
        ret = ret.replaceAll("MM", leftPadding(String.valueOf(date.getMonth() + 1), "0", 2));
        return ret;
    }

    static private String leftPadding(String text, String character, int maxNumberChars) {
        StringBuffer ret = new StringBuffer();
        for (int i = text.length(); i < maxNumberChars; i++) {
            ret.append(character);
        }
        ret.append(text);
        return ret.toString();
    }

    /**
     * Widget: Each cell in the calendar
     */
    private static class CellHTML extends HTML {
        private int day;

        public CellHTML(String text, int day) {
            super(text);
            this.day = day;
        }

        public int getDay() {
            return day;
        }
    }
}
