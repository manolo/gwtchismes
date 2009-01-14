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

import java.util.Iterator;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

/**
 * <b>A panel decorated with rounded borders.</b>
 * 
 * @author Manuel Carrasco Moñino
 * 
 * It uses a DockPanel inside a DecoratorPanel 
 * 
   <h3>Example</h3>
    <pre>
        GWTCBox box = new GWTCBox(GWTCBox.StyleBlue);
        box.setTitle("A Title")
        box.setText("Sample text")
        box.add(new Label("label"), DockPanel.NORTH);
        RootPanel.get().add(box);
    </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCBox { default and main style }</li>
 * <li>.GWTCBox { blue box }</li>
 * <li>.GWTCBox { grey box }</li>
 * <li>.GWTCBox h3.title { title }</li>
 * <li>.GWTCBox p.text   { text }</li>
 * <li>.GWTCBox .panel { content panel }</li>
 * </ul>
 * 
 */
public class GWTCBox extends DecoratorPanel {
    public static final String DEFAULT_STYLE = "GWTCBox";
    public static final String STYLE_FLAT = DEFAULT_STYLE;
    public static final String STYLE_BLUE = DEFAULT_STYLE + "-blue";
    public static final String STYLE_GREY = DEFAULT_STYLE + "-grey";
    private static final String STYLE_TITLE = "title";
    private static final String STYLE_TEXT = "text";
    private static final String STYLE_PANEL = "panel";
    HTML title = new HTML();
    HTML text = new HTML();
    DockPanel panel = new DockPanel();

    
    /**
     *  Default constructor
     */
    public GWTCBox() {
        super();
        super.add(panel);
        panel.setStyleName(STYLE_PANEL);
        setStyleName(DEFAULT_STYLE);
        panel.add(this.title, DockPanel.NORTH);
        panel.add(this.text, DockPanel.NORTH);
    }

    /**
     * Constructor with an user defined style
     * There are three styles already configured in the GWTCBox.css
     * GWTCBox.STYLE_FLAT
     * GWTCBox.STYLE_GREY
     * GWTCBox.STYLE_BLUE
     * 
     * @param style
     *     
     */
    public GWTCBox(String style) {
        this();
        if (style != null && style.length() > 0 && style != DEFAULT_STYLE)
            addStyleName(style);
    }
    
    @Override
    public void setSize(String width, String height) {
        super.setSize(width, height);
        adjustSize(width);
    }

    @Override
    public void setWidth(String width) {
        super.setWidth(width);
        adjustSize(width);
    }

    private void adjustSize(String width) {
        Element topCenter = DOM.getChild(DOM.getChild(DOM.getChild(getElement(), 0), 0), 1);
        if (width.equals("auto")){
            DOM.setStyleAttribute(topCenter, "width", "auto");
        } else {
            DOM.setStyleAttribute(topCenter, "width", "100%");
        }
    }


    /**
     * Adds elements to the main panel in the NORTH position
     * 
     */
    @Override
    public void add(Widget w) {
        panel.add(w, DockPanel.NORTH);
    }

    /**
     * Adds elements to the panel in the position specified
     * Valid options are
     * DockPanel.NORTH DockPanel.SOUTN DockPanel.EAST DockPanel.WEST
     *  
     * @param widget
     * @param direction
     */
    public void add(Widget widget, DockLayoutConstant direction) {
        panel.add(widget, direction);
    }

    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.SimplePanel#remove(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    public boolean remove(Widget w) {
        return panel.remove(w);
    }

    /* (non-Javadoc)
     * @see com.google.gwt.user.client.ui.SimplePanel#iterator()
     */
    @Override
    public Iterator iterator() {
        return panel.iterator();
    }

    /**
     * writes a title in the north position of the panel, inside a h3 tag 
     */
    @Override
    public void setTitle(String title) {
        this.title.setHTML("<h3" + " class=\"" + STYLE_TITLE + "\">"+ title + "</h3>");
    }

    /**
     * writes a text in the north position of the panel and under the title inside a p tag 
     */
    public void setText(String text) {
        this.text.setHTML("<p" + " class=\"" + STYLE_TEXT + "\">" + text + "</p>");
    }
}
