package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

@Export
@ExportPackage("gwtc")
public class Box extends GWTCBox implements Exportable {

    private JsProperties jsProp;
    
    public static DockLayoutConstant NORTH = DockPanel.NORTH;
    public static DockLayoutConstant SOUTH = DockPanel.SOUTH;
    public static DockLayoutConstant EAST = DockPanel.EAST;
    public static DockLayoutConstant WEST = DockPanel.WEST;
    
    public Box(JavaScriptObject prop) {
        super();
        
        this.jsProp = new JsProperties(prop);

        String box = jsProp.get("box");
        if ("flat".equals(box)) setStyleName(STYLE_FLAT);
        if ("grey".equals(box)) setStyleName(STYLE_GREY);
        if ("blue".equals(box)) setStyleName(STYLE_BLUE);
        
        if (jsProp.defined("style"))
            super.addStyleName(jsProp.get("style"));
        
        
        super.setTitle(jsProp.get("title"));
        super.setText(jsProp.get("text"));
        
        this.add(jsProp.get("html"));
        
        if (jsProp.defined("containerId") && RootPanel.get(jsProp.get("containerId")) != null)
            RootPanel.get(jsProp.get("containerId")).add(this);
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
