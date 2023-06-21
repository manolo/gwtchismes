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

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;

import org.timepedia.exporter.client.Exporter;

/**
 * @author Manuel Carrasco Moñino 
 * <h3>Class description</h3> 
 * 
 * This class exports the gwtChismes collection into a native javascript library.
 */
public class JsChismes implements EntryPoint {
  public void onModuleLoad() {
    ((Exporter) GWT.create(Const.class)).export();
    ((Exporter) GWT.create(Utils.class)).export();
    ((Exporter) GWT.create(DatePicker.class)).export();
    ((Exporter) GWT.create(IntervalSelector.class)).export();
    ((Exporter) GWT.create(WeekSelector.class)).export();
    ((Exporter) GWT.create(Button.class)).export();
    ((Exporter) GWT.create(Wait.class)).export();
    ((Exporter) GWT.create(Alert.class)).export();
    ((Exporter) GWT.create(Popup.class)).export();
    ((Exporter) GWT.create(Box.class)).export();
    ((Exporter) GWT.create(Progress.class)).export();
    ((Exporter) GWT.create(Editor.class)).export();
    ((Exporter) GWT.create(ColorPicker.class)).export();
    onLoadImpl();
  }

  private native void onLoadImpl() /*-{
    if ($wnd.jscOnLoad && typeof $wnd.jscOnLoad == 'function') $wnd.jscOnLoad();
  }-*/;
}
