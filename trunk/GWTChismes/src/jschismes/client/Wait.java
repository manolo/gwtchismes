package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCWait;
import com.google.gwt.core.client.JavaScriptObject;


/**
 * JavaScript Implementation of a modal box informing the user that the application is working and avoiding user interaction with the page.
 */
@Export
@ExportPackage("jsc")
public class Wait extends GWTCWait implements Exportable {

    private JsProperties jsProp;
    
    public Wait(JavaScriptObject prop) {
        this.jsProp = new JsProperties(prop);
        if (jsProp.defined(Const.TEXT))
            super.setMessage(jsProp.get(Const.TEXT));
        if (jsProp.defined(Const.CLASS_NAME))
            super.setStyleName(jsProp.get(Const.CLASS_NAME));
        if (jsProp.defined(Const.IMAGE))
            super.setImg(jsProp.get(Const.IMAGE));
    }

    /**
     * Show the modal dialog containing the wait dialog, and hide it when the number of seconds is reached.
     * A value of 0 means show it untill hide() method is called
     */
    public void show(int seconds){
        super.show(seconds);
    }
    
    /**
     * hide the wait dialog
     */
    public void hide(){
        super.hide();
    }

}

