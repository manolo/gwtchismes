/*
 * ReservationService.java
 *
 * Created on September 20, 2006, 5:59 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package com.mirai.xmas.client.services;

import java.util.Iterator;
import java.util.Vector;
import java.util.Hashtable;

import com.hotelebusiness.ReservationSystem.values.MReservationFilterValue;
import com.mirai.xmas.values.XReservAvailSearchValue;
import com.mirai.xmas.values.XBookingValue;
import com.mirai.xmas.values.XSearchReservationsFilter;
import com.mirai.xmas.values.XCancelReserveResult;
import com.mirai.xmas.values.XReservationQuoteResponse;
import com.mirai.xmas.values.XCardGuarantee;
import com.mirai.xmas.exceptions.FindReservationException;

import com.mirai.xmas.client.utils.NotificationUtils;

/**
 *
 * @author jmanuel
 */
public class ReservationService {
    
    /**
     * Creates a new instance of ReservationService
     */
    public ReservationService() {
    }
    
    /**
     * Retorna los datos de la disponibilidad para reservar de los hoteles que satisfacen los criterios
     * de busqueda que trae el parametro hotelAvaRequestValue
     * @param hotelAvaRequestValue Parametro de filtrado de disponibilidades a devolver
     * @return Una tabla que contiene los ids de hoteles como key y un ForReservationCollection de cada hotel con las disponibilidades
     * @throws Exception
     */
    public static Hashtable getHotelAvailability(XReservAvailSearchValue hotelAvaRequestValue) throws Exception {
    	return BaseService2.getInstance().getXMASReservationManager().getHotelsAvailability(hotelAvaRequestValue);
    }
    
    public static Vector getAssociatedHotelsAvailability(Long idchain, Long idtokenprovider, XReservAvailSearchValue associationAvaRequestValue) throws Exception {
        return BaseService2.getInstance().getXMASReservationManager().getHotelsAssociatedWithAvailability(idchain, idtokenprovider, associationAvaRequestValue);
    }
    
    /**
     * Prereserva para recuperar la politica de cancelacion de la reserva
     * @param reservation Los datos de la reserva para prereservar
     * @return Los datos de la reserva que se reciben del hotel remoto
     * @throws Exception
     */
    public static XReservationQuoteResponse doHotelReservationQuote(XBookingValue reservation) throws Exception {
    	return BaseService2.getInstance().getXMASReservationManager().doReservationQuote(reservation);
    }
    
    /**
     * Se hace la reserva en el hotel remoto y si resulta exitosa se graba en la base de datos
     * @param reservation
     * @return Un vector con:
     *     - La reserva tal como se graba en la base de datos
     *     - Un vector de atributos HTML internacionalizados en el idioma de la reserva
     * @throws RemoteReservationException Cuando hay un error al realizar la reserva en el hotel remoto
     * @throws AddReservationException Cuando la reserva no se graba correctamente
     * @throws Exception Otras excepciones
     */
    public static Vector doRemoteReservation(XBookingValue reservation, XCardGuarantee card) throws Exception {
        String languageCode = reservation.getLanguageCode();
    	Vector response = BaseService2.getInstance().getXMASReservationManager().doReservationBook(reservation, card);
    	
    	if (response != null) {
            XBookingValue reservResponse = (XBookingValue)response.get(0);
            String cancelPolicyI18n = (String)response.get(1);
            String cancelPolicyI18nEnglish = (String)response.get(2);
            
            Vector attributesTranslated = null;
            if (reservation.getAttributes() != null && reservation.getAttributes().size() > 0) {
                // Traducir los atributos html para mostrarlos
                System.out.println("Hay atributos");
                attributesTranslated = I18nService.translateAttributesReserv(reservation.getAttributes(), languageCode);
            }
            response.add(attributesTranslated);
            
    		NotificationUtils.notifyReservation(reservResponse, attributesTranslated,
                    cancelPolicyI18n, cancelPolicyI18nEnglish, true, true, true, true);
    	}
        return response;
    }
    
    /**
     * Recupera los datos de la reserva que tenemos en local (en la BD) a partir del id de reserva de Mirai
     * @param idReservationMirai El id de reserva de Mirai
     * @return La reserva tal como esta almacenada en local
     */
    public static XBookingValue searchReservationLocal(Long idReservationMirai) throws Exception {
        XBookingValue reservation = null;
        
        try {
            reservation = BaseService2.getInstance().getXMASReservationManager().findReservation(idReservationMirai);
        } catch (FindReservationException ex) {
            System.out.println("Error getting reservation with Mirai Id: " + idReservationMirai + "\n"
                    + ex.getMessage());
            ex.printStackTrace();
            return null;
        }
        if (reservation != null) {
        	System.out.println("Reservation has reservation lines: " + reservation.getReservationLines().size());
        }
        return reservation;
    }
    
    /**
     * Recupera los datos de la reservas que tenemos en local (en la BD) que satisfacen los criterios
     * que se pasan en filter
     * @param filter Los criterios de filtrado para recuperar las reservas
     * @param languageCode Codigo del lenguaje en el que mostrar los datos de la reserva
     * @return Las reservas que satisfacen los filtros tal como estan almacenadas en local
     */
    public static Vector searchReservationsLocal(XSearchReservationsFilter filter, String languageCode) throws Exception {
        Vector result = null;
        
        try {
            result = BaseService2.getInstance().getXMASReservationManager().findReservations(filter, languageCode);
        } catch (Exception ex) {
            System.out.println("ERROR finding reservations with filter " + filter + "\n" + ex.getMessage());
            ex.printStackTrace();
        }
        return result;
    }
    
    /**
     * Cancelar la reserva reservation por parte del cliente
     * @param reservation La reserva a cancelar
     * @return Un objeto CancelReservationResult que indica el resultado de la cancelacion 
     */
    public static XCancelReserveResult cancelReservation(XBookingValue reservation) throws Exception {        
        XCancelReserveResult cancelResult = BaseService2.getInstance().getXMASReservationManager().cancelReservation(reservation);
        
        if (cancelResult.getIsCancelled() == true) {
            reservation.setCancelDate(cancelResult.getCancelDate());
            NotificationUtils.notifyCancellation(reservation, true, true, true);
        }
        
        return cancelResult;
    }
    
    /**
     * Hace una llamada al hotel mediante webservices para obtener los datos de la reserva del hotel en remoto
     * @param reservation La reserva a recuperar
     * @return La reserva cargada con los datos remotos
     */
    public static XBookingValue loadReservationDetailOTA(XBookingValue reservation, String languageCode) throws Exception {
        if (reservation != null) {
            Vector idsReservations = new Vector();
            String[] idsPair = {reservation.getIdReservationHotel(), reservation.getIdReservationMirai().toString()};
            idsReservations.add(idsPair);
            String thisLanguageCode = null;
            if (languageCode == null) {
                thisLanguageCode = reservation.getLanguageCode();
            } else {
                thisLanguageCode = languageCode;
            }
            
            Vector reservationsDetails = BaseService2.getInstance().getXMASReservationManager().getRemoteReservations(reservation.getIdtokenprovider(), idsReservations, thisLanguageCode);
            if (reservationsDetails != null && reservationsDetails.size() > 0) {
                return (XBookingValue)reservationsDetails.get(0);
            }
        }
        return null;
    }
    
    /**
     * Llena los datos de un objeto BookingValue a partir del mensaje SOAP en xml que esta almacenado en la BD
     * @param idReservationMirai El id de la reserva de Mirai
     * @return El objeto de reserva
     * @throws Exception
     */
    public static XBookingValue readReservationFromXml(Long idReservationMirai) throws Exception {
    	return BaseService2.getInstance().getXMASReservationManager().readReservationFromXML(idReservationMirai);
    }
    
    /**
     * Devuelve el primer filtro que la reserva no pasa o null si pasa todos los filtros
     * @param idtokenprovider Id del hotel
     * @param reservation El BookingValue de la reserva
     * @return El primer filtro que la reserva no verifica
     * @throws Exception
     */
    public static MReservationFilterValue passesReservationFilters(XBookingValue reservation) throws Exception {
        Long idtokenprovider = reservation.getIdtokenprovider();
        
        Vector filters = null;
        try {
            filters = BaseService2.getInstance().getMREHotelInfoManager().getHotelReservationFilters(idtokenprovider);
        } catch (Exception ex) {
            System.out.println("Excepcion en UtilService.passesReservationFilters(" + idtokenprovider + ") " + ex.getMessage());
            ex.printStackTrace();
            
            return null;
        }
        
        if (filters != null && filters.size() > 0) {
            for (Iterator itFilters = filters.iterator(); itFilters.hasNext(); ) {
                MReservationFilterValue filter = (MReservationFilterValue)itFilters.next();
                
                if (reservation != null && filter != null) {
                    if (filter.reservationPassesFilter(reservation) == false) {
                        return filter;
                    }
                }
            }
        }
        return null;
    }
}
