package com.mirai.xmas.client.gwt.NH.client;

import java.util.Date;
import java.util.Vector;

import com.google.gwt.core.client.EntryPoint;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.*;
import com.mirai.xmas.client.gwt.NH.client.controls.ResStep1;
import com.mirai.xmas.client.gwt.NH.client.controls.ResStep2;
import com.mirai.xmas.client.gwt.NH.client.controls.ResStep3;
import com.mirai.xmas.client.gwt.NH.client.controls.ResStep4;
import com.mirai.xmas.client.gwt.NH.client.controls.ResStep5;
import com.mirai.xmas.client.gwt.NH.client.controls.ResStep6;
import com.mirai.xmas.client.gwt.reservation.client.ReservationServer;
import com.mirai.xmas.client.gwt.utils.client.HelperClientGwt;
import com.mirai.xmas.client.gwt.utils.client.UtilsServer;
import com.mirai.xmas.client.gwt.values.client.*;
import com.google.gwt.user.client.HistoryListener;
import com.google.gwt.user.client.History;
import com.mirai.xmas.client.gwt.utils.client.UtilsClientValidators;
import com.google.code.p.gwtchismes.client.*;

//import com.google.gwt.user.client.DOM;
//import com.google.gwt.user.client.Element; 


/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class NHMod implements EntryPoint, HistoryListener {

    private I18nGWT strs = new I18nGWT();
    private FlexTable outTop  = new FlexTable();
    private FlexTable outBotton  = new FlexTable();
    private TabPanel tabPanel = new TabPanel();
    private FlexTable grdHotelInfo = new FlexTable(); 
    private int currentTab = 0;

    private ResStep1 step1;
    private ResStep2 step2;
    private ResStep3 step3;
    private ResStep4 step4;
    private ResStep5 step5;
    private ResStep6 step6;
    
    private GWTCWait gwtWait = new GWTCWait();
    private GWTCAlert gwtAlert = new GWTCAlert();
    
    private HotelInfoValueGWT hotel = new HotelInfoValueGWT();
    private boolean reserveDone = false;
    
    /*
     * Application WorkFlow
     * 
     * load: onModuleLoad -> launchLocaleRequest -> setLocale && launchHotelsRequest -> loadListeners
     * step1: doStep1 -> launchAvailabilityRequest
     * step2: doStep2 -> launchPrereserveRequest
     */
    public void onModuleLoad() {
        showWait();
        // get hotel from URL
        hotel.setIdhotel(HelperClientGwt.getXMASHotelFromUrl());
        if (hotel.getIdhotel()==null){
            hideWait();
            gwtAlert.alert("errors.select.valid.hotel");
            return;
        }
        
        step1 = new ResStep1();
        step2 = new ResStep2();
        step3 = new ResStep3();
        step4 = new ResStep4();
        step5 = new ResStep5();
        step6 = new ResStep6();
        
        outTop.setWidget(0, 0, grdHotelInfo);
        
        outBotton.setStyleName("Res_Container_Botton");
        outBotton.addStyleName("h" + hotel.getIdhotel());
        outTop.setStyleName("Res_Container_Top");
        outTop.addStyleName("h" + hotel.getIdhotel());
        
        // outgrid.setText(0, 0, " ");
        outBotton.setWidget(0, 0, tabPanel);
        
        RootPanel.get().add(outTop);
        RootPanel.get().add(outBotton);
        
        History.addHistoryListener(this);
        History.newItem("" + 0);
        
        // locale for interface, sucessfull result calls to hotelRequest
        launchLocaleRequest();
    }


    public void showWait() {
        gwtWait.show(0);
    }

    public void hideWait() {
        gwtWait.hide();
    }
    
    public void setLocale() {
        step1.setLocale(strs);
        step2.setLocale(strs);
        step3.setLocale(strs);
        step4.setLocale(strs);
        step5.setLocale(strs);
        step6.setLocale(strs);
        tabPanel.add(step1, strs.getMsg("key.res.step1"));
        tabPanel.add(step2, strs.getMsg("key.res.step2"));
        tabPanel.add(step3, strs.getMsg("key.res.step3"));
        tabPanel.add(step4, strs.getMsg("key.res.step4"));
        tabPanel.add(step5, strs.getMsg("key.res.step5"));
        //tabPanel.add(new Label(""), strs.getMsg("key.do.reserve"));
        tabPanel.selectTab(0);
    }
    
    
    // Configure listener handlers
    public void loadListeners() {
        step1.setNextListener(new ClickListener() {
            public void onClick(Widget sender) {
                tabPanel.selectTab(1);
            }
        });
        
        step2.setNextListener(new ClickListener() {
            public void onClick(Widget sender) {
                tabPanel.selectTab(2);
            }
        });
        
        step2.setSelectedHotelListener(new ClickListener() {
            public void onClick(Widget sender) {
                // Cambiamos de hotel, y pedimos disponibilidad
                hotel = step2.getSelectedHotel();
                HelperClientGwt.setHeaderHotelInfo(grdHotelInfo, hotel);
                launchAvailabilityRequest();
            }
        });
        
        step3.setNextListener(new ClickListener() {
            public void onClick(Widget sender) {
                tabPanel.selectTab(3);
            }
        });
        
        step4.setNextListener(new ClickListener() {
            public void onClick(Widget sender) {
                tabPanel.selectTab(4);
            }
        });
        
        step5.setNextListener(new ClickListener() {
            public void onClick(Widget sender) {
                doStep5();
            }
        });
        
        tabPanel.addTabListener(new TabListener() {
            public boolean onBeforeTabSelected(SourcesTabEvents a, int clickedTab) {
                if (currentTab == clickedTab)
                    return false;
                
                if (reserveDone)
                    return true;
                boolean ret = false;
                if (currentTab > clickedTab) {
                    ret = true;
                } else if ((clickedTab - currentTab) > 1) {
                    if (clickedTab >= 1 && step1.hasChanged(false)) {
                        //tabPanel.selectTab(1);
                        return false;
                    }
                    if (clickedTab >= 2 && step2.hasChanged(false)) {
                        //tabPanel.selectTab(2);
                        return false;
                    }
                    if (clickedTab >= 3 && step3.validateForm() != null) {
                        //tabPanel.selectTab(3);
                        return false;
                    }
                    if (clickedTab >= 4 && step4.validateForm() != null) {
                        //tabPanel.selectTab(4);
                        return false;
                    }
                    ret = true;
                } else if (clickedTab == 5) {
                    ret = doStep5();
                } else if (clickedTab == 4) {
                    ret = doStep4();
                } else if (clickedTab == 3) {
                    ret = doStep3();
                } else if (clickedTab == 2) {
                    ret = doStep2();
                } else if (clickedTab == 1) {
                    ret = doStep1();
                } else if (clickedTab == 0) {
                    ret = true;
                }
                return ret;
            }
            public void onTabSelected(SourcesTabEvents a, int i) {
                if (currentTab < i)
                    History.newItem("" + i);
                currentTab = i;
            }
        });
    }
    public void onHistoryChanged(String token) {
        int tab = -1;
        try {
            tab = Integer.valueOf(token).intValue();
            if (tab >= 0 && tabPanel.getTabBar().getTabCount() > tab)
                tabPanel.selectTab(tab);
        } catch(Exception e) {
        }
    }
    public void launchLocaleRequest() {
        if (reserveDone)
            return;
        UtilsServer.Util.getInstance().getI18n("reservation", HelperClientGwt.getParameterFromUrl("language"), new AsyncCallback() {
            public void onSuccess(Object result) {
                strs = (I18nGWT) result;
                setLocale();
                launchHotelsRequest();
            }

            public void onFailure(Throwable caught) {
                gwtAlert.alert("Error: " + caught.getMessage());
                hideWait();
            }
        });
    }
    private void launchHotelsRequest() {
        if (reserveDone)
            return;
        ReservationServer.Util.getInstance().getReservationInitialInfo(hotel.getIdhotel(), new AsyncCallback() {
            public void onSuccess(Object result) {
                Vector hotels = ((ReservationInitialInfoGWT) result).getChainHotels();
                if (hotels != null && hotels.size() > 0) {
                    hotel = (HotelInfoValueGWT)hotels.elementAt(0);
                    step4.setCountries(((ReservationInitialInfoGWT) result).getCountriesIso3166Vector());
                    step5.setCreditCardsTypes(((ReservationInitialInfoGWT) result).getCreditCardsTypes());
                    if (hotel != null && hotel.getIdhotel()!=null) {
                        HelperClientGwt.setHeaderHotelInfo(grdHotelInfo, hotel);
                        loadListeners();
                        if (setIntervalFromUrl() ){
                            tabPanel.selectTab(1);
                            return; //Do not hide wait
                        }
                    }
                }
                hideWait();
                if (hotel == null || hotel.getIdhotel()==null) {
                    gwtAlert.alert(strs.getMsg("key.hotel.info.not.found"));
                }
            }
            public void onFailure(Throwable caught) {
                gwtAlert.alert(strs.getMsg("key.communication.error"));
                hideWait();
            }
        });
    }

    public void launchAvailabilityRequest() {
        if (reserveDone)
            return;
        ReservationServer.Util.getInstance().getAvailability(hotel.getIdhotel(), step1.getInitDate(), step1.getEndDate(), new AsyncCallback() {
            public void onSuccess(Object result) {
                ResponseGWT response = (ResponseGWT)result;
                if (response.getHasError() == false) {
                    if (response.getResult() instanceof ForBookingCollectionGWT) {
                        step2.setForReservationcollection((ForBookingCollectionGWT)response.getResult());
                    } else if (response.getResult() instanceof AssociatedHotelsListGWT) {
                        step2.setAssociatedHotels((AssociatedHotelsListGWT)response.getResult());
                    }
                    step1.hasChanged(true);
                    hideWait();
                } else {
                    hideWait();
                    gwtAlert.alert(strs.getMsg(response.getErrorText()));
                    tabPanel.selectTab(0);
                }
            }
            
            public void onFailure(Throwable caught) {
                hideWait();
                tabPanel.selectTab(0);
                gwtAlert.alert(strs.getMsg("key.availability.error"));
            }
        });
    }

    private void launchPrereserveRequest() {
        if (reserveDone)
            return;
        ReservationServer.Util.getInstance().preReserveRooms(step2.getForReservationcollection(), new AsyncCallback() {
            public void onSuccess(Object result) {
                ResponseGWT response = (ResponseGWT)result;
                if (response.getHasError() == false) {
                    PreReservationResponseGWT preReservResp = (PreReservationResponseGWT)response.getResult();
                    BookingValueGWT reservation = preReservResp.getBookingValueGwt();
                    if (reservation == null) {
                        hideWait();
                        gwtAlert.alert(strs.getMsg("errors.prereserve"));
                        return;
                    }
                    String cancellationPolicy = preReservResp.getCancellationPolicyText();
                    Vector htmlAttributesVector = preReservResp.getHtmlAttributesStr();
                    String hotelAgreement = preReservResp.getHotelAgreement();
                    
                    step3.setCancellationPolice(cancellationPolicy);
                    step3.setHotelAgreement(hotelAgreement);
                    step3.setResevation(reservation);
                    
                    step4.setHtmlAttrs(htmlAttributesVector);
                    step4.setCancellationPolice(cancellationPolicy);
                    step4.setResevation(reservation);
                    
                    step5.setResevation(reservation);
                    
                    hideWait();
                    
                } else {
                    hideWait();
                    gwtAlert.alert(strs.getMsg(response.getErrorText()));
                }
            }
            
            public void onFailure(Throwable caught) {
                hideWait();
                gwtAlert.alert(strs.getMsg("key.prereserve.error"));
            }
        });
    }
    
    private void launchReserveRequest () {
        if (reserveDone)
            return;
        ReservationServer.Util.getInstance().finalReserve(step5.getReservation(), step5.getCardGuarantee(), step4.getHtmlControls(), step3.getAgreeControls(),  new AsyncCallback() {
            public void onSuccess(Object result) {
                ResponseGWT response = (ResponseGWT)result;
                if (response.getHasError() == false) {
                    ReservationResponseGWT reservRespGwt = (ReservationResponseGWT)response.getResult();
                    BookingValueGWT reservation = reservRespGwt.getBookingValueGwt();
                    if (reservation != null && reservation.getIdReservationMirai()!=null && reservation.getCancelCode() != null) {
                        Vector reservationAttributes = reservRespGwt.getAttributesTranslatedGwt();
                        step6.setResevation(reservation);
                        step6.setReservationAttributes(reservationAttributes);
                        outBotton.setWidget(0, 0, step6);
                        reserveDone = true;
                    } else {
                        gwtAlert.alert(strs.getMsg("errors.finalreserve"));
                    }
                    hideWait();
                } else {
                    hideWait();
                    gwtAlert.alert(strs.getMsg(response.getErrorText()));
                }
            }
            public void onFailure(Throwable caught) {
                hideWait();
                gwtAlert.alert(strs.getMsg("errors.finalreserve"));
            }
        });
    }
    
    // Step1
    public boolean doStep1() {
        if (step1.getNights() > 0) {
            if (step1.hasChanged(false)) {
                step2.setForReservationcollection(null);
                showWait();
                launchAvailabilityRequest();
            }
            return true;
        } else {
            gwtAlert.alert(strs.getMsg("errors.nights.required"));
            return false;
        }
    }

    // Step2
    public boolean doStep2() {
        String errorMsg = step2.validateAndGetErrorRoomSelection();
        if (errorMsg == null || errorMsg.length() == 0) {
            if (step2.hasChanged(true)) {
                step3.setResevation(null);
                showWait();
                launchPrereserveRequest();
            }
            return true;
        } else {
            gwtAlert.alert(errorMsg);
            return false;
        }
    }

    // Step3
    public boolean doStep3() {
        String err = step3.validateForm();
        if (err == null) {
            return true;
        } else {
            gwtAlert.alert(err);
            return false;
        }
    }

    // Step4
    public boolean doStep4() {
        String err = step4.validateForm();
        if (err == null) {
            return true;
        } else {
            gwtAlert.alert(err);
            return false;
        }
    }
    // Step5
    public boolean doStep5() {
        String err = step5.validateForm();
        if (err == null) {
            showWait();
            launchReserveRequest();
            return true;
        } else {
            gwtAlert.alert(err);
            return false;
        }
    }
    

    public boolean setIntervalFromUrl() {
        String initDay = UtilsClientValidators.getDigitsOnly(HelperClientGwt.getParameterFromUrl("initDay"));
        String initMonth = UtilsClientValidators.getDigitsOnly(HelperClientGwt.getParameterFromUrl("initMonth"));
        String initYear = UtilsClientValidators.getDigitsOnly(HelperClientGwt.getParameterFromUrl("initYear"));
        String Nights = UtilsClientValidators.getDigitsOnly(HelperClientGwt.getParameterFromUrl("nights"));
        
        if (initDay!=null && initMonth!=null && initYear!=null && Nights!=null) {
            Date initd = new Date(Date.UTC(Long.valueOf(initYear).intValue()-1900, Long.valueOf(initMonth).intValue() -1 , Long.valueOf(initDay).intValue(), 0, 0, 0));
            int nights = Long.valueOf(Nights).intValue();
            step1.setInitDate(initd);
            step1.setNights(nights);
            return true;
        }
        return false;
    }

}
