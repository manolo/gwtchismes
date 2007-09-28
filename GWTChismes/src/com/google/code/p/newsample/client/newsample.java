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
import com.google.code.p.gwtchismes.client.GWTCCornerButton;
import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

public class newsample implements EntryPoint {
    public void onModuleLoad() {
        pruebas3();
        pruebas4();
    }

    public void pruebas2() {
        Label l11 = new Label("11");
        Label l12 = new Label("12");
        HorizontalPanel h = new HorizontalPanel();
        h.add(l11);
        h.add(l12);
        
        Label l21 = new Label("21");
        Label l22 = new Label("22");
        VerticalPanel v = new VerticalPanel();
        v.add(l21);
        v.add(l22);
        
        Label l31 = new Label("31");
        Label l32 = new Label("32");
        FlowPanel fp = new FlowPanel();
        fp.add(l31);
        fp.add(l32);
        
        Label l41 = new Label("41");
        Label l42 = new Label("42");
        Label l43 = new Label("43");
        Label l44 = new Label("44");
        Label l45 = new Label("45");
        Label l46 = new Label("46");
        Label l47 = new Label("47");
        DockPanel dp = new DockPanel();
        dp.add(l41, DockPanel.NORTH);
        dp.add(l42, DockPanel.NORTH);
        dp.add(l43, DockPanel.SOUTH);
        dp.add(l44, DockPanel.EAST);
        dp.add(l45, DockPanel.EAST);
        dp.add(l46, DockPanel.WEST);
        dp.add(l47, DockPanel.CENTER);
        
        RootPanel.get().add(h);
        RootPanel.get().add(v);
        RootPanel.get().add(fp);
        RootPanel.get().add(dp);
    }
    public void pruebas3() {
        Label l11 = new Label("11");
        Label l12 = new Label("12");
        GWTCBox box = new GWTCBox();
        GWTCBox boxblue = new GWTCBox();
        boxblue.setStyleName("x-box-blue");
        box.add(l11);
        boxblue.add(l12);
        box.add(boxblue);
        RootPanel.get().add(box);
    }
    public void pruebas4() {
        Label l11 = new Label("11");
        Label l12 = new Label("12");
        GWTCBox box = new GWTCBox();
        GWTCBox boxblue = new GWTCBox();
        boxblue.setStyleName("x-box-blue");
        box.add(l11);
        boxblue.add(l12);
        boxblue.add(box);
        RootPanel.get().add(boxblue);
    }
    public void pruebas1() {
        GWTCBox box = new GWTCBox();
        FlexTable table = new FlexTable();
        ListBox list = new ListBox();
        list.addItem("1");
        list.addItem("2");
        table.setWidget(0, 0 , list);
        table.setText(0, 1,"Habitacion Doble");
        table.setHTML(0, 2,"1.200,32 &euro;");
        box.add(table);
        RootPanel.get().add(box, 400, 50);
        
        GWTCBox boxblue = new GWTCBox();
        boxblue.setStyleName("x-box-blue");
        GWTCDatePicker picker = new GWTCDatePicker(false);
        boxblue.add(picker);
        RootPanel.get().add(boxblue, 400, 100);
        
        
        
        
        
        
        if (true) 
            return;
        
        VerticalPanel vp  = new VerticalPanel();
        vp.add(table);
        
        
        //box.add(vp);
        RootPanel.get().add(box, 200, 200);
        GWTCCornerButton b = new GWTCCornerButton("bb");
        b.setEnabled(false);
        b.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                Window.alert("Hola");
            }
        });
        RootPanel.get().add(b);
        GWTCCornerButton bb = new GWTCCornerButton();
        RootPanel.get().add(bb);
        
    }
}
