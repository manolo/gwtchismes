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
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.Widget;

public class GWTCBox extends Panel  {
    
    public boolean remove(Widget w) {
        return false;
    }
    public Iterator iterator() {
        return null;
    }
	
	private boolean configured = false;
	
        /**
		 * Called when the element DIV is attached to the client DOM.
         * onAttach delays the creation of objects until divElement is safely attached to the body
		 */
		protected void onAttach()
		{
           String htmlContent = 
                    "<div class=\"msg\">"+
                    "<div class=\"x-box-tl\"><div class=\"x-box-tr\"><div class=\"x-box-tc\"></div></div></div>" + 
                    "<div class=\"x-box-ml\"><div class=\"x-box-mr\"><div class=\"x-box-mc\" id=\"msg-cnt\"></div></div></div>" + 
                    "<div class=\"x-box-bl\"><div class=\"x-box-br\"><div class=\"x-box-bc\"></div></div></div>" + 
                    "</div>";
            DOM.setInnerHTML(getElement(),htmlContent);
			super.onAttach();
            this.setVisible(false);
		}
        
 }






