package com.mirai.xmas.client.gwt.NH.client.controls;

import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.mirai.xmas.client.gwt.utils.client.HelperClientGwt;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.BookingTypeGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;

public class ResSummaryInfo  extends Composite {

    BookingValueGWT reservation = null;
    I18nGWT strs = new I18nGWT();
    
    HorizontalPanel infopanel = new HorizontalPanel();
    public ResSummaryInfo() {
        initWidget(infopanel);
    }
    public void redraw(){
        if (reservation==null)
            return;
        infopanel.clear();
        FlexTable tdates = new FlexTable();
        FlexTable tprices = new FlexTable();
        infopanel.add(tdates);
        infopanel.add(tprices);
        tdates.setStyleName("sinfo_table_dates");
        tprices.setStyleName("sinfo_table_prices");
        
        tdates.getRowFormatter().addStyleName(0, "sinfo_row_checkin");
        tdates.getRowFormatter().addStyleName(1, "sinfo_row_checkout");
        tdates.getRowFormatter().addStyleName(2, "sinfo_row_checknights");
        tdates.setWidget(0, 0,new Label(strs.getMsg("key.checkin")));
        tdates.setText(0, 1,GWTCDatePicker.formatDate("ddd dd MMM", reservation.getCheckinDate(), strs.months, strs.days));
        tdates.setWidget(1, 0,new Label(strs.getMsg("key.checkout")));
        tdates.setText(1, 1,GWTCDatePicker.formatDate("ddd dd MMM", reservation.getCheckoutDate(), strs.months, strs.days));
        tdates.setWidget(2, 0,new Label(strs.getMsg("key.nights")));
        tdates.setText(2, 1, " " + GWTCDatePicker.compareDate(reservation.getCheckinDate(), reservation.getCheckoutDate()));
        
        tprices.getRowFormatter().addStyleName(0, "sinfo_prices_titles");
        tprices.setText(0, 0, strs.getMsg("key.type.room"));
        tprices.setText(0, 1, strs.getMsg("key.occupation"));
        tprices.setText(0, 2, strs.getMsg("key.amount"));
        tprices.setText(0, 3, strs.getMsg("key.price"));
        int numRoomTypes = reservation.getReservationLines().size();
        int currencyNumDecimals = reservation.getCurrencyNumDecimals();
        String currencySymbol = reservation.getCurrencySymbol();
        String currencyDecimalSeparator = reservation.getCurrencyDecimalSeparator();
        int idx = 1;
        for (int roomIndex = 1; roomIndex <= numRoomTypes; roomIndex++, idx ++) {
            BookingTypeGWT resLine = (BookingTypeGWT)reservation.getReservationLines().get(roomIndex - 1);
            tprices.setText(idx, 0, strs.getMsg(resLine.getRoomTypeName()));
            tprices.setText(idx, 1, strs.getMsg("key.occupation_" + resLine.getOccupation().getNumAdults()));
            tprices.setText(idx, 2, strs.getMsg(String.valueOf(resLine.getAmountToReserve())));
            tprices.setText(idx, 3, HelperClientGwt.getPriceWithDecimals(resLine.getTotalPricePerRoomAfterTaxLong().longValue() * resLine.getAmountToReserve(), currencyNumDecimals, currencyDecimalSeparator) + " " + currencySymbol);
            tprices.getCellFormatter().addStyleName(idx, 3, "sinfo_price");
        }
        tprices.setText(idx, 0, strs.getMsg("key.total.price") + ", " + strs.getMsg("key.tax.included"));
        tprices.setText(idx, 1, HelperClientGwt.getPriceWithDecimals(reservation.getTotalPriceAfterTaxLong().longValue(), currencyNumDecimals, currencyDecimalSeparator) + " " + currencySymbol);
        tprices.getCellFormatter().addStyleName(idx, 1, "sinfo_price");
        tprices.getRowFormatter().addStyleName(idx, "sinfo_prices_total");
        tprices.getFlexCellFormatter().setColSpan(idx, 0, 3);
        
    }
    public void setReservation(BookingValueGWT r){
        reservation = r;
        redraw();
    }
    public void setLocale(I18nGWT strs) {
        this.strs = strs;
        redraw();
    }
}
