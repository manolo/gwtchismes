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
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;

public class GWTCBox extends Panel {
	SimplePanel panel = new SimplePanel();
	public void add(Widget w) {
		panel.add(w);
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
	
		/*
		Element tl = DOM.createDiv();
		DOM.setElementAttribute(tl, "class", "x-box-tl");
		Element tr = DOM.createDiv();
		DOM.setElementAttribute(tr, "class", "x-box-tr");
		Element tc = DOM.createDiv();
		DOM.setElementAttribute(tc, "class", "x-box-tc");
		DOM.appendChild(tl, tr);
		DOM.appendChild(tr, tc);
		
		Element ml = DOM.createDiv();
		DOM.setElementAttribute(ml, "class", "x-box-ml");
		Element mr = DOM.createDiv();
		DOM.setElementAttribute(mr, "class", "x-box-mr");
		Element mc = DOM.createDiv();
		DOM.setElementAttribute(mc, "class", "x-box-mc");
		DOM.appendChild(ml, mr);
		DOM.appendChild(mr, mc);

		Element bl = DOM.createDiv();
		DOM.setElementAttribute(bl, "class", "x-box-bl");
		Element br = DOM.createDiv();
		DOM.setElementAttribute(br, "class", "x-box-br");
		Element bc = DOM.createDiv();
		DOM.setElementAttribute(bc, "class", "x-box-bc");
		DOM.appendChild(bl, br);
		DOM.appendChild(br, bc);
		
		DOM.appendChild(mc, panel.getElement());
		Element ppal = DOM.createDiv();
		DOM.appendChild(ppal, tl);
		DOM.appendChild(ppal, ml);
		DOM.appendChild(ppal, bl);
		
		setElement(ppal);
		setStyleName("x-box");
		*/

	/*
	protected void onAttach() {
		String thisID = "gwt-box";
		String htmlContent = "<div class=\"" + style + "\">" 
			+ "<div class=\"x-box-tl\"><div class=\"x-box-tr\"><div class=\"x-box-tc\"></div></div></div>" 
			+ "<div class=\"x-box-ml\"><div class=\"x-box-mr\"><div class=\"x-box-mc\" id=\"" + thisID + "\"></div></div></div>"
		    + "<div class=\"x-box-bl\"><div class=\"x-box-br\"><div class=\"x-box-bc\"></div></div></div>" + "</div>";
		DOM.setInnerHTML(getElement(), htmlContent);
		DOM.appendChild(DOM.getElementById(thisID), panel.getElement());
	}
	*/
}
