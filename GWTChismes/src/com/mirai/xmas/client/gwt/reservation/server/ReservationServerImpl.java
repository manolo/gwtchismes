package com.mirai.xmas.client.gwt.reservation.server;

import java.util.Collections;
import java.util.Comparator;
import java.util.Vector;
import java.util.Date;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;

import com.mirai.xmas.utils.LocaleUtils;
import com.mirai.xmas.values.XBookingValue;
import com.mirai.xmas.values.XCancelReserveResult;
import com.mirai.xmas.values.XCancellationPolicy;
import com.mirai.xmas.values.XReservAvailSearchValue;
import com.mirai.xmas.values.XForBookingCollection;
import com.mirai.xmas.values.XForBookingObject;
import com.mirai.xmas.values.XProvider;
import com.mirai.xmas.values.XHotelSearchRQValue;
import com.mirai.xmas.values.XReservationQuoteResponse;
import com.mirai.xmas.values.XCardGuarantee;
import com.mirai.xmas.client.factories.CountriesFactory;
import com.mirai.xmas.client.gwt.reservation.client.ReservationServer;
import com.mirai.xmas.client.gwt.values.client.CancelAuthenticateRespGWT;
import com.mirai.xmas.client.gwt.values.client.CancelResponseGWT;
import com.mirai.xmas.client.gwt.values.client.ResponseGWT;
import com.mirai.xmas.client.gwt.values.client.ForBookingCollectionGWT;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.CardGuaranteeGWT;
import com.mirai.xmas.client.gwt.values.client.ForBookingObjectGWT;
import com.mirai.xmas.client.gwt.values.client.ReservationInitialInfoGWT;
import com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT;
import com.mirai.xmas.client.gwt.values.client.HtmlFormControlsGWT;
import com.mirai.xmas.client.gwt.values.client.PreReservationResponseGWT;
import com.mirai.xmas.client.gwt.values.client.ReservationResponseGWT;
import com.mirai.xmas.client.gwt.values.client.AssociatedHotelsListGWT;
import com.hotelebusiness.ReservationSystem.values.MHotelInfoValue;
import com.hotelebusiness.ReservationSystem.values.MCommissionTypeValue;
import com.hotelebusiness.ReservationSystem.values.MCommissionValue;
import com.hotelebusiness.ReservationSystem.values.MReservationAttributesValue;
import com.hotelebusiness.ReservationSystem.values.MReservationFilterValue;
import com.hotelebusiness.ReservationSystem.values.MTranslationValue;
import com.hotelebusiness.ReservationSystem.exceptions.CancelReservationException;
import com.hotelebusiness.ReservationSystem.exceptions.CancellationPolicyChangedException;
import com.hotelebusiness.ReservationSystem.util.ObjectUtils;

import com.mirai.xmas.client.gwt.values.conversors.TypeConversor;

import com.mirai.xmas.client.services.HotelInfoService;
import com.mirai.xmas.client.services.ReservationService;
import com.mirai.xmas.client.services.I18nService;
import com.mirai.xmas.client.factories.CreditCardsFactory;

//import com.mirai.xmas.client.utils.I18nUtils;
import com.mirai.xmas.client.utils.NotificationUtils;
import com.mirai.xmas.client.values.ClientReservationAuthentication;
import com.mirai.xmas.exceptions.AddReservationException;
import com.mirai.xmas.exceptions.RemoteReservationException;

import com.hotelebusiness.ReservationSystem.util.CreditCardUtils;
import org.apache.log4j.Logger;

public class ReservationServerImpl extends RemoteServiceServlet implements ReservationServer {
    private Logger logger = Logger.getLogger(ReservationServerImpl.class);

    public ReservationInitialInfoGWT getReservationInitialInfo(String xchain) {
        Vector hotels = null;
        Vector countriesVector = null;

        XHotelSearchRQValue requestValue = new XHotelSearchRQValue();
        requestValue.setChainIdOTA(xchain);

        String languageCode = (String) this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
        if (languageCode == null || languageCode.trim().length() == 0) {
            languageCode = "es";
            this.getThreadLocalRequest().getSession().setAttribute("XMASLNG", languageCode);
        }

        try {
            countriesVector = CountriesFactory.getInstance().getCountriesIso3166(languageCode);
            hotels = new Vector();
            Vector xmasproviders = HotelInfoService.getHotelInfoCoresOfXidChain(xchain);
            Hashtable xmasHotelsInfosTable = HotelInfoService.getXmasHotelsInfosTable(xmasproviders, languageCode);

            for (Iterator itXmasHotelInfos = xmasHotelsInfosTable.entrySet().iterator(); itXmasHotelInfos.hasNext();) {
                Entry xmasHotelEntry = (Entry) itXmasHotelInfos.next();

                XProvider xmasProv = (XProvider) xmasHotelEntry.getKey();
                MHotelInfoValue hiv = (MHotelInfoValue) xmasHotelEntry.getValue();
                
                HotelInfoValueGWT hivGwt = TypeConversor.fromHotelInfoValueToHotelInfoValueGWT(hiv, xmasProv);
                
                hotels.add(hivGwt);
            }
        } catch (Exception ex) {
            logger.error("En ReservationServImpl.getReservationInitialInfo Error trayendo informacion de los hoteles de la cadena: " + xchain + "\n" + ex.getMessage());
            ex.printStackTrace();
        }
        ReservationInitialInfoGWT initialInfo = new ReservationInitialInfoGWT();
        initialInfo.setChainHotels(hotels);
        initialInfo.setCountriesIso3166Vector(countriesVector);
        initialInfo.setCreditCardsTypes(CreditCardsFactory.getInstance().getCreditCardsTable());

        return initialInfo;
    }

    public ReservationInitialInfoGWT getReservationInitialInfo(Long idtokenprovider) {
        Vector hotels = null;

        Vector countriesVector = null;
        String languageCode = (String) this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
        try {
            countriesVector = CountriesFactory.getInstance().getCountriesIso3166(languageCode);
            
            XProvider xmasProv = HotelInfoService.getHotelInfoCore(idtokenprovider);
            
            if (xmasProv != null) {
                MHotelInfoValue hiv = HotelInfoService.getHotelInfo(idtokenprovider, languageCode);
                HotelInfoValueGWT hivGwt = TypeConversor.fromHotelInfoValueToHotelInfoValueGWT(hiv, xmasProv);
                
                hotels = new Vector();
                hotels.add(hivGwt);
            }
        } catch (Exception ex) {
            logger.error("En getReservationInitialInfo Error trayendo informacion de los hoteles del hotel: " + idtokenprovider + "\n" + ex.getMessage());
            ex.printStackTrace();
        }
        ReservationInitialInfoGWT initialInfo = new ReservationInitialInfoGWT();
        initialInfo.setChainHotels(hotels);
        initialInfo.setCountriesIso3166Vector(countriesVector);
        initialInfo.setCreditCardsTypes(CreditCardsFactory.getInstance().getCreditCardsTable());

        return initialInfo;
    }

    public ResponseGWT getAvailability(Long idtokenprovider, Date initDate, Date endDate) throws Exception {

        logger.info("En getAvailability. Asking for availability with parameters: idtokenprovider: " + idtokenprovider + ", initDate: " + initDate + ", endDate: " + endDate);

        if (initDate.compareTo(endDate) == 0) {
            // La misma fecha de entrada que de salida. Error
            logger.warn("Error: En getAvailability. Fecha de entrada igual que la fecha de salida");

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.endate.before.initdate");
            return response;
        }

        XProvider xmasprovider = HotelInfoService.getHotelInfoCore(idtokenprovider);
        if (xmasprovider == null) {
            logger.error("Error: En getAvailability. No se pudo traer xmasprovider del hotel " + idtokenprovider);

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.getting.hotel.information");
            return response;
        }
        
        String languageCode = (String) this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
        if (languageCode == null || languageCode.trim().length() == 0) {
            languageCode = "es";
        }
        XReservAvailSearchValue hotelAvaRequestValue = new XReservAvailSearchValue(xmasprovider, initDate, endDate, languageCode);
        
        MHotelInfoValue hiv = null;
        try {
            hiv = HotelInfoService.getHotelInfo(idtokenprovider, languageCode);
        } catch (Exception ex) {
            logger.error("Error: En getAvailability. Getting the info for the hotel. idtokenprovider: " + idtokenprovider + ", language: " + languageCode + "\n" + ex.getMessage());
            ex.printStackTrace();

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.getting.hotel.information");
            response.setServerMessage(ex.getMessage());
            return response;
        }
        hotelAvaRequestValue.addOccupationRequest(1, true);
        hotelAvaRequestValue.addOccupationRequest(2, true);
        hotelAvaRequestValue.setNumRoomsPerType(Integer.valueOf(2));

        // Llamada al servidor para obtener la lista de habitaciones disponibles
        XForBookingCollection forReservCollection = null;
        try {
            Hashtable hotelsAvailability = ReservationService.getHotelAvailability(hotelAvaRequestValue);
            
            if (hotelsAvailability != null) {
                if (hotelsAvailability.size() > 1) {
                    logger.error("Error. En getAvailability. Se devuelve la disponibilidad para mas de un hotel cuando solo se pidio uno. Esto esta muy mal");
                    ResponseGWT response = new ResponseGWT();
                    response.setHasError(true);
                    response.setErrorText("errors.getting.hotel.information");
                    return response;
                }
                
                if (hotelsAvailability.size() > 0) {
                    for (Iterator itHotelsAvail = hotelsAvailability.entrySet().iterator(); itHotelsAvail.hasNext();) {
                        Entry hotelAvailEntry = (Entry) itHotelsAvail.next();
                        XProvider xmasprov = (XProvider) hotelAvailEntry.getKey();
                        XForBookingCollection forReservCol = (XForBookingCollection) hotelAvailEntry.getValue();
                        System.out.println("JMANUEL: En getAvailability. xmasprovider: " + xmasprov + ", forReservCol: " + forReservCol);
                    }
                } else {
                    System.out.println("JMANUEL: En getAvailability. Pues la respuesta esta vacia");
                }
                
                System.out.println("JMANUEL: En getAvailability. Probando con xmasprovider: " + xmasprovider);
                forReservCollection = (XForBookingCollection) hotelsAvailability.get(xmasprovider);
            } else {
                System.out.println("JMANUEL: En getAvailability. Pues la respuesta es null");
            }
            
        } catch (Exception ex) {
            logger.error("Error: En getAvailability. Error getting the available rooms for reservation. hotelAvaRequestValue: " + hotelAvaRequestValue + "\n" + ex.getMessage());
            ex.printStackTrace();

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.getting.hotel.information");
            response.setServerMessage(ex.getMessage());
            return response;
        }

        if (forReservCollection != null) {
            storeAvailableRoomsInSession(this.getThreadLocalRequest(), forReservCollection.getForReservationObjects());

            // Convertir a tipo GWT
            ForBookingCollectionGWT frcGwt = TypeConversor.fromForBookingCollectionToForBookingCollectionGWT(forReservCollection);
            // Ordenar las habitaciones, por pax y por tipo
            Vector v = frcGwt.getReservationLines();
            System.out.println("Ordenando v: " + v.size());
            Collections.sort(v, new ForReservationObjectComparatorGWT());
            System.out.println("Ordenando v: " + v.size());
            frcGwt.setReservationLines(v);

            frcGwt.setHotelName(hiv.getName());
            frcGwt.setHotelType(hiv.getType());
            frcGwt.setHotelCategory(hiv.getCategory());

            ResponseGWT response = new ResponseGWT();
            response.setHasError(false);
            response.setResult(frcGwt);
            return response;
        } else {
            logger.warn("En getAvailability. La respuesta del webserice getHotelAvailability es null. No hay disponibilidad para el hotel: " + idtokenprovider + " con initDate: "
                    + initDate + " y endDate: " + endDate + ". Buscamos hoteles asociados");
            System.out.println("JMANUEL: En getAvailability. La respuesta del webserice getHotelAvailability es null. No hay disponibilidad para el hotel: " + idtokenprovider
                    + " con initDate: " + initDate + " y endDate: " + endDate + ". Buscamos hoteles asociados");
            
            XReservAvailSearchValue associationAvaRequestValue = new XReservAvailSearchValue(null, null, initDate, endDate, languageCode);
            associationAvaRequestValue.addOccupationRequest(1, true);
            associationAvaRequestValue.addOccupationRequest(2, true);
            associationAvaRequestValue.setNumRoomsPerType(Integer.valueOf(2));
            
            Vector associatedHotels = ReservationService.getAssociatedHotelsAvailability(xmasprovider.getIdchain(), xmasprovider.getIdtokenprovider(), associationAvaRequestValue);
            System.out.println("JMANUEL: En getAvailability. Se recuperaron los hoteles asociados con disponibilidad");
            
            ResponseGWT response = new ResponseGWT();
            
            if (associatedHotels != null && associatedHotels.size() > 0) {
                AssociatedHotelsListGWT associatedHotelsGwt = new AssociatedHotelsListGWT();
                for (Iterator itHotelsAvailab = associatedHotels.iterator(); itHotelsAvailab.hasNext();) {
                    XForBookingCollection forReservCol = (XForBookingCollection) itHotelsAvailab.next();
                    
                    XProvider currentXmasProvider = HotelInfoService.getHotelInfoCore(forReservCol.getIdtokenprovider());
                    MHotelInfoValue hotelInfo = HotelInfoService.getHotelInfo(forReservCol.getIdtokenprovider(), languageCode);
                    
                    HotelInfoValueGWT hotelInfoGwt = TypeConversor.fromHotelInfoValueToHotelInfoValueGWT(hotelInfo, currentXmasProvider);
                    associatedHotelsGwt.addHotel(hotelInfoGwt);
                }
                response.setResult(associatedHotelsGwt);
                
                logger.info("En getAvailability. Mostrando los hoteles asociados con disponibilidad. Size: " + associatedHotels.size());
                System.out.println("JMANUEL: En getAvailability. Mostrando los hoteles asociados con disponibilidad. Size: " + associatedHotels.size());
            } else {
                logger.info("En getAvailability. Tampoco hay hoteles asociados con disponibilidad");
                response.setHasError(true);
                response.setErrorText("key.without.availability");
            }
            return response;
        }
    }

    public ResponseGWT preReserveRooms(ForBookingCollectionGWT frcGwt) {
        // Sacar la lista de habitaciones a reservar
        Vector roomsSelected = frcGwt.getRoomsSelectedToReserve();
        String languageCode = frcGwt.getLanguageCode();
        if (languageCode == null) {
            languageCode = (String) this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
        }
        if (frcGwt.getReservationLines() == null || roomsSelected.size() == 0) {
            logger.warn("En preReserveRooms. La reserva que se manda a prereservar no tiene reservationLines. Se devuelve un error al cliente");
            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("error.no.items.to.reserve");
            return response;
        }
        if (roomsSelected.size() > 3) {
            logger.warn("En preReserveRooms. La reserva que se manda a prereservar tiene mas de 3 tipos de habitacion. Se devuelve error al cliente");
            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.too.many.room.types.to.reserve");
            return response;
        }
        
        Hashtable availableRoomsTable = (Hashtable) this.getThreadLocalRequest().getSession().getAttribute("availableRooms");
        XBookingValue bookingRequest = TypeConversor.fromForBookingCollectionGWTToBookingValue(frcGwt, availableRoomsTable);
        
        int languageIndex = LocaleUtils.getLanguageNumber(languageCode);
        
        XBookingValue reservation = null;
        String cancellationPolicyText = null;
        try {
            // Llamada al webservice
            logger.info("En preReserveRooms. Haciendo la llamada al webservice con reserva: " + bookingRequest);
            XReservationQuoteResponse reservResponse = ReservationService.doHotelReservationQuote(bookingRequest);
            reservation = reservResponse.getReservation();
            cancellationPolicyText = reservResponse.getCancellationPolicyText();
            logger.info("En preReserveRooms. Se saca la politica de cancelacion. languageCode: " + reservation.getLanguageCode() + ", cancellationPolicy: "
                    + cancellationPolicyText);
        } catch (Exception ex) {
            logger.error("Error: en preReserveRooms. Error prereserving rooms: " + ex.getMessage());
            ex.printStackTrace();

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.communication.with.provider");
            return response;
        }

        if (reservation == null || reservation.getReservationLines() == null) {
            logger.error("Error: En preReserveRooms. Reservation o reservation lines estan vacias");

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.communication.with.provider");
            return response;
        }

        Long idtokenprovider = frcGwt.getIdtokenprovider();
        XProvider xmasprovider = HotelInfoService.getHotelInfoCore(idtokenprovider);
        MHotelInfoValue hotelInfo = null;
        MHotelInfoValue chainInfo = null;
        try {
            hotelInfo = HotelInfoService.getHotelInfo(idtokenprovider, languageCode);
            chainInfo = HotelInfoService.getHotelInfo(xmasprovider.getIdchain(), languageCode);
        } catch (Exception ex) {
            logger.error("Error: En preReserveRooms. Error leyendo la informacion del hotel: " + idtokenprovider + ", language: " + languageCode + "\n" + ex.getMessage());
            ex.printStackTrace();

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.getting.hotel.information");
            response.setServerMessage(ex.getMessage());
            return response;
        }

        // Leer los atributos del hotel
        Vector htmlAttributesTV = I18nService.getHotelHtmlAttrs(frcGwt.getIdtokenprovider(), languageIndex);
        Vector htmlAttributesStr = new Vector();
        for (Iterator itHtmlAttrs = htmlAttributesTV.iterator(); itHtmlAttrs.hasNext();) {
            MTranslationValue tv = (MTranslationValue) itHtmlAttrs.next();
            String htmlDescription = tv.getDescription();
            htmlAttributesStr.add(htmlDescription);
        }
        
        // Chequear si vienen los atributos del agreement del hotel
        String hotelAgreement = null;
        try {
            hotelAgreement = I18nService.getHotelAgreement(idtokenprovider, languageIndex, hotelInfo, chainInfo);
        } catch (Exception ex) {
            logger.error("Error getting the hotel Agreement. idtokenprovider: " + idtokenprovider + ", languageIndex: " + languageIndex + "\n" + ex.getMessage());
            ex.printStackTrace();

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.getting.hotel.information");
            response.setServerMessage(ex.getMessage());
            return response;
        }

        // BookingValueGWT bookingGwt =
        // TypeConversor.fromBookingValueToBookingValueGWT(reservation,
        // availableRoomsTable, null);
        BookingValueGWT bookingGwt = TypeConversor.fromBookingValueToBookingValueGWT(reservation);

        PreReservationResponseGWT preReserveResponse = new PreReservationResponseGWT(bookingGwt, cancellationPolicyText, htmlAttributesStr, hotelAgreement);
        ResponseGWT response = new ResponseGWT();
        response.setHasError(false);
        response.setResult(preReserveResponse);
        return response;
    }

    // ########### PASO FINAL DE LA RESERVA ################
    public boolean verifyCreditCard(String cardNumber, String cardType) {
        return CreditCardUtils.isValidCard(cardNumber, cardType);
    }

    public boolean verifyEmail(String email) {
        return ObjectUtils.isValidEmail(email);
    }

    public ResponseGWT finalReserve(BookingValueGWT requestReservGwt, CardGuaranteeGWT cardGwt, HtmlFormControlsGWT htmlControlsMap, HtmlFormControlsGWT agreementControlsMap)
            throws Exception {
        // Chequear tambien en la parte servidora los agreements por si acaso
        // Chequear los agreement de Mirai y del hotel
        String miraiAgreement = agreementControlsMap.getControlValue("mirai_confidential_agreement");
        if (miraiAgreement == null || (!miraiAgreement.equalsIgnoreCase("yes") && !miraiAgreement.equalsIgnoreCase("true"))) {
            logger.warn("En finalReserve. El usuario no acepta el agreement de Mirai. Se devuelve error al cliente");

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.mirai.confidential.agreement.required");
            return response;
        }
        String hotelAgreement = agreementControlsMap.getControlValue("hotel_confidential_agreement");
        if (hotelAgreement != null && (!hotelAgreement.equalsIgnoreCase("yes") && !hotelAgreement.equalsIgnoreCase("true"))) {
            logger.warn("En finalReserve. El usuario no acepta el agreement del hotel. Se devuelve error al cliente");

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.hotel.confidential.agreement.required");
            return response;
        }
        if (CreditCardUtils.isValidCard(cardGwt.getCardNumber(), cardGwt.getCardTypeCode()) == false) {
            logger.warn("En finalReserve. Tarjeta de credito invalida. Se devuelve error al cliente");

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.card.number.invalid");
            return response;
        }

        if (!ObjectUtils.isValidEmail(requestReservGwt.getClientEmail())) {
            logger.warn("En finalReserve. El e-mail no es valido. Se devuelve error al cliente");
            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.email.invalid");
            return response;
        }
        Long idtokenprovider = requestReservGwt.getIdtokenprovider();
        XProvider xmasprovider = HotelInfoService.getHotelInfoCore(idtokenprovider);
        String languageCode = (String) this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
        try {
            MHotelInfoValue hotelInfo = HotelInfoService.getHotelInfo(xmasprovider.getIdtokenprovider(), languageCode);

            Hashtable availableRoomsTable = (Hashtable) this.getThreadLocalRequest().getSession().getAttribute("availableRooms");
            
            XBookingValue reqReservation = TypeConversor.fromBookingValueGWTToBookingValue(requestReservGwt, availableRoomsTable);
            XCardGuarantee card = TypeConversor.fromCardGuaranteeGWTToCardGuarantee(cardGwt);
            
            // Check if it passes the filters for the reservations corresponding
            // to this hotel
            MReservationFilterValue filterFailed = ReservationService.passesReservationFilters(reqReservation);
            
            if (filterFailed != null) {
                if (filterFailed.allowsReservation() == false) {
                    NotificationUtils.notifyReservationFilterFailed(xmasprovider, hotelInfo, reqReservation, filterFailed, false);

                    logger.warn("En finalReserve. La reserva no pasa el filtro. La reserva no se permite. Filtro que no se pasa: " + filterFailed.toString());

                    ResponseGWT response = new ResponseGWT();
                    response.setHasError(true);
                    response.setErrorText("error.reservation.filter.notpassed");
                    return response;
                }
            }

            // Calculo de la comision. Miro si viene la cookie de la pagina de
            // hotelsearch.
            Vector commissions = HotelInfoService.getCommissions(idtokenprovider);

            reqReservation.setHsri((String) this.getThreadLocalRequest().getSession().getAttribute("HSRI"));
            reqReservation.setHsli((String) this.getThreadLocalRequest().getSession().getAttribute("HSLI"));
            if (this.getThreadLocalRequest().getRemotePort() == 80) {
                reqReservation.setIp(this.getThreadLocalRequest().getRemoteAddr());
            } else {
                reqReservation.setIpssl(this.getThreadLocalRequest().getRemoteAddr());
            }
            reqReservation.setLanguageCode(languageCode);
            
            MCommissionValue cv = selectCommission(commissions, reqReservation.getHsri(), reqReservation.getHsli(), null);
            if (cv == null) {
                logger.error("Error: En finalReserve: Ninguna comision encaja con la reserva y no hay comision por defecto. hsri: " + reqReservation.getHsri()
                        + ", idtokenprovider: " + idtokenprovider + ". Poniendo un  6%");
            }
            reqReservation.setCommission(cv == null ? Integer.valueOf(600) : cv.getValue());
            if (cv != null) {
                reqReservation.setIdCompanyMirai(cv.getMiraiCompanyId());
            }
            
            // Ponemos los atributos html
            Vector hotelAttributes = new Vector();
            Vector htmlAttributes = getClientAttributes(htmlControlsMap);
            if (htmlAttributes != null && htmlAttributes.size() > 0) {
                hotelAttributes.addAll(htmlAttributes);
            }
            // Ponemos los agreements
            Vector agreementAttributes = getClientAttributes(agreementControlsMap);
            if (agreementAttributes != null && agreementAttributes.size() > 0) {
                hotelAttributes.addAll(agreementAttributes);
            }
            // Anadimos todos a los atributos
            reqReservation.setAttributes(hotelAttributes);

            try {
                // Llamada a la reserva
                logger.info("En finalReserve. Se va a llamar al webservice. Reservation: " + reqReservation + ", Guarantee: " + card);
                Vector resultVector = ReservationService.doRemoteReservation(reqReservation, card);

                XBookingValue resultReserv = (XBookingValue) resultVector.get(0);
                String cancelPolicyI18n = (String) resultVector.get(1);

                BookingValueGWT resultReservGwt = TypeConversor.fromBookingValueToBookingValueGWT(resultReserv, cancelPolicyI18n);

                ReservationResponseGWT reservRespGwt = new ReservationResponseGWT();
                reservRespGwt.setBookingValueGwt(resultReservGwt);
                if (resultReserv.getAttributes() != null && resultReserv.getAttributes().size() > 0) {
                    // Traducir los atributos html para mostrarlos
                    Vector attributesTranslated = I18nService.translateAttributesReserv(resultReserv.getAttributes(), languageCode);
                    Vector attributesTranslatedGwt = TypeConversor.fromAttributesTranslatedToAttributesTranslatedGWT(attributesTranslated);
                    reservRespGwt.setAttributesTranslatedGwt(attributesTranslatedGwt);
                }

                // Limpio la session del usuarion
                this.getThreadLocalRequest().getSession().invalidate();

                ResponseGWT response = new ResponseGWT();
                response.setHasError(false);
                response.setResult(reservRespGwt);
                return response;
            } catch (RemoteReservationException rrex) {
                logger.error("Error: En finalReserve. Exception (RemoteReservationException) realizando la reserva en remoto. " + rrex.getMessage());
                rrex.printStackTrace();

                ResponseGWT response = new ResponseGWT();
                response.setHasError(true);
                response.setErrorText("errors.communication.with.provider");
                return response;

            } catch (AddReservationException arex) {
                logger.error("Error: En finalReserve. Exception (AddReservationException) grabando la reserva. " + arex.getMessage());
                logger.warn("Error: ?Cancelamos la reserva en remoto?");
                arex.printStackTrace();
                // TODO: Cancelar la reserva en remoto ???????

                ResponseGWT response = new ResponseGWT();
                response.setHasError(true);
                response.setErrorText("errors.communication.with.provider");
                return response;
            } catch (Exception ex) {
                logger.error("Error: En finalReserve. Exception (Exception) realizando reserva. " + ex.getMessage());
                ex.printStackTrace();

                ResponseGWT response = new ResponseGWT();
                response.setHasError(true);
                response.setErrorText("errors.communication.with.provider");
                return response;
            }
        } catch (Exception ex) {
            logger.error("Error: En finalReserve. Exception preparando los datos para la reserva. " + ex.getMessage());
            ex.printStackTrace();

            ResponseGWT response = new ResponseGWT();
            response.setHasError(true);
            response.setErrorText("errors.communication.with.provider");
            return response;
        }
    }

    /**
     * Returns the commission to apply to the reservation depending on the
     * parameters used for the reservation
     * 
     * @param commissions
     *            Vector of CommissionValue ordered by priority. Lower priority
     *            commissions come first
     * @param hsri
     * @param hsli
     * @param host
     * @param referer
     * @return The first commission that matches the parameters of the
     *         reservation.
     */
    private MCommissionValue selectCommission(Vector commissions, String hsri, String hsli, String host) {
        MCommissionValue defaultCommission = null;
        
        for (int i = 0; commissions != null && i < commissions.size(); i++) {
            MCommissionValue currentCommission = (MCommissionValue) commissions.elementAt(i);
            MCommissionTypeValue commissionType = currentCommission.getCommissionType();

            if (commissionType != null) {
                if (commissionType.getHsriCode().equals(hsri)) {
                    return currentCommission;
                }
            }

            if (currentCommission.getIsDefault() == true) {
                defaultCommission = currentCommission;
            }
        }

        if (hsri != null) {
            logger.warn("Warning: En selectCommission. The hsri introduced doesn't match any commission of the hotel. hsri: " + hsri);
        }
        // No commission matches. Get the default commission
        if (defaultCommission != null) {
            return defaultCommission;
        }

        return null;
    }

    private Vector getClientAttributes(HtmlFormControlsGWT attrControls) {
        Vector hotelAttributes = new Vector();

        for (Iterator itControls = attrControls.getControlsEntries().iterator(); itControls.hasNext();) {
            Entry entryControl = (Entry) itControls.next();
            String name = (String) entryControl.getKey();
            String value = (String) entryControl.getValue();
            if (name != null && name.length() > 6 && value != null && value.length() > 0) {
                MReservationAttributesValue a = null;
                if (name.equals("mirai_confidential_agreement")) {
                    a = new MReservationAttributesValue(null, Integer.valueOf(MReservationAttributesValue.MIRAI_AGREEMENT), name, value);
                } else if (name.equals("hotel_confidential_agreement")) {
                    a = new MReservationAttributesValue(null, Integer.valueOf(MReservationAttributesValue.HOTEL_AGREEMENT), name, value);
                } else if (name.startsWith("mirai_")) {
                    a = new MReservationAttributesValue(null, Integer.valueOf(MReservationAttributesValue.MIRAI_ATTR), name, value);
                } else if (name.startsWith("hotel_")) {
                    a = new MReservationAttributesValue(null, Integer.valueOf(MReservationAttributesValue.HOTEL_ATTR), name, value);
                }
                if (a != null) {
                    hotelAttributes.add(a);
                }
            }
        }

        logger.info("En getClientAttributes. Atributes Html:");
        for (Iterator itAttributes = hotelAttributes.iterator(); itAttributes.hasNext();) {
            MReservationAttributesValue attr = (MReservationAttributesValue) itAttributes.next();

            logger.info("Atributo: " + attr.getIdtitle18n() + ", val:" + attr.getIdvalue18n());
        }

        return hotelAttributes;
    }

    private void storeAvailableRoomsInSession(HttpServletRequest request, Vector forResObjects) {
        Hashtable availableRooms = new Hashtable();
        for (Iterator itFROs = forResObjects.iterator(); itFROs.hasNext();) {
            XForBookingObject fro = (XForBookingObject) itFROs.next();
            availableRooms.put(fro.getBookingId(), fro);
        }
        request.getSession().setAttribute("availableRooms", availableRooms);
    }

    public ResponseGWT getReservationAuthenticated(Long idtokenprovider, Long idReservationMirai, Integer cancelCode) {
        ClientReservationAuthentication reservAuthentication = new ClientReservationAuthentication(idReservationMirai, cancelCode);

        String languageCode = (String) this.getThreadLocalRequest().getSession().getAttribute("XMASLNG");
        if (languageCode == null || languageCode.trim().length() == 0) {
            languageCode = "es";
            this.getThreadLocalRequest().getSession().setAttribute("XMASLNG", languageCode);
        }

        ResponseGWT response = new ResponseGWT();
        try {
            // Hacer una llamada SQL aqui para ver si es valida
            XBookingValue reservation = ReservationService.searchReservationLocal(reservAuthentication.getIdReservationMirai());
            
            if (reservation != null) {
                if (reservation.getIdtokenprovider().longValue() != idtokenprovider.longValue()) {
                    
                    response.setHasError(true);
                    response.setErrorText("errors.reserve.params");
                    return response;
                }
                if (reservAuthentication.getIdReservationMirai().longValue() == reservation.getIdReservationMirai().longValue()
                        && reservAuthentication.getCancellationCode().intValue() == (reservation.getCancelCode().intValue())) {
                    CancelAuthenticateRespGWT cancelResult = new CancelAuthenticateRespGWT();
                    cancelResult.setAuthenticated(true);
                    
                    // Poner en session la reserva (no vaya a ser que el cliente
                    // nos la cambie
                    this.getThreadLocalRequest().getSession().setAttribute("RESERVETOCANCEL", reservation);
                    
                    languageCode = reservation.getLanguageCode();
                    
                    if (reservation.getAttributes() != null && reservation.getAttributes().size() > 0) {
                        // Traducir los atributos html para mostrarlos
                        Vector attributesTranslated = I18nService.translateAttributesReserv(reservation.getAttributes(), languageCode);
                        Vector attributesTranslatedGwt = TypeConversor.fromAttributesTranslatedToAttributesTranslatedGWT(attributesTranslated);
                        cancelResult.setReservAttributes(attributesTranslatedGwt);
                    }
                    String cancelPolicyStr = "";
                    if (reservation.getCancellationPolicy() != null) {
                        cancelPolicyStr = I18nService.getCancellationPolicyString(reservation, languageCode);

                        XCancellationPolicy cancelPolicy = reservation.getCancellationPolicy();
                        if (cancelPolicy.isCancellable(reservation.getCheckinDate())) {
                            // La reserva es cancelable
                            Date cancelLimitTime = cancelPolicy.getTimeLimitForCancellation(reservation.getCheckinDate());
                            System.out.println("Time Limit for Cancellation: " + cancelLimitTime);
                            cancelResult.setLimitTimeForCancellation(cancelLimitTime);
                            cancelResult.setIsCancellable(true);
                        } else {
                            // La reserva ya no se puede cancelar
                            System.out.println("La reserva no es cancelable");
                            cancelResult.setIsCancellable(false);
                        }
                    } else {
                        // Si no viene la politica de cancelacion, para evitar
                        // problemas ponemos que no es cancelable
                        cancelResult.setIsCancellable(false);
                    }

                    cancelResult.setReservation(TypeConversor.fromBookingValueToBookingValueGWT(reservation, cancelPolicyStr));

                    response.setHasError(false);
                    response.setResult(cancelResult);
                } else {
                    response.setHasError(true);
                    response.setErrorText("errors.reserve.params");
                    return response;
                }
            } else {
                System.out.println("Reservation is null");
                response.setHasError(true);
                response.setErrorText("errors.reserve.params");
                return response;
            }
        } catch (Exception ex) {
            response.setHasError(true);
            response.setErrorText("errors.communication.with.provider");
            System.out.println("Error getting the reservation from DB: " + ex.getMessage());
            ex.printStackTrace();
            return response;
        }
        return response;
    }

    public ResponseGWT doCancel(BookingValueGWT reservationGwt) throws Exception {
        ResponseGWT response = new ResponseGWT();
        XBookingValue reservationFromSession = (XBookingValue) this.getThreadLocalRequest().getSession().getAttribute("RESERVETOCANCEL");
        if (reservationFromSession == null) {
            logger.error("En session no hay RESERVETOCANCEL. Fatal!!!!!");
            throw new CancelReservationException();
        }

        XBookingValue reservation = TypeConversor.fromBookingValueGWTToBookingValue(reservationGwt);

        if (reservationFromSession.getIdReservationMirai().longValue() != reservation.getIdReservationMirai().longValue()
                || (!reservationFromSession.getIdReservationHotel().equals(reservation.getIdReservationHotel()))
                || reservationFromSession.getIdtokenprovider().longValue() != reservation.getIdtokenprovider().longValue()
                || (reservationFromSession.getCheckinDate().compareTo(reservation.getCheckinDate()) != 0)) {
            // Los ids de reserva no coinciden. Algo esta mal
            logger.error("Los ids de reserva no coinciden. Algo esta fatal!!!");
            throw new CancellationPolicyChangedException();
        }

        // Chequear que el limite de cancelacion no se haya pasado
        Date cancelLimitTime = reservationFromSession.getCancellationPolicy().getTimeLimitForCancellation(reservationFromSession.getCheckinDate());
        Date today = new Date();
        if (today.after(cancelLimitTime)) {
            logger.warn("Ya no se puede cancelar. Demasiado tarde");
            response.setHasError(true);
            response.setErrorText("exception.CancellationVetoException");
            return response;
        }

        System.out.println("Language Code que se guarda en la parte servidora: " + reservation.getLanguageCode());
        CancelResponseGWT cancelResponseGwt = null;
        XCancelReserveResult cancelResult = null;
        try {
            cancelResult = ReservationService.cancelReservation(reservation);
        } catch (Exception ex) {
            response.setHasError(true);
            response.setErrorText("key.communication.error");
            logger.error("Error llamando a la cancelacion de la reserva. " + ex.getMessage());
            ex.printStackTrace();
            return response;
        }

        if (cancelResult != null) {
            cancelResponseGwt = new CancelResponseGWT(cancelResult.getIsCancelled());
            if (cancelResponseGwt.isCancelled() == false) {
                logger.warn("Despues de la cancelacion el id de reserva indica que no esta cancelada");
                response.setHasError(true);
                response.setErrorText("errors.reserve.not.cancelled");
                return response;
            }
        }

        response.setHasError(false);
        response.setResult(cancelResponseGwt);
        return response;

    }
}

class AttrsComparator implements Comparator {
    public int compare(Object o1, Object o2) {
        Integer io1 = ((MReservationAttributesValue) o1).getIdtype();
        Integer io2 = ((MReservationAttributesValue) o2).getIdtype();
        String so1 = ((MReservationAttributesValue) o1).getIdtitle18n();
        String so2 = ((MReservationAttributesValue) o2).getIdtitle18n();
        return io1.compareTo(io2) == 0 ? so1.compareTo(so2) : io1.compareTo(io2);
    }
}

class ForReservationObjectComparatorGWT implements Comparator {
    public int compare(Object o1, Object o2) {
        Integer pax1 = new Integer(((ForBookingObjectGWT) o1).getOccupation().getNumAdults());
        Integer pax2 = new Integer(((ForBookingObjectGWT) o2).getOccupation().getNumAdults());

        String type1 = ((ForBookingObjectGWT) o1).getRoomTypeCode().trim();
        String type2 = ((ForBookingObjectGWT) o2).getRoomTypeCode().trim();

        return type1.compareTo(type2) == 0 ? pax1.compareTo(pax2) : type1.compareTo(type2);
    }
}
