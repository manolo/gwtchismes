package com.mirai.xmas.client.services;


import java.io.StringWriter;
import java.util.Date;
import java.util.Locale;
import java.util.Vector;
import java.util.List;
import java.util.Hashtable;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;

import com.mirai.xmas.client.services.BaseService2;
import com.mirai.xmas.values.XForBookingCollection;
import com.mirai.xmas.values.XForBookingObject;
import com.mirai.xmas.values.XProvider;
import com.mirai.xmas.values.XBoardType;
import com.hotelebusiness.ReservationSystem.util.XSerializer;
import com.hotelebusiness.ReservationSystem.util.XSerializerToWriter;
import com.hotelebusiness.ReservationSystem.values.MHotelInfoValue;
import com.hotelebusiness.ReservationSystem.HotelInventoryMngr;

import com.mirai.xmas.client.services.HotelInfoService;

import com.hotelebusiness.ReservationSystem.values.MUseOccAvailValue;

//import com.mirai.xmas.HSHotelsAvailabilityRSDocument;
//import com.mirai.xmas.HSHotelsAvailabilityRSDocument.HSHotelsAvailabilityRS;
//import com.mirai.xmas.HotelAvailabilityPricesType;
//import com.mirai.xmas.HotelsAvailabilityPricesType;
//import com.mirai.xmas.HotelAvailabilityPricesType.HotelBasicInfo;
//import com.mirai.xmas.MiraiRoomStaysType;
//import com.mirai.xmas.MiraiRoomStayType;
//import com.mirai.xmas.RoomTypeLiteType;
//import com.mirai.xmas.ParagraphType;
//import com.mirai.xmas.FormattedTextTextType;
//import com.mirai.xmas.GuestCountType;
//import com.mirai.xmas.MiraiRoomStayType.RatePlans;
//import com.mirai.xmas.RatePlanType;


/*
import com.hotelebusiness.ReservationSystem.values.MCacheDayInfoValue;
import com.hotelebusiness.ReservationSystem.values.MOfferAvailValue;
import com.hotelebusiness.ReservationSystem.values.MUseOccAvailValue;
*/

public class MRECacheService {
    
    
    
    public static String getAvailabilityPricesHotelsXML(Vector idtokenprovidersVector, Date checkinDate, Date checkoutDate, int[] occupations, String languageCode) {
        List<XForBookingCollection> hotelsForBookingCollections = getAvailabilityPricesHotelsMRE(idtokenprovidersVector, checkinDate, checkoutDate, occupations, languageCode);
        
        StringWriter strWriter = new StringWriter();
        XSerializer serializer = new XSerializerToWriter(strWriter);
        serializer.startElement("HotelsAvailability");
        for (Iterator itForBookCols = hotelsForBookingCollections.iterator(); itForBookCols.hasNext(); ) {
            XForBookingCollection forBookCol = (XForBookingCollection)itForBookCols.next();
            forBookCol.serialize(serializer);
        }
        serializer.endElement();
        
        serializer.close();
        
        return "";
    }
    
    public static List<XForBookingCollection> getAvailabilityPricesHotelsMRE(Vector idtokenprovidersVector, Date checkinDate, Date checkoutDate, int[] occupations, String languageCode) {
        Locale locale = new Locale(languageCode);
        
        int minAdultsNumber = -1; 
        if (occupations != null && occupations.length > 0) {
            for (int i = 0; i < occupations.length; i++) {
                if (minAdultsNumber <= 0 || minAdultsNumber > occupations[i]) {
                    minAdultsNumber = occupations[i];
                }
            }
        } else {
            
            minAdultsNumber = 1;
        }
        
        // Buscar los tipos de habitación apropiadas del hotel
        try {
            System.out.println("JMANUEL: En getAvailabilityPricesHotels. Antes de la llamada a getUseoccupationsFromChannel");
            HotelInventoryMngr mng = BaseService2.getInstance().getMREHotelInventoryManager();
            if (mng != null) {
                Hashtable hotelsUsesTable = mng.getUseoccupationsFromChannel(idtokenprovidersVector, null, Integer.valueOf(minAdultsNumber), null);
                System.out.println("JMANUEL: En getAvailabilityPricesHotels. Despues de la llamada a getUseoccupationsFromChannel. returned: " + hotelsUsesTable);
                
                if (hotelsUsesTable != null) {
                    System.out.println("JMANUEL: En getAvailabilityPricesHotels. Antes de la llamada a getMRECacheReservationManager");
                    
                    Hashtable tableAvailabilityPrices = BaseService2.getInstance().getMRECacheReservationManager().getCacheAvailabilityPrice(hotelsUsesTable, checkinDate, checkoutDate,
                            true, true, false, null, locale);
                    System.out.println("JMANUEL: En getAvailabilityPricesHotels. Despues de la llamada a getMRECacheReservationManager. returned: " + tableAvailabilityPrices);
                    
                    Vector<XForBookingCollection> hotelsForBookingCollections = getForBookingCollections(tableAvailabilityPrices, checkinDate, checkoutDate);
                    
                    return hotelsForBookingCollections;
                }
            } else {
                System.out.println("JMANUEL: mng is null. Mierda!!!!!!!!");
            }
        } catch (Exception ex) {
            System.out.println("Exception!!!!!!: " + ex.getMessage());
            ex.printStackTrace();
        }
        
        return null;
    }
    
    private static Vector<XForBookingCollection> getForBookingCollections(Hashtable tableAvailabilityPrices, Date checkinDate, Date checkoutDate) {
        Vector<XForBookingCollection> hotelsBookingCollections = new Vector<XForBookingCollection>();
        
        if (tableAvailabilityPrices != null) {
            for (Iterator itHotels = tableAvailabilityPrices.entrySet().iterator(); itHotels.hasNext(); ) {
                Entry hotelEntry = (Entry)itHotels.next();
                Long idtokenprovider = (Long)hotelEntry.getKey();
                HashMap usesData = (HashMap)hotelEntry.getValue();
                XForBookingCollection hotelBookingCol = new XForBookingCollection(idtokenprovider, checkinDate, checkoutDate);
                
                Vector bookingRooms = new Vector();
                if (usesData != null) {
                    for (Iterator itUses = usesData.entrySet().iterator(); itUses.hasNext(); ) {
                        Entry useEntry = (Entry)itUses.next();
                        Long iduseoccupation = (Long)useEntry.getKey();
                        MUseOccAvailValue useData = (MUseOccAvailValue)useEntry.getValue();
                        
                        System.out.println("JMANUEL: useData: " + useData);
                        String roomTypeName = useData.getName();
                        
                        XForBookingObject bookingObj = new XForBookingObject(iduseoccupation.toString(), iduseoccupation.toString(), roomTypeName);
                        
                        bookingRooms.add(bookingObj);
                    }
                    hotelBookingCol.setReservationLines(bookingRooms);
                }
                hotelsBookingCollections.add(hotelBookingCol);
            }
        }
        return hotelsBookingCollections;
    }
    
//    private static void getSerialized(Vector<XForBookingCollection> bookingCollections, String languageCode) {
//        HSHotelsAvailabilityRSDocument hotelsAvaPricesRSDoc = HSHotelsAvailabilityRSDocument.Factory.newInstance();
//        
//        HSHotelsAvailabilityRS hotelsAvaPriceRS = hotelsAvaPricesRSDoc.addNewHSHotelsAvailabilityRS();
//        
//        HotelsAvailabilityPricesType hotelsAvaPrices = hotelsAvaPriceRS.addNewHotelsAvailabilityPrices();
//        
//        for (Iterator itHotelsAvaPrices = bookingCollections.iterator(); itHotelsAvaPrices.hasNext(); ) {
//            XForBookingCollection bookingCollection = (XForBookingCollection)itHotelsAvaPrices.next();
//            
//            MHotelInfoValue hotelInfo = null;
//            XProvider xprovider = null;
//            try {
//                hotelInfo = HotelInfoService.getHotelInfo(bookingCollection.getIdtokenprovider(), languageCode);
//                xprovider = HotelInfoService.getHotelInfoCore(bookingCollection.getIdtokenprovider());
//                
//            } catch (Exception ex) {
//                
//            }
//            
//            String hotelName = hotelInfo.getType() + " " + hotelInfo.getName();
//            
//            HotelAvailabilityPricesType hotelAvaPrices = hotelsAvaPrices.addNewHotelAvailabilityPrices();
//            HotelBasicInfo basicHotelInfo = hotelAvaPrices.addNewHotelBasicInfo();
//            basicHotelInfo.setChainCode(xprovider.getIdchain().toString());
//            basicHotelInfo.setHotelCode(bookingCollection.getIdtokenprovider().toString());
//            basicHotelInfo.setHotelName(hotelName);
//            
//            MiraiRoomStaysType roomStays = hotelAvaPrices.addNewRoomStays();
//            for (Iterator itRooms = bookingCollection.getReservationLines().iterator(); itRooms.hasNext(); ) {
//                XForBookingObject bookObj = (XForBookingObject)itRooms.next();
//                
//                MiraiRoomStayType roomStay = roomStays.addNewRoomStay();
//                RoomTypeLiteType roomType = roomStay.addNewRoomType();
//                
//                GuestCountType guestCount = roomStay.addNewGuestCount();
//                guestCount.setIsPerRoom(true);
//                GuestCountType.GuestCount guests = guestCount.addNewGuestCount();
//                guests.setAge(1);
//                guests.setCount(bookObj.getOccupation().getNumAdults());
//                
//                roomType.setRoomTypeCode(bookObj.getBookingId());
//                roomType.setNumberOfUnits(bookObj.getAvailableRoomsAmount());
//                ParagraphType roomDescPar = ParagraphType.Factory.newInstance();
//                roomDescPar.addNewText().setStringValue(bookObj.getRoomTypeName());
//                roomType.setRoomDescription(roomDescPar);
//                
//                RatePlans ratePlans = roomStay.addNewRatePlans();
//                RatePlanType ratePlan = ratePlans.addNewRatePlan();
//                XBoardType constantBoard = bookObj.getConstantBoard();
//                ratePlan.setRatePlanCode(constantBoard.getRateCode());
//                ParagraphType ratePlanDescPar = ParagraphType.Factory.newInstance();
//                ratePlanDescPar.addNewText().setStringValue(constantBoard.getRateName());
//                ratePlan.setRatePlanDescription(ratePlanDescPar);
//                
//            }
//        }
//    }
    
    /**
     * Produces the string with the information as an XML document
     * @param tableAvailabilityPrices
     * @param hotelsTaxes
     * @param locale
     * @param channelForOffers
     * @param channel
     * @return The string with the XML document
     * @throws RemoteException
     */
    /*
    private static String produceXMLText(Hashtable tableAvailabilityPrices, Hashtable hotelsTaxes, Integer channel,
            int numDays, Locale locale) throws RemoteException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        System.out.println("JMANUEL: Inicio de produceXMLText");
        
        StringBuffer hotelsXML = new StringBuffer();
        hotelsXML.append("<response>");
        for (Iterator itHotels = tableAvailabilityPrices.entrySet().iterator(); itHotels.hasNext(); ) {
            Entry hotelEntry = (Entry)itHotels.next();
            Long idtokenprovider = (Long)hotelEntry.getKey();
            
            hotelsXML.append("<hotel>\n");
            hotelsXML.append("  <id>").append(idtokenprovider).append("</id>\n");
            
            int taxPercentageIncluded = 0;
            int taxPercentageNotIncluded = 0;
            int taxAmountIncluded = 0;
            int taxAmountNotIncluded = 0;
            if (hotelsTaxes != null && hotelsTaxes.keySet().size() > 0) {
                // If there are taxes for hotel put them into taxes tag 
                Vector vHotelTaxes = (Vector)hotelsTaxes.get(idtokenprovider);
                if (vHotelTaxes != null && vHotelTaxes.size() > 0)  {
                    
                    for (Iterator itTaxes = vHotelTaxes.iterator(); itTaxes.hasNext(); ) {
                        MTaxValue taxValue = (MTaxValue)itTaxes.next();
                        
                        if (taxValue.getEnabled() == true) {
                            if (taxValue.getCalculationMethod() == MTaxValue.PERCENT_TOTAL) {
                                if (taxValue.getIncluded() == true) {
                                    taxPercentageIncluded += taxValue.getAmount();
                                } else {
                                    taxPercentageNotIncluded += taxValue.getAmount();
                                }
                            } else if (taxValue.getCalculationMethod() == MTaxValue.FOR_PERSON_AND_DAY) {
                                if (taxValue.getIncluded() == true) {
                                    taxAmountIncluded += taxValue.getAmount();
                                } else {
                                    taxAmountNotIncluded += taxValue.getAmount();
                                }
                            }
                        }
                    }
                }
            }
            
            HashMap usesAvaPricesRestr = (HashMap)hotelEntry.getValue();
            
            // Loop over the uses of the hotel
            for (Iterator itUsesData = usesAvaPricesRestr.entrySet().iterator(); itUsesData.hasNext(); ) {
                Entry useDataEntry = (Entry)itUsesData.next(); 
                Long iduseoccupation = (Long)useDataEntry.getKey();
                MUseOccAvailValue useOccData = (MUseOccAvailValue)useDataEntry.getValue();
                //UseOccupationValueDescription useoccupation = (UseOccupationValueDescription)itUsesDesc.next();
                //Long iduseoccupation = useoccupation.getIduseoccupation();
                
                // Cuando filtramos por channel, si no existe el uso en tableAvailabilityPrices, nos los saltamos.
                if (! usesAvaPricesRestr.containsKey(iduseoccupation) && channel != null)
                    continue;
                
                MUseOccupationValue useoccupation = useOccData.getUseOccupation();
                
                // The info about the use has to be in the output
                hotelsXML.append("  <use>\n");
                hotelsXML.append("    <id>").append(iduseoccupation).append("</id>\n");
                hotelsXML.append("    <desc>").append(ObjectUtils.escapeXML(useOccData.getName())).append("</desc>\n");
                
                if (useoccupation.getSort() != null) {
                    hotelsXML.append("    <sort>").append(useoccupation.getSort()).append("</sort>\n");
                }
                if (usesAvaPricesRestr.containsKey(iduseoccupation)) {
                    MUseOccAvailValue useData = (MUseOccAvailValue)usesAvaPricesRestr.get(iduseoccupation);
                    //Hashtable daysAvaPrices = null;
                    
                    if (useData != null) {
                        // Information of the days for the use
                        ArrayList daysAvaPrices = useData.getDaysInfo();
                        boolean useHasPrices = useData.getHasSomePrice();
                        //boolean useHasAvailability = useData.getHasSomeAvailability();
                        
                        // Minimum stay of the checkin date
                        String restrictionsStr = null;
                        if (useData.getMinStay() > 1) {
                            String minStayMessage = (String)restrictTextTable.get("minimumStay");
                            restrictionsStr = " - " + minStayMessage + " = " + useData.getMinStay();
                        }
                        if (restrictionsStr != null && restrictionsStr.length() > 0) {
                            hotelsXML.append("    <restrictions>").append(ObjectUtils.escapeXML(restrictionsStr)).append("</restrictions>\n");
                        }
                        
                        if (useHasPrices == false) {
                            // The use doesn't have prices
                            hotelsXML.append("    <hasprices>false</hasprices>\n");
                        } else if (daysAvaPrices != null && daysAvaPrices.size() > 0) {
                            long useTotalPrice = 0;
                            
                            // Fill the information for the days of the use
                            hotelsXML.append("    <usedays>\n");
                            for (Iterator itDays = daysAvaPrices.iterator(); itDays.hasNext(); ) {
                                hotelsXML.append("      <day>\n");
                                MCacheDayInfoValue availPriceBoard = (MCacheDayInfoValue)itDays.next();
                                Date day = availPriceBoard.getDate();
                                String dayStr = dateFormat.format(day);
                                
                                int availability = 0;
                                long price = 0;
                                int idBoard = 0;
                                //boolean isOfferDay = false;
                                if (availPriceBoard != null) {
                                    availability = availPriceBoard.getAvailability();
                                    price = availPriceBoard.getPrice();
                                    idBoard = availPriceBoard.getIdboard();
                                }
                                useTotalPrice += price;
                                String descBoard = (String)boardsTextTable.get(Integer.valueOf(idBoard));
                                
                                hotelsXML.append("        <date>").append(dayStr).append("</date>\n");
                                // If the price is 0 the availability is set to 0
                                hotelsXML.append("        <availability>").append(price != 0 ? availability : 0).append("</availability>\n");
                                hotelsXML.append("        <price>").append(price).append("</price>\n");
                                hotelsXML.append("        <idboard>").append(idBoard).append("</idboard>\n");
                                hotelsXML.append("        <descboard>").append(ObjectUtils.escapeXML(descBoard)).append("</descboard>\n");
                                
                                //dayIndex ++;
                                hotelsXML.append("      </day>\n");
                            }
                            hotelsXML.append("    </usedays>\n");
                            
                            ArrayList priceWithWithoutTaxes = calculateReservationPrices(taxPercentageIncluded, taxPercentageNotIncluded, taxAmountIncluded, taxAmountNotIncluded, numDays, useTotalPrice, useoccupation.getMaxadult().intValue());
                            long useTotalPriceWithTaxes = priceWithWithoutTaxes.get(0) != null ? ((Long)priceWithWithoutTaxes.get(0)).longValue() :0 ;
                            long useTotalPriceWithoutTaxes = priceWithWithoutTaxes.get(1) != null ? ((Long)priceWithWithoutTaxes.get(1)).longValue() :0 ;;
                            hotelsXML.append("    <useTotalPriceWithoutTaxes>").append(useTotalPriceWithoutTaxes).append("</useTotalPriceWithoutTaxes>\n");
                            hotelsXML.append("    <useTotalPriceWithTaxes>").append(useTotalPriceWithTaxes).append("</useTotalPriceWithTaxes>\n");
                        }
                        
                        if (useData.getOffers() != null && useData.getOffers().size() > 0) {
                            // Add the information of the offers of the use
                            HashMap offersTable = useData.getOffers();
                            for (Iterator itOffers = offersTable.entrySet().iterator(); itOffers.hasNext(); ) {
                                Entry offerEntry = (Entry)itOffers.next();
                                hotelsXML.append("    <offer>\n");
                                Long idoffer = (Long)offerEntry.getKey();
                                
                                hotelsXML.append("      <id>").append(idoffer).append("</id>\n");
                                
                                MOfferAvailValue offerData = (MOfferAvailValue)offerEntry.getValue();
                                ArrayList offerDays = offerData.getDaysInfo();
                                Hashtable offerRestrictions = (Hashtable)offerData.getRestrictions();
                                MOfferValue offer = (MOfferValue)offerData.getOffer();
                                
                                //String thekeyOffer = idtokenprovider + "_" + offer.getI18nTitle();
                                //String offerDescr = i18ns.offerTitleMessages.getMessage(locale, thekeyOffer);
                                hotelsXML.append("      <desc>").append(ObjectUtils.escapeXML(offerData.getName())).append("</desc>\n");
                                
                                if (offer.getNightsToGetFree() != null && offer.getNightsToGetFree().intValue() > 0) {
                                    hotelsXML.append("      <extra>").append(ObjectUtils.escapeXML(i18ns.interfazMessages.getMessage(locale, "key.offer.free.nights.number",offer.getNightsToGetFree().toString()))).append("</extra>\n");
                                }
                                
                                if (offer.getI18nIncluded() != null) {
                                    //String thekeyIncluded = idtokenprovider + "_" + offer.getI18nIncluded();
                                    //String offerIncluded = i18ns.includedMessages.getMessage(locale, thekeyIncluded);
                                    String offerIncluded = offerData.getIncludes();
                                    if (offerIncluded != null && offerIncluded.trim().length() > 0) {
                                        hotelsXML.append("      <included>").append(ObjectUtils.escapeXML(offerIncluded)).append("</included>\n");
                                    }
                                }
                                
                                // Add the offer restrictions
                                String offerRestrStr = "";
                                for (Iterator itRestrictions = offerRestrictions.entrySet().iterator(); itRestrictions.hasNext(); ) {
                                    Entry restrictionsEntry = (Entry)itRestrictions.next();
                                    String id = (String)restrictionsEntry.getKey();
                                    String value = (String)restrictionsEntry.getValue();
                                    String message = (String)restrictTextTable.get(id);
                                    if (id.equals("minimumStay") || id.equals("maximumStay")) {
                                        String units = (String)restrictTextTable.get("nights");
                                        if (offerRestrStr.length() > 0) {
                                            offerRestrStr += "\n";
                                        }
                                        offerRestrStr += " - " + message + " = " + value + " " + units;
                                    } else if (id.equals("minRoomsPerReservation") || id.equals("maxRoomsPerReservation")) {
                                        String units = (String)restrictTextTable.get("rooms");
                                        if (offerRestrStr.length() > 0) {
                                            offerRestrStr += "\n";
                                        }
                                        offerRestrStr += " - " + message + " = " + value + " " + units;
                                    } else if (id.equals("numDaysInAdvance")) {
                                        String units = (String)restrictTextTable.get("days");
                                        if (offerRestrStr.length() > 0) {
                                            offerRestrStr += "\n";
                                        }
                                        offerRestrStr += " - " + message + " = " + value + " " + units;
                                    } else if (id.equals("arrivalDaysClosed")) {
                                        String daysClosedStr = "";
                                        
                                        Vector daysClosed = (Vector)offerRestrictions.get(id);
                                        
                                        for (int weekDay = 0; weekDay < 7; weekDay ++) {
                                            Boolean isClosedBool = (Boolean)daysClosed.get(weekDay);
                                            boolean isClosed = (isClosedBool != null ? isClosedBool.booleanValue() : true); 
                                            
                                            if (isClosed == true) {
                                                daysClosedStr += restrictTextTable.get("d" + weekDay);
                                            }
                                        }
                                        if (offerRestrStr.length() > 0) {
                                            offerRestrStr += "\n";
                                        }
                                        offerRestrStr += " - " + message + " = " + daysClosedStr;
                                    }
                                }
                                hotelsXML.append("      <restrictions>").append(ObjectUtils.escapeXML(offerRestrStr)).append("</restrictions>\n");
                                
                                long offerTotalPrice = 0;
                                if (offerDays != null && offerDays.size() > 0) {
                                    hotelsXML.append("      <offerdays>\n");
                                    for (Iterator itDays = offerDays.iterator(); itDays.hasNext(); ) {
                                        hotelsXML.append("          <day>\n");
                                        MCacheDayInfoValue availPriceBoard = (MCacheDayInfoValue)itDays.next();
                                        Date day = availPriceBoard.getDate();
                                        String dayStr = dateFormat.format(day);
                                        hotelsXML.append("            <date>").append(dayStr).append("</date>\n");
                                        int availability = 0;
                                        long price = 0;
                                        int idBoard = 0;
                                        boolean isOfferDay = false;
                                        if (availPriceBoard != null) {
                                            availability = availPriceBoard.getAvailability();
                                            price = availPriceBoard.getPrice();
                                            idBoard = availPriceBoard.getIdboard();
                                            isOfferDay = availPriceBoard.getIsOfferDay();
                                            
                                            offerTotalPrice += price;
                                        }
                                        // If the price is 0 the availability is set to 0
                                        hotelsXML.append("            <availability>").append(price != 0 ? availability : 0).append("</availability>\n");
                                        hotelsXML.append("            <price>").append(price).append("</price>\n");
                                        hotelsXML.append("            <idboard>").append(idBoard).append("</idboard>\n");
                                        String descBoard = ObjectUtils.escapeXML((String)boardsTextTable.get(Integer.valueOf(idBoard)));
                                        hotelsXML.append("            <descboard>").append(descBoard).append("</descboard>\n");
                                        hotelsXML.append("            <isofferday>").append(isOfferDay).append("</isofferday>\n");
                                        hotelsXML.append("          </day>\n");
                                    }
                                    hotelsXML.append("      </offerdays>\n");
                                    
                                    ArrayList priceWithWithoutTaxes = calculateReservationPrices(taxPercentageIncluded, taxPercentageNotIncluded, taxAmountIncluded, taxAmountNotIncluded, numDays, offerTotalPrice, useoccupation.getMaxadult().intValue());
                                    long offerTotalPriceWithTaxes = priceWithWithoutTaxes.get(0) != null ? ((Long)priceWithWithoutTaxes.get(0)).longValue() :0 ;
                                    long offerTotalPriceWithoutTaxes = priceWithWithoutTaxes.get(1) != null ? ((Long)priceWithWithoutTaxes.get(1)).longValue() :0 ;;
                                    hotelsXML.append("      <offerTotalPriceWithoutTaxes>").append(offerTotalPriceWithoutTaxes).append("</offerTotalPriceWithoutTaxes>\n");
                                    hotelsXML.append("      <offerTotalPriceWithTaxes>").append(offerTotalPriceWithTaxes).append("</offerTotalPriceWithTaxes>\n");
                                    
                                }
                                hotelsXML.append("    </offer>\n");
                            }
                        }
                    }
                } else {
                    hotelsXML.append("    <hasprices>false</hasprices>\n");                            
                }
                hotelsXML.append("  </use>\n");
            }
            
            hotelsXML.append("</hotel>\n");
        }
        hotelsXML.append("</response>");
        
        System.out.println("JMANUEL: Despues de serializar todos los datos a xml");
        
        return hotelsXML.toString();
    }
    */
}
