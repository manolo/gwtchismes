package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

public class GWTCPopupBox extends PopupPanel {
  
  private String style = "gwtc-PopupBox";
  private GWTCSimpleBox box = new GWTCSimpleBox();
  
  public GWTCPopupBox(String style) {
    this();
    box.setStyleName(style);
  }
  
  public GWTCPopupBox() {
    super();
    this.setStyleName(style);
    super.add(box);
    setAnimationEnabled(true);
  }
  
  public void setAnimationEnabled(boolean enable) {
      super.setAnimationEnabled(enable);
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