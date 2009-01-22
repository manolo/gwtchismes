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

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.ClickListenerCollection;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FocusListener;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.KeyboardListener;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.MouseListenerCollection;
import com.google.gwt.user.client.ui.SourcesClickEvents;
import com.google.gwt.user.client.ui.SourcesKeyboardEvents;
import com.google.gwt.user.client.ui.SourcesMouseEvents;
import com.google.gwt.user.client.ui.Widget;

public class GWTCButton extends Button implements SourcesMouseEvents,
    SourcesClickEvents, SourcesKeyboardEvents {
  private static final String C_IMG = "my-btn-img";
  public static final int BUTTON_TYPE_0 = 0;
  public static final int BUTTON_TYPE_1 = 1;
  public static int DEFAULT_TYPE = 1;

  private static final String C_BUTTON = "gwtc-btn";
  private static final String C_OVER = "over";
  private static final String C_DOWN = "down";
  private static final String C_DISABLED = "disabled";
  private static final String C_FOCUS = "focus";

  private FlexTable container = null;
  private FocusPanel textPanel = null;
  private boolean enabled = true;
  private int textPosition = 1;

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
    if (container !=null) {
        text = null;
        container.clear();
    }
    container = null;
    if (type == BUTTON_TYPE_0) {
      setStyleName(C_BUTTON);
      addStyleName("gwt-Button");
    } else {
      setUpGWTCButton();
    }
    addMouseListener(mouseOverListener);
    setHTML(text);
    sinkEvents(Event.MOUSEEVENTS | Event.ONCLICK | Event.KEYEVENTS );
  }

  private void setUpGWTCButton() {
    container = new FlexTable();
    container.setStyleName("my-btn");
    container.addStyleName("my-no-selection");
    container.setCellSpacing(0);
    container.setCellPadding(0);
    container.setHTML(0, 0, "&nbsp;");
    container.getCellFormatter().setStyleName(0, 0, "my-btn-" + "l");
    container.getCellFormatter().setStyleName(0, 1, "my-btn-" + "c");
    
    textPanel = new FocusPanel();
    textPanel.addFocusListener(focusListener);
    textPanel.addKeyboardListener(keyboardListener);
    textPanel.setStyleName("my-btn-focus");
    container.setWidget(0, 1, textPanel);
    
    container.setHTML(0, 2, "&nbsp;");
    container.getCellFormatter().setStyleName(0, 2, "my-btn-" + "r");
    
    replaceElement(container.getElement());
    DOM.sinkEvents(textPanel.getElement(), Event.FOCUSEVENTS | Event.KEYEVENTS |  Event.MOUSEEVENTS);
  }
  

  @Override
  public void setText(String txt) {
      if (container == null)
        super.setText(txt);
      else {
          textPanel.clear();
          textPanel.setWidget(new Label(txt));
          textPanel.getWidget().setStyleName("my-btn-text");
      }
  }

  @Override
  public String getText() {
      return container == null? super.getText(): container.getText(0, textPosition);
  }

  @Override
  public void setHTML(String html) {
    if (container == null) 
      super.setHTML(html);
    else {
        textPanel.clear();
        textPanel.setWidget(new HTML(html));
        textPanel.getWidget().setStyleName("my-btn-text");
    }
  }
  
  @Override
  public String getHTML(){
     return container == null? super.getHTML(): container.getHTML(0, textPosition);
  }
  
  private void assertType(){
     assert container != null : "Only GWTCButton type 2 supports this operation";
  }
  private void assertRightTD() {
      assertType();
      if (container.getCellCount(0) == textPosition + 1) {
          container.insertCell(0, textPosition + 1);
          container.getCellFormatter().getElement(0, textPosition + 1).setClassName("my-btn-mr");
      }
  }
  private void assertLeftTD() {
      assertType();
      if (textPosition == 1) {
          container.insertCell(0, textPosition);
          container.getCellFormatter().getElement(0, 1).setClassName("my-btn-ml");
          textPosition = 2;
      }
  }
  public void setLeftHTML(String html) {
      assertLeftTD();
      container.setHTML(0, 1 , html);
  }
  public void setLeftWidget(Widget w) {
      assertLeftTD();
      container.setWidget(0, 1, w);
  }
  public void setRightHTML(String html) {
      assertRightTD();
      container.setHTML(0, textPosition + 1, html);
  }
  public void setRightWidget(Widget w) {
      assertRightTD();
      container.setWidget(0, textPosition + 1, w);
  }
  public void setImage(Image img) {
      img.setStyleName(C_IMG);
      setLeftWidget(img);
  }
  public void setImageSrc(String src) {
      setImage(new Image(src));
  }

  @Override
  public void setStyleName(String style) {
    super.setStyleName(style);
    if (container != null) container.addStyleName(style);
  }

  @Override
  public void addStyleName(String style) {
    super.addStyleName(style);
    if (container != null) container.addStyleName(style);
  }

  @Override
  public void removeStyleName(String style) {
    super.removeStyleName(style);
    if (container != null) container.removeStyleName(style);
  }

  @Override
  public String toString() {
    return container == null ? super.toString() : container.toString();
  }

  @Override
  public void click() {
    clickListeners.fireClick(this);
  }

  @Override
  public void setVisible(boolean visible) {
      super.setVisible(visible);
      if (container != null) container.setVisible(visible);
  }

  @Override
  public void onBrowserEvent(Event event) {
        int mevent = DOM.eventGetType(event);
        mouseListeners.fireMouseEvent(this, event);
        if (enabled) {
            if (mevent == Event.ONCLICK) {
                this.removeStyleDependentName(C_OVER);
                clickListeners.fireClick(this);
                this.removeStyleDependentName(C_DOWN);
            } else if (container != null) { 
                textPanel.onBrowserEvent(event);
            } else {
                super.onBrowserEvent(event);
            }
        }
  }

  @Override
  public void setEnabled(boolean enabled) {
    this.enabled = enabled;
    if (enabled) {
        this.removeStyleDependentName(C_DISABLED);
    } else {
        this.addStyleDependentName(C_DISABLED);
    }
  }

  private MouseListenerCollection mouseListeners = new MouseListenerCollection();

  public void addMouseListener(MouseListener listener) {
    mouseListeners.add(listener);
  }

  public void removeMouseListener(MouseListener listener) {
    mouseListeners.remove(listener);
  }

  private ClickListenerCollection clickListeners = new ClickListenerCollection();

  @Override
  public void addClickListener(ClickListener listener) {
    clickListeners.add(listener);
  }

  @Override
  public void removeClickListener(ClickListener listener) {
    clickListeners.remove(listener);
  }

  MouseListener mouseOverListener = new MouseListener() {
    public void onMouseUp(Widget sender, int x, int y) {
        removeStyleDependentName(C_DOWN);
    }
    public void onMouseMove(Widget sender, int x, int y) {}
    public void onMouseEnter(Widget sender) {
        addStyleDependentName(C_OVER);
    }
    public void onMouseLeave(Widget sender) {
        removeStyleDependentName(C_DOWN);
        removeStyleDependentName(C_OVER);
    }
    public void onMouseDown(Widget sender, int x, int y) {
        addStyleDependentName(C_DOWN);
    }
  };

  // This code is here because in GWT 1.5 setElement can be only called once
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

  @Override
  public Element getElement() {
    if (this.element == null) this.element = super.getElement();
    return this.element;
  }
  
  FocusListener focusListener = new FocusListener() {
      public void onFocus(Widget sender) {
          addStyleDependentName(C_FOCUS);
      }
      public void onLostFocus(Widget sender) {
          removeStyleDependentName(C_FOCUS);
      }
  };

  KeyboardListener keyboardListener = new KeyboardListener() {
      public void onKeyDown(Widget sender, char keyCode, int modifiers) {
      }
      public void onKeyPress(Widget sender, char keyCode, int modifiers) {
          if (keyCode == KeyboardListener.KEY_ENTER)
              click();
      }
      public void onKeyUp(Widget sender, char keyCode, int modifiers) {
      }
  };
  
  @Override
  public int getTabIndex(){
      return (container == null) ? super.getTabIndex() : textPanel.getTabIndex();
  }

  @Override
  public void setAccessKey(char key){
      if (container == null) 
          super.setAccessKey(key); 
      else
          textPanel.setAccessKey(key);
  }
  
  @Override
  public void setFocus(boolean focused) {
      if (container == null) 
          super.setFocus(focused); 
      else
          textPanel.setFocus(focused);
  }

  @Override
  public void setTabIndex(int index){
      if (container == null) 
          super.setTabIndex(index); 
      else
          textPanel.setTabIndex(index); 
  }
}

