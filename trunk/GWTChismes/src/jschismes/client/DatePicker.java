package jschismes.client;

import java.util.Date;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCDatePickerAbstract;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

@Export
@ExportPackage("gwtc")
public class DatePicker extends GWTCDatePickerAbstract implements Exportable {

    private JsChangeClosure jsClosure;
    private JsProperties jsProp;
    
    public static final String SHORT_FORMAT = DateTimeFormat.getShortDateFormat().getPattern();
    public static final String LONG_FORMAT = DateTimeFormat.getLongDateFormat().getPattern();
  
    public DatePicker(JavaScriptObject prop) {

        this.jsProp = new JsProperties(prop);
        
        this.monthColumns = jsProp.getInt("numberOfColums") > 0 ? jsProp.getInt("numberOfColumns") : 3;
        this.monthSelector = jsProp.getInt("monthsInSelector") > 0 ? jsProp.getInt("monthsInSelector") : 12;;
        this.monthStep = jsProp.getInt("monthStep") > 0 ? jsProp.getInt("monthStep") : 1;
        
        int cfg = 0;
        if (!jsProp.defined("containerId") && jsProp.getBoolean("dialog", true)) cfg |= CONFIG_DIALOG;
        if (jsProp.getBoolean("box")) cfg |= CONFIG_ROUNDED_BOX;
        if (!jsProp.getBoolean("autohide", true)) cfg |= CONFIG_NO_AUTOHIDE;
        if (!jsProp.getBoolean("animation", true)) cfg |= CONFIG_NO_ANIMATION;
        if (jsProp.getBoolean("glassPanel")) cfg |= CONFIG_BACKGROUND;
        if ("flat".equals(jsProp.get("buttons"))) cfg |= CONFIG_FLAT_BUTTONS;
        if ("standard".equals(jsProp.get("buttons"))) cfg |= CONFIG_STANDARD_BUTTONS;
        super.initialize(cfg);
        
        if (jsProp.defined("containerId") && RootPanel.get(jsProp.get("containerId")) != null)
            RootPanel.get(jsProp.get("containerId")).add(this);

        
        if (jsProp.defined("minimalDate"))
            setMinimalDate(add(new Date(), jsProp.get("minimalDate")));
        if (jsProp.defined("maximalDate"))
            setMaximalDate(add(new Date(), jsProp.get("maximalDate")));
        if (jsProp.defined("cursorDate"))
            setCursorDate(add(new Date(), jsProp.get("cursorDate")));

        if (jsProp.defined("onSelect"))
            addSelectListener(jsProp.getClosure("onSelect"));
        
        if (jsProp.defined("style"))
            super.setStyleName(jsProp.get("style"));
        
        addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                if (jsClosure != null)
                    jsClosure.onChange(data());
            }
        });
        
        if (jsProp.defined("containerId") && jsProp.get("containerId") != null) 
            RootPanel.get(jsProp.get("containerId")).add(this);
        
    }
    
    @Override
    public void drawDatePickerWidget() {
        String layoutButtons = jsProp.defined("buttonsLayout") ? jsProp.get("buttonsLayout") : "?mx;p<->n";
        int numberOfMonths = jsProp.getInt("numberOfMonths") > 0 ? jsProp.getInt("numberOfMonths") : 1;
        super.setNumberOfMonths(numberOfMonths);
        super.layoutButtons(layoutButtons);
        super.layoutCalendar();
    }

    @Override
    public void show() {
        super.show();
    }

    public void show(Element elem) {
        super.showByElement(elem);
    }
    
    @Override
    public void hide() {
        super.hide();
    }

    public void addSelectListener(JsChangeClosure c) {
        this.jsClosure = c;
    }
    
    public JavaScriptObject getSelected() {
        return dateToJsObject(getSelectedDate());
    }

    public String getSelectedStr(String format) {
        return formatDate(format, getSelectedDate());
    }

    public boolean setSelectedStr(String format, String dateStr) {
        return super.setSelectedDateStr(format, dateStr);
    }

    public void setSelected(JavaScriptObject date) {
        super.setSelectedDate(doubleToDate(jsObjectToTime(date)));
    }
    
    public JavaScriptObject data() {
        return getDataImpl(getSelectedDate().getTime(), getMinimalDate().getTime(), getMaximalDate().getTime());
    }
    
    public static final JavaScriptObject parse(String format, String dateStr){
        return dateToJsObject(parseDate(format, dateStr));
    }

    public static final String format(String format, JavaScriptObject date){
        return formatDate(format, doubleToDate(jsObjectToTime(date)));
    }
    
    public native JavaScriptObject getDataImpl(double selected, double minimal, double maximal) /*-{
       return {
          selected: new Date(selected),
          minimal: new Date(minimal),
          maximal: new Date(maximal)
       };
    }-*/;
    
    private static JavaScriptObject dateToJsObject(Date d) {
       return timeToJsObject(d.getTime());
    }
    
    private static native JavaScriptObject timeToJsObject(double time) /*-{
       return new Date(time);
    }-*/;

    private static Date doubleToDate(double time) {
       return new Date((long)time);
    }
    
    private static native double jsObjectToTime(JavaScriptObject d) /*-{
       return (d && d.getTime) ? d.getTime(): 0;
    }-*/;
    
}

