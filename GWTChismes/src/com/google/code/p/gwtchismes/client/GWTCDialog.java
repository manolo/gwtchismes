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
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.ClickListenerCollection;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.SourcesClickEvents;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

public class GWTCDialog extends PopupPanel implements HasHTML, MouseListener, ClickListener, SourcesClickEvents {
  private HTML caption = new HTML();
  private FlexTable titleTable = new FlexTable(); 
  private FlexTable bodyTable = new FlexTable();
  private HTML closeBtn = new HTML();
  private HorizontalPanel buttons = new HorizontalPanel();
  private GWTCButton okButton = new GWTCButton("OK");
  private GWTCButton cancelButton = new GWTCButton("Cancel");
  
  private boolean dragging;
  private int dragStartX, dragStartY;
  private FlexTable panel = new FlexTable();
  DockPanel dockpanel = new DockPanel();
  


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
    titleTable.setCellSpacing(0);
    titleTable.setCellPadding(0);
    titleTable.setStyleName(stylePrefix);
    titleTable.addStyleName("my-no-selection");
    titleTable.getCellFormatter().setStyleName(0, 0, stylePrefix + "-l");
    titleTable.getCellFormatter().setStyleName(0, 1, stylePrefix + "-ml");
    titleTable.getCellFormatter().setStyleName(0, 2, stylePrefix + "-c");
    titleTable.getCellFormatter().setStyleName(0, 3, stylePrefix + "-mr");
    titleTable.getCellFormatter().setStyleName(0, 4, stylePrefix + "-r");
    titleTable.setHTML(0, 0, "<i>&nbsp;</i>");
    titleTable.setHTML(0, 1, "<i>&nbsp;</i>");
    titleTable.setWidget(0, 2, caption);
    titleTable.setWidget(0, 3, closeBtn);
    titleTable.setHTML(0, 4, "<i>&nbsp;</i>");
    closeBtn.setStyleName("my-icon-btn");
    closeBtn.addStyleName("my-shell-close");
    closeBtn.addMouseListener(this);
    closeBtn.addClickListener(this);
    
    stylePrefix = "my-shell-body";
    bodyTable.setCellSpacing(0);
    bodyTable.setCellPadding(0);
    bodyTable.setStyleName(stylePrefix);
    bodyTable.addStyleName("my-no-selection");
    bodyTable.getCellFormatter().setStyleName(0, 0, stylePrefix + "-ml");
    bodyTable.getCellFormatter().setStyleName(0, 1, stylePrefix + "-mc");
    bodyTable.getCellFormatter().setStyleName(0, 2, stylePrefix + "-mr");
    bodyTable.getCellFormatter().setStyleName(1, 0, stylePrefix + "-bl");
    bodyTable.getCellFormatter().setStyleName(1, 1, stylePrefix + "-bc");
    bodyTable.getCellFormatter().setStyleName(1, 2, stylePrefix + "-br");
    bodyTable.setHTML(0, 0, "<div></div>");
    bodyTable.setWidget(0, 1, dockpanel);
    bodyTable.setHTML(0, 2, "<div></div>");
    bodyTable.setHTML(1, 0, "<div></div>");
    bodyTable.setHTML(1, 1, "<div></div>");
    bodyTable.setHTML(1, 2, "<div></div>");
    bodyTable.setHeight("100%");
    
    panel.setWidget(0, 0, titleTable);
    panel.setWidget(1, 0, bodyTable);
    panel.setHeight("100%");
    panel.setBorderWidth(0);
    panel.setCellPadding(0);
    panel.setCellSpacing(0);
    panel.getCellFormatter().setHeight(1, 0, "100%");
    panel.getCellFormatter().setWidth(1, 0, "100%");
    panel.getCellFormatter().setAlignment(1, 0, HasHorizontalAlignment.ALIGN_CENTER, HasVerticalAlignment.ALIGN_MIDDLE);
    super.setWidget(panel);
    
    okButton.addClickListener(this);
    cancelButton.addClickListener(this);
    buttons.setStyleName("my-btn-bar");
    buttons.add(okButton);
    buttons.add(cancelButton);
    dockpanel.add(buttons, DockPanel.SOUTH);
    
    
    dockpanel.setSize("100%", "100%");

    setStyleName("my-style");
    caption.setStyleName("my-shell-hdr-text");
    caption.addMouseListener(this);
    DOM.setStyleAttribute(caption.getElement(), "cursor", "move");
    setSize("400px", "200px");
    center();
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
    } else     if (DOM.eventGetType(event) == Event.ONCLICK) {
        System.out.println("Click");
    }
 

    return super.onEventPreview(event);
  }

  
  
  // MouseListener
  public void onMouseDown(Widget sender, int x, int y) {
		if (sender == caption) {
		    dragging = true;
		    DOM.setCapture(caption.getElement());
		    dragStartX = x;
		    dragStartY = y;
		}
  }

  public void onMouseEnter(Widget sender) {
	  if (sender == closeBtn) {
		  closeBtn.addStyleName("my-shell-close-over");
	  }
  }

  public void onMouseLeave(Widget sender) {
	  if (sender == closeBtn) {
		  closeBtn.removeStyleName("my-shell-close-over");
	  }
  }

  public void onMouseMove(Widget sender, int x, int y) {
	if (sender == caption) {
	    if (dragging) {
	        int absX = x + getAbsoluteLeft();
	        int absY = y + getAbsoluteTop();
	        setPopupPosition(absX - dragStartX, absY - dragStartY);
	      }
	}
  }

  public void onMouseUp(Widget sender, int x, int y) {
		if (sender == caption) {
		    dragging = false;
		    DOM.releaseCapture(caption.getElement());
		}
  }
  
  // SourcesClickEvents
  // ClickListener
  ClickListenerCollection clickListeners = new ClickListenerCollection();
  public void onClick(Widget sender) {
      if (sender == closeBtn) {
          this.hide();
      }
      clickListeners.fireClick(sender);
  }
  public void addClickListener(ClickListener listener) {
      clickListeners.add(listener);
  }
  public void removeClickListener(ClickListener listener) {
      clickListeners.add(listener);
  }
  
  

  public void setHTML(String html) {
    caption.setHTML(html);
  }

  public void setText(String text) {
    caption.setText(text);
  }

  public void setWidget(Widget w) {
	  add(w);
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
  
  // Panel methods
  public void add(Widget w) {
      dockpanel.add(w, DockPanel.NORTH);
  }
  public void add(Widget widget, DockLayoutConstant direction) {
      dockpanel.add(widget, direction);
  }
  public boolean remove(Widget w) {
      return dockpanel.remove(w);
  }
  public void clear() {
      caption.setText("");
      dockpanel.clear();
  }
  /*
  public Iterator iterator() {
      return dockpanel.iterator();
  }
  */
  
}
