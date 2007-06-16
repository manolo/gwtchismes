package com.google.code.p.gwtcsample.client;

import java.util.HashMap;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.code.p.gwtchismes.client.GWTCPrint;
import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;


public class GWTCSample implements EntryPoint {
    private String[] days_en = new String[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };
    private String[] months_en = new String[] { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };
    private String[] days_es = new String[] { "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" };
    private String[] months_es = new String[] { "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" };

    public static HashMap strs_en = new HashMap();
    public static HashMap strs_es = new HashMap();

    private final FlexTable outer = new FlexTable();
    public void onModuleLoad() {


        strs_en.put("format.date", "MMM  dd, yyyy");
        strs_en.put("format.day", "(ddd.)");
        strs_en.put("key.checkin", "Checkin");
        strs_en.put("key.checkout", "Checkout");
        strs_en.put("key.nights", "Nights");
        strs_en.put("key.interval", "Interval");
        strs_en.put("key.change", "Change");
        strs_en.put("key.checkin.button", "...");
        strs_en.put("key.checkout.button", "...");
        strs_en.put("key.calendar.checkin.title", "Select checkin date");
        strs_en.put("key.calendar.checkout.title", "Select checkout date");
        // strs_en.put("key.calendar.help","Calendar selector (c) Manuel Carrasco 2007");

        strs_es.put("format.date", "MMM  dd, yyyy");
        strs_es.put("format.day", "(ddd.)");
        strs_es.put("key.checkin", "Fecha de entrada:");
        strs_es.put("key.checkout", "Fecha de salida");
        strs_es.put("key.nights", "noches");
        strs_es.put("key.interval", "Nro. de noches:");
        strs_es.put("key.change", "Cambiar");
        strs_es.put("key.checkin.button", "...");
        strs_es.put("key.checkout.button", "...");
        strs_es.put("key.calendar.checkin.title", "Seleccione la fecha de entrada");
        strs_es.put("key.calendar.checkout.title", "Seleccione la fecha de salida");
        strs_es.put("key.calendar.help", "Calendar selector (c) Manuel Carrasco 2007");

        
        outer.setStyleName("GWTCSample");

        final GWTCWait wait = new GWTCWait();
        wait.setMessage("Please wait ...");
        GWTCButton waitButton = new GWTCButton("Click here view a wait widget during 5 seconds");
        waitButton.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                wait.show(5);
            }
        });
        wait.hide();

        final GWTCAlert alert = new GWTCAlert(); 
        alert.setText("Hello, you  can put here any message"); 
        alert.hide(); 
        GWTCButton alertButton = new GWTCButton();
        alertButton.addStyleName("SampleButton");
        alertButton.setText("Click here to show an alert dialog");
        alertButton.addClickListener(new ClickListener() { 
            public void onClick(Widget sender) { 
                alert.show(); 
            } 
        }); 
        
        GWTCButton disabledButton = new GWTCButton("This is a disabled button");
        disabledButton.setEnabled(false);
        
        GWTCPrint printButton = new GWTCPrint("Print this page");
        
        GWTCIntervalSelector interval1 = new GWTCIntervalSelector(1);
        interval1.setLocale(strs_en, days_en, months_en, 0);

        GWTCIntervalSelector interval2 = new GWTCIntervalSelector(2);
        interval2.setLocale(strs_en, days_en, months_en, 0);

        GWTCIntervalSelector interval3 = new GWTCIntervalSelector(3);
        interval3.setLocale(strs_es, days_es, months_es, 1);
        outer.setWidget(1, 0, waitButton);
        outer.setWidget(2, 0, alertButton);
        outer.setWidget(3, 0, disabledButton);
        outer.setWidget(4, 0, printButton);
        outer.setWidget(5, 0, interval1);
        outer.setWidget(6, 0, interval2);
        outer.setWidget(7, 0, interval3);

        RootPanel.get().add(outer);
    }
}
