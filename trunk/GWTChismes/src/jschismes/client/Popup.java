package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCPopupBox;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

@Export
@ExportPackage("gwtc")
public class Popup extends GWTCPopupBox implements Exportable {

    private JsProperties jsProp;
    
    public static DockLayoutConstant NORTH = DockPanel.NORTH;
    public static DockLayoutConstant SOUTH = DockPanel.SOUTH;
    public static DockLayoutConstant EAST = DockPanel.EAST;
    public static DockLayoutConstant WEST = DockPanel.WEST;
    
    public Popup(JavaScriptObject prop) {
        super(OPTION_DISABLE_AUTOHIDE);
        
        this.jsProp = new JsProperties(prop);

        int cfg = OPTION_DISABLE_AUTOHIDE;
        
        String box = jsProp.get("box");
        if ("flat".equals(box)) cfg |= OPTION_ROUNDED_FLAT;
        if ("grey".equals(box)) cfg |= OPTION_ROUNDED_GREY;
        if ("blue".equals(box)) cfg |= OPTION_ROUNDED_BLUE;
        if (!jsProp.getBoolean("glassPanel", true)) cfg |= OPTION_DISABLE_BACKGROUND;
        if (jsProp.getBoolean("animate")) cfg |= OPTION_ANIMATION;
        super.initialize(cfg);
        
        if (jsProp.defined("style"))
            super.setStyleName(jsProp.get("style"));
        
        if (jsProp.defined("text"))
            add(jsProp.get("text"));
        
    }
    
    public void show(int seconds){
        super.show(seconds);
    }

    public void hide(){
        super.hide();
    }
    
    public void clear() {
        super.clear();
    }
    
    public void add(Object object){
        add(object, NORTH);
    }

    public void add(Object object, DockLayoutConstant direction) {
        super.add(object, direction);
    }

}


