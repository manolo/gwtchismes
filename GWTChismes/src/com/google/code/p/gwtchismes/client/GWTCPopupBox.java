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

import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

/**
 * <b>A popup decorated with rounded borders.</b>
 * 
 * @author Manuel Carrasco Moñino
   <h3>Example</h3>
    <pre>
        // Creates a blue popup box
        GWTCPopupBox popup = new GWTCPopupBox(GWTCBox.StyleBlue);
        // Shows the popup in the center on the screen
        popup.center();
    </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCPopupBox { main style}</li>
 * </ul>
 * 
 */

public class GWTCPopupBox extends PopupPanel {
  
  private static final String MAIN_STYLE = "GWTCPopupBox";
  private GWTCBox box = new GWTCBox();
  
  public GWTCPopupBox(String style) {
    this();
    box.addStyleName(style);
  }
  
  public GWTCPopupBox() {
    super();
    this.setStyleName(MAIN_STYLE);
    super.add(box);
  }
  
  public GWTCPopupBox(boolean autohide) {
      super(autohide);
      this.setStyleName(MAIN_STYLE);
      super.add(box);
  }
  
  public void add(Widget w) {
    box.add(w);
  }
  
}