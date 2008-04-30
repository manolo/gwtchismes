package com.google.code.p.gwtchismes.client;

import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.Widget;

public class GWTCTabPanel extends TabPanel {
  
  private String style = "gwtc-TabPanel";
  
  public GWTCTabPanel() {
    super();
    setStyleName(style);
    
  }
  
  public void add(Widget w, String tabText) {
    super.add(w, new Label(tabText));
  }

  
}