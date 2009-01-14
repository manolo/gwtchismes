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
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

/**
 * <p>
 * <b>A widget that groups a set of fields in a form.</b>
 * </p>
 * It draws a box with a legend around them.<
 *  
 * @author Manuel Carrasco Moñino
 *
 */
public class GWTCFieldSet extends Panel {
    private static final String MAIN_STYLE = "GWTCFieldSet";
    String idFieldSet;
    String idLegend;
    DockPanel dockpanel = new DockPanel();
    public void add(Widget w) {
        dockpanel.add(w, DockPanel.NORTH);
    }
    public void add(Widget widget, DockLayoutConstant direction) {
        dockpanel.add(widget, direction);
    }
    public boolean remove(Widget w) {
        return dockpanel.remove(w);
    }
    public Iterator iterator() {
        return dockpanel.iterator();
    }

    private static int idCounter = 1;
    private Element fieldSet = DOM.createFieldSet();
    private Element legend = DOM.createLegend();
    private HTMLPanel container = new HTMLPanel("");
    
	/**
	 * Main constructor
	 */
	public GWTCFieldSet() {
        idLegend = "legend-" + idCounter;
        idFieldSet = "fieldset-" + idCounter++;
        setLegend("");
        setStyleName(MAIN_STYLE);
	}
    /**
     * Sets the text for the leyend
     * @param txt
     */
    public void setLegend(String txt) {
        if (DOM.getElementById(idLegend) != null ) {
            DOM.setInnerText(DOM.getElementById(idLegend), txt);
        } else {
            DOM.setInnerText(legend, txt);
        }
        DOM.setElementAttribute(legend, "id", idLegend);
        DOM.setElementAttribute(fieldSet, "id", idFieldSet);
        DOM.appendChild(fieldSet, legend);
        container = new HTMLPanel(fieldSet.toString());
        container.add(dockpanel, idFieldSet);
        setElement(container.getElement());
    }
}
