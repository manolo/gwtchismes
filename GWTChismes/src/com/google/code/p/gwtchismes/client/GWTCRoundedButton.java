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
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ButtonBase;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.MouseListenerCollection;
import com.google.gwt.user.client.ui.SourcesMouseEvents;
import com.google.gwt.user.client.ui.Widget;

public class GWTCRoundedButton extends Composite implements ClickListener, SourcesMouseEvents {
	FlexTable t = new FlexTable();
	public GWTCRoundedButton() {
		HTML h = new HTML("<div></div>");
		initWidget(h);
		t.setCellSpacing(0);
		t.setCellPadding(0);
		t.setBorderWidth(0);
		t.setWidth("75px");
		
		t.setHTML(0, 0, "<i>&nbsp;</i>");
		t.setHTML(0, 2, "<i>&nbsp;</i>");
		
		t.setStyleName("x-btn");
		t.addStyleName("x-btn-wrap");
		t.getCellFormatter().setStyleName(0, 0, "x-btn-left");
		t.getCellFormatter().setStyleName(0, 1, "x-btn-center");
		t.getCellFormatter().setStyleName(0, 2, "x-btn-right");
		
		DOM.appendChild(getElement(), t.getElement());
		sinkEvents(Event.MOUSEEVENTS | Event.ONCLICK);
	}
	public GWTCRoundedButton(String html) {
		this();
	}
	public void setHTML(String html) {
		t.setHTML(0, 1, html);
	}

	public void addClickListener(ClickListener listener) {
		System.out.println("Adding clicklistener");
	}
	
	public void onClick(Widget sender) {
		Window.alert("onClick, " + sender.toString());
	}


	// SourcesMouseEvents Methods
	private MouseListenerCollection mouseListeners = new MouseListenerCollection();

	public void addMouseListener(MouseListener listener) {
		if (mouseListeners == null) {
			mouseListeners = new MouseListenerCollection();
		}
		mouseListeners.add(listener);
	}

	public void removeMouseListener(MouseListener listener) {
		if (mouseListeners != null) {
			mouseListeners.remove(listener);
		}
	}

}
