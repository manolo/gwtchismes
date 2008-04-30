package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.ui.DialogBox;

public class GWTCDialogBox extends DialogBox {
  
  private String style = "gwtc-DialogBox";
  
  public GWTCDialogBox() {
    super();
    setStyleName(style);
  }
  
}