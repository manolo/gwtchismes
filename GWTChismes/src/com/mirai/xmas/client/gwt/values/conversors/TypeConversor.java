package com.mirai.xmas.client.gwt.values.conversors;

import java.math.BigDecimal;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Vector;
import java.util.Date;
import java.util.Locale;

import com.hotelebusiness.ReservationSystem.values.MHotelInfoValue;
import com.mirai.xmas.client.gwt.values.client.BoardTypeGWT;
import com.mirai.xmas.client.gwt.values.client.BookingTypeGWT;
import com.mirai.xmas.client.gwt.values.client.BookingValueGWT;
import com.mirai.xmas.client.gwt.values.client.CancellationPenaltyGWT;
import com.mirai.xmas.client.gwt.values.client.CancellationPolicyGWT;
import com.mirai.xmas.client.gwt.values.client.CardGuaranteeGWT;
import com.mirai.xmas.client.gwt.values.client.ForBookingCollectionGWT;
import com.mirai.xmas.client.gwt.values.client.ForBookingObjectGWT;
import com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT;
import com.mirai.xmas.client.gwt.values.client.OccupationGWT;
import com.mirai.xmas.client.gwt.values.client.PriceBoardValueGWT;
import com.mirai.xmas.client.gwt.values.client.ReservationAttributesTranslatedValueGWT;
import com.mirai.xmas.utils.LocaleUtils;
import com.mirai.xmas.values.XBoardType;
import com.mirai.xmas.values.XBookingType;
import com.mirai.xmas.values.XBookingValue;
import com.mirai.xmas.values.XCancellationPenalty;
import com.mirai.xmas.values.XCancellationPolicy;
import com.mirai.xmas.values.XCardGuarantee;
import com.mirai.xmas.values.XForBookingCollection;
import com.mirai.xmas.values.XForBookingObject;
import com.mirai.xmas.values.XOccupation;
import com.mirai.xmas.values.XPriceBoardValue;
import com.mirai.xmas.values.XProvider;
import com.mirai.xmas.values.XReservationAttributesTranslatedValue;
import com.hotelebusiness.ReservationSystem.util.*;


public class TypeConversor {
    public static XOccupation fromOccupationGWTToOccupation(OccupationGWT occuGwt) {
        XOccupation occupation = new XOccupation(occuGwt.getNumAdults(), occuGwt.getNumChildren(), occuGwt.getSuppletoryBeds());
        
        return occupation;
    }
    
    // ######### DE GWT A PARTE SERVIDOR #################
    public static XBoardType fromBoardTypeGWTToBoardType(BoardTypeGWT boardGwt) {
        XBoardType board = new XBoardType(boardGwt.getRateCode(), boardGwt.getRateName());
        board.setBreakfastIncluded(boardGwt.getBreakfastIncluded());
        board.setLunchIncluded(boardGwt.getLunchIncluded());
        board.setDinnerIncluded(boardGwt.getDinnerIncluded());
        board.setMealPlanType(boardGwt.getMealPlanType());
        
        return board;
    }
    
    public static XPriceBoardValue fromPriceBoardValueGWTToPriceBoardValue(PriceBoardValueGWT pbvGwt) {
        XPriceBoardValue pbv = new XPriceBoardValue(pbvGwt.getIdtokenprovider(), pbvGwt.getRoomTypeCode(),
                pbvGwt.getPricedate(), Integer.valueOf(0), new BigDecimal(pbvGwt.getPriceWithTaxesStr()),
                new BigDecimal(pbvGwt.getPriceWithoutTaxesStr()), fromBoardTypeGWTToBoardType(pbvGwt.getBoard()));
        pbv.setIsPriceOffer(pbvGwt.getIsPriceOffer());
        
        return pbv;
    }
    
    public static XPriceBoardValue fromPriceBoardValueGWTToPriceBoardValue(PriceBoardValueGWT pbvGwt, XPriceBoardValue pbvFromAvail) {
        XPriceBoardValue pbv = new XPriceBoardValue(pbvGwt.getIdtokenprovider(), pbvGwt.getRoomTypeCode(),
                pbvGwt.getPricedate(), Integer.valueOf(0), new BigDecimal(pbvGwt.getPriceWithTaxesStr()),
                new BigDecimal(pbvGwt.getPriceWithoutTaxesStr()), pbvFromAvail.getBoard());
        pbv.setIsPriceOffer(pbvGwt.getIsPriceOffer());
        
        return pbv;
    }
    
    /*
    public static BookingType fromForReservationObjectGWTToBookingType(ForReservationObjectGWT froGwt) {
        BookingType line = new BookingType(froGwt.getBookingId(), froGwt.getRoomTypeCode(), froGwt.getRoomTypeName());
        line.setExtraText(froGwt.getExtraText());
        line.setInitDate(froGwt.getInitDate());
        line.setEndDate(froGwt.getEndDate());
        line.setOccupation(fromOccupationGWTToOccupation(froGwt.getOccupation()));        
        line.setTotalPricePerRoomBeforeTax(new BigDecimal(froGwt.getTotalPricePerRoomBeforeTaxStr()));
        line.setTotalPricePerRoomAfterTax(new BigDecimal(froGwt.getTotalPricePerRoomAfterTaxStr()));
        line.setAmountToReserve(froGwt.getAmountToReserve());
        Hashtable priceBoards = new Hashtable();
        for (Iterator itPbs = froGwt.getPriceBoards().entrySet().iterator(); itPbs.hasNext(); ) {
            Entry pbEntry = (Entry)itPbs.next();
            
            String dateStr = (String)pbEntry.getKey();
            PriceBoardValue pbv = fromPriceBoardValueGWTToPriceBoardValue((PriceBoardValueGWT)pbEntry.getValue());
            
            priceBoards.put(dateStr, pbv);
        }
        line.setPriceBoards(priceBoards);
        
        return line;
    }
    */
    
    public static XBookingValue fromForBookingCollectionGWTToBookingValue(ForBookingCollectionGWT frcGwt, Hashtable availableRoomsTable) {
        XBookingValue reservation = new XBookingValue(frcGwt.getIdtokenprovider(), frcGwt.getCheckinDate(), frcGwt.getCheckoutDate());
        reservation.setLanguageCode(frcGwt.getLanguageCode());
        reservation.setCancelled(false);
        
        for (Iterator itLines = frcGwt.getReservationLines().iterator(); itLines.hasNext(); ) {
            ForBookingObjectGWT froGwt = (ForBookingObjectGWT)itLines.next();
            if (froGwt.getAmountToReserve() > 0) {
                XForBookingObject froFromAvailab = (XForBookingObject)availableRoomsTable.get(froGwt.getBookingId());
                XBookingType line = TypeConversor.fromBookingTypeGWTToBookingType(froGwt, froFromAvailab);
                
                reservation.addReservationLine(line);
            }
        }
        
        return reservation;
    }
    
    public static XBookingType fromBookingTypeGWTToBookingType(BookingTypeGWT lineGwt, XForBookingObject froFromAvail) {
        
        XBookingType line = new XBookingType(froFromAvail.getBookingId(), froFromAvail.getRoomTypeCode(), froFromAvail.getRoomTypeName());
        line.setExtraText(lineGwt.getExtraText());
        line.setInitDate(lineGwt.getInitDate());
        line.setEndDate(lineGwt.getEndDate());
        line.setOccupation(fromOccupationGWTToOccupation(lineGwt.getOccupation()));        
        line.setTotalPricePerRoomBeforeTax(new BigDecimal(lineGwt.getTotalPricePerRoomBeforeTaxStr()));
        line.setTotalPricePerRoomAfterTax(new BigDecimal(lineGwt.getTotalPricePerRoomAfterTaxStr()));
        line.setAmountToReserve(lineGwt.getAmountToReserve());
        Vector priceBoards = new Vector();
        int pbvIndex = 0;
        for (Iterator itPbs = froFromAvail.getPriceBoards().iterator(); itPbs.hasNext(); ) {
            XPriceBoardValue pbvFromAvail = (XPriceBoardValue)itPbs.next();
            //PriceBoardValue pbv = fromPriceBoardValueGWTToPriceBoardValue((PriceBoardValueGWT)pbEntry.getValue());
            
            priceBoards.add(pbvFromAvail);
            pbvIndex ++;
        }
        line.setPriceBoards(priceBoards);
        
        return line;
    }
    
    public static XBookingType fromBookingTypeGWTToBookingType(BookingTypeGWT lineGwt) {
        
        XBookingType line = new XBookingType(lineGwt.getBookingId(), lineGwt.getRoomTypeCode(), lineGwt.getRoomTypeName());
        line.setExtraText(lineGwt.getExtraText());
        line.setInitDate(lineGwt.getInitDate());
        line.setEndDate(lineGwt.getEndDate());
        line.setOccupation(fromOccupationGWTToOccupation(lineGwt.getOccupation()));        
        line.setTotalPricePerRoomBeforeTax(new BigDecimal(lineGwt.getTotalPricePerRoomBeforeTaxStr()));
        line.setTotalPricePerRoomAfterTax(new BigDecimal(lineGwt.getTotalPricePerRoomAfterTaxStr()));
        line.setAmountToReserve(lineGwt.getAmountToReserve());
        Vector priceBoards = new Vector();
        for (Iterator itPbs = lineGwt.getPriceBoards().iterator(); itPbs.hasNext(); ) {
            XPriceBoardValue pbv = fromPriceBoardValueGWTToPriceBoardValue((PriceBoardValueGWT)itPbs.next());
            
            priceBoards.add(pbv);
        }
        line.setPriceBoards(priceBoards);
        
        return line;
    }
    
    public static XCancellationPenalty fromCancellationPenaltyGWTToCancellationPenalty(CancellationPenaltyGWT penaltyGwt) {
        XCancellationPenalty penalty = new XCancellationPenalty();
        
        if (penaltyGwt.getAmountStr() != null) {
            penalty.setAmount(new BigDecimal(penaltyGwt.getAmountStr()));
        }
        if (penaltyGwt.getPercentStt() != null) {
            penalty.setPercent(new BigDecimal(penaltyGwt.getPercentStt()));
        }
        penalty.setNumberOfNights(penaltyGwt.getNumberOfNights());
        penalty.setIsRefundable(penaltyGwt.getIsRefundable());
        
        return penalty;
    }
    
    /*
    public static CancellationPolicy fromCancellationPolicyGWTToCancellationPolicy(CancellationPolicyGWT policyGwt) {
        CancellationPolicy policy = new CancellationPolicy();
        
        policy.setPolicyTextI18nKey(policyGwt.getPolicyTextI18nKey());
        policy.setMinutesBeforeCheckinForNoShow(policyGwt.getMinutesBeforeCheckinForNoShow());
        policy.setMinutesBeforeCheckinForCancelPenalty(policyGwt.getMinutesBeforeCheckinForCancelPenalty());
        if (policyGwt.getPrepaymentPenalty() != null) {
            policy.setPrepaymentPenalty(fromCancellationPenaltyGWTToCancellationPenalty(policyGwt.getPrepaymentPenalty()));
        }
        if (policyGwt.getNoShowPenalty() != null) {
            policy.setNoShowPenalty(fromCancellationPenaltyGWTToCancellationPenalty(policyGwt.getNoShowPenalty()));
        }
        if (policyGwt.getCancellationPenalty() != null) {
            policy.setCancellationPenalty(fromCancellationPenaltyGWTToCancellationPenalty(policyGwt.getCancellationPenalty()));
        }
        return policy;
    }
    */
    
    public static XCardGuarantee fromCardGuaranteeGWTToCardGuarantee(CardGuaranteeGWT guarantGwt) {
        XCardGuarantee garant = new XCardGuarantee(guarantGwt.getIdReservationMirai(), guarantGwt.getCardTypeCode(),
                guarantGwt.getCardName(), guarantGwt.getCardNumber(), guarantGwt.getCvv2(), guarantGwt.getUntilMonth(),
                guarantGwt.getUntilYear());
        return garant;
    }
    
    
    public static XBookingValue fromBookingValueGWTToBookingValue(BookingValueGWT bvGwt) {
        return fromBookingValueGWTToBookingValue(bvGwt, null);
    }
    
    public static XBookingValue fromBookingValueGWTToBookingValue(BookingValueGWT bvGwt, Hashtable availableRoomsTable) {
        XBookingValue reservation = new XBookingValue(bvGwt.getIdtokenprovider(), bvGwt.getCheckinDate(), bvGwt.getCheckoutDate());
        reservation.setIdReservationHotel(bvGwt.getIdReservationHotel());
        reservation.setIdReservationMirai(bvGwt.getIdReservationMirai());
        reservation.setLanguageCode(bvGwt.getLanguageCode());
        reservation.setCurrencyCode(bvGwt.getCurrencyCode());
        
        // TODO: meter atributos reservation.setAttributes(bvGwt.getAttributes());
        
        reservation.setReservationDate(bvGwt.getReservationDate());
        if (bvGwt.getTotalPriceBeforeTaxStr() == null) {
            System.out.println("en TypeConversor.fromBookingValueGWTToBookingValue. totalpriceBeforeTax es nulo. VA a petar");
        }
        reservation.setTotalPriceBeforeTax(new BigDecimal(bvGwt.getTotalPriceBeforeTaxStr()));
        reservation.setTotalPriceAfterTax(new BigDecimal(bvGwt.getTotalPriceAfterTaxStr()));
        
        reservation.setCancelled(bvGwt.getCancelled());
        reservation.setCancelCode(bvGwt.getCancelCode());
        reservation.setCancelDate(bvGwt.getCancelDate());
        reservation.setGuarantee(bvGwt.getGuarantee());
        for (Iterator itLines = bvGwt.getReservationLines().iterator(); itLines.hasNext(); ) {
            BookingTypeGWT btGwt = (BookingTypeGWT)itLines.next();
            XBookingType line = null;
            if (availableRoomsTable != null && availableRoomsTable.size() > 0) {
                XForBookingObject froAvail = (XForBookingObject)availableRoomsTable.get(btGwt.getBookingId());
                line = fromBookingTypeGWTToBookingType(btGwt, froAvail);
            } else {
                line = fromBookingTypeGWTToBookingType(btGwt);
            }
            
            reservation.addReservationLine(line);
        }
        
        //reservation.setCancellationPolicy(fromCancellationPolicyGWTToCancellationPolicy(bvGwt.getCancellationPolicy()));
        
        reservation.setClientFirstName(bvGwt.getClientFirstName());
        reservation.setClientLastName(bvGwt.getClientLastName());
        reservation.setClientEmail(bvGwt.getClientEmail());
        reservation.setClientPhone(bvGwt.getClientPhone());
        reservation.setClientFax(bvGwt.getClientFax());
        reservation.setClientCountry(bvGwt.getClientCountry());
        reservation.setClientCompany(bvGwt.getClientCompany());
        reservation.setClientComments(bvGwt.getClientComments());
        
        reservation.setGuarantee(bvGwt.getGuarantee());
        reservation.setCommission(bvGwt.getCommission());
        reservation.setIp(bvGwt.getIp());
        
        reservation.setIdCompanyMirai(bvGwt.getIdCompanyMirai());
        
        // TODO: Faltan campos
        
        return reservation;
    }
    
    // ######### DE PARTE SERVIDORA A GWT #################
    public static BoardTypeGWT fromBoardTypeToBoardTypeGWT(XBoardType bt) {
        BoardTypeGWT btGwt = new BoardTypeGWT();
        btGwt.setRateCode(bt.getRateCode());
        btGwt.setRateName(bt.getRateName());
        btGwt.setBreakfastIncluded(bt.getBreakfastIncluded());
        btGwt.setLunchIncluded(bt.getLunchIncluded());
        btGwt.setDinnerIncluded(bt.getDinnerIncluded());
        btGwt.setMealPlanType(bt.getMealPlanType());
        
        return btGwt;
    }
    
    public static PriceBoardValueGWT fromPriceBoardValueToPriceBoardValueGWT(XPriceBoardValue pbv, String currencyCode) {
        PriceBoardValueGWT pbvGwt = new PriceBoardValueGWT();
        pbvGwt.setIdtokenprovider(pbv.getIdtokenprovider());
        pbvGwt.setRoomTypeCode(pbv.getRoomTypeCode());
        pbvGwt.setPricedate(pbv.getPricedate());
        pbvGwt.setPriceWithoutTaxesStr(pbv.getPriceWithoutTaxes().toString());
        pbvGwt.setPriceWithTaxesStr(pbv.getPriceWithTaxes().toString());
        pbvGwt.setPriceWithTaxesLong(LocaleUtils.changeCurrencyToLong(pbv.getPriceWithTaxes(), currencyCode));
        pbvGwt.setIsPriceOffer(pbv.getIsPriceOffer());
        pbvGwt.setBoard(fromBoardTypeToBoardTypeGWT(pbv.getBoard()));
        
        return pbvGwt;
    }
    
    public static OccupationGWT fromOccupationToOccupationGWT(XOccupation occupation) {
        if (occupation == null) {
            return null;
        }
        
        OccupationGWT occGwt = new OccupationGWT();
        occGwt.setNumAdults(occupation.getNumAdults());
        occGwt.setNumChildren(occupation.getNumChildren());
        occGwt.setSuppletoryBeds(occupation.getSuppletoryBeds());
        
        return occGwt;
    }
    
    public static ForBookingObjectGWT fromForBookingObjectToFromBookingObjectGWT(XForBookingObject fro, String currencyCode) {
        ForBookingObjectGWT froGwt = new ForBookingObjectGWT();
        froGwt.setBookingId(fro.getBookingId());
        froGwt.setRoomTypeCode(fro.getRoomTypeCode());
        froGwt.setRoomTypeName(fro.getRoomTypeName());
        froGwt.setAvailableRoomsAmountVector(fro.getAvailableRoomsAmountVector());
        
        froGwt.setTotalPricePerRoomBeforeTaxLong(LocaleUtils.changeCurrencyToLong(fro.getTotalPricePerRoomBeforeTax(), currencyCode));
        froGwt.setTotalPricePerRoomAfterTaxLong(LocaleUtils.changeCurrencyToLong(fro.getTotalPricePerRoomAfterTax(), currencyCode));
        
        froGwt.setTotalPricePerRoomBeforeTaxStr(fro.getTotalPricePerRoomBeforeTax().toString());
        froGwt.setTotalPricePerRoomAfterTaxStr(fro.getTotalPricePerRoomAfterTax().toString());
        froGwt.setOccupation(fromOccupationToOccupationGWT(fro.getOccupation()));
        Vector priceBoardsGwt = new Vector();
        if (fro.getPriceBoards() == null || fro.getPriceBoards().size() == 0) {
            System.out.println("En TypeConversor. fromForReservationObjectToFromReservationObjectGWT. getPriceBoards es nulo o vacio. Va mal");
        }
        for (Iterator itPriceBoards = fro.getPriceBoards().iterator(); itPriceBoards.hasNext(); ) {
            XPriceBoardValue pbv = (XPriceBoardValue)itPriceBoards.next();
            
            priceBoardsGwt.add(fromPriceBoardValueToPriceBoardValueGWT(pbv, currencyCode));
        }
        froGwt.setPriceBoards(priceBoardsGwt);
        
        return froGwt;
    }
    
    public static ForBookingCollectionGWT newDummyBookingColldecionGWT(Long id, Date in, Date out) {
        ForBookingCollectionGWT frcGwt = new ForBookingCollectionGWT();
        frcGwt.setIdtokenprovider(id);
        frcGwt.setCheckinDate(in);
        frcGwt.setCheckoutDate(out);
        frcGwt.setCurrencyCode("EUR");
        frcGwt.setCurrencyNumDecimals(2);
        Vector fechas = new Vector();
        Date cur = new Date(in.getTime());
        while (CalendarUtils.dateCompare(cur, out) < 0) {
            fechas.add(cur);
            CalendarUtils.addDaysToDate(cur, 1);
        }
        return frcGwt;
    }
    public static ForBookingCollectionGWT fromForBookingCollectionToForBookingCollectionGWT(XForBookingCollection frc) {
        ForBookingCollectionGWT frcGwt = new ForBookingCollectionGWT();
        frcGwt.setIdtokenprovider(frc.getIdtokenprovider());
        frcGwt.setCheckinDate(frc.getCheckinDate());
        frcGwt.setCheckoutDate(frc.getCheckoutDate());
        frcGwt.setCurrencyCode(frc.getCurrencyCode());
        String languageCode = frc.getLanguageCode();
        String currencyCode = frc.getCurrencyCode();
        frcGwt.setLanguageCode(languageCode);
        frcGwt.setCurrencyNumDecimals(LocaleUtils.getNumDecimalsCurrency(currencyCode));
        Locale locale = new Locale(languageCode);
        frcGwt.setCurrencyDecimalSeparator(LocaleUtils.getDecimalSeparator(locale));
        frcGwt.setCurrencySymbol(LocaleUtils.getCurrencySymbol(currencyCode, locale));
        frcGwt.setDatesSelected(frc.getDatesSelected());
        frcGwt.setLanguageCode(frc.getLanguageCode());
        Vector froGwtList = new Vector();
        
        System.out.println("CurrencyCode: " + currencyCode);
        for (Iterator itForResObjs = frc.getForReservationObjects().iterator(); itForResObjs.hasNext(); ) {
            XForBookingObject fro = (XForBookingObject)itForResObjs.next();
            
            ForBookingObjectGWT froGwt = TypeConversor.fromForBookingObjectToFromBookingObjectGWT(fro, currencyCode);
            froGwtList.add(froGwt);
        }
        frcGwt.setReservationLines(froGwtList);
        
        return frcGwt;
    }
    
    public static BookingTypeGWT fromBookingTypeToBookingTypeGWT(XBookingType line, String currencyCode) {
        BookingTypeGWT lineGwt = new BookingTypeGWT();
        lineGwt.setBookingId(line.getBookingId());
        lineGwt.setRoomTypeCode(line.getRoomTypeCode());
        lineGwt.setRoomTypeName(line.getRoomTypeName());
        lineGwt.setInitDate(line.getInitDate());
        lineGwt.setEndDate(line.getEndDate());
        lineGwt.setExtraText(line.getExtraText());
        lineGwt.setOccupation(fromOccupationToOccupationGWT(line.getOccupation()));
        int currencyNumDecimals = LocaleUtils.getNumDecimalsCurrency(currencyCode);
        lineGwt.setTotalPricePerRoomAfterTaxStr(line.getTotalPricePerRoomAfterTax().toString());
        lineGwt.setTotalPricePerRoomBeforeTaxStr(line.getTotalPricePerRoomBeforeTax().toString());
        lineGwt.setTotalPricePerRoomAfterTaxLong(LocaleUtils.changeCurrencyToLong(line.getTotalPricePerRoomAfterTax(), currencyNumDecimals));
        lineGwt.setTotalPricePerRoomBeforeTaxLong(LocaleUtils.changeCurrencyToLong(line.getTotalPricePerRoomBeforeTax(), currencyNumDecimals));
        Vector priceBoardsGwt = new Vector();
        for (Iterator itPriceBoards = line.getPriceBoards().iterator(); itPriceBoards.hasNext(); ) {
            XPriceBoardValue pbv = (XPriceBoardValue)itPriceBoards.next();
            
            priceBoardsGwt.add(fromPriceBoardValueToPriceBoardValueGWT(pbv, currencyCode));
        }
        lineGwt.setPriceBoards(priceBoardsGwt);
        
        lineGwt.setAmountToReserve(line.getAmountToReserve());
        
        return lineGwt;
    }
    
    public static CancellationPenaltyGWT fromCancellationPenaltyToCancellationPenaltyGWT(XCancellationPenalty penalty, String currencyCode) {
        CancellationPenaltyGWT penaltyGwt = new CancellationPenaltyGWT();
        
        if (penalty.getAmount() != null) {
            penaltyGwt.setAmountLong(LocaleUtils.changeCurrencyToLong(penalty.getAmount(), currencyCode));
            
            penaltyGwt.setAmountStr(penalty.getAmount().toString());
        }
        if (penalty.getPercent() != null) {
            penaltyGwt.setPercentStr(penalty.getPercent().toString());
            penaltyGwt.setPercentLong(penalty.getPercent().multiply(BigDecimal.valueOf(100)).longValue());
        }
        penaltyGwt.setNumberOfNights(penalty.getNumberOfNights());
        penaltyGwt.setIsRefundable(penalty.getIsRefundable());
        
        return penaltyGwt;
    }
    
    public static CancellationPolicyGWT fromCancellationPolicyToCancellationPolicyGWT(XCancellationPolicy policy, String currencyCode) {
        CancellationPolicyGWT policyGwt = new CancellationPolicyGWT();
        
        //policyGwt.setPolicyCode(policy.getPolicyCode());
        //policyGwt.setPolicyTextI18nKey(policy.getPolicyTextI18nKey());
        policyGwt.setMinutesBeforeCheckinForCancelPenalty(policy.getMinutesBeforeCheckinForCancelPenalty());
        policyGwt.setMinutesBeforeCheckinForNoShow(policy.getMinutesBeforeCheckinForNoShow());
        if (policy.getNoShowPenalty() != null) {
            policyGwt.setNoShowPenalty(fromCancellationPenaltyToCancellationPenaltyGWT(policy.getNoShowPenalty(), currencyCode));
        }
        if (policy.getPrepaymentPenalty() != null) {
            policyGwt.setPrepaymentPenaltyGWT(fromCancellationPenaltyToCancellationPenaltyGWT(policy.getPrepaymentPenalty(), currencyCode));
        }
        if (policy.getCancellationPenalty() != null) {
            policyGwt.setCancellationPenalty(fromCancellationPenaltyToCancellationPenaltyGWT(policy.getCancellationPenalty(), currencyCode));
        }
        
        return policyGwt;
    }
    
    public static BookingValueGWT fromBookingValueToBookingValueGWT(XBookingValue book) {
        return fromBookingValueToBookingValueGWT(book, null);
    }
    
    public static BookingValueGWT fromBookingValueToBookingValueGWT(XBookingValue book, String cancelPolicyI18n) {
        BookingValueGWT bookGwt = new BookingValueGWT();
        
        bookGwt.setIdReservationMirai(book.getIdReservationMirai());
        bookGwt.setIdReservationHotel(book.getIdReservationHotel());
        bookGwt.setIdtokenprovider(book.getIdtokenprovider());
        bookGwt.setCheckinDate(book.getCheckinDate());
        bookGwt.setCheckoutDate(book.getCheckoutDate());
        String currencyCode = book.getCurrencyCode();
        bookGwt.setCurrencyCode(currencyCode);
        int currencyNumDecimals = LocaleUtils.getNumDecimalsCurrency(currencyCode);
        String languageCode = book.getLanguageCode();
        System.out.println("Currency for BookingValue: " + currencyCode + ", languageCode: " + languageCode);        
        Locale locale = new Locale(languageCode);
        bookGwt.setCurrencyDecimalSeparator(LocaleUtils.getDecimalSeparator(locale));
        bookGwt.setCurrencySymbol(LocaleUtils.getCurrencySymbol(currencyCode, locale));
        System.out.println("NumDecimals para " + currencyCode + " : " + currencyNumDecimals);
        bookGwt.setCurrencyNumDecimals(currencyNumDecimals);
        bookGwt.setLanguageCode(languageCode);
        Vector reservationLinesGwt = new Vector();
        for (Iterator itReservLines = book.getReservationLines().iterator(); itReservLines.hasNext(); ) {
            XBookingType line = (XBookingType)itReservLines.next();
            
            BookingTypeGWT lineGwt = fromBookingTypeToBookingTypeGWT(line, currencyCode);
            /*
            if (lineGwt.getRoomTypeName() == null || lineGwt.getRoomTypeName().trim().length() ==0) {
                if (availableRooms != null) {
                    ForReservationObject avafro = (ForReservationObject)availableRooms.get(lineGwt.getBookingId());
                    if (avafro.getRoomTypeName() != null) {
                        lineGwt.setRoomTypeName(avafro.getRoomTypeName());
                    }
                }
            }
            */
            reservationLinesGwt.add(lineGwt);
        }
        bookGwt.setReservationLines(reservationLinesGwt);
        bookGwt.setGuarantee(book.getGuarantee());
        bookGwt.setTotalPriceBeforeTaxStr(book.getTotalPriceBeforeTax().toString());
        bookGwt.setTotalPriceAfterTaxStr(book.getTotalPriceAfterTax().toString());
        bookGwt.setTotalPriceBeforeTaxLong(LocaleUtils.changeCurrencyToLong(book.getTotalPriceBeforeTax(), currencyNumDecimals));
        bookGwt.setTotalPriceAfterTaxLong(LocaleUtils.changeCurrencyToLong(book.getTotalPriceAfterTax(), currencyNumDecimals));
        
        // TODO: meter atributos bookGwt.setAttributes(book.getAttributes());
        
        bookGwt.setCancelCode(book.getCancelCode());
        bookGwt.setCancelDate(book.getCancelDate());
        if (book.getCancellationPolicy() != null) {
            bookGwt.setCancellationPolicy(fromCancellationPolicyToCancellationPolicyGWT(book.getCancellationPolicy(), currencyCode));
        }
        bookGwt.setCancelled(book.getCancelled());
        bookGwt.setClientFirstName(book.getClientFirstName());
        bookGwt.setClientComments(book.getClientComments());
        bookGwt.setClientCompany(book.getClientCompany());
        bookGwt.setClientLastName(book.getClientLastName());
        bookGwt.setClientEmail(book.getClientEmail());
        bookGwt.setClientPhone(book.getClientPhone());
        bookGwt.setClientCountry(book.getClientCountry());
        
        bookGwt.setCommission(book.getCommission());
        bookGwt.setHsri(book.getHsri());
        bookGwt.setHsli(book.getHsli());
        bookGwt.setDatesSelected(book.getDatesSelected());
        bookGwt.setCancellationPolicyI18n(cancelPolicyI18n);
        
        return bookGwt;
    }
    
    public static HotelInfoValueGWT fromHotelInfoValueToHotelInfoValueGWT(MHotelInfoValue hiv, XProvider xmasprovider) {
        HotelInfoValueGWT hivGwt = new HotelInfoValueGWT();
        
        hivGwt.setIdhotel(hiv.getIdhotel());
        hivGwt.setXidChain(xmasprovider.getXidChain());
        hivGwt.setXidHotel(xmasprovider.getXidHotel());
        hivGwt.setName(hiv.getName());
        hivGwt.setType(hiv.getType());
        hivGwt.setCategory(hiv.getCategory());
        hivGwt.setAddress(hiv.getAddress());
        hivGwt.setCp(hiv.getCp());
        hivGwt.setIdProvince(hiv.getIdProvince());
        hivGwt.setIdCountry(hiv.getIdCountry());
        hivGwt.setCountry(hiv.getCountry());
        hivGwt.setLanguage(hiv.getLanguage());
        hivGwt.setEmail(hiv.getEmail());
        hivGwt.setFax(hiv.getFax());
        hivGwt.setLocation(hiv.getLocation());
        hivGwt.setProvince(hiv.getProvince());
        
        return hivGwt;
    }
    
    public static Vector fromAttributesTranslatedToAttributesTranslatedGWT(Vector attributes) {
        Vector attributesGwt = new Vector();
        
        if (attributes != null && attributes.size() > 0) {
            for (Iterator itAttributes = attributes.iterator(); itAttributes.hasNext(); ) {
                XReservationAttributesTranslatedValue attr = (XReservationAttributesTranslatedValue)itAttributes.next();
                
                ReservationAttributesTranslatedValueGWT attrGwt = new ReservationAttributesTranslatedValueGWT();
                attrGwt.setIdreservation(attr.getIdreservation());
                attrGwt.setIdtitle18n(attr.getIdtitle18n());
                attrGwt.setIdtype(attr.getIdtype());
                attrGwt.setIdvalue18n(attr.getIdvalue18n());
                attrGwt.setLanguageCode(attr.getLanguageCode());
                attrGwt.setTitle(attr.getTitle());
                attrGwt.setValue(attr.getValue());
                
                System.out.println("Attribute transformandose: " + attr.toString());
                
                attributesGwt.add(attrGwt);
            }
        }
        return attributesGwt;
    }
}