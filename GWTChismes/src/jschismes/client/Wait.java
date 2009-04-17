package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Element;

@Export
@ExportPackage("gwtc")
public class Wait extends GWTCWait implements Exportable {

    private JsProperties jsProp;
    
    public Wait(JavaScriptObject prop) {
        this.jsProp = new JsProperties(prop);
        if (jsProp.defined("text"))
            super.setMessage(jsProp.get("text"));
        if (jsProp.defined("style"))
            super.setStyleName(jsProp.get("style"));
        if (jsProp.defined("image"))
            super.setImg(jsProp.get("image"));
    }
    
    public void show(int seconds){
        super.show(seconds);
    }

    public void hide(){
        super.hide();
    }
    
    public Element getElement() {
        return super.getElement();
    }
    
}

