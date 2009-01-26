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

import static gwtquery.client.GQuery.$;
import gwtquery.client.Function;
import gwtquery.client.Selector;
import gwtquery.client.Selectors;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.NodeList;
import com.google.gwt.user.client.Event;

public class newsample implements EntryPoint {
    // Compile-time Selectors!
    public interface MSelect extends Selectors {
        @Selector(".menuContainer a")
        NodeList<Element> allMenuLinks();
        
        @Selector("li")
        Element getContainer();
    }

    // $();
    public void onModuleLoad() {
        final MSelect s = GWT.create(MSelect.class);
        NodeList ee;
        for (Element e : $(s.allMenuLinks()).elements()) {
            System.out.println($("li", e));
        }
        
        $(s.allMenuLinks()).click(new Function() {
            public boolean f(Event e) {
                super.f(e);
                return false;
            }
            public void f(Element e) {
                System.out.println("b");
            }
        });
    }
}
