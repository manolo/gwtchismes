package com.mirai.xmas.client.gwt.utils.client;

public class UtilClientDate {

    public static native long add(long time, int value, int type)
    /*-{
     var d = new Date(time);
     if (type == 1) d.setYear(d.getYear() + 1900 + value);
     if (type == 2) d.setMonth(d.getMonth() + value);
     if (type == 3) d.setDate(d.getDate() + value);
     if (type == 4) d.setHour(d.getHour() + value);
     if (type == 5) d.setMinute(d.getMinute() + value);
     if (type == 6) d.setSecond(d.getSecond() + value);
     if (type == 7) d.setMillisecond(d.getMillisecond() + value);
     return d.getTime();  
     }-*/;
}
