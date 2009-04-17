package jschismes.client;

import java.util.Date;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCDatePicker;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

@Export
@ExportPackage("gwtc")
public class IntervalSelector extends GWTCIntervalSelector implements Exportable {

    private JsChangeClosure jsClosure;
    private JsProperties jsProp;
  
    public IntervalSelector(JavaScriptObject prop) {

        this.jsProp = new JsProperties(prop);

        int type = jsProp.getInt("type", 1);
        super.initialize(type);
        
        int numberOfMonths = jsProp.getInt("numberOfMonths") > 0 ? jsProp.getInt("numberOfMonths") : 1;
        int monthColumns = jsProp.getInt("numberOfColums") > 0 ? jsProp.getInt("numberOfColumns") : 3;
        int monthSelector = jsProp.getInt("monthsInSelector") > 0 ? jsProp.getInt("monthsInSelector") : 12;;
        int monthStep = jsProp.getInt("monthStep") > 0 ? jsProp.getInt("monthStep") : 1;
        String layoutButtons = jsProp.defined("buttonsLayout") ? jsProp.get("buttonsLayout") : "?mx;p<->n";
        
        int cfg = DatePicker.CONFIG_DIALOG;
        if (!jsProp.getBoolean("autohide", true)) cfg |= DatePicker.CONFIG_NO_AUTOHIDE;
        if (!jsProp.getBoolean("animation", true)) cfg |= DatePicker.CONFIG_NO_ANIMATION;
        if (jsProp.getBoolean("glassPanel")) cfg |= DatePicker.CONFIG_BACKGROUND;
        if (jsProp.getBoolean("flatButtons")) cfg |= DatePicker.CONFIG_FLAT_BUTTONS;
        if (jsProp.getBoolean("standardButtons")) cfg |= DatePicker.CONFIG_STANDARD_BUTTONS;
        
        super.configureDatePickers(cfg, layoutButtons, numberOfMonths, monthColumns, monthStep, monthSelector);

        if (jsProp.defined("minimalDate"))
            setMinimalDate(GWTCDatePicker.add(new Date(), jsProp.get("minimalDate")));
        if (jsProp.defined("maximalDate"))
            setMaximalDate(GWTCDatePicker.add(new Date(), jsProp.get("maximalDate")));
        if (jsProp.defined("maxDays"))
            setMaxdays(jsProp.getInt("maxDays"));
        
        if (jsProp.defined("containerId") && RootPanel.get(jsProp.get("containerId")) != null)
            RootPanel.get(jsProp.get("containerId")).add(this);
        
        if (jsProp.defined("style"))
            super.setStyleName(jsProp.get("style"));
        
        if (jsProp.defined("onSelect"))
            addSelectListener(jsProp.getClosure("onSelect"));
        
        addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                if (jsClosure != null)
                    jsClosure.onChange(data());
            }
        });
    }
    
    public int getNights() {
        return super.getNights();
    }
    
    public double getInitTime() {
        return super.getInitDate().getTime();
    }
    public String getInitDateLongStr() {
        return getInitDateStr(DateTimeFormat.getLongDateFormat().getPattern());
    }
    public String getInitDateShortStr() {
        return getInitDateStr(DateTimeFormat.getShortDateFormat().getPattern());
    }
    public String getInitDateStr(String format) {
        return DatePicker.formatDate(format, getInitDate());
    }

    public double getEndTime() {
        return super.getEndDate().getTime();
    }
    public String getEndDateLongStr() {
        return getEndDateStr(DateTimeFormat.getLongDateFormat().getPattern());
    }
    public String getEndDateShortStr() {
        return getEndDateStr(DateTimeFormat.getShortDateFormat().getPattern());
    }
    public String getEndDateStr(String format) {
        return DatePicker.formatDate(format, getEndDate());
    }

    public void addSelectListener(JsChangeClosure c) {
        this.jsClosure = c;
    }
    
    public JavaScriptObject data() {
        return getDataImpl(getInitDate().getTime(), getEndDate().getTime(), getNights(), getMinimalDate().getTime(), getMaximalDate().getTime(), getMaxDays());
    }

    public native JavaScriptObject getDataImpl(double init, double end, int nights, double minimal, double maximal, int max) /*-{
        return {
           init: new Date(init),
           end: new Date(end),
           nights: nights,
           days: nights,
           minimal: new Date(minimal),
           maximal: new Date(maximal),
           maxdays: max
        };
     }-*/;
}

