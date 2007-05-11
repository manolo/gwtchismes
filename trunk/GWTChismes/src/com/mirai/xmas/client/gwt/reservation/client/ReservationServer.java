package com.mirai.xmas.client.gwt.reservation.client;

import java.util.Date;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.mirai.xmas.client.gwt.utils.client.HelperClientGwt;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.CardGuaranteeGWT;
import com.mirai.xmas.client.gwt.values.client.ForBookingCollectionGWT;
import com.mirai.xmas.client.gwt.values.client.HtmlFormControlsGWT;
import com.mirai.xmas.client.gwt.values.client.ReservationInitialInfoGWT;
import com.mirai.xmas.client.gwt.values.client.ResponseGWT;

public interface ReservationServer extends RemoteService {
    public static class Util {
        private static ReservationServerAsync instance;

        public static ReservationServerAsync getInstance() {
            if (instance == null) {
                instance = (ReservationServerAsync) GWT.create(ReservationServer.class);
                ServiceDefTarget target = (ServiceDefTarget) instance;
                String prefix = HelperClientGwt.isHostedMode() ?  GWT.getModuleBaseURL() : "";
                target.setServiceEntryPoint(prefix + "/XMAS/reservation");
            }
            return instance;
        }
    }

    //
    public ReservationInitialInfoGWT getReservationInitialInfo(String xchain);

    public ReservationInitialInfoGWT getReservationInitialInfo(Long idtokenprovider);

    public ResponseGWT getAvailability(Long idtokenprovider, Date initDate, Date endDate) throws Exception;

    public ResponseGWT preReserveRooms(ForBookingCollectionGWT frcGwt);

    public ResponseGWT finalReserve(BookingValueGWT reservation, CardGuaranteeGWT card, HtmlFormControlsGWT htmlControlsMap, HtmlFormControlsGWT agreementControlsMap) throws Exception;

    public ResponseGWT getReservationAuthenticated(Long idtokenprovider, Long idReservationMirai, Integer cancelCode);

    public ResponseGWT doCancel(BookingValueGWT reservation) throws Exception;

    public boolean verifyCreditCard(String cardNumber, String cardType);

    public boolean verifyEmail(String email);
}