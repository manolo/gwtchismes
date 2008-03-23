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

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;

public class GWTCButton extends GWTCButtonRounded {

  static public int BUTTON_SQUARED = 0;
  static public int BUTTON_ROUNDED_1 = 1;
  static public int BUTTON_ROUNDED_2 = 2;
  Button mbutton;

  public GWTCButton() {
    super();
  }

  public GWTCButton(int type) {
    super(type);
  }

  public GWTCButton(String html, ClickListener listener) {
    super(html, listener);
  }

  public GWTCButton(String html) {
    super(html);
  }

  public GWTCButton(int type, String html) {
    super(type);
    setHTML(html);
  }

  public GWTCButton(int type, String html, ClickListener listener) {
    super(type, html, listener);
  }

}
