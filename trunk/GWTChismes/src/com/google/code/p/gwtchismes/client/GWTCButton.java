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

/**
 * <p><b>Decorated button.</b></p>
 * 
 * @author Manuel Carrasco Moñino
 *
 * <h3>Features</h3>
 * <ul>
 * <li>Can be rendered enterelly using html elements or can use the native browser buttons</li>
 * <li>Handles mouse and focus events</li>
 * <li>It is posibble to add icons</li>
 * </ul>
 * 
   <h3>Example</h3>
    <pre>
        ClickListener buttonClick = new ClickListener() {
            public void onClick(Widget sender) {
                Window.alert("Hello World");
            }
        };

        // Button type 0
        GWTCButton button = new GWTCButton(GWTCButton.BUTTON_TYPE_0, "Click me", buttonClick);

        // Button type 1
        button = new GWTCButton(GWTCButton.BUTTON_TYPE_1, "Click me", buttonClick);

        // Button with image
        button = new GWTCButton(i18n.click_button(), buttonClick);
        button.setImageSrc("images/button/dialog-cancel.gif");
    </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCBtn { default and main container style }</li>
 * <li>.GWTCBtn-over { dependent container style when the mouse is over }</li>
 * <li>.GWTCBtn-down { dependent container style when the mouse is down }</li>
 * <li>.GWTCBtn-down { dependent container style when the button has the focus }</li>
 * <li>.GWTCBox-disabled { dependent container style when button is disabled }</li>
 * <li>.GWTCBox .GWTCBox-text { text element}
 * <li>.GWTCBox .GWTCBox-img { image element}
 * <li>.GWTCBox .GWTCBox-l { left cell }
 * <li>.GWTCBox .GWTCBox-ml { middle left cell, it contains the image if present  }
 * <li>.GWTCBox .GWTCBox-c { central cell, it contains the text element }
 * <li>.GWTCBox .GWTCBox-mr { middle right cell }
 * <li>.GWTCBox .GWTCBox-r { right cell }
 * </ul>
 * 
 */
public class GWTCButton extends Button implements SourcesMouseEvents, SourcesClickEvents, SourcesKeyboardEvents {
    public static final int BUTTON_TYPE_0 = 0;
    public static final int BUTTON_TYPE_1 = 1;
    public static int DEFAULT_TYPE = 1;

    private static final String S_BTN = "GWTCBtn";
    private static final String S_OVER = "over";
    private static final String S_DOWN = "down";
    private static final String S_FOCUS = "focus";
    private static final String S_DISABLED = "disabled";
    private static final String S_TEXT = "text";
    private static final String S_IMG = "img";
    private static final String S_ML = "ml";
    private static final String S_MR = "mr";
    private static final String S_R = "r";
    private static final String S_C = "c";
    private static final String S_L = "l";

    private FlexTable container = null;
    private FocusPanel textPanel = null;
    private boolean enabled = true;
    private int textPosIdx = 1;

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
        if (container != null) {
            text = null;
            container.clear();
        }
        container = null;
        if (type == BUTTON_TYPE_0) {
            setStyleName(S_BTN);
            addStyleName("gwt-Button");
        } else {
            setUpGWTCButton();
        }
        addMouseListener(mouseOverListener);
        setHTML(text);
        sinkEvents(Event.MOUSEEVENTS | Event.ONCLICK | Event.KEYEVENTS);
    }

    private void setUpGWTCButton() {
        container = new FlexTable();
        container.setStyleName(S_BTN);
        container.setCellSpacing(0);
        container.setCellPadding(0);
        container.setHTML(0, 0, "&nbsp;");
        container.getCellFormatter().setStyleName(0, 0, S_BTN + "-" + S_L);
        container.getCellFormatter().setStyleName(0, 1, S_BTN + "-" + S_C);

        textPanel = new FocusPanel();
        textPanel.addFocusListener(focusListener);
        textPanel.addKeyboardListener(keyboardListener);
        textPanel.setStyleName(S_BTN + "-focus");
        container.setWidget(0, 1, textPanel);

        container.setHTML(0, 2, "&nbsp;");
        container.getCellFormatter().setStyleName(0, 2, S_BTN + "-" + S_R);

        replaceElement(container.getElement());
        DOM.sinkEvents(textPanel.getElement(), Event.FOCUSEVENTS | Event.KEYEVENTS | Event.MOUSEEVENTS);
    }

    @Override
    public void setText(String txt) {
        if (container == null)
            super.setText(txt);
        else {
            textPanel.clear();
            textPanel.setWidget(new Label(txt));
            textPanel.getWidget().setStyleName(S_BTN + "-" + S_TEXT);
        }
    }

    @Override
    public String getText() {
        return container == null ? super.getText() : container.getText(0, textPosIdx);
    }

    @Override
    public void setHTML(String html) {
        if (container == null)
            super.setHTML(html);
        else {
            textPanel.clear();
            textPanel.setWidget(new HTML(html));
            textPanel.getWidget().setStyleName(S_BTN + "-" + S_TEXT);
        }
    }

    @Override
    public String getHTML() {
        return container == null ? super.getHTML() : container.getHTML(0, textPosIdx);
    }

    private void assertType() {
        assert container != null : "Only GWTCButton type 2 supports this operation";
    }

    private void assertRightTD() {
        assertType();
        if (container.getCellCount(0) == textPosIdx + 1) {
            container.insertCell(0, textPosIdx + 1);
            container.getCellFormatter().getElement(0, textPosIdx + 1).setClassName(S_BTN + "-" + S_MR);
        }
    }

    private void assertLeftTD() {
        assertType();
        if (textPosIdx == 1) {
            container.insertCell(0, textPosIdx);
            container.getCellFormatter().getElement(0, 1).setClassName(S_BTN + "-" + S_ML);
            textPosIdx = 2;
        }
    }

    public void setLeftHTML(String html) {
        assertLeftTD();
        container.setHTML(0, 1, html);
    }

    public void setLeftWidget(Widget w) {
        assertLeftTD();
        container.setWidget(0, 1, w);
    }

    public void setRightHTML(String html) {
        assertRightTD();
        container.setHTML(0, textPosIdx + 1, html);
    }

    public void setRightWidget(Widget w) {
        assertRightTD();
        container.setWidget(0, textPosIdx + 1, w);
    }

    public void setImage(Image img) {
        img.setStyleName(S_BTN + "-" + S_IMG);
        setLeftWidget(img);
    }

    public void setImageSrc(String src) {
        setImage(new Image(src));
    }

    @Override
    public void setStyleName(String style) {
        super.setStyleName(style);
        if (container != null)
            container.addStyleName(style);
    }

    @Override
    public void addStyleName(String style) {
        super.addStyleName(style);
        if (container != null)
            container.addStyleName(style);
    }

    @Override
    public void removeStyleName(String style) {
        super.removeStyleName(style);
        if (container != null)
            container.removeStyleName(style);
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
        if (container != null)
            container.setVisible(visible);
    }

    @Override
    public void onBrowserEvent(Event event) {
        int mevent = DOM.eventGetType(event);
        mouseListeners.fireMouseEvent(this, event);
        if (enabled) {
            if (mevent == Event.ONCLICK) {
                this.removeStyleDependentName(S_OVER);
                clickListeners.fireClick(this);
                this.removeStyleDependentName(S_DOWN);
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
            this.removeStyleDependentName(S_DISABLED);
        } else {
            this.addStyleDependentName(S_DISABLED);
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
            removeStyleDependentName(S_DOWN);
        }

        public void onMouseMove(Widget sender, int x, int y) {
        }

        public void onMouseEnter(Widget sender) {
            addStyleDependentName(S_OVER);
        }

        public void onMouseLeave(Widget sender) {
            removeStyleDependentName(S_DOWN);
            removeStyleDependentName(S_OVER);
        }

        public void onMouseDown(Widget sender, int x, int y) {
            addStyleDependentName(S_DOWN);
        }
    };

    // This code is needed because in GWT 1.5 setElement can be only called once
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
        if (this.element == null)
            this.element = super.getElement();
        return this.element;
    }

    FocusListener focusListener = new FocusListener() {
        public void onFocus(Widget sender) {
            addStyleDependentName(S_FOCUS);
        }

        public void onLostFocus(Widget sender) {
            removeStyleDependentName(S_FOCUS);
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
    public int getTabIndex() {
        return (container == null) ? super.getTabIndex() : textPanel.getTabIndex();
    }

    @Override
    public void setAccessKey(char key) {
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
    public void setTabIndex(int index) {
        if (container == null)
            super.setTabIndex(index);
        else
            textPanel.setTabIndex(index);
    }
}
