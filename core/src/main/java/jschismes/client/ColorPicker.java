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

import com.google.code.p.gwtchismes.client.editor.GWTCColorPicker;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

@Export
@ExportPackage("jsc")
public class ColorPicker extends GWTCColorPicker implements Exportable {

  private JsChangeClosure jsClosure;
  private JsProperties jsProp;

  /**
   * A customizable ColorPicker.
   */
  public ColorPicker(JavaScriptObject prop) {

    this.jsProp = new JsProperties(prop);

    if (jsProp.defined(Const.ON_SELECT))
      addSelectListener(jsProp.getClosure(Const.ON_SELECT));

    addValueChangeHandler(new ValueChangeHandler<GWTCColorPicker>() {
      public void onValueChange(ValueChangeEvent<GWTCColorPicker> event) {
        if (jsClosure != null)
          jsClosure.onChange(getColor());
      }
    });

    if (jsProp.defined(Const.CLASS_NAME))
      super.setStyleName(jsProp.get(Const.CLASS_NAME));

    DatePicker.attachToDocument(this, Const.CONT_ID, jsProp);

  }

  /**
   * Show the modal dialog containing the color-picker centered in the page
   */
  @Override
  public void show() {
    super.show();
  }

  /**
   * Show the modal dialog containing the color-picker beside the  especified element.
   */
  public void show(JavaScriptObject object) {
    if (object != null) {
      try {
        Element elem = (com.google.gwt.user.client.Element)Element.as(object);
        super.setPopupPosition(elem.getAbsoluteLeft(), elem.getAbsoluteBottom());
      } catch (Exception e) {
      }
    }
    super.show();
  }

  /**
   * Hide the modal dialog containing the color-picker.
   */
  @Override
  public void hide() {
    super.hide();
  }

  /**
   *  Specify the JavaScript function which will be called when the user selects a color
   *  The function have to define a parameter used to return the color information 
   */
  public void addSelectListener(JsChangeClosure c) {
    this.jsClosure = c;
  }

  /**
   *  Returns the selected color
   */
  public String getColor() {
    return super.getColor();
  }

}
