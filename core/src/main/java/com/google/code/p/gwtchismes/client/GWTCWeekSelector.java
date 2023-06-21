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

import java.util.Map;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;

/**
 *<p>
 *<b>A widget to select an entire week. It uses GWTCIntervalSelector its parent class</b>
 *</p>
 * @author Manuel Carrasco Moñino 
 * 
 * <h3>Example</h3>
 * <pre>
    WeekSelector weekInterval = new WeekSelector();
    weekInterval.setMinimalDate("-4y");
    weekInterval.setMaximalDate("-4y");
    private HashMap strs = new HashMap();
    strs.put("key.calendar.checkin.title", "Week selector");
    strs.put("key.from", "from");
    strs.put("key.to", "to");
    strs.put("key.select.week", "Select a week");
    weekInterval.setI18nMessages(strs);
   
 * </pre>
 * 
 * <h3>CSS Style Rules</h3>
 * <ul>
 * <li>.GWTCIntervalSelector { primary style for the main container}</li>
 * <li>.GWTCIntervalSelector-week { secondary style for the main container }</li>
 * <li>.GWTCIntervalGrid { Style for the grid that contains all elements }</li>
 * <li>.checkinPicker { DataPicker for check-in selection } </li>
 * <li>.checkinButton { checkinButton } </li>
 * </ul>
 * </p>
 */
public class GWTCWeekSelector extends GWTCIntervalSelector {
  
  public GWTCWeekSelector() {
    super(0);
  }
  
  public int getSelectedWeek(){
    return GWTCSimpleDatePicker.getWeekOfYear(getInitDate());
  }
  
  @Override
  public void setNights(int n){
    super.setNights(6);
  }

  @Override
  public void configureDatePickers(int options, String buttonsLayout, int months, int monthsPerRow, int increment, int monthsInSelector) {
    super.configureDatePickers(options, buttonsLayout, months, monthsPerRow, increment, monthsInSelector);
    checkinCalendar.showWeekNumbers(true);
    checkinCalendar.clickOnWeekNumbers(true);
    checkinCalendar.refresh();
  }
  
  @Override
  public void setI18nMessages(Map<String, String> keys) {
    super.setI18nMessages(keys);
    if (keys.get("key.select.week") != null)
      getGrid().setText(0, 0, keys.get("key.select.week"));
    if (keys.get("key.from") != null)
      getGrid().setText(1, 0, keys.get("key.from"));
    if (keys.get("key.to") != null)
      getGrid().setText(1, 2, keys.get("key.to"));
  }

  private void adjustSelectedDateToWeekStart() {
    setInitDate(GWTCSimpleDatePicker.getFirstDayOfWeek(getInitDate()));
    setNights(6);
  }

  @Override
  public void drawIntervalWidget() {

    configureDatePickers(GWTCDatePicker.CONFIG_BACKGROUND, ";;;- x;;;p<;n>", 2, 2, 2, 24);
    setMaxdays(4);
    addStyleDependentName("week");
    
    super.addValueChangeHandler(new ValueChangeHandler<GWTCIntervalSelector>() {
      public void onValueChange(ValueChangeEvent<GWTCIntervalSelector> event) {
        adjustSelectedDateToWeekStart();
      }
    });

    getGrid().setText(0, 0, "Select week");
    getGrid().getFlexCellFormatter().setColSpan(0, 0, 5);
    
    getGrid().setText(1, 0, "From:");
    getGrid().setWidget(1, 1, checkinDateValue);
    checkinDateValue.addStyleName(CHECKIN_ROW);

    getGrid().setText(1, 2, "To:");
    getGrid().setWidget(1, 3, checkoutDateValue);
    checkoutDateValue.addStyleName(CHECKIN_ROW);
    checkoutDateValue.addClickHandler(new ClickHandler() {
      public void onClick(ClickEvent event) {
        checkinButton.click();
      }
    });
    
    getGrid().setWidget(1, 4, checkinButton);
    
    setDateFormat("MMM dd, yyyy (ddd)");

    super.setDatePickerPosition(PICKER_POSITION_NEAR_DATEVALUES);
    adjustSelectedDateToWeekStart();

  }
  

}