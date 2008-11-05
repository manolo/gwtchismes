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

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

public class GWTCBox extends DecoratorPanel {
    public static final String StyleFlat = "GWTCBox";
    public static final String StyleBlue = "GWTCBox-blue";
    public static final String StyleGrey = "GWTCBox-grey";
    public static final String StyleTitle = "title";
    public static final String StyleText = "text";
    public static final String StylePanel = "panel";
    HTML title = new HTML();
    HTML text = new HTML();
    DockPanel panel = new DockPanel();

    public GWTCBox() {
        super();
        super.add(panel);
        panel.setStyleName(StylePanel);
        setStyleName(StyleFlat);
        panel.add(this.title, DockPanel.NORTH);
        panel.add(this.text, DockPanel.NORTH);
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

    public GWTCBox(String style) {
        this();
        if (style != null && style.length() > 0 && style != StyleFlat)
            addStyleName(style);
    }

    @Override
    public void add(Widget w) {
        panel.add(w, DockPanel.NORTH);
    }

    public void add(Widget widget, DockLayoutConstant direction) {
        panel.add(widget, direction);
    }

    @Override
    public boolean remove(Widget w) {
        return panel.remove(w);
    }

    @Override
    public Iterator iterator() {
        return panel.iterator();
    }

    @Override
    public void setTitle(String title) {
        this.title.setHTML("<h3" + " class=\"" + StyleTitle + "\">"+ title + "</h3>");
    }

    public void setText(String text) {
        this.text.setHTML("<p" + " class=\"" + StyleText + "\">" + text + "</p>");
    }
    

}
