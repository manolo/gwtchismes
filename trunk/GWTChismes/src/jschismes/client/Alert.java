package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Widget;

/**
 * JavaScript Implementation of a modal Dialog
 * 
 * It takes a javascript properties block as argument.
 */
@Export
@ExportPackage("jsc")
public class Alert extends GWTCAlert implements Exportable {

    private JsChangeClosure jsClosure;
    private JsProperties jsProp;
    
    public Alert(JavaScriptObject prop) {
        super(OPTION_DISABLE_AUTOHIDE);
        
        this.jsProp = new JsProperties(prop);

        int cfg = OPTION_DISABLE_AUTOHIDE;
        
        String box = jsProp.get(Const.RND_BOX);
        if ("flat".equals(box)) cfg |= OPTION_ROUNDED_FLAT;
        if ("grey".equals(box)) cfg |= OPTION_ROUNDED_GREY;
        if ("blue".equals(box)) cfg |= OPTION_ROUNDED_BLUE;
        if (!jsProp.getBoolean(Const.GLASS, true)) cfg |= OPTION_DISABLE_BACKGROUND;
        if (jsProp.getBoolean(Const.ANIMATE)) cfg |= OPTION_ANIMATION;
        if (!jsProp.getBoolean(Const.BUTTON_OK, true)) cfg |= OPTION_DISABLE_OK_BUTTON;
        super.initialize(cfg);
        
        if (jsProp.defined(Const.CLASS_NAME))
            super.setStyleName(jsProp.get(Const.CLASS_NAME));
        
        if (jsProp.defined(Const.ON_CLOSE))
            addListener(jsProp.getClosure(Const.ON_CLOSE));
        
        super.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                if (jsClosure != null)
                    jsClosure.onChange(sender.getElement());
            }
        });
        
    }

    /**
     *  Specify the JavaScript function which will be called when the user clicks on the OK button
     *  The function have to define a parameter with the element clicked 
     */
    public void addListener(JsChangeClosure c) {
        this.jsClosure = c;
    }

    /**
     * Show the modal dialog containing the alert dialog, and hide it when the number of seconds is reached.
     * A value of 0 means show it untill hide() method is called
     */
    public void show(int seconds){
        super.show(seconds);
    }
    
    /**
     * show the modal dialog containing the dialog, with the message provided.
     */
    public void alert(String msg) {
        super.alert(msg);
    }

    /**
     * hide the alert box
     */
    public void hide(){
        super.hide();
    }
    
}

