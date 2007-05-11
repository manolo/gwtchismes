/*
 */

package com.mirai.xmas.client.gwt.NH.client.controls;

import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.gwt.user.client.ui.*;
import com.mirai.xmas.client.gwt.utils.client.UtilsClientValidators;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;

public class CancelLogin extends Composite  {

    private GWTCButton nextButton = new GWTCButton("Next"); 
    I18nGWT strs = new I18nGWT();

    private final FlexTable grd = new FlexTable();
    private TextBox txtCancelCode = new TextBox();
    private TextBox txtReservCode = new TextBox();
    
	public CancelLogin() {
		initWidget(grd);
	}
    public void paint() {
        grd.clear();
        grd.setWidget(1, 0, nextButton);

        FlexTable t;
        t = new FlexTable();
        t.setStyleName("cancel_login_box");
        t.getFlexCellFormatter().setColSpan(0, 0, 2);
        t.getRowFormatter().addStyleName(0, "cancel_login_box_row_title");
        t.setText(0, 0, strs.getMsg("key.cancel.reservation"));

        t.setText(1, 0, strs.getMsg("key.enter.reservation.code"));
        t.getCellFormatter().addStyleName(1, 0, "cancel_login_box_label");
        t.setWidget(1, 1, txtReservCode);
        t.getCellFormatter().addStyleName(1, 1, "cancel_login_box_text");
        
        t.setText(2, 0, strs.getMsg("key.enter.cancel.code"));
        t.getCellFormatter().addStyleName(2, 0, "cancel_login_box_label");
        t.setWidget(2, 1, txtCancelCode);
        t.getCellFormatter().addStyleName(2, 1, "cancel_login_box_text");
        
        grd.setWidget(0, 0, t);
    }
    
    public String validateForm() {
        if (!UtilsClientValidators.isValidXMASCode(txtReservCode.getText())){
            txtReservCode.setFocus(true);
            return(strs.getMsg("errors.invalid.reservation.code"));
        }
        if (!UtilsClientValidators.isValidCancelCode(txtCancelCode.getText())){
            txtCancelCode.setFocus(true);
            return(strs.getMsg("errors.invalid.cancel.code"));
        }
        return null;
    }
    
    public void setLocale(I18nGWT strs) {
        this.strs = strs;
        nextButton.setText(strs.getMsg("key.next"));
        paint();
    }
    
    public Long getReserveCode(){
        return Long.valueOf(UtilsClientValidators.getDigitsOnly(txtReservCode.getText()));
    }
    public Integer getCancelCode(){
        return Integer.valueOf(UtilsClientValidators.getDigitsOnly(txtCancelCode.getText()));
    }

    public void setNextListener(ClickListener listener) {
        nextButton.addClickListener(listener);
    }
}
