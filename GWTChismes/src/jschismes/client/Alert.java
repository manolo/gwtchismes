package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Widget;

@Export
@ExportPackage("gwtc")
public class Alert extends GWTCAlert implements Exportable {

    private JsChangeClosure jsClosure;
    private JsProperties jsProp;
    
    public Alert(JavaScriptObject prop) {
        super(OPTION_DISABLE_AUTOHIDE);
        
        this.jsProp = new JsProperties(prop);

        int cfg = OPTION_DISABLE_AUTOHIDE;
        
        String box = jsProp.get("box");
        if ("flat".equals(box)) cfg |= OPTION_ROUNDED_FLAT;
        if ("grey".equals(box)) cfg |= OPTION_ROUNDED_GREY;
        if ("blue".equals(box)) cfg |= OPTION_ROUNDED_BLUE;
        if (!jsProp.getBoolean("glassPanel", true)) cfg |= OPTION_DISABLE_BACKGROUND;
        if (jsProp.getBoolean("animate")) cfg |= OPTION_ANIMATION;
        if (!jsProp.getBoolean("buttonOk", true)) cfg |= OPTION_DISABLE_OK_BUTTON;
        super.initialize(cfg);
        
        if (jsProp.defined("style"))
            super.setStyleName(jsProp.get("style"));
        
        if (jsProp.defined("onClose"))
            addListener(jsProp.getClosure("onClose"));
        
        super.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                if (jsClosure != null)
                    jsClosure.onChange(sender.getElement());
            }
        });
        
    }

    public void addListener(JsChangeClosure c) {
        this.jsClosure = c;
    }
    
    public void show(int seconds){
        super.show(seconds);
    }
    
    public void alert(String msg) {
        super.alert(msg);
    }

    public void hide(){
        super.hide();
    }
    
    public Element getElement() {
        return super.getElement();
    }
    
}

