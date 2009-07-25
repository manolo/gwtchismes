package com.google.code.p.gwtcsample.client;

import java.util.Map;

import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCHelper;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Widget;


public class CustomIntervalSelector extends GWTCIntervalSelector {
    
    public CustomIntervalSelector(int layoutType) {
        super(layoutType);
    }
    
    @Override
    public void drawIntervalWidget() {
        int calendarOptions = GWTCDatePicker.CONFIG_DIALOG |  GWTCDatePicker.CONFIG_BACKGROUND | GWTCDatePicker.CONFIG_LAYOUT_3 |GWTCDatePicker.CONFIG_FLAT_BUTTONS ;
        
        configureDatePickers(calendarOptions, "<->", 2, 2, 1, 24);
        
        checkinCalendar.addStyleName(checkinCalendar.getStylePrimaryName() + "-custom");

        checkoutCalendar.addStyleName(checkinCalendar.getStylePrimaryName() + "-custom");

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
        getGrid().setWidget(idx, 0, checkinInfo);

        HorizontalPanel checkoutInfo = new HorizontalPanel();
        checkoutInfo.addStyleName(CHECKOUT_ROW);
        checkoutInfo.add(checkoutDateValue);
        checkoutInfo.add(checkoutButton);
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