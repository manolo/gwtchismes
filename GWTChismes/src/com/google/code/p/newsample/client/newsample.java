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

package com.google.code.p.newsample.client;

import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

public class newsample implements EntryPoint {
    public void onModuleLoad() {
    	
    	Button b = new Button("OK", new ClickListener() {
    		public void onClick(Widget sender) {
    			Window.alert(RootPanel.get().toString());
    		}
    	});
    	GWTCBox box = new GWTCBox();
    	RootPanel.get().add(b);
        RootPanel.get().add(box);
        
    	FlexTable table = new FlexTable();
    	ListBox list = new ListBox();
    	list.addItem("1");
    	list.addItem("2");
    	table.setWidget(0, 0 , list);
    	table.setText(0, 1,"Habitacion Doble");
    	table.setHTML(0, 2,"1.200,32 &euro;");
    	box.add(table);
    	
    	GWTCBox boxblue = new GWTCBox();
    	boxblue.setStyleName("x-box-blue");
    	GWTCDatePicker picker = new GWTCDatePicker(false);
    	boxblue.add(picker);
    	box.add(boxblue);
    	
    	GWTCBox bb = new GWTCBox();
    	bb.setStyleName("x-box-blue");
    	GWTCBox bg = new GWTCBox();
    	Label lb = new Label("Blue");
    	Label lg = new Label("Grey");
    	bb.add(lb);
    	bg.add(lg);
    	bb.add(bg);
    	RootPanel.get().add(bb);
    	
    	
    	
    	
    	//box.add(vp);
    	/*
    	GWTCCornerButton b = new GWTCCornerButton("bb");
    	b.setEnabled(false);
    	b.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                Window.alert("Hola");
            }
        });
    	RootPanel.get().add(b);
    	GWTCRoundedButton bb = new GWTCRoundedButton();
    	RootPanel.get().add(bb);
    	*/
    }
}
