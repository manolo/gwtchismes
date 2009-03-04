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

import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.constants.DateTimeConstants;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ChangeListenerCollection;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasAlignment;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.SourcesChangeEvents;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * <p>
 * <b>A calendar widget to pick a date.</b> 
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

    private static final String styleName = "GWTCDatePicker";
    private static final String StyleLayout = "layout";
    private static final String StyleHelp = styleName + "-help";
    private static final String StyleBox = "box";
    private static final String StyleEmbeded = "embeded";
    private static final String StyleDialog = "dialog";

    private static final String StyleCButtons = "panelButtons";
    private static final String StyleCTopButtons = "topButtons";
    private static final String StyleCMiddleButtons = "middleButtons";
    private static final String StyleCBottomButtons = "bottomButtons";

    private static final String StyleCGrid = "panelDays";
    private static final String StyleCWeekHeader = "weekHeader";
    private static final String StyleCCellDayNames = "cellDayNames";
    private static final String StyleCCellEmpty = "cellEmpty";
    private static final String StyleCCellDays = "cellDays";
    private static final String StyleCInvalidDay = "invalidDay";
    private static final String StyleCValidDay = "validDay";
    private static final String StyleCToday = "today";
    private static final String StyleCWeekend = "weekend";
    private static final String StyleCSelected = "selectedDay";
    private static final String StyleCAfterSelected = "afterSelected";
    private static final String StyleCBeforeSelected = "beforeSelected";
    private static final String StyleMouseDefault = "gwtc-cursor-default";
    private static final String StyleMouseWait = "gwtc-cursor-wait";
    
    static int c = 0;
    public static final int CONFIG_DEFAULT = c;
    public static final int CONFIG_DIALOG = (int)Math.pow(2,c++);
    public static final int CONFIG_ROUNDED_BOX = (int)Math.pow(2,c++);
    public static final int CONFIG_NO_AUTOHIDE = (int)Math.pow(2,c++);
    public static final int CONFIG_NO_ANIMATION = (int)Math.pow(2,c++);
    public static final int CONFIG_NO_CLOSE_BUTTON = (int)Math.pow(2,c++);
    public static final int CONFIG_NO_HELP_BUTTON = (int)Math.pow(2,c++);
    public static final int CONFIG_NO_YEAR_BUTTON = (int)Math.pow(2,c++);
    public static final int CONFIG_BACKGROUND = (int)Math.pow(2,c++);
    public static final int CONFIG_FLAT_BUTTONS = (int)Math.pow(2,c++);
    public static final int CONFIG_STANDARD_BUTTONS = (int)Math.pow(2,c++);
    public static final int CONFIG_LAYOUT_2 = (int)Math.pow(2,c++);
    public static final int CONFIG_LAYOUT_3 = (int)Math.pow(2,c++);
    
    private Date minimalDate = setHourToZero(new Date());
    private Date selectedDate = setHourToZero(new Date());
    private Date cursorDate =  getFirstDayOfMonth(new Date());
    private Date maximalDate = GWTCDatePicker.increaseDate(new Date(), 365);
    private boolean needsRedraw = true;

    // Internationalizable elements
    private static final DateTimeConstants dateTimeConstants = (DateTimeConstants) GWT.create(DateTimeConstants.class);
    private static final int weekStart = Integer.valueOf(dateTimeConstants.firstDayOfTheWeek()).intValue() - 1;;

    private GWTCAlert helpDlg = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE);
    private String helpStr = "Calendar-Picker is a component of GWTChismes library.\n" 
        + "(c) Manuel Carrasco 2007\nhttp://code.google.com/p/gwtchismes\n\n" + "Navigation buttons:\n"
        + "\u003c Previous Month\n" + "\u003e Next Month\n\u00AB Previous Year\n\u00BB Next Year\n- Actual Month\nx Close\n ";

    // Containers
    private DialogBox calendarDlg = null;
    private Panel outer = new VerticalPanel();
    
    // Dates panel
    private final FlexTable calendarGrid = new FlexTable();
    private GWTCBackPanel background = null;
    
    // Navigation Buttons
    private final DockPanel navButtons = new DockPanel();
    private final DockPanel bottomButtons = new DockPanel();
    private final DockPanel topButtons = new DockPanel();
    private final DockPanel middleButtons = new DockPanel();
    private  Button helpBtn ;
    private  Button closeBtn ;
    private  Button todayBtn ;
    private  Button prevMBtn ;
    private  Button prevYBtn ;
    private  Button nextMBtn ;
    private  Button nextYBtn ;
    
    private int layout = 0;
    MenuBar monthHeader = new MenuBar();
    MenuBar monthMenu = new MenuBar(true);

    private ChangeListenerCollection changeListeners = new ChangeListenerCollection();

    
    /**
     * This constructor is deprecated.
     * 
     * @param dialog
     *            true if you want an independient and drageable dialog box when the picker is showed
     * @deprecated
     */
    public GWTCDatePicker(boolean dialog) {
        this(dialog? CONFIG_DIALOG : 0);
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
     * 
     */
    public GWTCDatePicker(int config) {
        layout = config & CONFIG_LAYOUT_2 | config & CONFIG_LAYOUT_3;
        int buttonsType = config & CONFIG_FLAT_BUTTONS | config & CONFIG_STANDARD_BUTTONS;
        
        if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX) {
            outer = new GWTCBox();
        }
        if ((config & CONFIG_DIALOG) == CONFIG_DIALOG) {
            if ((config & CONFIG_BACKGROUND) == CONFIG_BACKGROUND) {
                background = new GWTCBackPanel();
                background.addClickListener(new ClickListener(){
                    public void onClick(Widget sender) {
                        hide();
                    }
                });
            }
            calendarDlg = new DialogBox( ! ((config & CONFIG_NO_AUTOHIDE)== CONFIG_NO_AUTOHIDE) ) {
                @Override
                protected void onDetach() {
                    super.onDetach();
                    if(background != null)
                        background.hide();
                }
            };
            calendarDlg.setWidget(outer);
            calendarDlg.setAnimationEnabled( ! ((config & CONFIG_NO_ANIMATION)== CONFIG_NO_ANIMATION));
            initWidget(new DockPanel());
            setStyleName(styleName);
            addStyleDependentName(StyleDialog);
            setZIndex(999);
        } else {
            initWidget(outer);
            setStyleName(styleName);
            addStyleDependentName(StyleEmbeded);
        }

        helpBtn = createButton(buttonsType, "?", this);
        closeBtn = createButton(buttonsType, "x", this);
        todayBtn = createButton(buttonsType, "-", this);
        prevMBtn = createButton(buttonsType, "\u003c", this);
        prevYBtn = createButton(buttonsType, "\u00AB", this);
        nextMBtn = createButton(buttonsType, "\u003e", this);
        nextYBtn = createButton(buttonsType, "\u00BB", this);
        
        if ((config & CONFIG_DIALOG) != CONFIG_DIALOG || ((config & CONFIG_NO_CLOSE_BUTTON) == CONFIG_NO_CLOSE_BUTTON))
            closeBtn.setVisible(false);

        if ((config & CONFIG_NO_HELP_BUTTON) == CONFIG_NO_HELP_BUTTON )
            helpBtn.setVisible(false);

        if ((config & CONFIG_NO_YEAR_BUTTON) == CONFIG_NO_YEAR_BUTTON ){ 
            nextYBtn.setVisible(false);
            prevYBtn.setVisible(false);
        }
        
        monthHeader.setAnimationEnabled(true);
        DOM.setStyleAttribute(getElement(), "cursor", "default");
        
        if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX)
            addStyleDependentName(StyleBox);
        
        calendarGrid.setStyleName(GWTCDatePicker.StyleCGrid);
        helpDlg.addStyleName(StyleHelp);
        
        navButtons.setStyleName(GWTCDatePicker.StyleCButtons);
        topButtons.addStyleName(StyleCTopButtons);
        middleButtons.addStyleName(StyleCMiddleButtons);
        bottomButtons.addStyleName(StyleCBottomButtons);
        
        drawDatePickerWidget();
    }
    
    public void drawDatePickerWidget() {
        outer.add(navButtons);
        outer.add(calendarGrid);
        if (layout == CONFIG_LAYOUT_2) {
            addStyleDependentName(StyleLayout + "_2");
            drawLayout2();
        } else if (layout == CONFIG_LAYOUT_3) {
            addStyleDependentName(StyleLayout + "_3");
            drawLayout3();
        } else {
            addStyleDependentName(StyleLayout + "_1");
            drawLayout1();
        }
    }
    
    private void drawLayout1() {
        topButtons.add(helpBtn, DockPanel.WEST);
        topButtons.add(closeBtn, DockPanel.EAST);
        topButtons.add(monthHeader, DockPanel.NORTH);
        topButtons.setCellWidth(monthHeader, "100%");
        monthHeader.setWidth("100%");

        bottomButtons.add(prevYBtn, DockPanel.WEST);
        bottomButtons.add(prevMBtn, DockPanel.WEST);
        bottomButtons.add(nextYBtn, DockPanel.EAST);
        bottomButtons.add(nextMBtn, DockPanel.EAST);
        bottomButtons.add(todayBtn, DockPanel.NORTH);
        bottomButtons.setCellWidth(todayBtn, "100%");
        todayBtn.setWidth("100%");
        
        navButtons.add(topButtons, DockPanel.NORTH);
        navButtons.add(bottomButtons, DockPanel.NORTH);
    }
    
    private void drawLayout2() {
        topButtons.add(helpBtn, DockPanel.WEST);
        topButtons.add(prevYBtn, DockPanel.WEST);
        topButtons.add(prevMBtn, DockPanel.WEST);
        
        topButtons.add(closeBtn, DockPanel.EAST);
        topButtons.add(nextYBtn, DockPanel.EAST);
        topButtons.add(nextMBtn, DockPanel.EAST);
        
        topButtons.add(monthHeader, DockPanel.NORTH);
        topButtons.setCellWidth(monthHeader, "100%");
        monthHeader.setWidth("100%");
        
        navButtons.add(topButtons, DockPanel.NORTH);
    }

    private void drawLayout3() {
        topButtons.add(helpBtn, DockPanel.WEST);
        topButtons.add(closeBtn, DockPanel.EAST);
        Label emptyLabel = new Label(" ");
        topButtons.add(emptyLabel, DockPanel.NORTH);
        topButtons.setCellWidth(emptyLabel, "100%");

        middleButtons.add(prevYBtn, DockPanel.WEST);
        middleButtons.add(prevMBtn, DockPanel.WEST);
        middleButtons.add(nextYBtn, DockPanel.EAST);
        middleButtons.add(nextMBtn, DockPanel.EAST);

        middleButtons.add(todayBtn, DockPanel.NORTH);
        middleButtons.setCellWidth(todayBtn, "100%");
        middleButtons.setCellHorizontalAlignment(todayBtn, HasAlignment.ALIGN_CENTER);
        todayBtn.setWidth("100%");
        
        bottomButtons.setWidth("100%");
        bottomButtons.add(monthHeader, DockPanel.NORTH);
        bottomButtons.setCellWidth(monthHeader, "100%");
        bottomButtons.setCellHorizontalAlignment(monthHeader, HasAlignment.ALIGN_CENTER);
        
        navButtons.add(topButtons, DockPanel.NORTH);
        navButtons.add(middleButtons, DockPanel.NORTH);
        navButtons.add(bottomButtons, DockPanel.NORTH);
    }
    
    private void internationalize(Button b, Map<String, String> strs, String ktext)  {
        if (strs==null) return;
        String text = strs.get(ktext);
        String title = strs.get(ktext + ".title");
        if (text != null && text.length()>0)
            b.setText(text);
        if (title != null && title.length()>0)
            b.setTitle(title);
    }

    public void setI18nMessages(Map<String, String> strs) {
        internationalize(nextMBtn, strs, "key.next.month");
        internationalize(prevMBtn, strs, "key.prev.month");
        internationalize(nextYBtn, strs, "key.next.year");
        internationalize(prevYBtn, strs, "key.next.year");
        internationalize(todayBtn, strs, "key.today");
        internationalize(helpBtn, strs, "key.help");
        internationalize(closeBtn, strs, "key.close");
        helpStr = strs.get("key.calendar.help");
        if (helpStr == null || helpStr.length() == 0)
            helpBtn.setVisible(false);
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


    @Override
    public void setStyleName(String s) {
        if (calendarDlg != null)
            calendarDlg.setStyleName(s);
        else
            outer.setStyleName(s);

        monthHeader.setStyleName(s + "-MenuBar");
        monthHeader.addStyleName(s + "-MenuBar-horizontal");
        monthMenu.setStyleName(s + "-MenuBar");
        monthMenu.addStyleName(s + "-MenuBar-vertical");
        if (! s.equals(styleName)) {
            addStyleName(styleName);
            monthHeader.addStyleName(styleName + "-MenuBar");
            monthHeader.addStyleName(styleName + "-MenuBar-horizontal");
            monthMenu.addStyleName(styleName + "-MenuBar");
            monthMenu.addStyleName(styleName + "-MenuBar-vertical");
        }
    }
    
    @Override
    public void addStyleName(String s) {
        if (calendarDlg != null) {
            calendarDlg.addStyleName(s);
        } else {
            outer.addStyleName(s);
        }
        monthHeader.addStyleName(s + "-MenuBar");
        monthMenu.addStyleName(s + "-MenuBar");
        monthHeader.addStyleName(s + "-MenuBar-horizontal");
        monthMenu.addStyleName(s + "-MenuBar-vertical");
    }
    @Override
    public void addStyleDependentName(String s) {
        if (calendarDlg != null)
            calendarDlg.addStyleDependentName(s);
        else
            outer.addStyleDependentName(s);
    }
    @Override
    public String getStyleName() {
        return calendarDlg != null ? calendarDlg.getStyleName(): outer.getStyleName();
    }
    @Override
    public String getStylePrimaryName() {
        return calendarDlg != null ? calendarDlg.getStylePrimaryName(): outer.getStylePrimaryName();
    }
    @Override
    public Element getElement() {
        return calendarDlg != null ? calendarDlg.getElement(): outer.getElement();
    }
    

    /**
     * Draw or redraw all calendar elements into the container
     * 
     */
    public void drawCalendar() {

        if (!isVisible() || !needsRedraw) return;
        needsRedraw = false;
        
        fillElements();
        fillMenuItems();
        fillCalendarGrid();
        
        prevMBtn.setEnabled(isVisibleMonth(cursorDate, -1));
        nextMBtn.setEnabled(isVisibleMonth(cursorDate, 1));
        prevYBtn.setEnabled(isVisibleMonth(cursorDate, -12));
        nextYBtn.setEnabled(isVisibleMonth(cursorDate, 12));

        adjustDimensions();
    }

    @Override
    protected void onAttach() {
        super.onAttach();
        drawCalendar();
    }

    // private boolean initialized = false;
    private void fillElements() {
        //  if (initialized && !GWTCHelper.isHostedMode()) return;
        // initialized = true;
        calendarGrid.clear();
        
        calendarGrid.setCellSpacing(0);
        calendarGrid.getRowFormatter().setStyleName(0, GWTCDatePicker.StyleCWeekHeader);
        int l = 0;
        for (int i = weekStart; i < 7; i++) {
            calendarGrid.getCellFormatter().setStyleName(0, l, GWTCDatePicker.StyleCCellDayNames);
            calendarGrid.setText(0, l++, dateTimeConstants.shortWeekdays()[i]);
        }
        while (l < 7) {
            calendarGrid.getCellFormatter().setStyleName(0, l, GWTCDatePicker.StyleCCellDayNames);
            calendarGrid.setText(0, l++, dateTimeConstants.shortWeekdays()[0]);
        }
        for (int i = 1; i < 7; i++) { 
            for (int k = 0; k < 7; k++) { 
                CellHTML html = new CellHTML();
                calendarGrid.setWidget(i, k, html);
                html.addClickListener(this);
            }
        }
    }

    
    private void fillCalendarGrid() {
        Date firstDate = getFirstDayOfMonth(cursorDate);
        long todayNum = 1 + GWTCDatePicker.compareDate(firstDate, new Date());
        long minimalNum = 1 + GWTCDatePicker.compareDate(firstDate, minimalDate);
        long maximalNum = 1 + GWTCDatePicker.compareDate(firstDate, maximalDate);
        long selectedNum = selectedDate != null ? 1 + GWTCDatePicker.compareDate(firstDate, selectedDate) : -1;
        int firstWDay = firstDate.getDay();
        int numOfDays = GWTCDatePicker.daysInMonth(cursorDate);
        int j = 0 + weekStart;

        for (int i = 1; i < 7; i++) { // each row in the grid
            for (int k = 0; k < 7; k++, j++) { // each day in the week
                int displayNum = (firstWDay < weekStart) ? (j - firstWDay - 6) : (j - firstWDay + 1);
                CellHTML html = (CellHTML) calendarGrid.getWidget(i, k);
                DOM.setElementAttribute(html.getElement(), "class", "");
                if (j < firstWDay || displayNum > numOfDays || displayNum < 1 ) {
                    html.addStyleName(StyleCCellEmpty);
                    html.setEnabled(false);
                    html.setDay(0);
                } else {
                    html.setDay(displayNum);
                    html.setEnabled(true);
                    html.setStyleName(StyleCValidDay);
                    if (displayNum < minimalNum || displayNum > maximalNum) {
                        html.setStyleName(GWTCDatePicker.StyleCInvalidDay);
                        html.removeStyleName(StyleCValidDay);
                        html.setEnabled(false);
                    } else if (displayNum == selectedNum) {
                        html.addStyleName(GWTCDatePicker.StyleCSelected);
                    } else if (displayNum >= selectedNum) {
                        html.addStyleName(GWTCDatePicker.StyleCAfterSelected);
                    } else {
                        html.addStyleName(GWTCDatePicker.StyleCBeforeSelected);
                    }
                    if (displayNum == todayNum) {
                        html.addStyleName(GWTCDatePicker.StyleCToday);
                    }
                    if (k == 0 || k==6) {
                        html.addStyleName(StyleCWeekend);
                    }
                    html.addStyleName(GWTCDatePicker.StyleCCellDays);
                }
            }
        }
    }

    private void fillMenuItems() {
        monthMenu.clearItems();

        monthHeader.clearItems();
        //monthHeader.setAutoOpen(true);
        monthHeader.addItem(formatDate("MMMM, yyyy", cursorDate), monthMenu);
        int nmonths = 10;
        int n = -1 * (nmonths / 2);
        Date d = new Date(getFirstDayOfMonth(cursorDate).getTime());
        Date md = new Date(getFirstDayOfMonth(minimalDate).getTime());
        d = increaseMonth(d, n );
        while (compareDate(md, d) < 0) { 
            d = increaseMonth(d, 1);
            n ++;
        }
        n += nmonths;
        d = increaseMonth(cursorDate, n);
        while (compareDate(maximalDate, d) > 0) { 
            d = increaseMonth(d, -1);
            n --;
        }
        n -= nmonths;
        d = increaseMonth(cursorDate, n);
        for(int i = n; i<nmonths; i++) {
            String t = formatDate("MMMM, yyyy", d);
            MenuCommand c = new MenuCommand(d);
            d = increaseMonth(d, 1);
            if ( compareDate(d, maximalDate) >= 0 ) {
                monthMenu.addItem(t, c);
            }
        }
    }




    /**
     * show the calendar container, 
     * when the calendar picker is a dialog box and param sender is not null 
     * the dialog is positioned near of it
     * 
     * @param sender
     *            the widget that the user has clicked
     */
    public void show(Widget sender) {
        if (background!=null)
            background.show();
        if (selectedDate != null) 
            setCursorDate(selectedDate);
        this.drawCalendar();
        if (calendarDlg == null) {
            assert outer.isAttached() : "Calendar has not been attached, even though it is not configured as a popup.";
            outer.setVisible(true);
        } else {
            if (sender != null) {
                calendarDlg.setPopupPosition(sender.getAbsoluteLeft() /*+ 20*/, sender.getAbsoluteTop() + 10);
                calendarDlg.show();
                moveIntoVisibleArea();
                DOM.scrollIntoView(calendarGrid.getElement());
            } else {
                calendarDlg.center();
            }
        }
        adjustDimensions();
    }
    /**
     * Set the zIndex value
     * 
     * @param z
     */
    public void setZIndex(int z) {
        if (calendarDlg!=null) {
            DOM.setStyleAttribute(calendarDlg.getElement(), "zIndex", String.valueOf(z));
            if (background != null)
                background.setZIndex(z - 1);
            helpDlg.setZIndex(z + 1);
        }
    }

    private void adjustDimensions() {
        int incr = outer instanceof GWTCBox ? 30 : 2;
        navButtons.setWidth(calendarGrid.getOffsetWidth() + "px");
        outer.setWidth(calendarGrid.getOffsetWidth() + incr + "px");
        if (calendarDlg != null) 
            calendarDlg.setWidth(outer.getOffsetWidth() + "px");
     }
     
     private void moveIntoVisibleArea() {
         if (calendarDlg != null) {
             int w = Window.getClientWidth() + Window.getScrollLeft();
             int xd = calendarDlg.getAbsoluteLeft();
             int wd = calendarGrid.getOffsetWidth() + 40;
             
             if ( (xd + wd) > w ) {
                 xd = xd - ((xd + wd) - w);
             }
             int h = Window.getClientHeight() + Window.getScrollTop();
             int yd = calendarDlg.getAbsoluteTop();
             int hd = calendarDlg.getOffsetHeight() + 20;
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
            calendarDlg.hide();
            if(background != null) {
                background.hide();
            }
        } else
            outer.setVisible(false);
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
        if (d == null)
            return;
        if (getMonthNumber(selectedDate) != getMonthNumber(d)) {
            setCursorDate(d);
            needsRedraw = true;
            drawCalendar();
        }
        selectedDate = setHourToZero(d);
    }
    
    public long getMonthNumber(Date d) {
       return d.getYear() * 12 + d.getMonth();
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
        if (selectedDate != null && (cursorDate.getTime() < minimalDate.getTime() || selectedDate.getTime() < minimalDate.getTime()))
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
        if (selectedDate != null && (cursorDate.getTime() > maximalDate.getTime() || selectedDate.getTime() > maximalDate.getTime()))
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

    private void mouseWait(){
        removeStyleName(StyleMouseDefault);
        addStyleName(StyleMouseWait);
    }
    private void mouseDefault(){
        removeStyleName(StyleMouseWait);
        addStyleName(StyleMouseDefault);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.google.gwt.user.client.ui.ClickListener#onClick(com.google.gwt.user.client.ui.Widget)
     */
    public void onClick(Widget sender) {
        mouseWait();
        if (prevMBtn.equals(sender)) {
            setCursorDate(GWTCDatePicker.increaseMonth(cursorDate, -1));
            drawCalendar();
        } else if (nextMBtn.equals(sender)) {
            setCursorDate(GWTCDatePicker.increaseMonth(cursorDate, 1));
            drawCalendar();
        } else if (prevYBtn.equals(sender)) {
            setCursorDate(GWTCDatePicker.increaseYear(cursorDate, -1));
            drawCalendar();
        } else if (nextYBtn.equals(sender)) {
            setCursorDate(GWTCDatePicker.increaseYear(cursorDate, 1));
            drawCalendar();
        } else if (todayBtn.equals(sender)) {
            setCursorDate(new Date());
            drawCalendar();
        } else if (helpBtn.equals(sender)) {
            // Window.alert(helpStr);
            helpDlg.alert(helpStr.replaceAll("\\n", "<br/>"));
        } else if (closeBtn.equals(sender)) {
            if (calendarDlg != null) {
                hide();
            } else {
                outer.setVisible(false);
            }
        } else if (sender instanceof CellHTML) {
            CellHTML cell = (CellHTML) sender;
            if (cell.isEnabled()) {
                if (calendarDlg != null)
                    hide();
                setSelectedDate(setHourToZero(new Date(cursorDate.getYear(), cursorDate.getMonth(), cell.getDay())));
                changeListeners.fireChange(this);
            }
        } else {
            // an unknown click listener
        }
        mouseDefault();
    }
    
    public void setPickerOptions(int options) {
        
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.google.gwt.user.client.ui.SourcesChangeEvents#addChangeListener(com.google.gwt.user.client.ui.ChangeListener)
     */
    public void addChangeListener(ChangeListener listener) {
        changeListeners.add(listener);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.google.gwt.user.client.ui.SourcesChangeEvents#removeChangeListener(com.google.gwt.user.client.ui.ChangeListener)
     */
    public void removeChangeListener(ChangeListener listener) {
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
        long diff = setHourToZero(b).getTime() - setHourToZero(a).getTime();
        double hours = Math.ceil( diff/(1000*60*60) );
        int days = (int)(hours/24);
        if (hours%24 > 0)
            days += 1;
        return days;
    }

    /**
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
        if (format == null)
            format = DateTimeFormat.getLongDateFormat().getPattern();
        else
            format = format.replaceAll("dddd", "EEEE").replaceAll("ddd", "EEE");
        if (date == null)
            return format;
        return DateTimeFormat.getFormat(format).format(date);
    }
    
    class MenuCommand implements Command {
        Date date;
        public MenuCommand(Date d) {
            date = d;
        }
        public void execute() {
            setCursorDate(date);
            drawCalendar();
        }
    }


    public Button createButton(int buttonsType, String text, ClickListener listener) {
        Button b;
        if(buttonsType == CONFIG_DEFAULT)
            b = new GWTCButton();
        else 
            b = new GWTCButton(GWTCButton.BUTTON_TYPE_0, "");
        
        if (buttonsType == CONFIG_FLAT_BUTTONS) 
            b.addStyleDependentName("flat");
        
        if (listener != null)
            b.addClickListener(listener);
        
        b.setText(text);
        return b;
    }
    
    /**
     * Basic Widget that represents each cell in the calendar picker
     * 
     */
    private static class CellHTML extends HTML {
        private int day = 0;
        private boolean enabled = true;
        
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
    
        public void addClickListener(ClickListener pickListener) {
            super.addClickListener(pickListener);
            super.addMouseListener(mouseOverListener);
        }

        private void setCellContent() {
            setHTML( (day < 1 || day > 31) ? "&nbsp;" : String.valueOf(day));
        }

        private static final MouseListener mouseOverListener = new MouseListener() {
            public void onMouseUp(Widget sender, int x, int y) {}
            public void onMouseDown(Widget sender, int x, int y) {}
            public void onMouseMove(Widget sender, int x, int y) {}
            public void onMouseEnter(Widget sender) {
                sender.addStyleDependentName("over");
            }
            public void onMouseLeave(Widget sender) {
                sender.removeStyleDependentName("over");
            }
        };
   }
}

