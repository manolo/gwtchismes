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

import com.google.code.p.gwtchismes.client.editor.GWTCEditor;
import com.google.gwt.core.client.JavaScriptObject;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

/**
 * A Rich Editor
 */
@Export
@ExportPackage("jsc")
public class Editor extends GWTCEditor implements Exportable {

  private JsProperties jsProp;

  public Editor(JavaScriptObject prop) {
    
    super();

    this.jsProp = new JsProperties(prop);

    if (jsProp.defined(Const.CLASS_NAME))
      super.addStyleName(jsProp.get(Const.CLASS_NAME));
    
    if (jsProp.defined(Const.HTML))
      setHTML(jsProp.get(Const.HTML));
    
    DatePicker.attachToDocument(this, Const.CONT_ID, jsProp);
    
  }

  /**
   * Set the html content of the rich area
   */
  public String html() {
     return super.getHTML();
  }
  
  /**
   * Get the content of the rich area
   * @param html
   */
  public void html(String html) {
     super.setHTML(html);
  }
  
  /**
   * Put the editor in read-only or writing mode
   */
  public void setEnabled(boolean b) {
    super.setEnabled(b);
  }

}
