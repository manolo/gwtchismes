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

import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.ClickListenerCollection;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.MouseListenerCollection;
import com.google.gwt.user.client.ui.SourcesClickEvents;
import com.google.gwt.user.client.ui.SourcesMouseEvents;
import com.google.gwt.user.client.ui.UIObject;
import com.google.gwt.user.client.ui.Widget;

public class GWTCButton extends Button implements SourcesMouseEvents,
    SourcesClickEvents {
  public static final int BUTTON_TYPE_0 = 0;
  public static final int BUTTON_TYPE_1 = 1;
  public static final int BUTTON_TYPE_2 = 2;

  public static int DEFAULT_TYPE = 2;

  private static final String C_BUTTON = "gwtc-btn";
  private static final String C_OVER = "-over";
  private static final String C_DOWN = "-down";
  private static final String C_DISABLED = "-disabled";

  private FlexTable container = null;
  private boolean enabled = true;
  private int contentIndexType1 = 1;
  private int contentIndexType2 = 2;
  private int contentIndex = 0;
  private String[] componentsType1 = { "x-btn", "left", "center", "right" };
  private String[] componentsType2 = { "my-btn", "l", "ml", "c", "mr", "r" };
  private String[] components;

  public GWTCButton() {
    super();
    setType(DEFAULT_TYPE);
  }

  public GWTCButton(String html, ClickListener listener) {
    this(html);
    addClickListener(listener);
  }

  public GWTCButton(String html) {
    this();
    setHTML(html);
  }

  public GWTCButton(int type, String html) {
    super();
    setType(type);
    setHTML(html);
  }

  public GWTCButton(int type, String html, ClickListener listener) {
    this(type, html);
    addClickListener(listener);
  }

  public void setType(int type) {
    String text = getHTML();
    element = null;
    if (container !=null) container.clear();
    container = null;
    if (type == BUTTON_TYPE_0) {
      contentIndex = 0;
      setStyleName(C_BUTTON);
      if (GWTCHelper.isIE6()) addMouseListener(mouseOverListener);
    } else if (type == BUTTON_TYPE_1) {
      contentIndex = contentIndexType1;
      components = componentsType1;
      setUpGWTCButton();
      addMouseListener(mouseOverListener);
    } else {
      contentIndex = contentIndexType2;
      components = componentsType2;
      setUpGWTCButton();
      addMouseListener(mouseOverListener);
    }
    sinkEvents(Event.MOUSEEVENTS | Event.ONCLICK);
    setHTML(text);
  }

  private void setUpGWTCButton() {
    container = new FlexTable();
    replaceElement(container.getElement());
    container.setStyleName(components[0]);
    container.addStyleName("my-no-selection");
    container.setCellSpacing(0);
    container.setCellPadding(0);
    for (int idx = 1; idx < components.length; idx++) {
      container.setHTML(0, idx - 1, "<i>&nbsp;</i>");
      container.getCellFormatter().setStyleName(0, idx - 1,
          components[0] + "-" + components[idx]);
    }
  }

  public void setText(String text) {
    setHTML(text);
  }

  public void setHTML(String html) {
    if (container == null) {
      super.setHTML(html);
    } else {
      container.setHTML(0, contentIndex, html);
    }
  }
  public String getHTML(){
    if (container == null) {
      return super.getHTML();
    } else {
      return container.getHTML(0, contentIndex);
    }
  }

  public void setStyleName(String style) {
    super.setStyleName(style);
    if (container != null) container.addStyleName(style);
  }

  public void addStyleName(String style) {
    super.addStyleName(style);
    if (container != null) container.addStyleName(style);
  }

  public void removeStyleName(String style) {
    super.removeStyleName(style);
    if (container != null) container.removeStyleName(style);
  }

  public String toString() {
    return container == null ? super.toString() : container.toString();
  }

  public void click() {
    clickListeners.fireClick(this);
  }

  public void onBrowserEvent(Event event) {
    int mevent = DOM.eventGetType(event);
    mouseListeners.fireMouseEvent(this, event);
    if (enabled && (mevent == Event.ONCLICK)) {
      removeStyleName(UIObject.getStylePrimaryName(this.getElement()) + C_DOWN);
      removeStyleName(UIObject.getStylePrimaryName(this.getElement()) + C_OVER);
      clickListeners.fireClick(this);
    }
  }

  public void setEnabled(boolean enabled) {
    this.enabled = enabled;
    if (enabled) {
      this.removeStyleName(UIObject.getStylePrimaryName(getElement())
          + C_DISABLED);
    } else {
      this
          .addStyleName(UIObject.getStylePrimaryName(getElement()) + C_DISABLED);
    }
  }

  // SourcesMouseEvents Methods
  private MouseListenerCollection mouseListeners = new MouseListenerCollection();

  public void addMouseListener(MouseListener listener) {
    mouseListeners.add(listener);
  }

  public void removeMouseListener(MouseListener listener) {
    mouseListeners.remove(listener);
  }

  // SourcesClickEvents Methods
  private ClickListenerCollection clickListeners = new ClickListenerCollection();

  public void addClickListener(ClickListener listener) {
    clickListeners.add(listener);
  }

  public void removeClickListener(ClickListener listener) {
    clickListeners.remove(listener);
  }

  // A listener for changing style when the mouse is over
  public static final MouseListener mouseOverListener = new MouseListener() {
    public void onMouseUp(Widget sender, int x, int y) {
      sender.removeStyleName(UIObject.getStylePrimaryName(sender.getElement())
          + C_DOWN);
    }

    public void onMouseMove(Widget sender, int x, int y) {}

    public void onMouseEnter(Widget sender) {
      sender.addStyleName(UIObject.getStylePrimaryName(sender.getElement())
          + C_OVER);
    }

    public void onMouseLeave(Widget sender) {
      sender.removeStyleName(UIObject.getStylePrimaryName(sender.getElement())
          + C_DOWN);
      sender.removeStyleName(UIObject.getStylePrimaryName(sender.getElement())
          + C_OVER);
    }

    public void onMouseDown(Widget sender, int x, int y) {
      sender.addStyleName(UIObject.getStylePrimaryName(sender.getElement())
          + C_DOWN);
    }
  };

  // This code is here because in GWT 1.5 setElement only can be called once
  Element element = null;
  private void replaceElement(Element element) {
    if (this.element != null) {
      Element parent = DOM.getParent(this.element);
      if (parent != null) {
        DOM.removeChild(parent, this.element);
        DOM.appendChild(parent, element);
      }
    }
    this.element = element;
  }

  public Element getElement() {
    if (this.element == null) this.element = super.getElement();
    return this.element;
  }

}
