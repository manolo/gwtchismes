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

import java.util.Date;

import com.google.code.p.gwtchismes.client.GWTCDatePickerAbstract;


public class GWTCDatePickerCustom extends GWTCDatePickerAbstract {
    public GWTCDatePickerCustom() {
        initialize(CONFIG_DIALOG | CONFIG_BACKGROUND | CONFIG_FLAT_BUTTONS);
    }
    
    @Override
    public void drawDatePickerWidget() {
        //String buttonsLayout = "  x;;;;<->";
        String buttonsLayout = "< >;;;-  x";
        int monthsToDisplay = 6;
        int monthsPerColumn = 3;
        int monthsIncrement = 6;
        int maxMonthsInMenu = 32;
        
        configure(buttonsLayout, monthsToDisplay, monthsPerColumn, monthsIncrement, maxMonthsInMenu);
        
        setMinimalDate(increaseMonth(new Date(), -24));
        setMaximalDate(increaseMonth(new Date(), 24));
        addStyleName("GWTCDatePicker-custom");
    }

}

