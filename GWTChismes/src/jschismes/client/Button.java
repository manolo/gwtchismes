package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCButton;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.Widget;

/**
 * A Button which can be rendered enterelly using html elements or can use the native browser buttons.
 */
@Export
@ExportPackage("jsc")
public class Button extends GWTCButton implements Exportable {

    private JsChangeClosure jsClosure;
    private JsProperties jsProp;
    
    public Button(JavaScriptObject prop) {

        this.jsProp = new JsProperties(prop);
        
        int type = jsProp.defined(Const.TYPE) ? jsProp.getInt(Const.TYPE) : 1;
        super.setType(type);
        
        String text = jsProp.get(Const.TEXT);
        super.setHTML(text);
        
        if (jsProp.defined(Const.ON_CLICK))
            addListener(jsProp.getClosure(Const.ON_CLICK));
        
        
        addClickHandler(new ClickHandler(){
          public void onClick(ClickEvent event) {
            if (jsClosure != null)
              jsClosure.onChange(((Widget)event.getSource()));
          }
        });
        
        DatePicker.attachToDocument(this, Const.CONT_ID, jsProp);
    }
    
    /**
     *  Specify the JavaScript function that will be called when the user clicks on the button
     *  The function have to define a parameter with the element clicked 
     */
    public void addListener(JsChangeClosure c) {
        this.jsClosure = c;
    }
    
    /**
     * Return the container element, useful for moving it in the DOM
     */
    public Element getElement() {
        return super.getElement();
    }
}

