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

import com.google.gwt.user.client.*;
import com.google.gwt.user.client.ui.*;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

public class GWTCDecorator extends DecoratorPanel {
  HTML title = null;
  HTML text = null;
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

  public GWTCDecorator() {
      super();
      for (int i=0; i<3; i++) {
          Element aditional = DOM.createDiv();
          Element original = this.getCellElement(i, 0);
          aditional.setAttribute("class", original.getAttribute("class") + "Center");
          DOM.appendChild(DOM.getParent(original), aditional);
          aditional = DOM.createDiv();
          original = this.getCellElement(i, 2);
          aditional.setAttribute("class", original.getAttribute("class"));
          original.setAttribute("class", aditional.getAttribute("class"));
          DOM.appendChild(DOM.getParent(original), aditional);
          
      }
      System.out.println(this);
  }

  public GWTCDecorator(String style) {
      super();
      setStyleName(style);
  }

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



