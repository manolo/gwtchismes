package jschismes.client;

import java.util.Date;
import java.util.HashMap;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCDatePickerAbstract;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.ChangeListener;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

@Export
@ExportPackage("jsc")
public class DatePicker extends GWTCDatePickerAbstract implements Exportable {


    private JsChangeClosure jsClosure;
    private JsProperties jsProp;
    
    
    /**
     * A customizable DatePicker.
     */
    public DatePicker(JavaScriptObject prop) {

        this.jsProp = new JsProperties(prop);
        
        super.monthColumns = jsProp.getInt(Const.NUM_COLUMS, 3);
        super.monthSelector = jsProp.getInt(Const.MONTH_RANGE, 12);
        super.monthStep = jsProp.getInt(Const.STEP_MONTHS, 1);
        
        super.setNumberOfLettersInDayNames(jsProp.getInt(Const.DAYNAME_LETTERS, 0));
               
        int cfg = 0;
        if (!jsProp.defined(Const.CONT_ID) && jsProp.getBoolean(Const.DIALOG, true)) cfg |= CONFIG_DIALOG;
        if (jsProp.getBoolean(Const.RND_BOX, false)) cfg |= CONFIG_ROUNDED_BOX;
        if (!jsProp.getBoolean(Const.AUTOHIDE, true)) cfg |= CONFIG_NO_AUTOHIDE;
        if (!jsProp.getBoolean(Const.ANIMATE, true)) cfg |= CONFIG_NO_ANIMATION;
        if (jsProp.getBoolean(Const.GLASS, true)) cfg |= CONFIG_BACKGROUND;
        if ("flat".equals(jsProp.get(Const.BUTTONS))) cfg |= CONFIG_FLAT_BUTTONS;
        if ("standard".equals(jsProp.get(Const.BUTTONS))) cfg |= CONFIG_STANDARD_BUTTONS;
        super.initialize(cfg);
        
        if (jsProp.defined(Const.MINIMAL))
            setMinimalDate(add(new Date(), jsProp.get(Const.MINIMAL)));
        if (jsProp.defined(Const.MAXIMAL))
            setMaximalDate(add(new Date(), jsProp.get(Const.MAXIMAL)));
        if (jsProp.defined(Const.CURRENT))
            setSelectedDate(add(new Date(), jsProp.get(Const.CURRENT)));

        if (jsProp.defined(Const.ON_SELECT))
            addSelectListener(jsProp.getClosure(Const.ON_SELECT));
        
        if (jsProp.defined(Const.CLASS_NAME))
            super.setStyleName(jsProp.get(Const.CLASS_NAME));
        
        addChangeListener(new ChangeListener() {
            public void onChange(Widget sender) {
                if (jsClosure != null)
                    jsClosure.onChange(data());
            }
        });

        super.setI18nMessages(regionalToHash(Const.REGIONAL, jsProp));
    
        attachToDocument(this, Const.CONT_ID, jsProp);
        
    }
    
    protected static void attachToDocument(Widget w, String id, JsProperties prop) {
        Panel p = RootPanel.get(prop.get(id, "__NO_ID__"));
        if (p != null)
            p.add(w);
    }

    protected static HashMap regionalToHash(String regionalKey, JsProperties prop) {
        HashMap strs = new HashMap();
        if (prop.defined(regionalKey)) {
            JsProperties reg = prop.getJsProperties(regionalKey);
            for (String key : reg.keys()) {
                String v = reg.get(key);
                String k = "key." + key.replaceFirst("Text$","").replaceAll("([A-Z])", ".$1").toLowerCase();
                strs.put(k, v);
            }
        }
        return strs;
    }
    
    @Override
    protected void drawDatePickerWidget() {
        String layoutButtons = jsProp.defined(Const.BUTTONS_LAYOUT) ? jsProp.get(Const.BUTTONS_LAYOUT) : "?mx;p<->n";
        int numberOfMonths = jsProp.getInt(Const.NUM_MONTHS) > 0 ? jsProp.getInt(Const.NUM_MONTHS) : 1;
        super.setNumberOfMonths(numberOfMonths);
        super.layoutButtons(layoutButtons);
        super.layoutCalendar();
    }

    /**
     * Show the modal dialog containing the data-picker centered in the page
     */
    @Override
    public void show() {
        super.show();
    }

    /**
     * Show the modal dialog containing the data-picker beside the  especified element.
     */
    public void show(Element elem) {
        super.showByElement(elem);
    }
    
    /**
     * Hide the modal dialog containing the data-picker.
     */
    @Override
    public void hide() {
        super.hide();
    }

    /**
     *  Specify the JavaScript function which will be called when the user selects a date
     *  The function have to define the parameter data used to return the datepicker information 
     */
    public void addSelectListener(JsChangeClosure c) {
        this.jsClosure = c;
    }
    
    /**
     *  Returns the selected date
     */
    public JavaScriptObject getSelected() {
        return Utils.dateToJsObject(getSelectedDate());
    }

    /**
     * Specify the selected date  
     */
    public void setSelected(JavaScriptObject date) {
        super.setSelectedDate(Utils.doubleToDate(Utils.jsObjectToTime(date)));
    }
    
    /**
     * Returns a JavaScript hash structure with this information:
     * data.selected // The user selected date
     * data.minimal  // The minimal date allowed to select
     * data.maximal  // The maximal date allowed to select  
     */
    public JavaScriptObject data() {
        return getDataImpl(getSelectedDate().getTime(), getMinimalDate().getTime(), getMaximalDate().getTime());
    }
    
    private native JavaScriptObject getDataImpl(double selected, double minimal, double maximal) /*-{
       return {
          selected: new Date(selected),
          minimal: new Date(minimal),
          maximal: new Date(maximal)
       };
    }-*/;
    
}

