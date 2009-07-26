package com.google.code.p.gwtchismes.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;


/**
 * <p>
 * <b>A decorated and dragable modal box with a glass panel.</b>
 * </p>
 * @author Manuel Carrasco Moñino
 * <h3>Example</h3>
 * <pre>
        GWTCModalBox modal = new GWTCModalBox(GWTCModalBox.OPTION_ROUNDED_FLAT | GWTCModalBox.OPTION_ANIMATION);
        modal.add(new Label("Hello world"));
        // show and center the dialog
        modal.center();
 * </pre>
 *   
 * <h3>CSS Style Rules</h3>
 * <ul class="css">
 * <li>.GWTCModal { aditional style added to the DialogBox }</li>
 * </ul>
 *  
 * <h3>Options</h3>
 * Options can be passed joining these using the or bit wise operator
 * <ul>
 * <li>OPTION_ROUNDED_FLAT       decorate with the flat rounded box</li>
 * <li>OPTION_ROUNDED_GREY       decorate with the grey rounded box</li>
 * <li>OPTION_ROUNDED_BLUE       decorate with the blue rounded box</li>
 * <li>OPTION_ANIMATION          animate the dialog</li>
 * <li>OPTION_DISABLE_BACKGOUND  don't show the background glass panel</li>
 * <li>OPTION_DISABLE_AUTOHIDE   don't hide the dialog when the use clicks out of it</li>
 * </ul>
 */
public class GWTCModalBox extends DialogBox {

    static public String MAIN_STYLE = "GWTCModal";
    static public int OPTION_ROUNDED_FLAT = 2;
    static public int OPTION_ROUNDED_GREY = 4;
    static public int OPTION_ROUNDED_BLUE = 8;
    static public int OPTION_ANIMATION = 32;
    static public int OPTION_DISABLE_BACKGROUND = 16;
    static public int OPTION_DISABLE_AUTOHIDE = 64;
    private int zIndex = 999;
    
    GWTCBox panelbox;
    DockPanel panel;
    private GWTCGlassPanel background;

    public GWTCModalBox(int options) {
        
        super((options & OPTION_DISABLE_AUTOHIDE) == OPTION_DISABLE_AUTOHIDE ? false : true);
        
        if ((options & OPTION_ROUNDED_GREY) == OPTION_ROUNDED_GREY) {
            panelbox = new GWTCBox(GWTCBox.STYLE_GREY);
        } else if ((options & OPTION_ROUNDED_BLUE) == OPTION_ROUNDED_BLUE) {
            panelbox = new GWTCBox(GWTCBox.STYLE_BLUE);
        } else if ((options & OPTION_ROUNDED_FLAT) == OPTION_ROUNDED_FLAT) {
            panelbox = new GWTCBox(GWTCBox.STYLE_FLAT);
        } else {
            panel = new DockPanel();
        }

        super.add(panel != null ? panel : panelbox);

        setAnimationEnabled((options & OPTION_ANIMATION) == OPTION_ANIMATION);
        if ((options & OPTION_DISABLE_BACKGROUND) != OPTION_DISABLE_BACKGROUND) {
            background = new GWTCGlassPanel();
            if ((options & OPTION_DISABLE_AUTOHIDE) != OPTION_DISABLE_AUTOHIDE) {
                background.addClickHandler(new ClickHandler(){
                    public void onClick(ClickEvent event) {
                      hide();
                    }
                });
            }
        }
        setZIndex(zIndex);
        setWidth("auto");
        addStyleName(MAIN_STYLE);
    }
    
    public void setWait(boolean b) {
        if (b)
            background.setZIndex(zIndex + 1);
        else
            background.setZIndex(zIndex - 1);
    }

    public void add(Widget widget, DockLayoutConstant direction) {
        if (panelbox != null)
            panelbox.add(widget, direction);
        else
            panel.add(widget, direction);
    }

    @Override
    protected void onDetach() {
        super.onDetach();
        if(background != null)
            background.hide();
    }

    @Override
    public void add(Widget w) {
        if (panelbox != null)
            panelbox.add(w);
        else
            panel.add(w, DockPanel.NORTH);
    }
    
    @Override
    public void clear() {
        if (panelbox != null)
            panelbox.clear();
        else
            panel.clear();
    }

    @Override
    public void center() {
        setWidth("auto");
        super.center();
    }

    @Override
    public void show() {
        if (background != null) 
            background.show();
        super.show();
    }
    
    @Override
    public void hide() {
        super.hide();
        if (background != null)
            background.hide();
    }

    public void setZIndex(int z) {
        DOM.setStyleAttribute(getElement(), "zIndex", String.valueOf(z));
        if (background != null)
            background.setZIndex(z - 1);
    }
    
    @Override
    public void setText(String t) {
        super.setText(t);
    }
    
}