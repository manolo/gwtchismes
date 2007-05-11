  /*
 */

package com.mirai.xmas.client.gwt.NH.client.controls;


import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.*;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.HtmlFormControlsGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;
import com.mirai.xmas.client.gwt.NH.client.controls.*;

public class ResStep3 extends Composite {

    BookingValueGWT reservation = null;
    String cancellationPolicy = "";
    String hotelAgreement = "";
    private HtmlFormControlsGWT agreementControlsMap = new HtmlFormControlsGWT();
    final CheckBox acceptPolicy = new CheckBox();
    
    
    I18nGWT strs = new I18nGWT();

    // Widgets
    private final FlexTable external_grid = new FlexTable();

    // Internationlizable widgets
    final Label lblTotalPriceValue = new Label("");
    private final Button NextButton = new Button("Next");
    private String currencySymbol = " \u20ac";
    private String currencyDecimalSeparator = null;
    private int currencyNumDecimals = 2;
    private ResSummaryInfo sinfo = new ResSummaryInfo();
    
    // Constructor
    public ResStep3() {
        initWidget(external_grid);
        external_grid.setStyleName("Step3_Container");
        NextButton.addStyleName("step3_NextButton");
        NextButton.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                if (nextStepListener != null)
                    nextStepListener.onClick(sender);
            }
        });
    }

    // Internationalization
    public void setLocale(I18nGWT strs) {
        this.strs = strs;
        sinfo.setLocale(strs);
        NextButton.setText(strs.getMsg("key.next"));
    }

    
    private void showPrereservationInformation() {
        external_grid.clear();
        if (reservation == null)
            return;
        
        FlexTable t = new FlexTable();
        t.setStyleName("step3_table");
        int idx = 0;
        
        t.setText(idx, 0, strs.getMsg("key.booking.details"));
        t.getRowFormatter().addStyleName(idx, "step3_details_title");
        idx++;
        
        sinfo.addStyleName("step3_sinfo");
        t.setWidget(idx, 0, sinfo);
        idx++;
        
        t.getRowFormatter().addStyleName(idx, "step3_row_pay_title");
        t.setText(idx, 0, strs.getMsg("key.payment.method"));
        idx++;

        t.getRowFormatter().addStyleName(idx, "step3_row_pay");
        HTMLPanel pnlPriceBoard = new HTMLPanel("<span id=step3_info_a></span><span id=step3_info_b></span>");
        t.setWidget(idx, 0, pnlPriceBoard);
        pnlPriceBoard.add(new Label(strs.getMsg("key.pay.in.hotel.a")), "step3_info_a");
        pnlPriceBoard.add(new Label(strs.getMsg("key.pay.in.hotel.b")), "step3_info_b");
        idx++;
        
        t.getRowFormatter().addStyleName(idx, "step3_row_policy_title");
        t.setText(idx, 0, strs.getMsg("key.cancellation.policy"));
        idx++;
        
        t.getRowFormatter().addStyleName(idx, "step3_row_policy_txt");
        t.setText(idx, 0, cancellationPolicy);
        idx++;
        
        t.getRowFormatter().addStyleName(idx, "step3_row_policy_accept");
        HorizontalPanel hpolicy = new HorizontalPanel();
        hpolicy.add(acceptPolicy);
        hpolicy.add(new Label(strs.getMsg("key.accept.policy")));
        t.setWidget(idx, 0, hpolicy);
        idx++;
        
        t.getRowFormatter().addStyleName(idx, "step3_row_agreement_title");
        t.setText(idx, 0, strs.getMsg("key.agreement"));
        idx++;
        
        t.getRowFormatter().addStyleName(idx, "step3_row_agreement_txt");
        FormPanel formHtmlAgreement = new FormPanel();
        formHtmlAgreement.add(new HTMLPanel("<form id=\"formHAgree\">" + hotelAgreement + "</form>"));
        t.setWidget(idx, 0, formHtmlAgreement);
        
        external_grid.setWidget(0, 0, t);
        external_grid.setWidget(1, 0, NextButton);
    }

    // Getters
    public String validateForm(){
        loadHotelAgreement(DOM.getElementById("formHAgree"));
        if ( cancellationPolicy != null && cancellationPolicy.length() > 0 ) {
            if (!this.acceptPolicy.isChecked()){
                return strs.getMsg("errors.cancellation.policy.agreement.required");
            }
        }
        if ( hotelAgreement != null && hotelAgreement.length() > 0 ) {
            String magree = agreementControlsMap.getControlValue("mirai_confidential_agreement");
            if (magree != null && (! magree.equalsIgnoreCase("yes") && ! magree.equalsIgnoreCase("true"))) {
                return strs.getMsg("errors.mirai.confidential.agreement.required");
            }
            String hagree = agreementControlsMap.getControlValue("hotel_confidential_agreement");
            if (hagree != null && (! hagree.equalsIgnoreCase("yes") && ! hagree.equalsIgnoreCase("true"))) {
                return strs.getMsg("errors.hotel.confidential.agreement.required");
            }
        }
        return null;
    }

    // Setters
    ClickListener nextStepListener = null;
    public void setNextListener(ClickListener listener) {
        this.nextStepListener = listener;
    }
    public void setResevation(BookingValueGWT r){
        reservation = r;
        sinfo.setReservation(reservation);
        showPrereservationInformation();
    }
    public void setCancellationPolice(String s){
        cancellationPolicy = s;
    }
    public void setHotelAgreement(String s){
        hotelAgreement = s;
    }
    public HtmlFormControlsGWT getAgreeControls(){
        return agreementControlsMap;
    }

    private native void loadHotelAgreement(Element form)
    /*-{
        if (!form) return;     
        var children = form.elements;
        if (children) {
          for (var i=0; i<children.length; i++) {
            var key = null;
            var value = null;
            var child = children[i];
            
            if (child.type == 'checkbox') {
              key = child.name;
              if (child.checked == true && child.value) {  
                value = child.value;
              } else {
                value = "";
              }
            }
            if (key) {
              this.@com.mirai.xmas.client.gwt.NH.client.controls.ResStep3::addAgreement(Ljava/lang/String;Ljava/lang/String;) (key, value);
            }
          }
        }
    }-*/;
    public void addAgreement(String key, String value) {
        System.out.println("Anadiendo hotelAgreement " + key + ", " + value);
        agreementControlsMap.addControlValue(key, value);
    }
    
}
