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

package com.google.code.p.gwtcsample.client;

import java.util.Map;

import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class CustomIntervalSelector extends GWTCIntervalSelector {
  private static int customOptions = GWTCDatePicker.CONFIG_DIALOG | GWTCDatePicker.CONFIG_BACKGROUND | GWTCDatePicker.CONFIG_LAYOUT_3 | GWTCDatePicker.CONFIG_FLAT_BUTTONS;

  public CustomIntervalSelector() {
    super(1);
  }
  
  @Override
  public void configureDatePickers(int options) {
    super.configureDatePickers(customOptions);
    checkinCalendar.addStyleDependentName("custom");
    checkoutCalendar.addStyleDependentName("custom");
  }

  @Override
  public void drawIntervalWidget() {
    configureDatePickers(customOptions, "< m >;;;- x;", 2, 2, 2, 24);
    addStyleDependentName("custom");
    
    showWeekNumbers(true);
    addValueChangeHandler(new ValueChangeHandler<GWTCIntervalSelector>() {
      public void onValueChange(ValueChangeEvent<GWTCIntervalSelector> event) {
        nightsLabel.setVisible(true);
        nightsValue.setVisible(true);
      }
    });

    int idx = 0;
    getGrid().setWidget(idx, 0, checkinLabel);
    getGrid().setWidget(idx, 1, checkoutLabel);
    getGrid().setWidget(idx, 2, nightsLabel);
    nightsLabel.addStyleName(LABELS);

    idx++;
    HorizontalPanel checkinInfo = new HorizontalPanel();
    checkinInfo.addStyleName(CHECKIN_ROW);
    checkinInfo.add(checkinDateValue);
    checkinInfo.add(checkinButton);
    checkinInfo.setCellHorizontalAlignment(checkinButton, HasHorizontalAlignment.ALIGN_RIGHT);
    
    getGrid().setWidget(idx, 0, checkinInfo);

    HorizontalPanel checkoutInfo = new HorizontalPanel();
    checkoutInfo.addStyleName(CHECKOUT_ROW);
    checkoutInfo.add(checkoutDateValue);
    checkoutInfo.add(checkoutButton);
    checkoutInfo.setCellHorizontalAlignment(checkoutButton, HasHorizontalAlignment.ALIGN_RIGHT);
    checkoutDateValue.addClickHandler(clickListener);

    getGrid().setWidget(idx, 1, checkoutInfo);
    getGrid().setWidget(idx, 2, nightsValue);

    super.setDatePickerPosition(PICKER_POSITION_NEAR_DATEVALUES);

    nightsLabel.setVisible(false);
    nightsValue.setVisible(false);
  }

  @Override
  public void setI18nMessages(Map<String, String> keys) {
    super.setI18nMessages(keys);
    checkinCalendar.setCaptionText("");
    checkoutCalendar.setCaptionText("");
    checkinButton.setText("");
    checkoutButton.setText("");
    checkoutDateValue.setText("- - -");
    checkinDateValue.setText("- - -");
  }
}