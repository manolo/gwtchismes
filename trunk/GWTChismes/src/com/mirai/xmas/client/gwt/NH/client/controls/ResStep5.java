/*
 */

package com.mirai.xmas.client.gwt.NH.client.controls;

import java.util.HashMap;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Frame;
import com.google.gwt.user.client.ui.Widget;
import com.mirai.xmas.client.gwt.utils.client.UtilsClientValidators;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.CardGuaranteeGWT;
import com.mirai.xmas.client.gwt.values.client.CreditCardTypeGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;

public class ResStep5 extends Composite {

    BookingValueGWT reservation = null;

    CardGuaranteeGWT card = new CardGuaranteeGWT();

    private HashMap creditCardsTypes = new HashMap();

    I18nGWT strs = new I18nGWT();

    // Widgets
    private final FlexTable external_grid = new FlexTable();

    final TextBox txtCardName = new TextBox();

    final TextBox txtCardNumber = new TextBox();

    final TextBox txtCvv2 = new TextBox();

    ListBox cardsListBox = new ListBox();

    ListBox monthsListBox = new ListBox();

    ListBox yearsListBox = new ListBox();
    
    //HTML certLink = new HTML("<script src=\"https://siteseal.thawte.com/cgi/server/thawte_seal_generator.exe\"></script>");
    Frame certFrame = new Frame("NHCert.html");
    
    // Internationlizable widgets
    private final Button NextButton = new Button("Next");

    // Constructor
    public ResStep5() {
        initWidget(external_grid);
        external_grid.setStyleName("Step5_Container");
        NextButton.addStyleName("step5_NextButton");
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
        NextButton.setText(strs.getMsg("key.do.reserve"));
    }

    private void showPrereservationInformation() {
        if (reservation == null)
            return;

        cardsListBox = new ListBox();
        Object[] creditCardsArr = creditCardsTypes.values().toArray();
        cardsListBox.addItem("", "");
        for (int i = 1; i < creditCardsArr.length; i++) {
            CreditCardTypeGWT credCard = (CreditCardTypeGWT) creditCardsArr[i];
            cardsListBox.addItem(credCard.getCardTypeName(), credCard.getCardTypeCode());
        }
        cardsListBox.addStyleName("step5_cardsListBox");
        monthsListBox = new ListBox();
        monthsListBox.addItem("", "0");
        for (int i = 1; i <= 12; i++) {
            String v = (i < 10 ? "0" : "") + i;
            monthsListBox.addItem(v, v);
        }
        monthsListBox.addStyleName("step5_monthsListBox");
        yearsListBox = new ListBox();
        yearsListBox.addItem("", "0");
        for (int i = 0; i < 10; i++) {
            String v = "" + (2007 + i);
            yearsListBox.addItem(v, v);
        }
        yearsListBox.addStyleName("step5_yearsListBox");

        FlexTable t = new FlexTable();
        t.setStyleName("step5_table");
        int idx = 0;
        t.setText(idx, 0, strs.getMsg("key.guarantee.reservation"));
        certFrame.setStyleName("step5_cert_iframe");
        t.setWidget(idx, 1, certFrame);
        
        
        //t.getFlexCellFormatter().setColSpan(idx, 0, 2);
        t.getRowFormatter().addStyleName(idx, "step5_row_title");
        idx++;
        t.setText(idx, 0, strs.getMsg("key.type.card"));
        t.setWidget(idx, 1, cardsListBox);
        idx++;
        t.setText(idx, 0, strs.getMsg("key.name.card"));
        t.setWidget(idx, 1, txtCardName);
        idx++;
        t.setText(idx, 0, strs.getMsg("key.number.card"));
        t.setWidget(idx, 1, txtCardNumber);
        idx++;
        t.setText(idx, 0, strs.getMsg("key.expiration.card"));
        HorizontalPanel pnlExpiration = new HorizontalPanel();
        t.setWidget(idx, 1, pnlExpiration);
        pnlExpiration.add(monthsListBox);
        pnlExpiration.add(yearsListBox);

        idx++;
        t.setText(idx, 0, strs.getMsg("key.cvv2.card"));
        txtCvv2.setMaxLength(3);
        txtCvv2.setVisibleLength(3);
        t.setWidget(idx, 1, txtCvv2);

        for (int i = 1; i <= idx; i++) {
            t.getCellFormatter().addStyleName(i, 0, "step5_col_names");
            t.getCellFormatter().addStyleName(i, 1, "step5_col_inputs");
        }
        external_grid.setWidget(1, 0, t);
        external_grid.setWidget(2, 0, NextButton);
    }

    public String validateForm() {
        reservation.setGuarantee(new Integer(1));

        String cardTypeStr = cardsListBox.getValue(cardsListBox.getSelectedIndex());
        if (cardTypeStr.length() == 0) {
            cardsListBox.setFocus(true);
            return strs.getMsg("errors.card.type.required");
        }
        card.setCardTypeCode(cardTypeStr);
        
        String cardName = txtCardName.getText().trim();
        if (cardName.length() < 2) {
            txtCardName.setFocus(true);
            return strs.getMsg("errors.card.name.required");
        }
        card.setCardName(cardName);

        String cardNumber = txtCardNumber.getText().trim();
        if (!UtilsClientValidators.isValidCard(cardNumber, cardTypeStr)) {
            txtCardNumber.setFocus(true);
            return strs.getMsg("errors.card.number.invalid");
        }
        card.setCardNumber(UtilsClientValidators.getDigitsOnly(cardNumber));

        Short untilMonth = null;
        try {
            untilMonth = new Short(monthsListBox.getValue(monthsListBox.getSelectedIndex()));
            if (untilMonth.shortValue() == 0) {
                monthsListBox.setFocus(true);
                return strs.getMsg("errors.card.expiration.invalid");
            }    
        } catch (NumberFormatException ex) {
            monthsListBox.setFocus(true);
            return strs.getMsg("errors.card.expiration.invalid");
        }
        card.setUntilMonth(untilMonth);

        Short untilYear = null;
        try {
            untilYear = new Short(yearsListBox.getValue(yearsListBox.getSelectedIndex()));
            if (untilYear.shortValue() == 0) {
                yearsListBox.setFocus(true);
                return strs.getMsg("errors.card.expiration.invalid");
            }
        } catch (NumberFormatException ex) {
            yearsListBox.setFocus(true);
            return strs.getMsg("errors.card.expiration.invalid");
        }
        card.setUntilYear(untilYear);

        String cvv2 = txtCvv2.getText().trim();
        if (!UtilsClientValidators.isValidCvv2(cvv2)) {
            txtCvv2.setFocus(true);
            return strs.getMsg("errors.card.cvv2.invalid");
        }
        card.setCvv2(cvv2);
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

    public void setCreditCardsTypes(HashMap h) {
        creditCardsTypes = h;
    }

    public BookingValueGWT getReservation() {
        return this.reservation;
    }

    public CardGuaranteeGWT getCardGuarantee() {
        return card;
    }

}
