/*
 */

package com.mirai.xmas.client.gwt.NH.client.controls;

import java.util.Date;
import java.util.Iterator;
import java.util.Vector;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ClickListener;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Widget;
import com.mirai.xmas.client.gwt.values.client.HotelInfoValueGWT;
import com.mirai.xmas.client.gwt.values.client.I18nGWT;
import com.google.code.p.gwtchismes.client.GWTCIntervalSelector;

public class ResStep1 extends Composite  {

    //Widgets
	//private final DockPanel outer = new DockPanel();
    private GWTCIntervalSelector interval = new GWTCIntervalSelector(3);
    private Button nextButton = new Button("Next"); 
    I18nGWT strs = new I18nGWT();

    private final FlexTable grd = new FlexTable();
    
    //Constructor
	public ResStep1() {
		initWidget(grd);
        interval.setMaxdays(31);
        grd.setStyleName("Step1_Container");
        nextButton.addStyleName("step1_NextButton");
        
        grd.setWidget(0, 0, interval);
        grd.setWidget(1, 0, nextButton);
        
        nextButton.addClickListener(new ClickListener() {
            public void onClick(Widget sender) {
                if (nextStepListener != null ) nextStepListener.onClick(sender);
            }
        });
	}
    
    //Internationalization
    public void setLocale(I18nGWT strs) {
        this.strs = strs;
        interval.setLocale(strs.map, strs.days, strs.months, strs.weekStart);
        nextButton.setText(strs.getMsg("key.next"));
    }

    //Setters
    public void setInitDate(Date d) {
        lastDate = interval.getInitDate();
        interval.setInitDate(d);
    }
    public void setNights(int n) {
        lastNights = interval.getNights();
        interval.setNights(n);
    }
    
    //Getters
    public Date getInitDate() {
        return interval.getInitDate();
    }
    public Date getEndDate() {
        return interval.getEndDate();
    }
    public int getNights() {
        return interval.getNights();
    }
    
    private Date lastDate = new Date();
    private int lastNights = 0;
    public boolean hasChanged(boolean reset) {
        if (lastNights != interval.getNights() || lastDate.getTime() != interval.getInitDate().getTime()) {
            if (reset){
                lastDate = interval.getInitDate();
                lastNights = interval.getNights();
            }
            return true;
        }
        return false;
    }

    //Listeners
    ClickListener nextStepListener = null;
    public void setNextListener(ClickListener listener) {
        this.nextStepListener = listener;
    }
}
