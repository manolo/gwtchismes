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

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;

/**
 * <b>A simple button that send to the print the current page.</b>
 * 
 * @author Manuel Carrasco Moñino
 * <p>
 * When the user click the button the browser opens the print dialog 
 * and the print button is hidden for 5 seconds
 * </p>
   <h3>Example</h3>
    <pre>
        GWTCPrint printButton = new GWTCPrint("Print this page");
    </pre>        
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCPrint { main style}</li>
 * </ul>
 * 
 */
public class GWTCPrint extends GWTCButton {
  private static String MAIN_STYLE = "GWTCPrint";

  public GWTCPrint() {
    this(null);
  }

  public GWTCPrint(String t) {
    super(t);
    setup();
  }

  private void setup() {
    addStyleName(MAIN_STYLE);
    addClickHandler(new ClickHandler() {
      public void onClick(ClickEvent event) {
        print();
      }
    });
    setImage(getImagesBundle().print());
  }

  /**
   * Sends the page to the printer
   */
  public void print() {
    setVisible(false);
    Window.print();
    Timer t = new Timer() {
      public void run() {
        setVisible(true);
      }
    };
    t.schedule(5 * 1000);
  }
}
