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

import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;


/**
 * A decorated with rounded corners panel
 */
@Export
@ExportPackage("jsc")
public class Box extends GWTCBox implements Exportable {

  private JsProperties jsProp;

  public Box(JavaScriptObject prop) {
    super();

    this.jsProp = new JsProperties(prop);

    String box = jsProp.get(Const.RND_BOX_TYPE);
    if ("flat".equals(box))
      setStyleName(STYLE_FLAT);
    else if ("grey".equals(box))
      setStyleName(STYLE_GREY);
    else if ("blue".equals(box))
      setStyleName(STYLE_BLUE);

    if (jsProp.defined(Const.CLASS_NAME))
      super.addStyleName(jsProp.get(Const.CLASS_NAME));

    super.setTitle(jsProp.get(Const.TITLE));
    super.setText(jsProp.get(Const.TEXT));

    this.add(jsProp.get(Const.HTML));

    DatePicker.attachToDocument(this, Const.CONT_ID, jsProp);
  }

  /**
   * Remove all child elements from the panel
   */
  public void clear() {
    super.clear();
  }

  /**
   * Add a new element to the panel
   */
  public void add(Object object) {
    add(object, Const.NORTH);
  }

  /**
   * Add a new element to the panel, in the specified direction (NORTH, SOUTH, EAST, WEST)
   */
  public void add(Object object, DockLayoutConstant direction) {
    super.add(object, direction);
  }
  

  
  MyClickListener listener;
  /**
   */
  @Export("addListener")
  public void addClickListener(MyClickListener listener) {
    this.listener = listener;
  }

  /**
   */
  @Export("fire")
  public void fireClickListener() {
    if (listener != null) {
      listener.onClick( "Hello", 1);
    }
  }


}
