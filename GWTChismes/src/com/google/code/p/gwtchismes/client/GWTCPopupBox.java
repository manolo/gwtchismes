package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

public class GWTCPopupBox extends PopupPanel {
  
  private String style = "gwtc-PopupBox";
  private GWTCBox box = new GWTCBox();
  
  public GWTCPopupBox(String style) {
    this();
    box.setStyleName(style);
  }
  
  public GWTCPopupBox() {
    super();
    this.setStyleName(style);
    super.add(box);
  }

  public GWTCPopupBox(boolean autohide) {
      super(autohide);
      this.setStyleName(style);
      super.add(box);
  }
  
  public void add(Widget w) {
    box.add(w);
  }
  
}