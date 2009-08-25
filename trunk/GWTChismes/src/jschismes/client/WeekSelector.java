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

import java.util.Date;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.code.p.gwtchismes.client.GWTCWeekSelector;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;

/**
 * An Week selector.
 */
@Export
@ExportPackage("jsc")
public class WeekSelector extends GWTCWeekSelector implements Exportable {

  private JsChangeClosure jsClosure;
  private JsProperties jsProp;

  public WeekSelector(JavaScriptObject prop) {

    this.jsProp = new JsProperties(prop);

    int numberOfMonths = jsProp.getInt(Const.NUM_MONTHS, 0);
    int monthColumns = jsProp.getInt(Const.NUM_COLUMS, 3);
    int monthSelector = jsProp.getInt(Const.MONTH_RANGE, 12);
    int monthStep = jsProp.getInt(Const.STEP_MONTHS, 1);
    String layoutButtons = jsProp.defined(Const.BUTTONS_LAYOUT) ? jsProp.get(Const.BUTTONS_LAYOUT) : ";;;- x;;;p<;n>";

    int cfg = DatePicker.CONFIG_DIALOG;
    if (!jsProp.getBoolean("autohide", true))
      cfg |= DatePicker.CONFIG_NO_AUTOHIDE;
    if (!jsProp.getBoolean("animation", true))
      cfg |= DatePicker.CONFIG_NO_ANIMATION;
    if (jsProp.getBoolean("glassPanel"))
      cfg |= DatePicker.CONFIG_BACKGROUND;
    if (jsProp.getBoolean("flatButtons"))
      cfg |= DatePicker.CONFIG_FLAT_BUTTONS;
    if (jsProp.getBoolean("standardButtons"))
      cfg |= DatePicker.CONFIG_STANDARD_BUTTONS;
    
    setMinimalDate(GWTCDatePicker.add(new Date(), jsProp.get(Const.MINIMAL)));
    setMaximalDate(GWTCDatePicker.add(new Date(), jsProp.get(Const.MAXIMAL)));

    super.configureDatePickers(cfg, layoutButtons, numberOfMonths, monthColumns, monthStep, monthSelector);

    if (jsProp.defined(Const.CLASS_NAME))
      super.setStyleName(jsProp.get(Const.CLASS_NAME));

    if (jsProp.defined(Const.ON_SELECT))
      addSelectListener(jsProp.getClosure(Const.ON_SELECT));

    addValueChangeHandler(new ValueChangeHandler<GWTCIntervalSelector>() {
      public void onValueChange(ValueChangeEvent<GWTCIntervalSelector> event) {
        if (jsClosure != null)
          jsClosure.onChange(data());
      }
    });

    super.setI18nMessages(DatePicker.regionalToHash(Const.REGIONAL, jsProp));

    DatePicker.attachToDocument(this, Const.CONT_ID, jsProp);
  }

  /**
   *  Returns the initial date of the selected interval
   */
  public JavaScriptObject getInit() {
    return Utils.dateToJsObject(getInitDate());
  }

  /**
   *  Returns the final date of the selected interval
   */
  public JavaScriptObject getEnd() {
    return Utils.dateToJsObject(getEndDate());
  }

  /**
   *  Returns the number of nights in the interval
   */
  public int getNights() {
    return super.getNights();
  }

  /**
   *  Specify the JavaScript function which will be called when the user selects a date o changes the number of days
   *  The function have to define the parameter data used to return the datepicker information 
   */
  public void addSelectListener(JsChangeClosure c) {
    this.jsClosure = c;
  }

  /**
   * Returns a JavaScript hash structure with this information:
   * data.init     // The start date that has selected the userhj
   * data.end      // The end date selected by the user
   * data.maximal  // The maximal date allowed to select  
   * data.minimal  // The minimal date allowed to select
   * data.week  // The selected week number
   */
  public JavaScriptObject data() {
    return getDataImpl(getInitDate().getTime(), getEndDate().getTime(), getMinimalDate().getTime(), getMaximalDate().getTime(), getSelectedWeek());
  }

  private native JavaScriptObject getDataImpl(double init, double end, double minimal, double maximal, int week) /*-{
    return {
       init: new Date(init),
       end: new Date(end),
       minimal: new Date(minimal),
       maximal: new Date(maximal),
       week: week 
    };
  }-*/;
}
