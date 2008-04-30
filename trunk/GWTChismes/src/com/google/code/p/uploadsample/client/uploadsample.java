/*
 * Copyright 2007 Manuel Carrasco Moñino. (manuel_carrasco at users.sourceforge.net) 
 * http://code.google.com/p/gwtchismes
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.google.code.p.uploadsample.client;

import com.google.code.p.gwtchismes.client.GWTCAlert;
import com.google.code.p.gwtchismes.client.GWTCBox;
import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.code.p.gwtchismes.client.GWTCTabPanel;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

public class uploadsample implements EntryPoint {
	public void onModuleLoad() {
        app2(); 
	}
	
	private void app2() {
	  GWTCBox box = new GWTCBox();
	  GWTCTabPanel tp = new GWTCTabPanel();
	  Label l1 = new Label("label1");
    Label l2 = new Label("label2");
	  tp.add(box, "tab1");
    tp.add(l2, "tab2");
    box.add(l1);
	  RootPanel.get().add(tp);
	}

  private void app1() {
    final GWTCAlert alert = new GWTCAlert();
    ClickListener listener = new ClickListener() {
        public void onClick(Widget sender) {
            final GWTCProgress pb1 = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS);
            final GWTCProgress pb2 = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS | GWTCProgress.SHOW_AS_DIALOG);
            pb1.setText("Uploading file, please wait ...");
            pb2.setTotalMessage("{0}% {1}/{2} KB. [{3} KB/s]");
            pb2.setText("Uploading file, please wait ...");
            RootPanel.get().add(pb1);
            pb2.show();
            Timer t = new Timer() {
                int done = 0;
                int total = 400;
                public void run() {
                    if (done >= total) {
                        cancel();
                        pb2.hide();
                        RootPanel.get().clear();
                        alert.setOkButtonDisabled(true);
                        alert.alert("Thank you");
                        this.cancel();
                    }
                    pb1.setProgress(done, total);
                    pb2.setProgress(done, total);
                    done += 55;
                }
            };
            t.scheduleRepeating(1000);
        }
    };
    
    alert.addClickListener(listener);
    
    alert.alert( ""
            + "<div>addfasdf adfa dasf asdf asdf asd ad a faf  f fad</div>\n"
            + "asdf  asdffdas sd fasas fasf kkads ja a klaj djask ladf klda llaksd klk fk ljklaj klajsd ljasklj lkj "
            + "" );
  }
}
