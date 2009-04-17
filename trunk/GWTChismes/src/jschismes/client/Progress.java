package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.RootPanel;

@Export
@ExportPackage("gwtc")
public class Progress extends GWTCProgress implements Exportable {

    private JsProperties jsProp;

    public Progress(JavaScriptObject prop) {
        this.jsProp = new JsProperties(prop);

        int cfg = DatePicker.CONFIG_DIALOG;
        if (jsProp.getBoolean("timeRemaining", true)) cfg |= SHOW_TIME_REMAINING;
        if (jsProp.getBoolean("text")) cfg |= SHOW_TEXT;
        if ("left".equals(jsProp.get("text"))) cfg |= SHOW_LEFT_TEXT;
        if (jsProp.getBoolean("numbers")) cfg |= SHOW_NUMBERS;
        if (jsProp.getBoolean("dialog")) cfg |= SHOW_AS_DIALOG;
        
        int elements = jsProp.getInt("elements", 30);
        
        initialize(cfg, elements);
        
        if (!jsProp.getBoolean("dialog") && jsProp.defined("containerId")) 
            RootPanel.get(jsProp.get("containerId")).add(this);
        
        if (jsProp.defined("containerId") && RootPanel.get(jsProp.get("containerId")) != null)
            RootPanel.get(jsProp.get("containerId")).add(this);
        
        if (jsProp.defined("hoursMsg")) super.setHoursMessage(jsProp.get("hoursMsg"));
        if (jsProp.defined("minutesMsg")) super.setHoursMessage(jsProp.get("minutesMsg"));
        if (jsProp.defined("secondsMsg")) super.setHoursMessage(jsProp.get("secondsMsg"));
        if (jsProp.defined("percentMsg")) super.setPercentMessage(jsProp.get("percentMsg"));
        if (jsProp.defined("totalMsg")) super.setTotalMessage(jsProp.get("totalMsg"));
        
        if (jsProp.defined("style"))
            super.setStyleName(jsProp.get("style"));

    }
    
    public void setText(String text) {
        super.setText(text);
    }
    
    public void show(){
        super.show();
    }
    
    public void hide(){
        super.hide();
    }
    
    public void setProgress(int done, int total) {
        super.setProgress(done, total);
    }

    public Element getElement() {
        return super.getElement();
    }
    
    public void show(int seconds) {
        int periodMillis = seconds * 1000 / pTimer.steps;
        Timer t = new pTimer(this);
        t.scheduleRepeating(periodMillis);
    }
    
    class pTimer extends Timer {
        int done = 0;
        int total = 100;
        public static final int steps = 15;
        GWTCProgress prgBar;
        public pTimer(GWTCProgress p) {
            prgBar = p;
            run();
        }
        public void run() {
            if (done == 0) {
                prgBar.show();
            }
            if (done >= total) {
                done = 0;
                cancel();
                prgBar.hide();
            }
            prgBar.setProgress(done, total);
            done += (total/steps);
        }
    }

}

