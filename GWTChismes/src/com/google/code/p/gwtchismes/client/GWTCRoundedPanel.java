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

import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * @author Manuel Carrasco Moñino
 * <h3>Class description</h3>
 * <p>
 * This is a simple panel with rounded corners
 * When the user click the button the browser opens the print dialog 
 * and the print button is hidden for 5 seconds
 * </p>
   <h3>Example</h3>
    <pre>
        GWTCPrint printButton = new GWTCPrint("Print this page");
    </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCPrint { }</li>
 * </ul>
 * 
 */
public class GWTCRoundedPanel extends HTMLPanel {
	
	GWTCRoundedPanel() {
		super("");
	}
    private String styleName = "GWTCPrint";
    private GWTCButton printButton = new GWTCButton("Print");
}
