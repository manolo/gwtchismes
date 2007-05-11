/*
 */

package com.mirai.xmas.client.gwt.NH.client.controls;

import java.util.Date;
import java.util.Vector;

import com.google.gwt.user.client.ui.*;
import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.mirai.xmas.client.gwt.utils.client.HelperClientGwt;
import com.mirai.xmas.client.gwt.values.client.ForBookingCollectionGWT;
import com.mirai.xmas.client.gwt.values.client.ForBookingObjectGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;
import com.mirai.xmas.client.gwt.values.client.PriceBoardValueGWT;
import com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT;
import com.mirai.xmas.client.gwt.values.client.AssociatedHotelsListGWT;

public class ResStep2 extends Composite {
    private ForBookingCollectionGWT frcGwt = null;
    private AssociatedHotelsListGWT associatedHotels = null;
    
    private I18nGWT strs = new I18nGWT();
    
    // Widgets
    private FlexTable externalGrid = new FlexTable();
    
    // Internationlizable widgets
    private Label lblTotalPriceValueTop = new Label("");
    private Label lblTotalPriceValueBotton = new Label("");
    private Button nextButton = new Button("Next");
    //private Button backButton = new Button("Back");
    
    private String currencySymbol = null;
    private String currencySeparator = null;
    private int currencyNumDecimals = 2;
    
    // Listeners
    private HotelInfoValueGWT selectedHotel = null;
    private ClickListener selectHotelListener = null;
    
    // Constructor
    public ResStep2() {
        initWidget(externalGrid);
        externalGrid.setStyleName("Step2_Container");
        nextButton.addStyleName("step2_NextButton");
        
        nextButton.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                if (nextStepListener != null)
                    nextStepListener.onClick(sender);
            }
        });
    }
    
    // Getters y setters
    public HotelInfoValueGWT getSelectedHotel() {
        return selectedHotel;
    }
    
    public void setSelectedHotelListener(ClickListener selectedHotelListener) {
        this.selectHotelListener = selectedHotelListener;
    }
    
    public long getTotalPrice() {
        return calculateTotalPrice();
    }

    public ForBookingCollectionGWT getForReservationcollection() {
        return frcGwt;
    }
    
    // Internationalization
    public void setLocale(I18nGWT strs) {
        this.strs = strs;
        nextButton.setText(strs.getMsg("key.next"));
    }
    
    
    private void showAvailableRooms() {
        externalGrid.clear();
        
        if (frcGwt == null || frcGwt.getReservationLines() == null || frcGwt.getReservationLines().size() == 0)
            return;
        
        FlexTable grd = new FlexTable();
        externalGrid.setWidget(0, 0, grd);
        externalGrid.setWidget(1, 0, nextButton);
        
        currencySymbol = " " + frcGwt.getCurrencySymbol();
        currencySeparator = frcGwt.getCurrencyDecimalSeparator();
        currencyNumDecimals = frcGwt.getCurrencyNumDecimals();
        
        int numRoomTypes = frcGwt.getReservationLines().size();
        int numDatesSelected = frcGwt.getDatesSelected().size();
        
        grd.setStyleName("step2_table");
        
        int idx = 2;
        // Headers
        grd.getRowFormatter().addStyleName(idx, "step2_row1");
        
        // Vemos si se anhade la columna de subtotal (st)
        int st = numDatesSelected > 1 ? 1 : 0;
        // Se deshabilita la columna de suma de precios parcial (subtotal) poniendo st = 0.
        st = 0;
        if (st == 1) {
            grd.setText(idx, numDatesSelected + st + 2, strs.getMsg("key.offers.total"));
            grd.getCellFormatter().addStyleName(idx, numDatesSelected + st + 2, "step2_cell_partial_title");
        }
        grd.setText(idx, numDatesSelected + st + 3 , strs.getMsg("key.offers.amountrooms"));
        grd.getCellFormatter().addStyleName(idx, numDatesSelected + st + 3, "step2_cell_amount_title");
        for (int dateIndex = 0; dateIndex < numDatesSelected; dateIndex++) {
            Date currentDate = (Date) frcGwt.getDatesSelected().get(dateIndex);
            grd.setText(idx, 3 + dateIndex, GWTCDatePicker.formatDate("ddd dd MMM", currentDate, strs.months, strs.days));
            grd.getCellFormatter().addStyleName(idx, 3 + dateIndex, "step2_date");
        }
        idx++;
        
        // Habitaciones
        String last_room = "";
        boolean par = true;
        int fidx = 1;
        for (int roomIndex = 1; roomIndex <= numRoomTypes; roomIndex++, idx++) {

            ForBookingObjectGWT froGwt = (ForBookingObjectGWT) frcGwt.getReservationLines().get(roomIndex - 1);

            // N~apa para evitar habitaciones con regimen
            PriceBoardValueGWT p = (PriceBoardValueGWT) froGwt.getPriceBoards().get(0);
            String thisBoard = p.getBoard().getRateName();
            if (! thisBoard.startsWith("Rate BAR_HA"))
                continue;
            thisBoard = thisBoard.replaceFirst("Rate BAR_HA", "");

            String current_room = froGwt.getRoomTypeCode();
            if (!current_room.equals(last_room)) {
                grd.setText(idx, 1, froGwt.getRoomTypeName());
                grd.getCellFormatter().addStyleName(idx, 1, "step2_roomname");
                grd.getRowFormatter().addStyleName(idx, "step2_row_room");
                for (; fidx < idx; fidx++) {
                    grd.getRowFormatter().addStyleName(fidx, par ? "step2_even" : "step2_odd");
                }
                par = !par;
                last_room = current_room;
            } else {
                grd.getCellFormatter().addStyleName(idx, 0, "step2_cell_noroom");
                grd.getCellFormatter().addStyleName(idx, 1, "step2_cell_noroom");
                grd.getRowFormatter().addStyleName(idx, "step2_row_normal");
            }

            grd.setText(idx, 2, strs.getMsg("key.occupation_" + froGwt.getOccupation().getNumAdults()));
            grd.getCellFormatter().addStyleName(idx, 2, "step2_offer");
            
            for (int dateIndex = 0; dateIndex < numDatesSelected; dateIndex++) {
                PriceBoardValueGWT priceBoard = (PriceBoardValueGWT) froGwt.getPriceBoards().get(dateIndex);
                
                if (priceBoard == null)
                    continue;
                
                Label lblPriceHolder = new Label(HelperClientGwt.getPriceWithDecimals(priceBoard.getPriceWithTaxesLong().longValue(), frcGwt.getCurrencyNumDecimals(), frcGwt.getCurrencyDecimalSeparator()));
                
                final PopupPanel popBoard = new PopupPanel(true);
                //popBoard.add(new Label(priceBoard.getBoard().getRateName()));
                popBoard.add(new Label(thisBoard));
                popBoard.setVisible(false);
                popBoard.setStyleName("step2_popup_board");

                HTMLPanel pnlPriceBoard = new HTMLPanel("<div id=step2_day_price></div><div id=step2_day_pop></div>");
                grd.setWidget(idx, 3 + dateIndex, pnlPriceBoard);
                grd.getCellFormatter().addStyleName(idx, 3 + dateIndex, "step2_rates");
                pnlPriceBoard.add(lblPriceHolder, "step2_day_price");
                
                if (thisBoard.length() > 0 ){
                    pnlPriceBoard.add(popBoard, "step2_day_pop");
                    lblPriceHolder.addMouseListener(new MouseListener() {
                        boolean in = false;
                        public void onMouseUp(Widget sender, int x, int y) {
                        }
                        public void onMouseMove(Widget sender, int x, int y) {
                            if (!in) {
                                in = true;
                                popBoard.setVisible(true);
                            }
                        }
                        public void onMouseLeave(Widget sender) {
                            if (in) {
                                in = false;
                                popBoard.setVisible(false);
                            }
                        }
                        public void onMouseEnter(Widget sender) {
                        }
                        public void onMouseDown(Widget sender, int x, int y) {
                        }
                    });
                }
            }
            if (st == 1){
                grd.setText(idx, numDatesSelected + st + 2, HelperClientGwt.getPriceWithDecimals(froGwt.getTotalPricePerRoomAfterTaxLong().longValue(), currencyNumDecimals, currencySeparator) + currencySymbol);
                grd.getCellFormatter().addStyleName(idx, numDatesSelected + st + 2, "step2_partial_price");
            }

            ListBox cboAvailableRooms = new ListBox();
            cboAvailableRooms.setName(froGwt.getBookingId());
            for (int avaIndex = 0; avaIndex < froGwt.getAvailableRoomsAmountVector().size(); avaIndex++) {
                String v = ((Integer) froGwt.getAvailableRoomsAmountVector().get(avaIndex)).toString();
                cboAvailableRooms.addItem(v, v);
            }
            cboAvailableRooms.addStyleName("step2_select");
            grd.setWidget(idx, numDatesSelected + st + 3, cboAvailableRooms);
            
            final Label subtotal = new Label(HelperClientGwt.getPriceWithDecimals(0, currencyNumDecimals, currencySeparator) + currencySymbol);
            grd.setWidget(idx, numDatesSelected + st + 4, subtotal);
            grd.getCellFormatter().addStyleName(idx, numDatesSelected + st + 4, "step2_subtotal");
            cboAvailableRooms.addChangeListener(new ChangeListener() {
                public void onChange(Widget sender) {
                    roomSelectionChanged( (ListBox)sender, subtotal);
                }
            });
        }
        for (; fidx < idx; fidx++) {
            grd.getRowFormatter().addStyleName(fidx, par ? "step2_even" : "step2_odd");
        }
        int tmp = idx;
        
        // Top Total
        idx = 0;
        lblTotalPriceValueTop.addStyleName("step2_total_price_value_top");
        grd.getRowFormatter().addStyleName(idx, "row_total_top");
        grd.setText(idx, 0, strs.getMsg("key.total.price"));
        grd.setWidget(idx, 1, lblTotalPriceValueTop);
        grd.getFlexCellFormatter().setColSpan(idx, 0, numDatesSelected + st + 4);
        idx++;
        grd.getRowFormatter().addStyleName(idx, "row_taxes_top");
        grd.setText(idx, 0, strs.getMsg("key.tax.included"));
        grd.getFlexCellFormatter().setColSpan(idx, 0, numDatesSelected + st + 5);
        
        idx=tmp;
        lblTotalPriceValueTop.addStyleName("step2_total_price_value_botton");
        grd.getRowFormatter().addStyleName(idx, "row_total_botton");
        grd.setText(idx, 0, strs.getMsg("key.total.price"));
        grd.setWidget(idx, 1, lblTotalPriceValueBotton);
        grd.getFlexCellFormatter().setColSpan(idx, 0, numDatesSelected + st + 4);
        idx++;
        grd.getRowFormatter().addStyleName(idx, "row_taxes_botton");
        grd.setText(idx, 0, strs.getMsg("key.tax.included"));
        grd.getFlexCellFormatter().setColSpan(idx, 0, numDatesSelected + st + 5);

        lblTotalPriceValueTop.setText(HelperClientGwt.getPriceWithDecimals(0, currencyNumDecimals, currencySeparator) + currencySymbol);
        lblTotalPriceValueBotton.setText(HelperClientGwt.getPriceWithDecimals(0, currencyNumDecimals, currencySeparator) + currencySymbol);
    }
    
    private void showAssociatedHotelsWithAvailability() {
        externalGrid.clear();
        
        if (associatedHotels == null) {
            return;
        }
        
        Vector associatedHotelsVector = associatedHotels.getAssociatedHotels();
        if (associatedHotelsVector == null || associatedHotelsVector.size() == 0) {
            return;
        }
        
        FlexTable grd = new FlexTable();
        externalGrid.setWidget(0, 0, grd);
        //externalGrid.setWidget(1, 0, backButton);
        //backButton.addStyleName("step2_NextButton");
        
        grd.setStyleName("step2_table");
        
        
        int idx = 1;
        
        // Mensaje de error
        HTML htmlNoAvailability = new HTML(strs.getMsg("errros.no.items.availables").replaceAll("\\\\n", "<br/>"));
        htmlNoAvailability.addStyleName("step2_total_price_value_top");
        grd.setWidget(idx, 0, htmlNoAvailability);
        grd.getFlexCellFormatter().setColSpan(idx, 0, 3);
        grd.getRowFormatter().addStyleName(idx, "row_total_top");
        idx++;
        
        // Headers
        grd.getRowFormatter().addStyleName(idx, "step2_row1");
        
        grd.setText(idx, 0, strs.getMsg("key.hotelname"));
        grd.getCellFormatter().addStyleName(idx, 0, "step2_roomname");
        grd.setText(idx, 1, strs.getMsg("key.location"));
        grd.getCellFormatter().addStyleName(idx, 1, "step2_roomname");
        grd.setText(idx, 2, strs.getMsg("key.commission.url"));
        grd.getCellFormatter().addStyleName(idx, 2, "step2_roomname");
        
        idx++;
        
        for (int i = 0; i < associatedHotelsVector.size(); i++, idx++) {
            final HotelInfoValueGWT hotelInfo = (HotelInfoValueGWT)associatedHotelsVector.get(i);
            
            grd.setText(idx, 0, hotelInfo.getType() + " " + hotelInfo.getName() + " " + hotelInfo.getCategory());
            grd.setHTML(idx, 1, hotelInfo.getAddress() + "<br/>(" + hotelInfo.getCp() + ") " + hotelInfo.getLocation() + ", " + hotelInfo.getProvince());
            if (hotelInfo.getUrl() != null && hotelInfo.getUrl().length() > 0) {
                grd.setHTML(idx, 2, "<a href=\"" +  hotelInfo.getUrl() + "\">" + hotelInfo.getUrl() + "</a>");
            }
            Button hotelReserveButton = new Button(strs.getMsg("key.book.now"));
            hotelReserveButton.addStyleName("step2_BookAssociation");
            hotelReserveButton.addClickListener(new ClickListener() {
                public void onClick(Widget sender) {
                    selectedHotel = hotelInfo;
                    if (selectHotelListener != null) {
                        selectHotelListener.onClick(sender);
                    }
                }
            });
            grd.setWidget(idx, 6, hotelReserveButton);
            
            grd.getRowFormatter().addStyleName(idx, (idx % 2 == 0) ? "step2_even" : "step2_odd");
        }
    }
    
    private ClickListener nextStepListener = null;

    public void setNextListener(ClickListener listener) {
        this.nextStepListener = listener;
    }
    public void roomSelectionChanged(ListBox cboCurrent, Label subtotal){
        changed = true;
        ForBookingObjectGWT selectedFro = findForReservObject(cboCurrent.getName());
        if (selectedFro != null) {
            selectedFro.setAmountToReserve(Integer.valueOf(cboCurrent.getValue(cboCurrent.getSelectedIndex())).intValue());
            subtotal.setText(HelperClientGwt.getPriceWithDecimals(selectedFro.getTotalPricePerRoomAfterTaxLong().longValue() * selectedFro.getAmountToReserve(), currencyNumDecimals, currencySeparator) + currencySymbol);
            lblTotalPriceValueTop.setText(calculateTotalPriceStr() + currencySymbol);
            lblTotalPriceValueBotton.setText(calculateTotalPriceStr() + currencySymbol);
        }
    }
    
    // Setters
    public void setForReservationcollection(ForBookingCollectionGWT frc) {
        changed = true;
        frcGwt = frc;
        showAvailableRooms();
    }
    
    public void setAssociatedHotels(AssociatedHotelsListGWT associatedHotels) {
        this.associatedHotels = associatedHotels;
        changed = true;
        showAssociatedHotelsWithAvailability();
    }
    
    // Getters
    private boolean changed = true;

    public boolean hasChanged(boolean reset) {
        if (changed) {
            if (reset) {
                changed = false;
            }
            return true;
        }
        return false;
    }
    
    // Methods
    public String validateAndGetErrorRoomSelection() {
        long totalPrice = 0;
        int roomTypesSelected = 0;
        Vector forReservObjsVector = frcGwt.getReservationLines();
        for (int froIndex = 0; froIndex < forReservObjsVector.size(); froIndex++) {
            ForBookingObjectGWT currentFro = (ForBookingObjectGWT) forReservObjsVector.get(froIndex);
            if (currentFro.getAmountToReserve() > 0) {
                totalPrice += currentFro.getTotalPricePerRoomAfterTaxLong().longValue() * currentFro.getAmountToReserve();
                roomTypesSelected ++;
            }
        }
        
        if (totalPrice == 0) {
            return strs.getMsg("errors.no.items.to.reserve");
        }
        if (roomTypesSelected == 0 || roomTypesSelected > 3) {
            return strs.getMsg("errors.too.many.room.types.to.reserve");
        }
        return null;
    }
    
    private long calculateTotalPrice() {
        long totalPrice = 0;
        Vector forReservObjsVector = frcGwt.getReservationLines();
        for (int froIndex = 0; froIndex < forReservObjsVector.size(); froIndex++) {
            ForBookingObjectGWT currentFro = (ForBookingObjectGWT) forReservObjsVector.get(froIndex);
            if (currentFro.getAmountToReserve() > 0) {
                totalPrice += currentFro.getTotalPricePerRoomAfterTaxLong().longValue() * currentFro.getAmountToReserve();
            }
        }
        return totalPrice;
    }
    
    private String calculateTotalPriceStr() {
        return HelperClientGwt.getPriceWithDecimals(calculateTotalPrice(), currencyNumDecimals, currencySeparator);
    }
    
    private ForBookingObjectGWT findForReservObject(String bookingId) {
        Vector forReservObjsVector = frcGwt.getReservationLines();
        for (int froIndex = 0; froIndex < forReservObjsVector.size(); froIndex++) {
            ForBookingObjectGWT currentFro = (ForBookingObjectGWT) forReservObjsVector.get(froIndex);
            if (currentFro.getBookingId().equals(bookingId)) {
                return currentFro;
            }
        }
        return null;
    }
}
