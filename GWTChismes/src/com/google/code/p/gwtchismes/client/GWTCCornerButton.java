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
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ButtonBase;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.MouseListener;
import com.google.gwt.user.client.ui.MouseListenerCollection;
import com.google.gwt.user.client.ui.Widget;

public class GWTCCornerButton extends ButtonBase { //implements ClickListener, SourcesMouseEvents {
	static final FlexTable container = new FlexTable();
	static final Button button = new Button();
	
	public GWTCCornerButton(String html, ClickListener listener) {
		this(html);
		addClickListener(listener);
	}
	public GWTCCornerButton(String html) {
		this();
		setHTML(html);
	}

	public GWTCCornerButton() {
		super(container.getElement());
		container.setCellSpacing(0);
		container.setCellPadding(0);
		container.setBorderWidth(0);
		container.setStyleName("x-btn");
		container.addStyleName("x-btn-wrap");
		container.setWidth("75px");
		container.setHTML(0, 0, "<i>&nbsp;</i>");
		container.getCellFormatter().setStyleName(0, 0, "x-btn-left");
		DOM.setElementAttribute(button.getElement(), "class", "x-btn-text");
		container.setHTML(0, 1,"<button class=\"gwt-Button x-btn-text\" type=\"button\">");
		//container.setWidget(0,1,button);
		container.getCellFormatter().setStyleName(0, 1, "x-btn-center");
		container.setHTML(0, 2, "<i>&nbsp;</i>");
		container.getCellFormatter().setStyleName(0, 2, "x-btn-right");
		sinkEvents(Event.MOUSEEVENTS);
		addMouseListener(mouseOverListener);
	}
	

	public void setHTML(String html) {
		button.setHTML(html);
	}
	/* TODO
	public void click() {
	}
	*/

	public void onBrowserEvent(Event event) {
		if (mouseListeners != null)
			mouseListeners.fireMouseEvent(this, event);
		super.onBrowserEvent(event);
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


	// Static Methods
	public static final MouseListener mouseOverListener = new MouseListener() {
		public void onMouseUp(Widget sender, int x, int y) {
		}

		public void onMouseMove(Widget sender, int x, int y) {
		}

		public void onMouseLeave(Widget sender) {
			sender.removeStyleName("x-btn-over");
		}

		public void onMouseEnter(Widget sender) {
			sender.addStyleName("x-btn-over");
		}

		public void onMouseDown(Widget sender, int x, int y) {
		}
	};

}