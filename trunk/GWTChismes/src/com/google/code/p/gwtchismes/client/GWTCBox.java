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

import com.google.gwt.user.client.ui.DecoratorPanel;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

public class GWTCBox extends DecoratorPanel {
    public static final String StyleFlat = "GWTCBox";
    public static final String StyleBlue = "GWTCBox-blue";
    public static final String StyleGrey = "GWTCBox-grey";
    public static final String StylePanel = "panelCenter";
    
    HTML title = null;
    HTML text = null;
    DockPanel panel = new DockPanel();

    public GWTCBox() {
        super();
        super.add(panel);
        panel.setStyleName(StylePanel);
        setStyleName(StyleFlat);
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
        if (this.title == null) {
            this.title = new HTML();
            panel.add(this.title, DockPanel.NORTH);
        }
        this.title.setHTML("<h3>" + title + "</h3>");
    }

    public void setText(String text) {
        if (this.text == null) {
            this.text = new HTML();
            panel.add(this.text, DockPanel.CENTER);
        }
        this.text.setHTML("<p>" + text + "</p>");
    }

}
