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
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

/**
 * <b>A popup with a glass panel, it can contain a GWTCBox or a DockPanel. 
 * In both cases you can add widgets specifying or not the direction </b>
 * 
 * @author Manuel Carrasco Moñino
   <h3>Example</h3>
    <pre>
        // Creates a blue popup box
        GWTCPopupBox popup = new GWTCPopupBox(PopupPanel.OPTION_ROUNDED_BLUE);
        // Shows the popup in the center on the screen
        popup.center();
    </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCPopupBox { main style for the PopupPanel }</li>
 * <li>.GWTCPopupBox-box { Aditional style added when the content is a GWTCBox }</li>
 * </ul>
 * 
 * <h3>Options</h3>
 * Options can be passed joining these using the or bit wise operator
 * <ul>
 * <li>OPTION_ROUNDED_FLAT       decorate with the flat rounded box</li>
 * <li>OPTION_ROUNDED_GREY       decorate with the grey rounded box</li>
 * <li>OPTION_ROUNDED_BLUE       decorate with the blue rounded box</li>
 * <li>OPTION_ANIMATION          animate the dialog</li>
 * <li>OPTION_DISABLE_BACKGOUND  don't show the background glass panel</li>
 * <li>OPTION_DISABLE_AUTOHIDE   don't hide the dialog when the use clicks out of it</li>
 * </ul>
 * 
 */

public class GWTCPopupBox extends PopupPanel {

  private static final String MAIN_STYLE = "GWTCPopupBox";
  static final String STYLE_BOX = "box";

  final static public int OPTION_DEFAULT = 0;
  final static public int OPTION_ROUNDED_FLAT = 2;
  final static public int OPTION_ROUNDED_GREY = 4;
  final static public int OPTION_ROUNDED_BLUE = 8;
  final static public int OPTION_ANIMATION = 32;
  final static public int OPTION_DISABLE_BACKGROUND = 16;
  final static public int OPTION_DISABLE_AUTOHIDE = 64;

  private int zIndex = 999;
  private GWTCBox panelbox;
  DockPanel panel;
  private GWTCGlassPanel background;

  public GWTCPopupBox(int options) {
    super((options & OPTION_DISABLE_AUTOHIDE) == OPTION_DISABLE_AUTOHIDE ? false : true);
    initialize(options);
  }

  protected void initialize(int options) {
    super.clear();
    if ((options & OPTION_ROUNDED_GREY) == OPTION_ROUNDED_GREY) {
      panelbox = new GWTCBox(GWTCBox.STYLE_GREY);
    } else if ((options & OPTION_ROUNDED_BLUE) == OPTION_ROUNDED_BLUE) {
      panelbox = new GWTCBox(GWTCBox.STYLE_BLUE);
      super.add(panelbox);
    } else if ((options & OPTION_ROUNDED_FLAT) == OPTION_ROUNDED_FLAT) {
      panelbox = new GWTCBox(GWTCBox.STYLE_FLAT);
      super.add(panelbox);
    } else {
      panel = new DockPanel();
      super.add(panel);
    }

    setAnimationEnabled((options & OPTION_ANIMATION) == OPTION_ANIMATION);
    if ((options & OPTION_DISABLE_BACKGROUND) != OPTION_DISABLE_BACKGROUND) {
      background = new GWTCGlassPanel();
      if ((options & OPTION_DISABLE_AUTOHIDE) != OPTION_DISABLE_AUTOHIDE) {
        background.addClickHandler(new ClickHandler() {
          public void onClick(ClickEvent event) {
            hide();
          }
        });
      }
    }
    setZIndex(zIndex);
    setWidth("auto");
    setStyleName(MAIN_STYLE);
    if (panelbox != null)
      addStyleDependentName(STYLE_BOX);
  }

  public void setZIndex(int z) {
    DOM.setStyleAttribute(getElement(), "zIndex", String.valueOf(z));
    if (background != null)
      background.setZIndex(z - 1);
  }

  public void add(Widget w) {
    add(w, DockPanel.NORTH);
  }

  public void add(Object object, DockLayoutConstant direction) {
    Widget widget = GWTCBox.objectToWidget(object);
    if (panelbox != null)
      panelbox.add(widget, direction);
    else
      panel.add(widget, direction);
  }

  @Override
  public void center() {
    setWidth("auto");
    super.center();
  }

  /**
   * Shows the alert dialog, and hides it after a period
   *  
   * @param timeout
   *            timeout in seconds for autohide           
   */
  public void show(int timeout) {
    if (timeout > 0) {
      Timer t = new Timer() {
        public void run() {
          hide();
        }
      };
      t.schedule(timeout * 1000);
    }
    center();
  }

  @Override
  public void show() {
    if (background != null)
      background.show();
    super.show();
  }

  @Override
  public void hide() {
    super.hide();
    if (background != null)
      background.hide();
  }
}