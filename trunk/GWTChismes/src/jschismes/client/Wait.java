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

package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.JavaScriptObject;

/**
 * A modal box informing the user that the application is working and avoiding user interaction with the page.
 */
@Export
@ExportPackage("jsc")
public class Wait extends GWTCWait implements Exportable {

  private JsProperties jsProp;

  public Wait(JavaScriptObject prop) {
    this.jsProp = new JsProperties(prop);
    if (jsProp.defined(Const.TEXT))
      super.setMessage(jsProp.get(Const.TEXT));
    if (jsProp.defined(Const.CLASS_NAME))
      super.setStyleName(jsProp.get(Const.CLASS_NAME));
    if (jsProp.defined(Const.IMAGE))
      super.setImg(jsProp.get(Const.IMAGE));
  }

  /**
   * Show the modal dialog containing the wait dialog, and hide it when the number of seconds is reached.
   * A value of 0 means show it untill hide() method is called
   */
  public void show(int seconds) {
    super.show(seconds);
  }

  /**
   * hide the wait dialog
   */
  public void hide() {
    super.hide();
  }

}
