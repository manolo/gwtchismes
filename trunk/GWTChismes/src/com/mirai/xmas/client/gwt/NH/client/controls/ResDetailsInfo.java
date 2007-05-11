package com.mirai.xmas.client.gwt.NH.client.controls;

import java.util.Vector;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;
import com.mirai.xmas.client.gwt.values.client.ReservationAttributesTranslatedValueGWT;
import com.mirai.xmas.client.gwt.utils.client.HelperClientGwt;

public class ResDetailsInfo  extends Composite {
    static public final int LAYOUT_NOCODE_NOPOLICY = 0;
    static public final int LAYOUT_CODE_POLICY = 1;
    static public final int LAYOUT_CODE_POLICY_CANCEL = 2;
    
    BookingValueGWT reservation = null;
    Vector reservAttributes = new Vector();
    I18nGWT strs = new I18nGWT();
    
    int layout = 0;

    private ResSummaryInfo sinfo = new ResSummaryInfo();
    
    FlexTable grd = new FlexTable();
    public ResDetailsInfo(int l) {
        layout = l;
        initWidget(grd);
    }
    public void redraw(){
        if (reservation==null)
            return;
        
        grd.clear();
        
        int idx=0;
        
        if (layout != LAYOUT_NOCODE_NOPOLICY ){
            grd.setText(idx, 0, strs.getMsg("key.reservation.code"));
            grd.setText(idx, 1, HelperClientGwt.IdReservationToFull(reservation.getIdReservationMirai()));
            idx++;
            
        }
        if (layout == LAYOUT_CODE_POLICY_CANCEL ){
            grd.setText(idx, 0, strs.getMsg("key.cancel.code"));
            grd.setText(idx, 1, reservation.getCancelCode().toString());
            idx++;
        }
        
        grd.setText(idx, 0, strs.getMsg("key.firstname"));
        grd.setText(idx, 1, reservation.getClientFirstName());
        idx++;
        
        grd.setText(idx, 0, strs.getMsg("key.lastname"));
        grd.setText(idx, 1, reservation.getClientLastName());
        idx++;

        if (reservation.getClientPhone() != null && reservation.getClientPhone().length()> 0){
            grd.setText(idx, 0, strs.getMsg("key.phone"));
            grd.setText(idx, 1, reservation.getClientPhone());
            idx++;
        }

        if (reservation.getClientFax() != null && reservation.getClientFax().length()> 0){
            grd.setText(idx, 0, strs.getMsg("key.fax"));
            grd.setText(idx, 1, reservation.getClientFax());
            idx++;
        }

        if (reservation.getClientCompany() != null && reservation.getClientCompany().length()> 0){
            grd.setText(idx, 0, strs.getMsg("key.company"));
            grd.setText(idx, 1, reservation.getClientCompany());
            idx++;
        }
        
        grd.setWidget(idx, 0, sinfo);
        grd.getFlexCellFormatter().setColSpan(idx, 0, 2);
        idx++;
        
        if (reservAttributes != null && reservAttributes.size() > 0) {
            grd.setText(idx, 0, strs.getMsg("key.desired.services"));
            String attributesStr = "";
            for (int i = 0; i < reservAttributes.size(); i++) {
                ReservationAttributesTranslatedValueGWT attribute = (ReservationAttributesTranslatedValueGWT)reservAttributes.get(i);
                attributesStr += (i != 0 ? "<br/>" : "") + attribute.getTitle() + ": " + attribute.getValue();
            }
            grd.setHTML(idx, 1, attributesStr);
            idx++;
        }
        
        if (layout != LAYOUT_NOCODE_NOPOLICY && !(layout == ResDetailsInfo.LAYOUT_CODE_POLICY && reservation.isCancelled()) ){
            if (reservation.getCancellationPolicy() != null) {
                grd.setText(idx, 0, strs.getMsg("key.cancellation.policy"));
                String cancelTrans = reservation.getCancellationPolicyI18n();
                grd.setText(idx, 1, cancelTrans);
                idx++;
            }
        }
        
        // Comentarios
        if (reservation.getClientComments()!=null && reservation.getClientComments().length() > 1) {
            grd.setText(idx, 0, strs.getMsg("key.comments"));
            grd.setText(idx, 1, reservation.getClientComments());
            idx++;
        }
        if (layout == ResDetailsInfo.LAYOUT_CODE_POLICY && reservation.isCancelled()){
            grd.getRowFormatter().addStyleName(idx, "rinfo_cancelled");
            grd.setText(idx, 0, strs.getMsg("key.status"));
            grd.setText(idx, 1, strs.getMsg("key.is.canceled"));
            idx ++;
        }
        
        // Aplicar los estilos
        sinfo.setStyleName("sinfo_table");
        for (int i = 0; i < idx; i++) {
            grd.getCellFormatter().addStyleName(i, 0, "rinfo_left");
            grd.getCellFormatter().addStyleName(i, 1, "rinfo_right");
        }
        
    }
    public void setReservation(BookingValueGWT r){
        reservation = r;
        sinfo.setReservation(reservation);
        redraw();
    }
    public void setReservationAttributes(Vector a){
        reservAttributes = a;
    }
    public void setLocale(I18nGWT ss) {
        strs = ss;
        sinfo.setLocale(strs);
        redraw();
    }
}
