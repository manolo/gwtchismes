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

import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Timer;

/**
 * Progress bar that has a time calculation based on the data provided when is updated.
 */
@Export
@ExportPackage("jsc")
public class Progress extends GWTCProgress implements Exportable {

  private JsProperties jsProp;

  public Progress(JavaScriptObject prop) {
    this.jsProp = new JsProperties(prop);

    int cfg = DatePicker.CONFIG_DIALOG;
    if (jsProp.getBoolean(Const.TIME_REMAINING, true))
      cfg |= SHOW_TIME_REMAINING;
    if (jsProp.getBoolean(Const.TEXT))
      cfg |= SHOW_TEXT;
    if ("left".equals(jsProp.get(Const.TEXT)))
      cfg |= SHOW_LEFT_TEXT;
    if (jsProp.getBoolean(Const.NUMBERS))
      cfg |= SHOW_NUMBERS;
    if (jsProp.getBoolean(Const.DIALOG))
      cfg |= SHOW_AS_DIALOG;

    int elements = jsProp.getInt(Const.ELEMENTS, 30);

    initialize(cfg, elements);

    if (!jsProp.getBoolean(Const.DIALOG))
      DatePicker.attachToDocument(this, Const.CONT_ID, jsProp);

    if (jsProp.defined(Const.HOURS_MSG))
      super.setHoursMessage(jsProp.get(Const.HOURS_MSG));
    if (jsProp.defined(Const.MINUTES_MSG))
      super.setHoursMessage(jsProp.get(Const.MINUTES_MSG));
    if (jsProp.defined(Const.SECONDS_MSG))
      super.setHoursMessage(jsProp.get(Const.SECONDS_MSG));
    if (jsProp.defined(Const.PERCENT_MSG))
      super.setPercentMessage(jsProp.get(Const.PERCENT_MSG));
    if (jsProp.defined(Const.TOTAL_MSG))
      super.setTotalMessage(jsProp.get(Const.TOTAL_MSG));

    if (jsProp.defined(Const.CLASS_NAME))
      super.setStyleName(jsProp.get(Const.CLASS_NAME));

  }

  /**
   * Set the description text.
   */
  public void setText(String text) {
    super.setText(text);
  }

  /**
   * Show the modal dialog containing the progress when it is configured as a dialog
   */
  public void show() {
    super.show();
  }

  /**
   * Show the modal dialog containing the progress bar, and configures a timer to automatically update the progress.
   */
  public void show(int seconds) {
    if (seconds < 1)
      return;
    int periodMillis = seconds * 1000 / pTimer.steps;
    Timer t = new pTimer(this);
    t.scheduleRepeating(periodMillis);
  }

  /**
   * Hide the modal dialog
   */
  public void hide() {
    super.hide();
  }

  /**
   * Set the progress. Remaining time and percent is calculated automatically 
   * based in these values and the time period between calls to this method.
   */
  public void setProgress(int done, int total) {
    super.setProgress(done, total);
  }

  /**
   * Return the container element, useful for moving it in the DOM
   */
  public Element getElement() {
    return super.getElement();
  }

  static class pTimer extends Timer {
    int done = 0;
    int total = 100;
    public static final int steps = 15;
    GWTCProgress prgBar;

    public pTimer(GWTCProgress p) {
      prgBar = p;
      run();
    }

    /**
     * @not
     */
    public void run() {
      if (done == 0) {
        prgBar.show();
      }
      if (done >= total) {
        done = 0;
        cancel();
        prgBar.hide();
      }
      prgBar.setProgress(done, total);
      done += (total / steps);
    }
  }

}
