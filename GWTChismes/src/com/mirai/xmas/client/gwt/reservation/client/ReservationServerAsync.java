package com.mirai.xmas.client.gwt.reservation.client;

import java.util.Date;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.mirai.xmas.client.gwt.values.client.ForBookingCollectionGWT;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.CardGuaranteeGWT;
import com.mirai.xmas.client.gwt.values.client.HtmlFormControlsGWT;

public interface ReservationServerAsync {
    public void getReservationInitialInfo(String xchain, AsyncCallback callback);
    public void getReservationInitialInfo(Long idtokenprovider, AsyncCallback callback);
    public void getAvailability(Long idtokenprovider, Date initDate, Date endDate, AsyncCallback callback);
    public void preReserveRooms(ForBookingCollectionGWT frcGwt, AsyncCallback callback);
    public void finalReserve(BookingValueGWT reservation, CardGuaranteeGWT card, HtmlFormControlsGWT htmlControlsMap,
            HtmlFormControlsGWT agreementControlsMap, AsyncCallback callback);
    
    public void getReservationAuthenticated(Long idtokenprovider, Long idReservationMirai, Integer cancelCode, AsyncCallback callback);
    public void doCancel(BookingValueGWT reservation, AsyncCallback callback);

    public void verifyCreditCard(String cardNumber, String cardType, AsyncCallback callback);
    public void verifyEmail(String email, AsyncCallback callback);
}
