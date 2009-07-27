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

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FocusWidget;
import com.google.gwt.user.client.ui.HTML;

/**
 * <p>
 * <b>Modal dialog for displaying alerts.</b> 
 * </p>
 * @author Manuel Carrasco Moñino
 * 
 * <h3>Features</h3>
 * <ul>
 * <li>It can be shown inside of a decorated box with rounded corners</li>
 * <li>Possibility of showing a semitransparent background layer, avoiding the user interaction with other controls</li>
 * <li>Auto-hide after a configurable period</li>
 * <li>Customizable Ok-button.</li>
 * </ul>
 *  <h3>Example</h3>
 *   <pre>
      final GWTCAlert alert = new GWTCAlert(); 
      alert.alert("Hello, you can put here any message");
         
      alert = new GWTCAlert(GWTCAlert.OPTION_ROUNDED_BLUE | GWTCAlert.OPTION_DISABLE_OK_BUTTON | GWTCAlert.OPTION_ANIMATION );
      alert.alert("This is a message that will desapear after a while", 3);
     </pre>     
 *   </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCAlert { main class for the composite container }</li>
 * <li>.GWTCAlert-box { class for the rounded panel, if it exists }</li>
 * <li>.GWTCAlert .panel .msgCell { message cell }</li>
 * <li>.GWTCAlert .panel .btnCell { button cell }</li>
 * <li>.GWTCAlert .panel .okButton { Button }</li>
 *  <li>z-index is setted by code</li> 
 * </ul>
 * 
 */
public class GWTCAlert extends GWTCPopupBox implements HasClickHandlers {
  static final String MAIN_STYLE = "GWTCAlert";
  static final String STYLE_PANEL = "panel";
  static final String STYLE_MSG = "msgCell";
  static final String STYLE_BTN = "btnCell";
  static final String STYLE_BUTTON = "okButton";

  static public int OPTION_DISABLE_OK_BUTTON = 1;

  FocusWidget focusWidget = null;

  private boolean okButtonDisabled = false;

  FlexTable contentTable;
  private HTML txt;
  private GWTCButton okButton;

  /**
   * Constructor with default options
   */
  public GWTCAlert() {
    this(OPTION_DISABLE_AUTOHIDE);
  }

  /**
   * Main constructor. 
   * Different options can be passed joining these constant using the or bit wise operator
   * <ul>
   * <li>OPTION_DISABLE_BACKGROUND    don't show the background layer</li>
   * <li>OPTION_ROUNDED_FLAT          put a flat GWTCBox arround the alert</li>
   * <li>OPTION_ROUNDED_GREY          put a grey GWTCBox arround the alert</li>
   * <li>OPTION_ROUNDED_BLUE          put a blue GWTCBox arround the alert</li>
   * <li>OPTION_DISABLE_OK_BUTTON     don't show the OK button</li>
   * <li>OPTION_ANIMATION      animate the dialog box when it is showed/hidden</li>    
   * </ul>
   *  
   * @param options
   *      cofiguration options.
   */
  public GWTCAlert(int options) {
    super(OPTION_DISABLE_AUTOHIDE);
    initialize(options);
  }

  protected void initialize(int options) {
    super.initialize(options);

    contentTable = new FlexTable();
    txt = new HTML();
    okButton = new GWTCButton("OK");

    okButton.setImageSrc("images/button/dialog-ok.gif");

    if ((options & OPTION_DISABLE_OK_BUTTON) == OPTION_DISABLE_OK_BUTTON)
      okButtonDisabled = true;

    contentTable.setStyleName(GWTCAlert.STYLE_PANEL);
    contentTable.getCellFormatter().addStyleName(0, 0, GWTCAlert.STYLE_MSG);
    contentTable.setWidget(0, 0, txt);

    contentTable.getCellFormatter().addStyleName(1, 0, GWTCAlert.STYLE_BTN);

    contentTable.setWidget(1, 0, okButton);

    okButton.addStyleName(GWTCAlert.STYLE_BUTTON);
    okButton.addStyleName("gwtc-alert-rndbutton");
    this.addClickHandler(new ClickHandler() {
      public void onClick(ClickEvent event) {
        hide();
      }
    });

    okButton.setVisible(!okButtonDisabled);

    setStyleName(MAIN_STYLE);
    if ((options & OPTION_ROUNDED_GREY) == OPTION_ROUNDED_GREY || (options & OPTION_ROUNDED_BLUE) == OPTION_ROUNDED_BLUE || (options & OPTION_ROUNDED_FLAT) == OPTION_ROUNDED_FLAT) {
      addStyleDependentName(STYLE_BOX);
    }
    super.add(contentTable);
  }

  /**
   * Set the text for OK button
   * 
   * @param ok
   *            the internationalizated string
   */
  public void setOkButtonMsg(String ok) {
    okButton.setHTML(ok);
  }

  /**
   * Set the message text
   * 
   * @param s
   *            the message to display
   */
  public void setText(String s) {
    txt.setHTML(s.replaceAll("\\n", "<br/>").replaceAll(" ", "&nbsp;"));
  }

  /**
   * Sets the message text and shows the dialog
   * 
   * @param s
   *            the message to display
   */
  public void alert(String s) {
    setText(s);
    center();
  }

  /**
   * Sets the message text, shows the dialog, and automatically hides it after a period
   * 
   * @param s
   *            the message to display
   * @param timeout
   *            timeout in seconds for autohide           
   */
  public void alert(String s, int timeout) {
    setText(s);
    show(timeout);
  }

  /**
   * Sets the message text, shows the dialog and eventually moves the focus to the widget after the user pushes ok.
   * This is thought for validation messages in forms
   * 
   * @param s
   *            the message to display
   */
  public void alert(String s, FocusWidget focus) {
    setText(s.replaceAll("\\n", "<br/>").replaceAll(" ", "&nbsp;"));
    focusWidget = focus;
    center();
  }

  /**
   * Shows the alert dialog 
   */
  @Override
  public void show() {
    super.show();
    okButton.setFocus(true);
  }

  /**
   * Hides the dialog box
   */
  @Override
  public void hide() {
    super.hide();
    if (focusWidget != null)
      focusWidget.setFocus(true);
    focusWidget = null;
  }

  /**
   * Disable the OK button. Useful for showing autohide messages.
   * 
   * @param b
   */
  public void setOkButtonDisabled(boolean b) {
    okButtonDisabled = b;
    okButton.setVisible(!okButtonDisabled);
  }

  public HandlerRegistration addClickHandler(ClickHandler handler) {
    return okButton.addClickHandler(handler);
  }

}
