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
import java.util.Vector;

import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HasHTML;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * <p>
 * <b>Abstract class used for creating complex and customized DatePickers.</b> 
 * </p>
 * @author Manuel Carrasco Moñino
 * 
 * <h3>Features</h3>
 * <ul>
 * <li>It can be implemented as a modal and dragable dialog or it can be included into a standard panel.</li>
 * <li>It can be in a decorated box with rounded corners</li>
 * <li>The dialog position is calculated on the fly to avoid be positioned out of the viewport area</li>
 * <li>Display multiple months</li>
 * <li>Month selector menu</li>
 * <li>Configurable restrictions: minimalDate, maximalDate</li>
 * <li>Configurable texts: caption, help and buttons</li>
 * <li>Configurable button style: flat, rounded</li>
 * <li>Configurable button layout (6 rows, 3 at top and 3 at bottom)</li>
 * <li>Uses GWT-i18n for date formating.</li>
 * <li>It extends GWTSimpleDatePicker that has useful methods for date manipulation</li>
 * </ul>
 * 
 * <h3>Example</h3>
 * <pre>
    public class GWTCDatePickerCustom extends GWTCDatePickerAbstract {

        // You have to call createInstance in the constructor
        public GWTCDatePickerCustom() {
            createInstance(CONFIG_DIALOG | CONFIG_BACKGROUND);
        }
        
        // You have to implement drawDatePickerWidget
        // You can use either configure() or layoutButtons() & layoutCalendar()  
        Override
        void drawDatePickerWidget() {
            int monthsToDisplay = 6;
            int numberOfColumns = 2;
            int monthsIncrement = 6;
            int maxMonthsInMenu = 32;
            
            // Buttons can be placed in any of the 6 availabe rows, 
            // @see com.google.code.p.gwtchismes.client.GWTCDatePickerAbstract#configure() for a detailed explanation.
            String buttonsLayout = "? x;p<m>n";
            
            configure(buttonsLayout, monthsToDisplay, numberOfColumns, monthsIncrement, maxMonthsInMenu);
            
            setMinimalDate(increaseMonth(new Date(), -24));
            setMaximalDate(increaseMonth(new Date(), 24));
            addStyleName("GWTCDatePicker-custom");
        }
    }
 * </pre>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCDatePicker { GWTCDatePicket container }</li>
 * <li>.GWTCDatePicker .GWTCDatePicker-help { help dialog } </li>
 * <li>.GWTCDatePicker-dlg { Dependent style when it is a modal dialog } </li>
 * <li>.GWTCDatePicker-no-dlg { Dependent style when it is not placed in a dialog } </li>
 * <li>.GWTCDatePicker-box { Dependent style when it is in a GWTCBox } </li>
 * <li>.GWTCDatePicker-no-box { Dependent style when it is not in a GWTCBox } </li>
 * <li>.GWTCDatePicker .Caption { calendar title }</li>
 * <li>.GWTCDatePicker .panelButtons { panel container with navigation buttons at top }</li>
 * <li>.GWTCDatePicker .panelButtons .buttonsRow_1 { 1st row in top buttons panel  }</li>
 * <li>.GWTCDatePicker .panelButtons .buttonsRow_2 { 2nd row in top buttons panel  }</li>
 * <li>.GWTCDatePicker .panelButtons .buttonsRow_3 { 3th row in top buttons panel  }</li>
 * <li>.GWTCDatePicker .panelButtonsBottom { panel container with navigation buttons at bottom }</li>
 * <li>.GWTCDatePicker .panelButtonsBottom .buttonsRow_1 { 1st row in bottom buttons panel }</li>
 * <li>.GWTCDatePicker .panelButtonsBottom .buttonsRow_2 { 2nd row in bottom buttons panel }</li>
 * <li>.GWTCDatePicker .panelButtonsBottom .buttonsRow_3 { 3th row in bottom buttons panel }</li>
 * 
 * <li>.GWTCDatePicker .panelMonths { container for the displayed months }</li>
 * <li>.GWTCDatePicker .panelMonths .monthLabels { labels with the header of each displayed month }</li>
 * <li>.GWTCDatePicker .panelMonths .monthSeparator { cell between two months }</li>
 * 
 * <li>.GWTCDatePicker-MenuBar { horizontal and vertical menu selector items }</li>
 * <li>.GWTCDatePicker-MenuBar-horizontal { horizontal item of menu selector  }</li>
 * <li>.GWTCDatePicker-MenuBar-vertical { vertical items of menu selector  }</li>
 * </ul>
 * 
 * <h3>Inherited CSS Styles</h3>
 * <ul>
 * <li>.GWTCDatePicker .weekHeader { week headers row}</li>
 * <li>.GWTCDatePicker .weekHeader .cellDayNames { cells with day names} </li>
 * <li>.GWTCDatePicker .panelDays { panel that contains all days }</li>
 * <li>.GWTCDatePicker .panelDays .cellEmpty { cell without days }</li>
 * <li>.GWTCDatePicker .panelDays .cellDays { primary style on each cell that has days }</li>
 * <li>.GWTCDatePicker .panelDays .invalidDay { cell with a day which can not be selected because are out of the allowed interval }</li>
 * <li>.GWTCDatePicker .panelDays .validDay { cell with selectable day }</li>
 * <li>.GWTCDatePicker .panelDays .today { today } </li>
 * <li>.GWTCDatePicker .panelDays .selectedDay { selected day }</li>
 * <li>.GWTCDatePicker .panelDays .afterSelected { days after the selected day and before the maximal day } </li>
 * <li>.GWTCDatePicker .panelDays .beforeSelected { days before the selected day and after the minimal day}</li>

 * <li>.GWTCDatePicker-MenuBar .gwt-MenuItem { month selector items }</li>
 * <li>.GWTCDatePicker-MenuBar .gwt-MenuItem-selected { selected month selector items }</li>
 * </ul>
 * 
 */
public abstract class GWTCDatePickerAbstract extends GWTCSimpleDatePicker {
    
    protected static final String styleName = "GWTCDatePicker";
    protected static final String StyleHelp = styleName + "-help";
    protected static final String StyleDialog = "dialog";
    protected static final String StyleEmbeded = "embeded";
    protected static final String StyleBox = "box";
    protected static final String StyleNoBox = "no-box";

    protected static final String StyleCButtonsTop = "panelButtons";
    protected static final String StyleCButtonsBottom = "panelButtonsBottom";
    protected static final String StyleCButtonsRow = "buttonsRow_";

    protected static final String StyleMonthGrid = "panelMonths";
    protected static final String StyleMonthLabels = "monthLabels";
    protected static final String StyleMonthLabel = "monthLabel";
    protected static final String StyleMonthSeparator = "monthSeparator";
    protected static final String StyleMonthCell = "monthCells";
    
    static int constant_cont = 0;
    public static final int CONFIG_DEFAULT = constant_cont;
    public static final int CONFIG_DIALOG = (int) Math.pow(2, constant_cont++);
    public static final int CONFIG_ROUNDED_BOX = (int) Math.pow(2, constant_cont++);
    public static final int CONFIG_NO_AUTOHIDE = (int) Math.pow(2, constant_cont++);
    public static final int CONFIG_NO_ANIMATION = (int) Math.pow(2, constant_cont++);
    public static final int CONFIG_BACKGROUND = (int) Math.pow(2, constant_cont++);
    public static final int CONFIG_FLAT_BUTTONS = (int) Math.pow(2, constant_cont++);
    public static final int CONFIG_STANDARD_BUTTONS = (int) Math.pow(2, constant_cont++);
    
    public static String MONTH_FORMAT = "MMMM, yyyy";
    
    protected GWTCAlert helpDlg = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE);

    protected String helpStr = "Calendar-Picker is a component of GWTChismes library.\n" +
    		"(c) Manuel Carrasco 2007\n" +
    		"http://code.google.com/p/gwtchismes\n\n" + 
    		"Navigation buttons:\n" +  
    		"\u003c Previous Month\n" + 
    		"\u003e Next Month\n" +
    		"\u00AB Previous Year\n" +
    		"\u00BB Next Year\n" +
    		"- Actual Month\n" +
    		"x Close\n ";

    // Containers
    protected GWTCModalBox calendarDlg = null;
    protected Panel outer;
    
    // Dates panel
    protected final FlexTable calendarGrid = new FlexTable();
    
    // Navigation Buttons
    protected final DockPanel navButtonsTop = new DockPanel();
    protected final DockPanel navButtonsBottom = new DockPanel();
    protected final DockPanel topButtonsRow1 = new DockPanel();
    protected final DockPanel topButtonsRow0 = new DockPanel();
    protected final DockPanel topButtonsRow2 = new DockPanel();
    protected final DockPanel bottomButtonsRow0 = new DockPanel();
    protected final DockPanel bottomButtonsRow1 = new DockPanel();
    protected final DockPanel bottomButtonsRow2 = new DockPanel();
    protected  Button helpBtn ;
    protected  Button closeBtn ;
    protected  Button todayBtn ;
    protected  Button prevMBtn ;
    protected  Button prevYBtn ;
    protected  Button nextMBtn ;
    protected  Button nextYBtn ;
    
    // Month selector menu
    MenuBar monthSelectorHeader = new MenuBar();
    Vector<Label> monthHeaders = new Vector<Label>();
    protected MenuBar monthMenu = new MenuBar(true);

    // Vector of montly datepickers to display
    Vector <GWTCSimpleDatePicker> simpleDatePickers = new Vector<GWTCSimpleDatePicker>();

    // Configuration parameters
    protected int monthColumns = 3;
    protected int monthSelector = 12;
    protected int monthStep = 1;
    
    /**
     * Classes implementing this abstract class, have to implement this method
     */
    protected abstract void drawDatePickerWidget();
    
    /**
     * Creates the calendar instance based in the configuration provided. 
     * 
     * Options can be passed joining these using the or bit wise operator
     * <ul>
     * <li>CONFIG_DIALOG            show as modal dialog</li>
     * <li>CONFIG_ROUNDED_BOX       wrap with a rounded-corner box</li>
     * <li>CONFIG_NO_AUTOHIDE       don't autohide dialog when the user click out of the picker</li>
     * <li>CONFIG_NO_ANIMATION      don't animate the dialog box when it is showed/hidden</li>
     * <li>CONFIG_NO_ANIMATION      don't animate the dialog box when it is showed/hidden</li>
     * <li>CONFIG_BACKGROUND        show a semitransparent background covering all the document</li>
     * <li>CONFIG_FLAT_BUTTONS      use native Buttons instead of GWTCButton also add the dependent class 'flat'</li>
     * <li>CONFIG_STANDARD_BUTTONS  use native browser Buttons instead of GWTCButton</li>
     * </ul>
     */
    public void initialize(int config) {

        int buttonsType = config & CONFIG_FLAT_BUTTONS | config & CONFIG_STANDARD_BUTTONS;
        helpBtn = createButton(buttonsType, "?", this);
        closeBtn = createButton(buttonsType, "x", this);
        todayBtn = createButton(buttonsType, "-", this);
        prevMBtn = createButton(buttonsType, "\u003c", this);
        prevYBtn = createButton(buttonsType, "\u00AB", this);
        nextMBtn = createButton(buttonsType, "\u003e", this);
        nextYBtn = createButton(buttonsType, "\u00BB", this);
        
        if ((config & CONFIG_DIALOG) == CONFIG_DIALOG) {
            int opt = 0;
            if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX) {
                opt |= GWTCModalBox.OPTION_ROUNDED_FLAT;
            }
            if ((config & CONFIG_BACKGROUND) != CONFIG_BACKGROUND) {
                opt |= GWTCModalBox.OPTION_DISABLE_BACKGROUND;
                if ((config & CONFIG_NO_AUTOHIDE) == CONFIG_NO_AUTOHIDE) {
                    opt |= GWTCModalBox.OPTION_DISABLE_AUTOHIDE;
                }
            }
            calendarDlg = new GWTCModalBox(opt);
            calendarDlg.setAnimationEnabled((config & CONFIG_NO_ANIMATION) != CONFIG_NO_ANIMATION);
            
            outer = calendarDlg;
            initWidget(new DockPanel());
            
            setStyleName(styleName);
            addStyleDependentName(StyleDialog);
            setZIndex(999);
        } else {
            if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX) {
                outer = new GWTCBox(GWTCBox.STYLE_FLAT);
            } else {
                outer = new VerticalPanel();
            }
            String s = outer.getStyleName();
            initWidget(outer);
            setStyleName(styleName);
            addStyleDependentName(StyleEmbeded);
            if (s != null && s.length() > 0 ) addStyleName(s);
        }

        helpDlg.addStyleName(StyleHelp);
        navButtonsTop.setStyleName(StyleCButtonsTop);
        navButtonsBottom.setStyleName(StyleCButtonsBottom);
        calendarGrid.setStyleName(StyleMonthGrid);
        navButtonsTop.setWidth("100%");
        calendarGrid.setWidth("100%");
        navButtonsBottom.setWidth("100%");
        
        
        if ((config & CONFIG_ROUNDED_BOX) == CONFIG_ROUNDED_BOX)
            addStyleDependentName(StyleBox);
        else
            addStyleDependentName(StyleNoBox);
        
        if ((config & CONFIG_DIALOG) != CONFIG_DIALOG )
            closeBtn.setVisible(false);

        monthSelectorHeader.setAnimationEnabled(true);
        
        outer.add(navButtonsTop);
        outer.add(calendarGrid);
        outer.add(navButtonsBottom);
        

        
        drawDatePickerWidget();
        refresh();
        adjustDimensions();
        
        DOM.sinkEvents(outer.getElement(), Event.MOUSEEVENTS | Event.KEYEVENTS);
        DOM.setStyleAttribute(outer.getElement(), "cursor", "default");
        DOM.setElementAttribute(monthMenu.getElement(), "align", "center");
    }

    /**
     * 
     * Configure this calendarPicker.
     * 
     * 
     * @param buttonsLayout   a string representation with the disposition of buttons.<br/>
     *      There are 6 rows of buttons, 3 at top and 3 at bottom.<br/>
     *      Each row has to be separated by the ';' character.<br/>
     *      Available buttons are:<br/>
     *       help(?), close(x), nextMonth(>), previowusMonsh(<), nextYear(n), prevYear(p)<br/>
     *       monthMenu(m), today(-), empty(space)<br/>
     *    
     * @param months            number of months to display
     * @param monthsPerRow      number of month columns
     * @param monthsStep        number of months to jump when the buttons > or < are pushed
     * @param monthsInSelector  number of items (months) in the months selector menu. 
     */
    public void configure(String buttonsLayout, int months, int monthsPerRow, int monthsStep, int monthsInSelector) {
        monthColumns = monthsPerRow;
        monthSelector = monthsInSelector;
        monthStep = monthsStep;
        setNumberOfMonths(months);
        
        monthSelectorHeader.removeFromParent();
        
        layoutButtons(buttonsLayout);
        layoutCalendar();
        refresh();
        adjustDimensions();
    }
  
    public void cfg(String buttonsLayout) {
        System.out.println(buttonsLayout);
        monthColumns = 3;
        monthSelector = 10;
        monthStep = 2;
        setNumberOfMonths(2);
        
        monthSelectorHeader.removeFromParent();
        
        layoutButtons(buttonsLayout);
        layoutCalendar();
        refresh();
        adjustDimensions();
    }
    
    protected void setNumberOfMonths(int months) {
        monthColumns = Math.min(monthColumns, months);
        monthStep = Math.min(monthStep, months);
        simpleDatePickers = new Vector<GWTCSimpleDatePicker>();

        for (int i=0; i < Math.max(1, months); i++) {
            simpleDatePickers.add(new GWTCSimpleDatePicker(true));
            Label l = new Label();
            DOM.setElementAttribute(l.getElement(), "align", "center");
            monthHeaders.add(l);
        }
        setMinimalDate(super.getMinimalDate());
        setMaximalDate(super.getMaximalDate());
        setSelectedDate(super.getSelectedDate());
    }
    
    private Widget getButton(String s, int pos) {
        if (pos < s.length()) {
            int c = s.charAt(pos);
            if (c == '_' || c == ' ') return new Label(" ");
            if (c == 'x') return closeBtn;
            if (c == '?') return helpBtn;
            if (c == '-') return todayBtn;
            if (c == '>') return nextMBtn;
            if (c == '<') return prevMBtn;
            if (c == 'n') return nextYBtn;
            if (c == 'p') return prevYBtn;
            if (c == 'm') return monthSelectorHeader;
        }
        return null;
    }
    
    protected void layoutButtons(String distribution) {
        navButtonsBottom.clear();
        navButtonsTop.clear();
        DockPanel[] panels = {topButtonsRow0, topButtonsRow1, topButtonsRow2, bottomButtonsRow0, bottomButtonsRow1, bottomButtonsRow2};
        String s[] = distribution.split("[;:,]");

        Widget w=null, m=null;
        for (int i=0; i<panels.length && i<s.length; i++) {
            DockPanel p = panels[i];
            p.clear();
            
            if (s[i].length() == 0) 
                continue;
            
            for (int j=0; j<s[i].length(); j++) {
                if ((w = getButton(s[i], j)) != null) {
                    p.add(w, DockPanel.WEST);
                }
                if (j == s[i].length() / 2)
                    m=w;
            }

            p.setWidth("100%");
            if (m!=null) {
                p.setCellWidth(m, "100%");
                m.setWidth("100%");
            }
            if (i<3)
                navButtonsTop.add(p, DockPanel.NORTH);
            else
                navButtonsBottom.add(p, DockPanel.NORTH);

            p.addStyleName(StyleCButtonsRow + (i%3));
        }
    }
    
    protected void layoutCalendar() {
        calendarGrid.clear();
        calendarGrid.setCellSpacing(0);
        int i = 0;
        int row = -2;
        int col = 0;
        for (; i < simpleDatePickers.size(); i++) {
            if ((i % monthColumns) == 0) {
                col = 0;
                row += 2;
            } else if (i > 0) {
                calendarGrid.setHTML(row, col, "&nbsp;");
                calendarGrid.setHTML(row + 1, col, "&nbsp;");
                calendarGrid.getCellFormatter().addStyleName(row, col, StyleMonthSeparator);
                calendarGrid.getCellFormatter().addStyleName(row + 1, col, StyleMonthSeparator);
                col +=1;
            }

            if (monthSelectorHeader.getParent() == null || simpleDatePickers.size() > 1) {
                if (i == 0 || (i % monthColumns) == 0) {
                    calendarGrid.getRowFormatter().addStyleName(row, StyleMonthLabels);
                    calendarGrid.getRowFormatter().addStyleName(row + 1, StyleMonthCell);
                }
                if (i == 0 && monthSelectorHeader.getElement().getParentElement() == null)
                    calendarGrid.setWidget(row, col, monthSelectorHeader);
                else
                    calendarGrid.setWidget(row, col, monthHeaders.get(i));
            }

            calendarGrid.setWidget(row + 1, col, simpleDatePickers.get(i));
            calendarGrid.getColumnFormatter().addStyleName(i, "Month-" + i);
            simpleDatePickers.get(i).addChangeListener(onDaySelected);
            col++;
        }
        adjustDimensions();
    }

    /**
     * Redraw all calendar elements into the container
     */
    @Override
    public void refresh(){
        needsRedraw = false;
        prevMBtn.setEnabled(simpleDatePickers.get(0).isVisibleMonth(-1));
        nextMBtn.setEnabled(simpleDatePickers.get(0).isVisibleMonth(1));
        prevYBtn.setEnabled(simpleDatePickers.get(0).isVisibleMonth(-1));
        nextYBtn.setEnabled(simpleDatePickers.get(0).isVisibleMonth(1));
        todayBtn.setEnabled(getMonthNumber(simpleDatePickers.get(0).getCursorDate()) != getMonthNumber(new Date()));
        fillMenuItems();
        for (int i=0; i<simpleDatePickers.size(); i++){
            simpleDatePickers.get(i).setCursorDate(GWTCSimpleDatePicker.increaseMonth(simpleDatePickers.get(0).getCursorDate(), i));
            simpleDatePickers.get(i).refresh();
            monthHeaders.get(i).setText(GWTCSimpleDatePicker.formatDate(MONTH_FORMAT, simpleDatePickers.get(i).getCursorDate()));
        }
    }
    
    private void fillMenuItems() {
        monthSelectorHeader.clearItems();
        monthMenu.clearItems();
        monthSelectorHeader.addItem(GWTCSimpleDatePicker.formatDate(MONTH_FORMAT, simpleDatePickers.get(0).getCursorDate()), monthMenu);

        int n = -1 * (monthSelector / 2);
        Date d = new Date(GWTCSimpleDatePicker.getFirstDayOfMonth(getCursorDate()).getTime());
        Date md = new Date(GWTCSimpleDatePicker.getFirstDayOfMonth(simpleDatePickers.get(0).getMinimalDate()).getTime());
        d = GWTCSimpleDatePicker.increaseMonth(d, n );
        while (GWTCSimpleDatePicker.compareDate(md, d) < 0) { 
            d = GWTCSimpleDatePicker.increaseMonth(d, 1);
            n ++;
        }
        n += monthSelector;
        d = GWTCSimpleDatePicker.increaseMonth(getCursorDate(), n);
        while (GWTCSimpleDatePicker.compareDate(simpleDatePickers.get(0).getMaximalDate(), d) > 0) { 
            d = GWTCSimpleDatePicker.increaseMonth(d, -1);
            n --;
        }
        n -= monthSelector;
        d = GWTCSimpleDatePicker.increaseMonth(getCursorDate(), n);
        for(int i = n; i<monthSelector; i++) {
            String t = GWTCSimpleDatePicker.formatDate(MONTH_FORMAT, d);
            MenuCommand c = new MenuCommand(d);
            d = GWTCSimpleDatePicker.increaseMonth(d, 1);
            if (  GWTCSimpleDatePicker.compareDate(d, simpleDatePickers.get(0).getMaximalDate()) >= 0 
               && GWTCSimpleDatePicker.compareDate(simpleDatePickers.get(0).getMinimalDate(), d) > 0 ) {
                monthMenu.addItem(t, c);
            }
        }
    }
    
    
    protected static void internationalize(Widget b, Map<String, String> strs, String ktext)  {
        if (strs==null) return;
        String text = strs.get(ktext);
        String title = strs.get(ktext + ".title");
        if (text != null && text.length()>0) {
            if (b instanceof HasHTML )
                ((HasHTML)b).setText(text);
            else if (b instanceof HasText)
                ((HasText)b).setText(text);
            else if (b instanceof GWTCDatePickerAbstract)
                ((GWTCDatePickerAbstract)b).setCaptionText(text);
            else
              System.out.println("GWTCDatePickerAbstract.internationalize: unknown element " + b + " " + ktext + " " + text);
        }
        if (title != null && title.length()>0)
            b.setTitle(title);
    }

    public void setI18nMessages(Map<String, String> strs) {
        internationalize(nextMBtn, strs, "key.next.month");
        internationalize(prevMBtn, strs, "key.prev.month");
        internationalize(nextYBtn, strs, "key.next.year");
        internationalize(prevYBtn, strs, "key.prev.year");
        internationalize(todayBtn, strs, "key.today");
        internationalize(helpBtn, strs, "key.help");
        internationalize(closeBtn, strs, "key.close");
        
        String help = strs.get("key.calendar.help");
        if (help != null && help.length() > 0)
            helpStr = help; 
        
        String caption = strs.get("key.caption");
        if (caption != null)
            setText(caption);
    }
   
    /**
     * Set the text for the caption of the dialog box. It is only available if the calendar is shown as a dialog.
     * 
     * @param t
     *            the message to display
     */
    public void setCaptionText(String t) {
        if (calendarDlg != null)
            calendarDlg.setText(t);
    }

    /**
     * @deprecated
     */
    public void setText(String t) {
        setCaptionText(t);
    }

    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.UIObject#setStyleName(java.lang.String)
     */
    @Override
    public void setStyleName(String s) {
        if (calendarDlg != null)
            calendarDlg.setStyleName(s);
        else
            outer.setStyleName(s);

        monthSelectorHeader.setStyleName(s + "-MenuBar");
        monthMenu.setStyleName(s + "-MenuBar");
        monthSelectorHeader.addStyleName(s + "-MenuBar-horizontal");
        monthMenu.addStyleName(s + "-MenuBar-vertical");
        for (int i=0; i < monthHeaders.size(); i++) {
            monthHeaders.get(i).setStyleName(StyleMonthLabel);
            monthHeaders.get(i).addStyleName(s + "-MenuBar");
            monthSelectorHeader.addStyleName(s + "-MenuBar-horizontal");
        }
        if (! s.equals(styleName)) {
            addStyleName(styleName);
        }
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.UIObject#addStyleName(java.lang.String)
     */
    @Override
    public void addStyleName(String s) {
        if (calendarDlg != null) {
            calendarDlg.addStyleName(s);
        } else {
            outer.addStyleName(s);
        }
        monthSelectorHeader.addStyleName(s + "-MenuBar");
        monthMenu.addStyleName(s + "-MenuBar");
        monthSelectorHeader.addStyleName(s + "-MenuBar-horizontal");
        monthMenu.addStyleName(s + "-MenuBar-vertical");
        for (int i=0; i < monthHeaders.size(); i++) {
            monthHeaders.get(i).addStyleName(s + "-MenuBar");
        }
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.UIObject#addStyleDependentName(java.lang.String)
     */
    @Override
    public void addStyleDependentName(String s) {
        if (calendarDlg != null)
            calendarDlg.addStyleDependentName(s);
        else
            outer.addStyleDependentName(s);
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.UIObject#getStyleName()
     */
    @Override
    public String getStyleName() {
        return calendarDlg != null ? calendarDlg.getStyleName(): outer.getStyleName();
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.UIObject#getStylePrimaryName()
     */
    @Override
    public String getStylePrimaryName() {
        return calendarDlg != null ? calendarDlg.getStylePrimaryName(): outer.getStylePrimaryName();
    }
    
    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.UIObject#getElement()
     */
    @Override
    public Element getElement() {
        return calendarDlg != null ? calendarDlg.getElement(): outer.getElement();
    }
    
    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#getCursorDate()
     */
    @Override
    public Date getCursorDate() {
        return simpleDatePickers.get(0).getCursorDate();
    }

    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Composite#onAttach()
     */
    @Override
    protected void onAttach() {
        super.onAttach();
        this.adjustDimensions();
        /*
        Timer t = new Timer() {
            public void run() {
                adjustDimensions();
            }
        };
        t.schedule(1000);
        */
    }
    
    ChangeListener onDaySelected = new ChangeListener() {
        public void onChange(Widget sender) {
            setSelectedDate(((GWTCSimpleDatePicker)sender).getSelectedDate());
        }
    };

    /**
    * Show the calendar container.
    *  
    * If element is not null the dialog is positioned near of it, 
    * otherwise it is centered on the viewport
    * 
    */
   public void show(Widget w) {
       if (w != null)
           show(DOM.getAbsoluteLeft(w.getElement()), DOM.getAbsoluteTop(w.getElement()));
       else
           center();
   }

   public void showByElement(Element e) {
       if (e != null)
           show(DOM.getAbsoluteLeft(e), DOM.getAbsoluteTop(e));
       else
           center();
   }
   
   public void center() {
       show(-1, -1);
       
   }
    

    /**
     * Show the calendar container, and positione it in the provided coordinates.
     */
    public void show(int left, int top) {
        if (needsRedraw) refresh();
        
        if (calendarDlg == null) {
            assert outer.isAttached() : "Calendar has not been attached, even though it is not configured as a popup.";
            outer.setVisible(true);
        } else {
            if (top >=0 && left >=0) {
                calendarDlg.setPopupPosition(left, top);
                calendarDlg.show();
                moveIntoVisibleArea();
                DOM.scrollIntoView(calendarGrid.getElement());
            } else {
                calendarDlg.center();
            }
        }
        adjustDimensions();
        todayBtn.setFocus(true);
    }
    
    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#show()
     */
    @Override
    public void show() {
        center();
    }

    /**
     * Set the zIndex value.
     * 
     * @param z
     */
    public void setZIndex(int z) {
        if (calendarDlg!=null) {
            DOM.setStyleAttribute(calendarDlg.getElement(), "zIndex", String.valueOf(z));
            helpDlg.setZIndex(z + 1);
        }
    }

    int max = 0;
    private void adjustDimensions() {
        if (true) return;
        
        int a = calendarGrid.getOffsetWidth();
        int b = navButtonsTop.getOffsetWidth();
        int c = navButtonsBottom.getOffsetWidth();
        max = Math.max(max, Math.max(a, Math.max(b, c)));
        if (max != 0) {
            if (a < max)
                calendarGrid.setWidth(max + "px");
            if (b < max)
                navButtonsTop.setWidth(max + "px");
            if (c < max)
                navButtonsBottom.setWidth(max + "px");
        }
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
     */
    public void hide() {
        if (calendarDlg != null) {
            calendarDlg.hide();
        } else
            outer.setVisible(false);
    }
    
    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#setCursorDate(java.util.Date)
     */
    @Override
    public void setCursorDate(Date d) {
        super.setCursorDate(d);
        simpleDatePickers.get(0).setCursorDate(d);
    }

    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#setSelectedDate(java.util.Date)
     */
    @Override
    public void setSelectedDate(Date d) {
        super.setSelectedDate(d);
        if (d == null)
            return;
        for (int i=0; i<simpleDatePickers.size(); i++) {
            simpleDatePickers.get(i).setSelectedDate(d);
            simpleDatePickers.get(i).refresh();
        }
    }
    
    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#setMinimalDate(java.util.Date)
     */
    @Override
    public void setMinimalDate(Date d) {
        super.setMinimalDate(d);
        for (int i=0; i<simpleDatePickers.size(); i++)
            simpleDatePickers.get(i).setMinimalDate(d);
    }

    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#setMaximalDate(java.util.Date)
     */
    @Override
    public void setMaximalDate(Date d) {
        super.setMaximalDate(d);
        for (int i=0; i<simpleDatePickers.size(); i++)
            simpleDatePickers.get(i).setMaximalDate(d);
    }

    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#getSelectedDate()
     */
    @Override
    public Date getSelectedDate() {
        return simpleDatePickers.get(0).getSelectedDate();
    }

    private int isMonthInRange(int incr) {
        while (incr != 0 && ! simpleDatePickers.get(0).isVisibleMonth(incr ))
            incr = incr < 0 ? incr + 1: incr - 1;
        return incr;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.google.gwt.user.client.ui.ClickListener#onClick(com.google.gwt.user.client.ui.Widget)
     */
    public void onClick(Widget sender) {
        if (prevMBtn.equals(sender)) {
            setCursorDate(GWTCSimpleDatePicker.increaseMonth(getCursorDate(), isMonthInRange(-1 * monthStep)));
        } else if (nextMBtn.equals(sender)) {
            setCursorDate(GWTCSimpleDatePicker.increaseMonth(getCursorDate(), isMonthInRange(monthStep)));
        } else if (prevYBtn.equals(sender)) {
            setCursorDate(GWTCSimpleDatePicker.increaseMonth(getCursorDate(), isMonthInRange(-12)));
        } else if (nextYBtn.equals(sender)) {
            setCursorDate(GWTCSimpleDatePicker.increaseMonth(getCursorDate(), isMonthInRange(12)));
        } else if (todayBtn.equals(sender)) {
            setCursorDate(new Date());
        } else if (helpBtn.equals(sender)) {
            helpDlg.alert(helpStr.replaceAll("\\n", "<br/>"));
        } else if (closeBtn.equals(sender)) {
            hide();
        } else {
            // click on an unknown element
        }
        refresh();
    }
    
    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#addChangeListener(com.google.gwt.user.client.ui.ChangeListener)
     */
    public void addChangeListener(ChangeListener listener) {
        for(int i=0; i<simpleDatePickers.size(); i++){
            simpleDatePickers.get(i).addChangeListener(listener);
        }
    }

    /* (non-Javadoc)
     * @see com.google.code.p.gwtchismes.client.GWTCSimpleDatePicker#removeChangeListener(com.google.gwt.user.client.ui.ChangeListener)
     */
    public void removeChangeListener(ChangeListener listener) {
        for(int i=0; i<simpleDatePickers.size(); i++){
            simpleDatePickers.get(i).removeChangeListener(listener);
        }
    }

    private Button createButton(int buttonsType, String text, ClickListener listener) {
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

    class MenuCommand implements Command {
        Date date;
        public MenuCommand(Date d) {
            date = d;
        }
        public void execute() {
            setCursorDate(date);
            refresh();
        }
    }
 
}

