package com.mirai.xmas.client.gwt.NH.client.controls;

import java.util.Vector;

import com.google.code.p.gwtchismes.client.*;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.mirai.xmas.client.gwt.utils.client.HelperClientGwt;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;

public class ResStep6 extends Composite {

    private BookingValueGWT reservation = null;
    private Vector reservationAttributes = null;
    private I18nGWT strs = new I18nGWT();
    private ResDetailsInfo rdetails = new ResDetailsInfo(ResDetailsInfo.LAYOUT_NOCODE_NOPOLICY);
    private GWTCPrint printButton = new GWTCPrint();


    // Widgets
    private final FlexTable external_grid = new FlexTable();

    // Constructor
    public ResStep6() {
        initWidget(external_grid);
        external_grid.setStyleName("Step6_Container");
    }

    // Internationalization
    public void setLocale(I18nGWT strs) {
        this.strs = strs;
        rdetails.setLocale(strs);
        printButton.setText(strs.getMsg("key.print"));
    }

    private void showPrereservationInformation() {
        external_grid.clear();

        if (reservation == null)
            return;

        FlexTable t = new FlexTable();
        t.setStyleName("step6_table");
        int idx = 0;

        t.getRowFormatter().addStyleName(idx, "step6_ok_title");
        t.setText(idx, 0, strs.getMsg("key.important"));
        idx++;
        t.getRowFormatter().addStyleName(idx, "step6_cancelcode");
        t.setText(idx, 0, strs.getMsg("key.ok.reservation.code") + " " + HelperClientGwt.IdReservationToFull(reservation.getIdReservationMirai()));
        idx++;
        t.getRowFormatter().addStyleName(idx, "step6_cancelcode");
        t.setText(idx, 0, strs.getMsg("key.ok.cancel.code") + " " + reservation.getCancelCode());
        idx++;
        t.getRowFormatter().addStyleName(idx, "step6_payment");
        HTMLPanel pnlPriceBoard = new HTMLPanel("<span id=step3_info_a></span><span id=step3_info_b></span>");
        t.setWidget(idx, 0, pnlPriceBoard);
        pnlPriceBoard.add(new Label(strs.getMsg("key.pay.in.hotel.a")), "step3_info_a");
        pnlPriceBoard.add(new Label(strs.getMsg("key.pay.in.hotel.b")), "step3_info_b");
        idx++;
        t.getRowFormatter().addStyleName(idx, "step6_policy");
        t.setText(idx, 0, reservation.getCancellationPolicyI18n());
        idx++;
        t.getRowFormatter().addStyleName(idx, "step6_separator");
        t.setText(idx, 0, " ");
        idx++;
        t.getRowFormatter().addStyleName(idx, "step6_details_title");
        t.setText(idx, 0, strs.getMsg("key.booking.details"));
        idx++;
        t.setWidget(idx, 0, rdetails);
        external_grid.setWidget(0, 0, t);
        
        printButton.addStyleName("step6_print_button");
        external_grid.setWidget(1, 0, printButton);
    }

    // Setters
    ClickListener nextStepListener = null;
    public void setNextListener(ClickListener listener) {
        this.nextStepListener = listener;
    }
    public void setResevation(BookingValueGWT r) {
        reservation = r;
        rdetails.setReservation(r);
        showPrereservationInformation();
    }

    public void setReservationAttributes(Vector attributes) {
        reservationAttributes = attributes;
        rdetails.setReservationAttributes(reservationAttributes);
    }
}
