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


/**
 * <p>
 * <b>Implementation of a customizable DatePicker.</b> 
 * @see GWTCDatePickerAbstract
 * </p>
 * @author Manuel Carrasco Moñino
 * 
 * <h3>Features</h3>
 * <ul>
 * <li>Options can be passed joining these using the or bit wise operator</li>
 * <li>Various preconfigured layouts</li>
 * <li>It can be implemented as a modal and dragable dialog or it can be included into a standard panel.</li>
 * <li>It can be in a decorated box with rounded corners</li>
 * <li>The dialog position is calculated on the fly to avoid be positioned out of the viewport area</li>
 * <li>It is able to display multiple months in configurable columns</li>
 * <li>Menu to easily select months</li>
 * <li>Configurable restrictions: minimalDate, maximalDate</li>
 * <li>Configurable texts: caption, help and buttons</li>
 * <li>Configurable button style: flat, rounded</li>
 * <li>Configurable navigation buttons layout (6 rows, 3 at top and 3 at bottom)</li>
 * <li>Uses GWT-i18n</li>
 * <li>Useful methods for date manipulation</li>
 * </ul>
 * 
 * <h3>Example</h3>
 * <pre>
      ChangeListener listener = new ChangeListener() {
            public void onChange(Widget sender) {
                Window.alert(((GWTCSimpleDatePicker) sender).getSelectedDateStr("MMMM dd, yyyy (dddd)"));
            }
        };

        // Example 1
        int options1 = GWTCDatePicker.CONFIG_NO_HELP_BUTTON | GWTCDatePicker.CONFIG_NO_YEAR_BUTTON 
            | GWTCDatePicker.CONFIG_STANDARD_BUTTONS | GWTCDatePicker.CONFIG_LAYOUT_3
            | GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_BACKGROUND;

        final GWTCDatePicker picker1 = new GWTCDatePicker(options1);
        picker1.setText("Select a valid date");
        picker1.addChangeListener(listener);
        RootPanel.get().add(new Button("picker 1", new ClickListener() {
            public void onClick(Widget sender) {
                picker1.show(sender);
            }
        }));

        // Example 2
        int options2 = GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_BACKGROUND;
        final GWTCDatePicker picker2 = new GWTCDatePicker(options2, 2, "< >;;;;- x");
        picker2.setText("Select a valid date");
        picker2.addChangeListener(listener);
        picker2.setMinimalDate(GWTCDatePicker.increaseMonth(new Date(), -12));
        RootPanel.get().add(new Button("picker 2", new ClickListener() {
            public void onClick(Widget sender) {
                picker2.show(sender);
            }
        }));
   
 * </pre>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCDatePicker .layout-1</li>
 * <li>.GWTCDatePicker .layout-2</li>
 * <li>.GWTCDatePicker .layout-3</li>
 * </ul>
 * <h3>Inherited CSS Styles</h3>
 * <ul>
 * <li>.GWTCDatePicker { GWTCDatePicket container }</li>
 * <li>.GWTCDatePicker .GWTCDatePicker-help { help dialog } </li>
 * <li>.GWTCDatePicker .GWTCDatePicker-box { GWTCDatePicket container when it is a GWTCBox } </li>
 * <li>.GWTCDatePicker .Caption { calendar text title }</li>
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
 * 
 * <li>.GWTCDatePicker .panelMonths .monthLabels { labels with the header of each displayed month }</li>
 * 
 * <li>.GWTCDatePicker-MenuBar { horizontal and vertical menu selector items }</li>
 * <li>.GWTCDatePicker-MenuBar-horizontal { horizontal item of menu selector  }</li>
 * <li>.GWTCDatePicker-MenuBar-vertical { vertical items of menu selector  }</li>
 * </ul>
 * 
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
 * <h3>Configuration options</h3>
 * <ul>
 * <li>CONFIG_NO_CLOSE_BUTTON   hide close button</li>
 * <li>CONFIG_NO_YEAR_BUTTON    hide year navigation buttons</li>
 * <li>CONFIG_NO_YEAR_BUTTON    hide help button</li>
 * <li>CONFIG_LAYOUT[1..5]      select a layout from 1 to 5</li>
 * <li>CONFIG_DIALOG            show as modal dialog</li>
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
public class GWTCDatePicker extends GWTCDatePickerAbstract {
    
    public static final int CONFIG_NO_CLOSE_BUTTON = (int)Math.pow(2,c++);
    public static final int CONFIG_NO_YEAR_BUTTON = (int)Math.pow(2,c++);
    public static final int CONFIG_NO_HELP_BUTTON = (int)Math.pow(2,c++);
    
    public static final int CONFIG_LAYOUT_1 = 0;
    public static final int CONFIG_LAYOUT_2 = (int)Math.pow(2,c++);
    public static final int CONFIG_LAYOUT_3 = (int)Math.pow(2,c++);
    public static final int CONFIG_LAYOUT_4 = (int)Math.pow(2,c++);
    public static final int CONFIG_LAYOUT_5 = (int)Math.pow(2,c++);
    
    protected static final String StyleLayout = "layout";

    /**
     * Creates the calendar instance based in the configuration provided. 
     * 
     * Options can be passed joining these using the or bit wise operator:
     * <ul>
     * <li>CONFIG_NO_CLOSE_BUTTON   hide close button</li>
     * <li>CONFIG_NO_YEAR_BUTTON    hide year navigation buttons</li>
     * <li>CONFIG_NO_YEAR_BUTTON    hide help button</li>
     * <li>CONFIG_LAYOUT[1..5]      select a layout from 1 to 5</li>
     * <li>CONFIG_DIALOG            show as modal dialog</li>
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
    public GWTCDatePicker(int config) {
        this(config, getLayoutIndex(config));
    }
    
    private static String[] layouts = {
        "?mx;p<->n", //layout 1 
        "? x;p<m>n", //layout 2
        "? x;p< >n; m ", //layout 3
        "? x;p< >n", //layout 4
        }; 
    private String layoutButtons = layouts[0];
    private int numberOfMonths = 1;
    
    private static int getLayoutIndex(int config) {
        if ((config & CONFIG_LAYOUT_2) == CONFIG_LAYOUT_2)
            return 1;
        else if ((config & CONFIG_LAYOUT_3) == CONFIG_LAYOUT_3)
            return 2;
        else if ((config & CONFIG_LAYOUT_4) == CONFIG_LAYOUT_4)
            return 3;
        else
            return 0;
    }
    
    /**
     * Returns the button layout representation, for a numeric argument. 
     */
    protected static String getButtonLayout(int layout) {
        String ret = (layout < 0 || layout > layouts.length) ? layouts[0]: layouts[layout];
        return ret;
    }


    /**
     * Creates the calendar instance based in the configuration provided, and the numerical layout index. 
     */
    public GWTCDatePicker(int config, int layout) {
        this(config, 1, getButtonLayout(layout));
        addStyleDependentName(StyleLayout + layout);
    }
    
    /**
     * Creates the calendar instance based in the configuration provided, 
     * number of months to display and the buttons layout representacion.  
     */
    public GWTCDatePicker(int config, int months, String layout) {
        layoutButtons = layout;
        numberOfMonths = months;
        monthColumns = 3;
        
        super.createInstance(config);
        
        if ((config & CONFIG_DIALOG) != CONFIG_DIALOG || (config & CONFIG_NO_CLOSE_BUTTON) == CONFIG_NO_CLOSE_BUTTON)
            closeBtn.setVisible(false);
        if ((config & CONFIG_NO_HELP_BUTTON) == CONFIG_NO_HELP_BUTTON) 
            helpBtn.setVisible(false);
        if ((config & CONFIG_NO_YEAR_BUTTON) == CONFIG_NO_YEAR_BUTTON) {
            nextYBtn.setVisible(false);
            prevYBtn.setVisible(false);
        }
    }

    @Override
    public void drawDatePickerWidget() {
        super.setNumberOfMonths(numberOfMonths);
        super.layoutButtons(layoutButtons);
        super.layoutCalendar();
        
    }
    
}

