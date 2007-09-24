/*
 * Copyright 2006 Robert Hanson <iamroberthanson AT gmail.com>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * <P>
 * A simple progress bar that uses table elements to show progress and with a
 * basic time remaining calculation built in.
 * 
 * <P>
 * You can optionally display some text above the progress bar and/or display
 * time remaining underneath the progress bar. To control the display of those
 * features, set the options in the constructor as shown in the following usage
 * example:
 * 
 * <PRE>
 * 
 * final ProgressBar progressBar = new ProgressBar(20
 * ,ProgressBar.SHOW_TIME_REMAINING +ProgressBar.SHOW_TEXT);
 * progressBar.setText("Doing something..."); RootPanel.get().add(progressBar);
 * Timer t = new Timer() { public void run() { int progress =
 * progressBar.getProgress()+4; if (progress>100) cancel();
 * progressBar.setProgress(progress); } }; t.scheduleRepeating(1000);
 * 
 * </PRE>
 * 
 * <P>
 * How the time remaining is displayed can be controlled by setting the relevant
 * messages using the language of your choice.
 * 
 * <P>
 * The default setting for the messages are as follows:
 * 
 * <PRE>
 * 
 * setSecondsMessage("Time remaining: {0} Seconds"); setMinutesMessage("Time
 * remaining: {0} Minutes"); setHoursMessage("Time remaining: {0} Hours");
 * 
 * </PRE>
 * 
 * <P>
 * To reset the time remaining/set the start time, simply set the progress to
 * zero.
 * 
 * <P>
 * Some basic CSS styling is available to control the text, border around the
 * progress bar itself and the colour of the progress bar elements.
 * 
 * <PRE>
 * 
 * .progressbar-text { font-weight: bold; }
 * 
 * .progressbar-remaining { font-size: 12px; font-style: italic; }
 * 
 * .progressbar-outer { border: 1px solid black; }
 * 
 * .progressbar-inner { border: 1px solid black; margin: 1px; }
 * 
 * .progressbar-bar { width: 5px; height: 15px; margin: 1px; }
 * 
 * .progressbar-fullbar { background: blue; }
 * 
 * .progressbar-blankbar { background: #eee; }
 * 
 * </PRE>
 * 
 * <P>
 * You can take advantage of the default style by adding the following to the
 * head of your HTML page.
 * 
 * <P>
 * &lt;link rel="stylesheet" type="text/css" href="style/gwl-progressBar.css">
 * 
 * <P>
 * This style sheet also has two additional styles which you can use by adding
 * the stye name to the widget. You can use either one of these, or use both
 * combined.
 * 
 * <PRE>
 * 
 * ProgressBar progressBar = new ProgressBar(20);
 * progressBar.addStyleName("progressbar-solid");
 * progressBar.addStyleName("progressbar-noborder");
 * 
 * </PRE>
 * 
 * @author Bjarne Matzen - Bjarne[dot]Matzen[at]gmail[dot]com
 */

public class GWTCProgress extends Composite {
    
    private VerticalPanel container = new VerticalPanel();
    
    private FocusPanel pageBackground = new FocusPanel();
    
    private DialogBox progressDlg = new DialogBox();



    public static final int SHOW_TIME_REMAINING = 1;
    public static final int SHOW_TEXT = 2;
    public static final int SHOW_NUMBERS = 4;
    public static final int SHOW_AS_DIALOG = 8;

    /**
     * The time the progress bar was started
     */
    private long startTime = System.currentTimeMillis();

    /**
     * The number of bar elements to show
     */
    private int elements = 20;

    /**
     * Time element text
     */
    private String secondsMessage = "Time remaining: {0} Seconds";

    private String minutesMessage = "Time remaining: {0} Minutes";

    private String hoursMessage = "Time remaining: {0} Hours";

    private String percentMessage = "{0}%";
    private String totalMessage = "{0}% {1}/{2} ";

    /**
     * Current progress (as a percentage)
     */
    private int progress = 0;

    /**
     * This is the frame around the progress bar
     */
    private FlexTable barFrame = new FlexTable();

    /**
     * This is the grid used to show the elements
     */
    private Grid elementGrid;

    /**
     * This is the current text label below the progress bar
     */
    private Label remainLabel = new Label();

    /**
     * This is the current text label above the progress bar
     */
    private Label textLabel = new Label();

    private Label numberLabel = new Label();

    /**
     * internal flags for options
     */
    private boolean showRemaining = false;

    private boolean showText = false;

    private boolean showNumbers = false;
    
    private boolean showAsDialog = false;
    
    public static final String StyleCProgress = "GWTCProgress";
    public static final String StyleCProgressDlg = "prg-dialog";
    public static final String StyleCPrgNumbers = "prg-numbers";
    public static final String StyleCPrgTime = "prg-time";
    public static final String StyleCPrgText = "prg-title";

    public static final String StyleCBarOuter = "prg-bar-outer";
    public static final String StyleCBarInner = "prg-bar-inner";
    
    public static final String StyleCBarDone = "prg-bar-done";
    public static final String StyleCBarBlank = "prg-bar-blank";
    public static final String StyleCBarElement = "prg-bar-element";

    /**
     * Base constructor for this widget
     * 
     * @param elements
     *            The number of elements (bars) to show on the progress bar
     * @param options
     *            The display options for the progress bar
     */
    public GWTCProgress(int elements, int options) {
        // Read the options and set convenience variables
        if ((options & SHOW_TIME_REMAINING) == SHOW_TIME_REMAINING)
            showRemaining = true;
        if ((options & SHOW_TEXT) == SHOW_TEXT)
            showText = true;
        if ((options & SHOW_NUMBERS) == SHOW_NUMBERS)
            showNumbers = true;
        if ((options & SHOW_AS_DIALOG) == SHOW_AS_DIALOG)
            showAsDialog = true;

        // Set element count
        this.elements = elements;

        // Styling
        container.setStyleName(StyleCProgress);
        numberLabel.setStyleName(StyleCPrgNumbers);
        remainLabel.setStyleName(StyleCPrgTime);
        textLabel.setStyleName(StyleCPrgText);


        // Create the out container
        Grid containerGrid = new Grid(1, 1);
        containerGrid.setStyleName(StyleCBarOuter);
        containerGrid.setCellPadding(0);
        containerGrid.setCellSpacing(0);
        // Create continer for elements
        elementGrid = new Grid(1, elements);
        elementGrid.setStyleName(StyleCBarInner);
        elementGrid.setCellPadding(0);
        elementGrid.setCellSpacing(0);
        containerGrid.setWidget(0, 0, elementGrid);
        // Create elements
        for (int loop = 0; loop < elements; loop++) {
            Grid elm = new Grid(1, 1);
            // elm.setHTML(0, 0, "&nbsp;");
            elm.setHTML(0, 0, "");
            elm.setStyleName(StyleCBarDone);
            elm.addStyleName(StyleCBarElement);
            elementGrid.setWidget(0, loop, elm);
        }
        // containerGrid.setBorderWidth(1);
        // Set up the surrounding flex table based on the options
        barFrame.setWidth("100%");
        int row = 0;
        barFrame.setWidget(row++, 0, textLabel);
        barFrame.setWidget(row, 1, numberLabel);
        barFrame.setWidget(row++, 0, containerGrid);
        barFrame.setWidget(row++, 0, remainLabel);
        // Add the frame to the panel
        container.add(barFrame);
        // Initialize progress bar
        setProgress(0);
        
        if (showAsDialog) {
            // Create the background
            RootPanel.get().add(pageBackground, 0, 0);
            pageBackground.setStyleName(GWTCWait.StyleCWait);
            pageBackground.addStyleName(GWTCWait.StyleCWaitBg);
            // put the container into a dialog
            progressDlg.setWidget(container);
            progressDlg.setStyleName(StyleCProgress);
            progressDlg.addStyleName(StyleCProgressDlg);
            // Initialize this composite with an empty element
            initWidget(new DockPanel());
            hide();
        } else {
            initWidget(container);
        }
    }
    
    public void hide() {
        if (!showAsDialog)
            return;
        progressDlg.hide();
        container.setVisible(false);
        pageBackground.setVisible(false);
    }
    
    public void show() {
        if (!showAsDialog)
            return;
        progressDlg.show();
        pageBackground.setVisible(true);
        container.setVisible(true);
        center();
    }
    
    public void center() {
        // Configure Background size 
        pageBackground.setSize(GWTCHelper.getVisibleWidth() + "px", GWTCHelper.getVisibleHeight() + "px");
        // Center the dialog
        GWTCHelper.centerPopupPanel(progressDlg);
    }


    /**
     * Constructor without options
     * 
     * @param elements
     *            The number of elements (bars) to show on the progress bar
     */
    public GWTCProgress(int elements) {
        this(elements, 0);
    }

    public void setProgress(int percent) {
        setProgress(percent, 0, 0);
    }

    public void setProgress(int total, int done) {
        int percent = total * 100 / done;
        setProgress(percent, total, done);
    }

    /**
     * Set the current progress as a percentage
     * 
     * @param percentage
     *            Set current percentage for the progress bar
     */
    public void setProgress(int percentage, int total, int done) {
        // Make sure we are error-tolerant
        if (percentage > 100)
            percentage = 100;
        if (percentage < 0)
            percentage = 0;

        // Set the internal variable
        progress = percentage;

        // Update the elements in the progress grid to
        // reflect the status
        int completed = elements * percentage / 100;
        for (int loop = 0; loop < elements; loop++) {
            Grid elm = (Grid) elementGrid.getWidget(0, loop);
            if (loop < completed) {
                elm.setStyleName(StyleCBarDone);
                elm.addStyleName(StyleCBarElement);
            } else {
                elm.setStyleName(StyleCBarBlank);
                elm.addStyleName(StyleCBarElement);
            }
        }

        DOM.setInnerHTML(remainLabel.getElement(), "&nbsp;");
        DOM.setInnerHTML(numberLabel.getElement(), "&nbsp;");
        if (percentage > 0) {
            if (showRemaining) {
                // Calculate the new time remaining
                long soFar = (System.currentTimeMillis() - startTime) / 1000;
                long remaining = soFar * (100 - percentage) / percentage;
                // Select the best UOM
                String remainText = secondsMessage;
                if (remaining > 120) {
                    remaining = remaining / 60;
                    remainText = minutesMessage;
                    if (remaining > 120) {
                        remaining = remaining / 60;
                        remainText = hoursMessage;
                    }
                }
                remainLabel.setText(internationalize(remainText, "" + remaining));
            }
        } else {
            // If progress is 0, reset the start time
            startTime = System.currentTimeMillis();
        }
        if (showNumbers) {
            String message = (total > 0) ? totalMessage : percentMessage;
            Object[] os = { "" + percentage, "" + total, "" + done };
            numberLabel.setText(internationalize(message, os));
        }
        
        if (showAsDialog)
            center();
    }

    public String internationalize(String s, String o) {
        Object[] os = { o };
        return internationalize(s, os);
    }

    public String internationalize(String s, Object[] os) {
        for (int i = 0; i < os.length; i++) {
            String o = "" + (os[i] != null ? os[i] : "");
            String c = "{" + i + "}";
            for (;;) {
                int pos = s.indexOf(c);
                if (pos < 0)
                    break;
                String trail = "";
                if (pos + c.length() < s.length())
                    trail = s.substring(pos + c.length());
                s = s.substring(0, pos) + o + trail;
            }
        }
        return s;
    }

    /**
     * Get the current progress as a percentage
     * 
     * @return Current percentage for the progress bar
     */
    public int getProgress() {
        return (progress);
    }

    /**
     * Get the text displayed above the progress bar
     * 
     * @return the text
     */
    public String getText() {
        return this.textLabel.getText();
    }

    /**
     * Set the text displayed above the progress bar
     * 
     * @param text
     *            the text to set
     */
    public void setText(String text) {
        if (showText)
            this.textLabel.setText(text);
    }

    /**
     * Get the message used to format the time remaining text for hours
     * 
     * @return the hours message
     */
    public String getHoursMessage() {
        return hoursMessage;
    }

    /**
     * Set the message used to format the time remaining text below the progress
     * bar. There are 3 messages used for hours, minutes and seconds
     * respectively.
     * 
     * The message must contain a placeholder for the value. The placeholder
     * must be {0}. For example, the following is a valid message:
     * 
     * "Hours remaining: {0}"
     * 
     * @param hoursMessage
     *            the hours message to set
     */
    public void setHoursMessage(String hoursMessage) {
        this.hoursMessage = hoursMessage;
    }

    /**
     * Get the message used to format the time remaining text for minutes
     * 
     * @return the minutesMessage
     */
    public String getMinutesMessage() {
        return minutesMessage;
    }

    /**
     * Set the message used to format the time remaining text below the progress
     * bar. There are 3 messages used for hours, minutes and seconds
     * respectively.
     * 
     * The message must contain a placeholder for the value. The placeholder
     * must be {0}. For example, the following is a valid message:
     * 
     * "Minutes remaining: {0}"
     * 
     * @param minutesMessage
     *            the minutes message to set
     */
    public void setMinutesMessage(String minutesMessage) {
        this.minutesMessage = minutesMessage;
    }

    /**
     * Get the message used to format the time remaining text for seconds
     * 
     * @return the secondsMessage
     */
    public String getSecondsMessage() {
        return secondsMessage;
    }

    /**
     * Set the message used to format the time remaining text below the progress
     * bar. There are 3 messages used for hours, minutes and seconds
     * respectively.
     * 
     * The message must contain a placeholder for the value. The placeholder
     * must be {0}. For example, the following is a valid message:
     * 
     * "Seconds remaining: {0}"
     * 
     * @param secondsMessage
     *            the secondsMessage to set
     */
    public void setSecondsMessage(String secondsMessage) {
        this.secondsMessage = secondsMessage;
    }

    public String getPercentMessage() {
        return percentMessage;
    }

    public void setPercentMessage(String percentMessage) {
        this.percentMessage = percentMessage;
    }

    public String getTotalMessage() {
        return totalMessage;
    }

    public void setTotalMessage(String totalMessage) {
        this.totalMessage = totalMessage;
    }

}
