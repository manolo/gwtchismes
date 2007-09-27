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
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

public class GWTCBox extends Panel {
    DockPanel panel = new DockPanel();
	public void add(Widget w) {
		panel.add(w, DockPanel.NORTH);
	}
    public void add(Widget widget, DockLayoutConstant direction) {
        panel.add(widget, direction);
    }
	public boolean remove(Widget w) {
		return panel.remove(w);
	}
	public Iterator iterator() {
		return panel.iterator();
	}
	public GWTCBox() {
		setElement(DOM.createDiv());
		String[] v = {"t", "m", "b"};
		String[] h = {"l", "r", "c"};
		for (int i = 0; i < 3; i++) {
			Element l = null;
			for (int j = 0; j < 3; j++) {
				Element e = ((i==1 && j==2) ? panel.getElement(): DOM.createDiv()) ;
	            DOM.setElementAttribute(e, "class", "x-box-" + v[i] + h[j]);
	            if (j==0) 
	            	DOM.appendChild(getElement(), e);
	            if (l !=null ) 
	            	DOM.appendChild(l, e);
	            l = e;
            }
        }
		setStyleName("x-box");
		System.out.println(this);
	}
}
