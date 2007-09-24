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
import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

public class uploadsample implements EntryPoint {
	public void onModuleLoad() {
        
        final GWTCAlert alert = new GWTCAlert();
        ClickListener listener = new ClickListener() {
            public void onClick(Widget sender) {
                Window.alert("HOLA");
                final GWTCProgress progressBar = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS);
                final GWTCProgress progressBar2 = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING | GWTCProgress.SHOW_TEXT | GWTCProgress.SHOW_NUMBERS | GWTCProgress.SHOW_AS_DIALOG);
                progressBar.setText("Uploading file, please wait ...");
                progressBar2.setTotalMessage("{0}% {1}/{2} KB.");
                progressBar2.setText("Uploading file, please wait ...");
                RootPanel.get().add(progressBar);
                progressBar2.show();
                Timer t = new Timer() {
                    int done = 0;
                    int total = 400;
                    public void run() {
                        if (done >= total) {
                            cancel();
                            progressBar2.hide();
                            RootPanel.get().clear();
                            alert.setOkButtonDisabled(true);
                            alert.alert("Thank you");
                        }
                        progressBar.setProgress(done, total);
                        progressBar2.setProgress(done, total);
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

        /*
		/*
		 * GWTCCornerButton b = new GWTCCornerButton("aaa");
		 * b.addClickListener(new ClickListener() { public void onClick(Widget
		 * sender) { Window.alert("Hola"); } }); RootPanel.get().add(b);
		 */
	}
}
