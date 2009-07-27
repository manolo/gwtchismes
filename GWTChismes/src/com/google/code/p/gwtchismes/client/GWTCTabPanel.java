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

import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * <p>
 * <b>A TabPanel that wraps each tab text in a decorated label</b>
 * </p>
 * 
 * <b>TODO:</b> Use the new DecoratedTabPanel from GWT 
 * 
 * @author Manuel Carrasco Moñino
 *
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCTabPanel { main style}</li>
 * </ul>
*/
public class GWTCTabPanel extends TabPanel {

  private String MAIN_STYLE = "GWTCTabPanel";

  public GWTCTabPanel() {
    super();
    setStyleName(MAIN_STYLE);
  }

  public void add(Widget w, String tabText) {
    super.add(w, new Label(tabText));
  }

}