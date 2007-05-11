package com.mirai.xmas.client.gwt.NH.client;

import java.util.Date;
import java.util.Vector;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.*;
import com.mirai.xmas.client.gwt.NH.client.controls.CancelLogin;
import com.mirai.xmas.client.gwt.NH.client.controls.ResDetailsInfo;
import com.mirai.xmas.client.gwt.reservation.client.ReservationServer;
import com.mirai.xmas.client.gwt.utils.client.HelperClientGwt;
import com.mirai.xmas.client.gwt.utils.client.UtilsServer;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.CancelAuthenticateRespGWT;
import com.mirai.xmas.client.gwt.values.client.CancelResponseGWT;
import com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;
import com.mirai.xmas.client.gwt.values.client.ReservationInitialInfoGWT;
import com.mirai.xmas.client.gwt.values.client.ResponseGWT;

public class NHCancel implements EntryPoint {
    private I18nGWT strs = new I18nGWT();
    private FlexTable outGrid = new FlexTable();
    
    private FlexTable grdHotelInfo = new FlexTable(); 
    
    private final CancelLogin grdLogin = new CancelLogin();
    
    private ResDetailsInfo grdResInfo = new ResDetailsInfo(ResDetailsInfo.LAYOUT_CODE_POLICY);
    private GWTCButton btnCancel = new GWTCButton("Cancel");
    
    private final GWTCWait gwtWait = new GWTCWait();
    private final GWTCAlert gwtAlert = new GWTCAlert();
    
    HotelInfoValueGWT hotel = new HotelInfoValueGWT ();
    private BookingValueGWT reservation;
    private Vector reservAttributes;

    public void onModuleLoad() {
        gwtWait.show(0);
        hotel.setIdhotel(HelperClientGwt.getXMASHotelFromUrl());
        if (hotel.getIdhotel()==null){
            gwtWait.hide();
            gwtAlert.alert("errors.select.valid.hotel");
            return;
        }
        outGrid.setStyleName("Canc_Container");
        outGrid.setWidget(0, 0, grdHotelInfo);
        outGrid.setWidget(1, 0, grdLogin);

        grdHotelInfo.setStyleName("Canc_Container_Top");
        grdLogin.setStyleName("Canc_Container_Bottom");
        grdResInfo.setStyleName("Canc_Container_Bottom");
        
        RootPanel.get().add(outGrid);
        launchLocaleRequest();
    }
    
    private void setLocale() {
        grdLogin.setLocale(strs);
        grdResInfo.setLocale(strs);
        btnCancel.setText(strs.getMsg("key.cancel.reserve"));
    }
    
    private void showReservationInfo(boolean isCancellable) {
        if (reservation == null)
            return;
        grdResInfo.setReservation(reservation);
        grdResInfo.setReservationAttributes(reservAttributes);
        outGrid.setWidget(1, 0, grdResInfo);
        if (reservation.getCancelled() == false){
            if (isCancellable == true) {
                outGrid.setWidget(2, 0, btnCancel);
            } else {
                outGrid.setHTML(2, 0, strs.getMsg("exception.CancellationVetoException"));
                outGrid.getCellFormatter().addStyleName(2, 0, "Canc_not_possible");
            }
        }
    }
    
    public void launchLocaleRequest() {
        UtilsServer.Util.getInstance().getI18n("modifcancel", HelperClientGwt.getParameterFromUrl("language"), new AsyncCallback() {
            public void onSuccess(Object result) {
                strs = (I18nGWT) result;
                setLocale();
                launchHotelRequest();
            }
            public void onFailure(Throwable caught) {
                gwtWait.hide();
                gwtAlert.alert("Error: " + caught.getMessage());
            }
        });
    }
    
    private void launchHotelRequest() {
        ReservationServer.Util.getInstance().getReservationInitialInfo(hotel.getIdhotel(), new AsyncCallback() {
            public void onSuccess(Object result) {
                Vector hotels = ((ReservationInitialInfoGWT) result).getChainHotels();
                if (hotels != null && hotels.size() > 0) {
                    hotel = (HotelInfoValueGWT)hotels.elementAt(0);
                    if (hotel != null && hotel.getIdhotel()!=null) {
                        HelperClientGwt.setHeaderHotelInfo(grdHotelInfo, hotel);
                        loadListeners();
                    }
                }
                gwtWait.hide();
                if (hotel == null || hotel.getIdhotel()==null) {
                    gwtAlert.alert(strs.getMsg("key.hotel.info.not.found"));
                }
                
            }
            public void onFailure(Throwable caught) {
                gwtWait.hide();
                gwtAlert.alert(strs.getMsg("key.communication.error"));
            }
        });
    }
    
    private void launchLoginRequest() {
        gwtWait.show(0);
        ReservationServer.Util.getInstance().getReservationAuthenticated(hotel.getIdhotel(), grdLogin.getReserveCode(), grdLogin.getCancelCode(), new AsyncCallback() {
            public void onSuccess(Object result) {
                ResponseGWT loginResponse = (ResponseGWT)result;
                gwtWait.hide();
                if (loginResponse.getHasError() == false) {
                    CancelAuthenticateRespGWT cancelLogin = (CancelAuthenticateRespGWT)loginResponse.getResult();
                    if (cancelLogin.isAuthenticated() == true) {
                        reservation = cancelLogin.getReservation();
                        reservAttributes = cancelLogin.getReservAttributes();
                        //Date limitTimeForCancellation = loginResponse.getLimitTimeForCancellation();
                        showReservationInfo(cancelLogin.getIsCancellable());
                    } else {
                        gwtAlert.alert(strs.getMsg("errors.reserve.params"));
                    }
                } else {
                    gwtAlert.alert(strs.getMsg(loginResponse.getErrorText()));
                }
            }
            
            public void onFailure(Throwable caught) {
                gwtWait.hide();
                gwtAlert.alert(strs.getMsg(caught.getLocalizedMessage()));
            }
           });
    }

    private void launchCancelRequest() {
        gwtWait.show(0);
        ReservationServer.Util.getInstance().doCancel(reservation, new AsyncCallback() {
            public void onSuccess(Object result) {
                gwtWait.hide();
                CancelResponseGWT cancelResponse = (CancelResponseGWT)result;
                if (cancelResponse.isCancelled() == true) {
                    reservation.setCancelled(true);
                    reservation.setCancelDate(new Date());
                    btnCancel.setVisible(false);
                    showReservationInfo(false);
                } else {
                    gwtAlert.alert(strs.getMsg(cancelResponse.getErrorText()));
                }
            }
            
            public void onFailure(Throwable caught) {
                gwtWait.hide();
                gwtAlert.alert(strs.getMsg(caught.getLocalizedMessage()));
            }
        });
    }
    
    public void loadListeners(){
        grdLogin.setNextListener(new ClickListener() {
            public void onClick(Widget sender) {
                doStep1();
            }
        });
        btnCancel.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                if (Window.confirm(strs.getMsg("key.confirm.cancel.reservation")) == true) {
                    launchCancelRequest();
                }
            }
        });
    }
    public boolean doStep1() {
        String err = grdLogin.validateForm();
        if (err == null) {
            launchLoginRequest();
            return true;
        } else {
            gwtAlert.alert(err);
            return false;
        }
    }
}
