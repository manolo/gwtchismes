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

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Utility methods
 */
@Export
@ExportPackage("jsc")
public class Utils implements Exportable {

  private static native JavaScriptObject timeToJsObject(double time) /*-{
    return new Date(time);
  }-*/;

  protected static JavaScriptObject dateToJsObject(Date d) {
    return Utils.timeToJsObject(d.getTime());
  }

  protected static Date doubleToDate(double time) {
    return new Date((long) time);
  }

  protected static native double jsObjectToTime(JavaScriptObject d) /*-{
    return (d && d.getTime) ? d.getTime(): 0;
  }-*/;

  /**
  * Returns a formated and internationalizated date representation.
  *
  * format parameter has these symbols:
  *   Year:   yy(09) yyyy(2009)
  *   Month:  MM(01) MMM(Jan) MMM(January)
  *   Day:    dd(01)
  *   WeekDay E(M) EE(Mo) EEE(Mon) EEEE(Monday)
  *
  **/
  public static final String formatDate(String format, JavaScriptObject date) {
    return DatePicker.formatDate(format, doubleToDate(jsObjectToTime(date)));
  }

  /**
  * Camelizes css names: margin-left -> marginLeft
  **/
  public static native String camelize(String s)/*-{
    return s.toLowerCase().replace(/-([a-z])/ig, function(a, c){return c.toUpperCase()} );
  }-*/;

  /**
  * Parses a string representation of a date and returns a date object
  **/
  public static final JavaScriptObject parseDate(String format, String dateStr) {
    return Utils.dateToJsObject(DatePicker.parseDate(format, dateStr));
  }

}
