package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

@Export
@ExportPackage("gwtc")
public class Button extends GWTCButton implements Exportable {

    private JsChangeClosure jsClosure;
    private JsProperties jsProp;
    
    public Button(JavaScriptObject prop) {

        this.jsProp = new JsProperties(prop);
        
        int type = jsProp.defined("type") ? jsProp.getInt("type") : 1;
        super.setType(type);
        
        String text = jsProp.get("text");
        super.setHTML(text);
        
        if (jsProp.defined("onClick"))
            addListener(jsProp.getClosure("onClick"));
        
        addClickListener(new ClickListener() {
            public void onClick(Widget w) {
                if (jsClosure != null)
                    jsClosure.onChange(w);
            }
        });
        
        if (jsProp.defined("containerId") && RootPanel.get(jsProp.get("containerId")) != null) 
            RootPanel.get(jsProp.get("containerId")).add(this);
    }
    
    public void addListener(JsChangeClosure c) {
        this.jsClosure = c;
    }
    
    public Element getElement() {
        return super.getElement();
    }
}

