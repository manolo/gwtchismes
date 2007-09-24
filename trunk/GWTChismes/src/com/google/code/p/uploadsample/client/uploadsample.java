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

import com.google.code.p.gwtchismes.client.GWTCProgress;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.RootPanel;

public class uploadsample implements EntryPoint {
	public void onModuleLoad() {

		final GWTCProgress progressBar = new GWTCProgress(40, GWTCProgress.SHOW_TIME_REMAINING + GWTCProgress.SHOW_TEXT + GWTCProgress.SHOW_NUMBERS);
		progressBar.setText("Uploading file, please wait ...");
		RootPanel.get().add(progressBar);
		Timer t = new Timer() {
			int done = 0;
			int total = 400;
			public void run() {
				/*
				int progress = progressBar.getProgress() + 4;
				if (progress > 100)
					cancel();
				progressBar.setProgress(progress);
				*/
				if (done >= total) 
					cancel();
				progressBar.setProgress(done, total);
				done += 8;
			}
		};
		t.scheduleRepeating(1000);
		/*
		 * GWTCCornerButton b = new GWTCCornerButton("aaa");
		 * b.addClickListener(new ClickListener() { public void onClick(Widget
		 * sender) { Window.alert("Hola"); } }); RootPanel.get().add(b);
		 */
	}
}
