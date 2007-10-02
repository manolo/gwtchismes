package com.google.code.p.gwtchismes.client;

/*
 * Copyright 2007 Google Inc.
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

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

public class GWTCDialog extends PopupPanel implements HasHTML, MouseListener {
    
    

  private HTML caption = new HTML();
  private FlexTable container = new FlexTable(); 
  private Widget child;
  private boolean dragging;
  private int dragStartX, dragStartY;
  private FlexTable panel = new FlexTable();

  /**
   * Creates an empty dialog box. It should not be shown until its child widget
   * has been added using {@link #add(Widget)}.
   */
  public GWTCDialog() {
    this(false);
  }

  /**
   * Creates an empty dialog box specifying its "auto-hide" property. It should
   * not be shown until its child widget has been added using
   * {@link #add(Widget)}.
   * 
   * @param autoHide <code>true</code> if the dialog should be automatically
   *          hidden when the user clicks outside of it
   */
  public GWTCDialog(boolean autoHide) {
    this(autoHide, true);
  }

  /**
   * Creates an empty dialog box specifying its "auto-hide" property. It should
   * not be shown until its child widget has been added using
   * {@link #add(Widget)}.
   * 
   * @param autoHide <code>true</code> if the dialog should be automatically
   *          hidden when the user clicks outside of it
   * @param modal <code>true</code> if keyboard and mouse events for widgets
   *          not contained by the dialog should be ignored
   */
  public GWTCDialog(boolean autoHide, boolean modal) {
    super(autoHide, modal);

    String stylePrefix = "my-shell-hdr";
    container.setCellSpacing(0);
    container.setCellPadding(0);
    container.setHTML(0, 0, "<i>&nbsp;</i>");
    container.setHTML(0, 1, "<i>&nbsp;</i>");
    container.setHTML(0, 2, "caption");
    container.setHTML(0, 3, "<i>&nbsp;</i>");
    container.setHTML(0, 4, "<i>&nbsp;</i>");
    container.setStyleName(stylePrefix);
    container.addStyleName("my-no-selection");
    container.getCellFormatter().setStyleName(0, 0, stylePrefix + "-l");
    container.getCellFormatter().setStyleName(0, 1, stylePrefix + "-ml");
    container.getCellFormatter().setStyleName(0, 2, stylePrefix + "-c");
    container.getCellFormatter().setStyleName(0, 3, stylePrefix + "-mr");
    container.getCellFormatter().setStyleName(0, 4, stylePrefix + "-r");

    panel.setWidget(0, 0, container);
    
    panel.setHeight("100%");
    panel.setBorderWidth(0);
    panel.setCellPadding(0);
    panel.setCellSpacing(0);
    panel.getCellFormatter().setHeight(1, 0, "100%");
    panel.getCellFormatter().setWidth(1, 0, "100%");
    panel.getCellFormatter().setAlignment(1, 0,
        HasHorizontalAlignment.ALIGN_CENTER, HasVerticalAlignment.ALIGN_MIDDLE);
    super.setWidget(panel);

    setStyleName("gwt-DialogBox");
    caption.setStyleName("Caption");
    caption.addMouseListener(this);
  }

  public String getHTML() {
    return caption.getHTML();
  }

  public String getText() {
    return caption.getText();
  }

  public boolean onEventPreview(Event event) {
    // We need to preventDefault() on mouseDown events (outside of the
    // DialogBox content) to keep text from being selected when it
    // is dragged.
    if (DOM.eventGetType(event) == Event.ONMOUSEDOWN) {
      if (DOM.isOrHasChild(caption.getElement(), DOM.eventGetTarget(event))) {
        DOM.eventPreventDefault(event);
      }
    }

    return super.onEventPreview(event);
  }

  public void onMouseDown(Widget sender, int x, int y) {
    dragging = true;
    DOM.setCapture(caption.getElement());
    dragStartX = x;
    dragStartY = y;
  }

  public void onMouseEnter(Widget sender) {
  }

  public void onMouseLeave(Widget sender) {
  }

  public void onMouseMove(Widget sender, int x, int y) {
    if (dragging) {
      int absX = x + getAbsoluteLeft();
      int absY = y + getAbsoluteTop();
      setPopupPosition(absX - dragStartX, absY - dragStartY);
    }
  }

  public void onMouseUp(Widget sender, int x, int y) {
    dragging = false;
    DOM.releaseCapture(caption.getElement());
  }

  public boolean remove(Widget w) {
    if (child != w) {
      return false;
    }

    panel.remove(w);
    return true;
  }

  public void setHTML(String html) {
    caption.setHTML(html);
  }

  public void setText(String text) {
    caption.setText(text);
  }

  public void setWidget(Widget w) {
    // If there is already a widget, remove it.
    if (child != null) {
      panel.remove(child);
    }

    // Add the widget to the center of the cell.
    if (w != null) {
      panel.setWidget(1, 0, w);
    }

    child = w;
  }

  /**
   * Override, so that interior panel reflows to match parent's new width.
   * 
   * @Override
   */
  public void setWidth(String width) {
    super.setWidth(width);

    // note that you CANNOT call panel.setWidth("100%") until parent's width
    // has been explicitly set, b/c until then parent's width is unconstrained
    // and setting panel's width to 100% will flow parent to 100% of browser
    // (i.e. can't do this in constructor)
    panel.setWidth("100%");
  }
}
