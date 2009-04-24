package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;


@Export
@ExportPackage("jsc")
public class Const implements Exportable {
    
    public static final String SHORT_FORMAT = DateTimeFormat.getShortDateFormat().getPattern();
    public static final String NUMERIC_FORMAT = DateTimeFormat.getShortDateFormat().getPattern().replaceFirst("yy", "yyyy");
    public static final String LONG_FORMAT = DateTimeFormat.getLongDateFormat().getPattern();
    
    protected static final String ANIMATE = "animate";  // [true] animate popup when is shown or hidden.
    protected static final String CURRENT = "defaultDate";  //[0] actual date.
    protected static final String MINIMAL = "minDate"; //["+0d"] The earliest selectable date
    protected static final String MAXIMAL = "maxDate"; //["+1y"] The latest selectable date
    protected static final String MAX_DAYS = "maxDays"; //[0] Limit for the number of days in an inteval. 
    protected static final String ON_SELECT = "onSelect"; //[new function(data){}] Define a callback function when a date is selected
    protected static final String ON_CLOSE = "onClose"; //[null] Define a callback function when the datepicker is closed
    protected static final String ON_CLICK = "onClick"; //[null] Define a callback function when the element is clicked
    protected static final String NUM_MONTHS = "numberOfMonths"; //[1] Number of months to show at a time
    protected static final String NUM_COLUMS = "numberOfColums"; //[3] Number of months per row when displaying multiple months
    protected static final String STEP_MONTHS = "stepMonths";  //[1] Number of months to step back/forward
    protected static final String MONTH_RANGE = "monthRange"; //[12] Number of months to show in the months menu selector
    protected static final String DIALOG = "dialog"; //[true] the widget is shown in a popup dialog
    protected static final String CONT_ID = "containerId"; //[null] Id of the element where the widget will be inserted
    protected static final String RND_BOX = "roundedBox"; //[false] show the element inside a decorated rounded container
    protected static final String AUTOHIDE = "autoHide"; //[true] hide the dialog if the user click outside
    protected static final String GLASS = "glassPanel"; //[true] show a semitransparent glasspanel that covers the rest of element
    protected static final String RND_BOX_TYPE = "roundedBoxType"; //["flat"] Style for the rounded corners, option are flat, blue, grey

    protected static final String BUTTONS = "buttons"; //["rounded"] Buttons style, available options are: rounded, flat, standard
    protected static final String BUTTONS_LAYOUT = "buttonsLayout"; //["?mx;p<->n"] define which buttons to use and where to place them in the datepickers. ( ; panel-delimiter, ? help, x close, > next-month, < prev-month, n next-year, p prev-year, - today, _ separator). 

    protected static final String CLASS_NAME = "className"; //[""] Add an optional classname to the container
    protected static final String DAYNAME_LETTERS = "lettersInWeekDayHeaders"; //[3] Set desired number of digits for day names in week headers, 0 means default for this language
    
    
    protected static final String TXT_HELP = "helpText";  //["?"] Display text for close button
    protected static final String TXT_CLOSE = "closeText"; //["x"] Display text for close button
    protected static final String TXT_CURR = "currentText";  //["-"] Display text for current month button
    protected static final String TXT_PREV = "prevText"; //[">"] Display text for previous month button
    protected static final String TXT_NEXT = "nextText"; //[">"] Display text for next month button
    protected static final String TXT_PREV_Y = "prevYearText"; //[">"] Display text for previous year button
    protected static final String TXT_NEXT_Y = "nextYearText"; //[">"] Display text for next year button

    protected static final String TIT_HELP = "helpTitle";  //[null] Title for close button
    protected static final String TIT_CLOSE = "closeTitle"; //[null] Title for close button
    protected static final String TIT_CURR = "currentTitle";  //[null] Title for current month button
    protected static final String TIT_PREV = "prevTitle"; //[null] Title for previous month button
    protected static final String TIT_NEXT = "nextTitle"; //[null] Title for next month button
    protected static final String TIT_PREV_Y = "prevYearTitle"; //[null] Title for previous year button
    protected static final String TIT_NEXT_Y = "nextYearTitle"; //[null] Title for next year button
    
    protected static final String TEXT = "text"; //[null] Text in html elements
    protected static final String HTML = "html"; //[null] html content
    protected static final String TITLE = "title"; //[null] title text in rounded boxes
    protected static final String BUTTON_OK = "buttonOk"; //[true] show ok button in alert widget
    protected static final String TYPE = "type"; //[1] type
    protected static final String IMAGE = "image"; //[null] image url in buttons
    
    protected static final String TOTAL_MSG = "totalMsg"; //["{0}% {1}/{2} "] Set the message to show when the process has finished
    protected static final String PERCENT_MSG = "percentMsg"; //["{0}%"] Set the message used to format the progress in percent units. 
    protected static final String SECONDS_MSG = "secondsMsg"; //["Time remaining: {0} Seconds"] Set the message used to format the time remaining text below the progres bar in seconds.
    protected static final String MINUTES_MSG = "minutesMsg"; //["Time remaining: {0} Minutes"]Set the message used to format the time remaining text below the progres bar in minutes
    protected static final String HOURS_MSG = "hoursMsg"; //["Time remaining: {0} Hours"]Set the message used to format the time remaining text below the progres bar in hours
    protected static final String ELEMENTS = "elements"; //[20] number of bars to show in the progress bar
    protected static final String NUMBERS = "numbers"; //[true] show numeric information of the progress
    protected static final String TIME_REMAINING = "timeRemaining"; //[false] show time remaining
    
    public static final DockLayoutConstant NORTH = DockPanel.NORTH;
    public static final DockLayoutConstant SOUTH = DockPanel.SOUTH;
    public static final DockLayoutConstant EAST = DockPanel.EAST;
    public static final DockLayoutConstant WEST = DockPanel.WEST;
    protected static final String REGIONAL = "regional";  //[null] hash with the set of key/values to internationalize the widget
}
