package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

/**
 * JavaScript Implementation of a decorated with rounded corners panel
 * 
 * It takes a javascript properties block as argument.
 */
@Export
@ExportPackage("jsc")
public class Box extends GWTCBox implements Exportable {

    private JsProperties jsProp;
    
    public Box(JavaScriptObject prop) {
        super();
        
        this.jsProp = new JsProperties(prop);

        String box = jsProp.get(Const.RND_BOX);
        if ("flat".equals(box)) setStyleName(STYLE_FLAT);
        if ("grey".equals(box)) setStyleName(STYLE_GREY);
        if ("blue".equals(box)) setStyleName(STYLE_BLUE);
        
        if (jsProp.defined(Const.CLASS_NAME))
            super.addStyleName(jsProp.get(Const.CLASS_NAME));
        
        
        super.setTitle(jsProp.get(Const.TITLE));
        super.setText(jsProp.get(Const.TEXT));
        
        this.add(jsProp.get(Const.HTML));
        
        DatePicker.attachToDocument(this, jsProp);
    }
    
    /**
     * Remove all child elements from the panel
     */
    public void clear() {
        super.clear();
    }
    
    /**
     * Add a new element to the panel
     */
    public void add(Object object){
        add(object, Const.NORTH);
    }

    /**
     * Add a new element to the panel, in the specified direction (NORTH, SOUTH, EAST, WEST)
     */
    public void add(Object object, DockLayoutConstant direction) {
        super.add(object, direction);
    }
    
}
