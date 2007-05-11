/*
 */

package com.mirai.xmas.client.gwt.NH.client.controls;

import java.util.Vector;

import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.mirai.xmas.client.gwt.utils.client.UtilsClientValidators;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.HtmlFormControlsGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;

public class ResStep4 extends Composite {

    BookingValueGWT reservation = null;
    Vector htmlAttributesVector = new Vector();
    Vector countriesVector = new Vector();
    String cancellationPolicy = "";
    private HtmlFormControlsGWT htmlControlsMap = new HtmlFormControlsGWT();

    I18nGWT strs = new I18nGWT();

    // Widgets
    private final FlexTable external_grid = new FlexTable();

    // Internationlizable widgets
    private final Button NextButton = new Button("Next");

    // Constructor
    public ResStep4() {
        initWidget(external_grid);
        external_grid.setStyleName("Step4_Container");
        NextButton.addStyleName("step4_NextButton");
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
        NextButton.setText(strs.getMsg("key.next"));
    }

    final TextBox txtClientFirstName = new TextBox();
    final TextBox txtClientLastName = new TextBox();
    final TextBox txtClientEmail = new TextBox();
    final TextBox txtClientPhone = new TextBox();
    final TextBox txtClientFax = new TextBox();
    final TextBox txtClientCompany = new TextBox();
    final TextArea txtClientComments = new TextArea();
    private void showPrereservationInformation() {
        external_grid.clear();
        if (reservation == null)
            return;

        FlexTable t = new FlexTable();
        t.setStyleName("step4_table");

        int idx = 0;
        t.setText(idx, 0, strs.getMsg("key.guest.details"));
        t.getFlexCellFormatter().setColSpan(idx, 0, 2);
        t.getRowFormatter().addStyleName(idx, "step4_row_title");
        idx++;
        t.setText(idx, 0, strs.getMsg("key.mandatory.fields.help"));
        t.getFlexCellFormatter().setColSpan(idx, 0, 2);
        t.getRowFormatter().addStyleName(idx, "mandatory_field");
        idx++;
        
        t.getRowFormatter().addStyleName(idx, "mandatory_field");
        t.setText(idx, 0, strs.getMsg("key.firstname"));
        t.setWidget(idx, 1, txtClientFirstName);
        idx++;
        t.getRowFormatter().addStyleName(idx, "mandatory_field");
        t.setText(idx, 0, strs.getMsg("key.lastname"));
        t.setWidget(idx, 1, txtClientLastName);
        idx++;
        t.getRowFormatter().addStyleName(idx, "mandatory_field");
        t.setText(idx, 0, strs.getMsg("key.e-mail"));
        t.setWidget(idx, 1, txtClientEmail);
        idx++;
        t.getRowFormatter().addStyleName(idx, "mandatory_field");
        t.setText(idx, 0, strs.getMsg("key.phone"));
        t.setWidget(idx, 1, txtClientPhone);
        idx++;
        t.setText(idx, 0, strs.getMsg("key.fax"));
        t.setWidget(idx, 1, txtClientFax);
        idx++;
        t.setText(idx, 0, strs.getMsg("key.company"));
        t.setWidget(idx, 1, txtClientCompany);

        if (htmlAttributesVector != null && htmlAttributesVector.size() > 0) {
            idx++;
            FormPanel formHtmlAttributes = new FormPanel();
            t.setText(idx, 0, strs.getMsg("key.desired.services"));
            t.setWidget(idx, 1, formHtmlAttributes);
            {
                String attributesHtml = "";
                attributesHtml += "<form id=\"formAttrHTML\" class=\"step4_html_attrs\">";
                for (int htmlAttIndex = 0; htmlAttIndex < htmlAttributesVector.size(); htmlAttIndex++) {
                    String htmlAttribute = (String) htmlAttributesVector.get(htmlAttIndex);
                    attributesHtml += htmlAttribute + "<br/>";
                }
                attributesHtml += "</form>";
                HTMLPanel pnlHtml = new HTMLPanel(attributesHtml);
                formHtmlAttributes.add(pnlHtml);
            }
        }

        idx++;
        t.setText(idx, 0, strs.getMsg("key.comments"));
        t.setWidget(idx, 1, txtClientComments);

        for (int i = 2; i <= idx; i++) {
            t.getCellFormatter().addStyleName(i, 0, "step4_col_names");
            t.getCellFormatter().addStyleName(i, 1, "step4_col_inputs");
        }

        external_grid.setWidget(0, 0, t);
        external_grid.setWidget(1, 0, NextButton);
    }

    public String validateForm() {
        loadHtmlAttributes(DOM.getElementById("formAttrHTML"));
        if (txtClientFirstName.getText().trim().length() < 2) {
            txtClientFirstName.setFocus(true);
            return (strs.getMsg("errors.firstname.required"));
        }
        if (txtClientLastName.getText().trim().length() < 2) {
            txtClientLastName.setFocus(true);
            return (strs.getMsg("errors.lastname.required"));
        }
        String email = txtClientEmail.getText().trim();
        if (!UtilsClientValidators.isValidEmail(email)) {
            txtClientEmail.setFocus(true);
            return (strs.getMsg("errors.email.required"));
        }
        String phone = txtClientPhone.getText().trim();
        if (!UtilsClientValidators.isValidPhone(phone)) {
            txtClientPhone.setFocus(true);
            return (strs.getMsg("errors.phone.required"));
        }
        String fax = txtClientPhone.getText().trim();
        if (fax.length() > 0 && !UtilsClientValidators.isValidPhone(phone)) {
            fax = "";
            txtClientFax.setText(fax);
        }
        // Anadir los valores del usuario al objeto de reserva
        reservation.setClientFirstName(txtClientFirstName.getText());
        reservation.setClientLastName(txtClientLastName.getText());
        reservation.setClientEmail(email);
        reservation.setClientPhone(phone);
        reservation.setClientFax(fax);
        reservation.setClientCompany(txtClientCompany.getText());
        // reservation.setClientCountry(cboClientCountry.getValue(cboClientCountry.getSelectedIndex()));
        reservation.setClientComments(txtClientComments.getText());
        reservation.setGuarantee(new Integer(1));
        return null;
    }

    // Setters
    ClickListener nextStepListener = null;

    public void setNextListener(ClickListener listener) {
        this.nextStepListener = listener;
    }
    public void setResevation(BookingValueGWT r) {
        reservation = r;
        showPrereservationInformation();
    }
    public void setHtmlAttrs(Vector v) {
        htmlAttributesVector = v;
    }
    public void setCountries(Vector v) {
        countriesVector = v;
    }
    public void setCancellationPolice(String s) {
        cancellationPolicy = s;
    }

    public HtmlFormControlsGWT getHtmlControls() {
        return htmlControlsMap;
    }

    // Methods
    private native void loadHtmlAttributes(Element form)
    /*-{
     if (!form) return;
     var children = form.elements;
     if (children) {
     for (var i=0; i<children.length; i++) {
     var key = null;
     var value = null;
     var child = children[i];
     if (child.type == 'select-one') {
     if (child.value) {
     key = child.name;
     value = child.value;
     }
     } else if (child.type == 'checkbox') {
     if (child.checked == true && child.value) {
     key = child.name;
     value = child.value;
     }
     } else if (child.type == 'radio') {
     if (child.checked == true && child.value) {
     key = child.name;
     value = child.value;
     }
     } else if (child.type == 'text') {
     if (child.value) {
     key = child.name;
     value = child.value;
     }
     }
     if (key) {
     this.@com.mirai.xmas.client.gwt.NH.client.controls.ResStep4::addHtmlAttribute(Ljava/lang/String;Ljava/lang/String;) (key, value);
     }
     }
     }
     }-*/;
    public void addHtmlAttribute(String key, String value) {
        System.out.println("Anadiendo html attribute: " + key + ", " + value);
        htmlControlsMap.addControlValue(key, value);
    }
}
